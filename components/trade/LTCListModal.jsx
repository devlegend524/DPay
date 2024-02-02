import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useWallet } from "@/store/hooks";
import * as bitcoin from "bitcoinjs-lib";
import usePSBT from "../../hooks/usePSBT";
import { getTxHexById, btcTosatoshis, validateInscription } from "@/utils";
import { toast } from "react-hot-toast";
import ReceiveAddress from "@/components/UI/ReceiveAddress";
import { useContext } from "react";
import { WalletContext } from "@/context/wallet";
import {
  ref,
  push,
  query,
  orderByChild,
  equalTo,
  onValue,
  update,
  get,
} from "firebase/database";
import { db } from "@/services/firebase";
import { ImSpinner10 } from "react-icons/im";
import { Psbt } from "bitcoinjs-lib";
import useActivities from "@/hooks/useActivities";

export default function LTCListModal({
  modalIsOpen,
  setIsOpen,
  ticker,
  amount,
  inscription,
}) {
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const { price } = useWallet();
  const { networks } = usePSBT({ network: "dogecoin" });
  const { addlistForSale } = useActivities();
  const [listingPrice, setListingPrice] = useState("");
  const [toInfo, setToInfo] = useState();
  const [pendingTx, setPendingTx] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleUpdateStatus = async () => {
    const dbQuery = query(ref(db, `status/${ticker}`));

    const snapshot = await get(dbQuery);
    const exist = snapshot.val();

    if (!exist) {
      console.log("ddd");
      const dbRefStatus = ref(db, `/status/${ticker}`);
      await push(dbRefStatus, {
        TVL: Number(listingPrice * amount),
        floor: Number(listingPrice * amount),
        listed: 1,
      });
    } else {
      console.log("ddd", exist);

      const key = Object.keys(exist)[0];
      const url = `/status/${ticker}/${key}`;
      const dbRefStatus = ref(db, url);

      const updates = {};
      console.log("ddd", exist);

      updates[`TVL`] = Number(exist[key]?.TVL) + Number(listingPrice * amount);
      updates[`floor`] =
        (Number(exist[key]?.TVL) + Number(listingPrice * amount)) /
        (Number(exist[key]?.listed) + 1);
      updates[`listed`] = Number(exist[key]?.listed) + 1;
      console.log("ddd", exist);

      await update(dbRefStatus, updates);
      console.log("ddd", exist);
    }

    const dbQueryForWallet = query(ref(db, `wallet/${address}`));

    const walletSnapshot = await get(dbQueryForWallet);
    const walletExist = walletSnapshot.val();

    if (walletExist) {
      const key = Object.keys(walletExist)[0];

      const dbRefInscription = ref(db, `wallet/${address}/${key}/inscriptions`);
      const dbQueryForInscription = query(
        dbRefInscription,
        orderByChild("inscriptionId"),
        equalTo(inscription.inscriptionId)
      );

      const inscriptionSnapshot = await get(dbQueryForInscription);
      const inscriptionData = inscriptionSnapshot.val();

      const keyInscription = Object.keys(inscriptionData)[0];

      const dbQueryForWallet = ref(
        db,
        `wallet/${address}/${key}/inscriptions/${keyInscription}`
      );

      await update(dbQueryForWallet, {
        ...walletExist[key]["inscriptions"][keyInscription],
        listed: true,
        tag: ticker,
      });
    }
  };

  async function generatePSBTListingInscriptionForSale() {
    const psbt = new Psbt({
      network: networks["litecoin"],
    });

    let listed = false;
    const dbQuery = query(
      ref(db, "market/" + ticker),
      orderByChild("data/inscriptionId"),
      equalTo(inscription?.inscriptionId)
    );

    onValue(dbQuery, async (snapshot) => {
      const exist = snapshot.val();
      if (exist) {
        listed = true;
      }
    });

    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }

    if (listed) {
      toast.error("Already listed");
      return;
    }

    if (!psbt) {
      toast.error("PSBT is not generated yet.");
      return;
    }

    if (!listingPrice) {
      toast.error("Please input price to list");
      return;
    }

    if (!toInfo?.address) {
      toast.error("Please input receive address.");
      return;
    }

    try {
      setPendingTx(true);
      const sliceNumber = inscription?.inscriptionId.length - 65;
      const ordinalUtxoTxId = inscription?.inscriptionId.slice(0, 64);
      const ordinalUtxoVout = inscription?.inscriptionId.slice(-sliceNumber);
      const tx = bitcoin.Transaction.fromHex(
        await getTxHexById(ordinalUtxoTxId)
      );

      const input = {
        hash: ordinalUtxoTxId,
        index: parseInt(ordinalUtxoVout),
        nonWitnessUtxo: tx.toBuffer(),
        witnessUtxo: tx.outs[ordinalUtxoVout],
        sighashType:
          bitcoin.Transaction.SIGHASH_SINGLE |
          bitcoin.Transaction.SIGHASH_ANYONECANPAY,
      };
      psbt.addInput(input);

      psbt.addOutput({
        address: toInfo.address,
        value: btcTosatoshis(listingPrice * amount),
      });

      const singedPSBT = await wallet.signPsbt(psbt, {});

      if (singedPSBT) {
        const dbQueryForInscriptions = query(
          ref(db, `market/${ticker}`),
          orderByChild("data/inscriptionId"),
          equalTo(inscription?.inscriptionId)
        );

        const inscriptionSnapshot = await get(dbQueryForInscriptions);
        const inscriptionExist = inscriptionSnapshot.val();

        if (inscriptionExist) {
          const key = Object.keys(inscriptionExist)[0];
          const updateInscriptionRef = ref(db, `market/${ticker}/${key}`);
          await update(updateInscriptionRef, {
            psbt: singedPSBT.toBase64(),
            data: inscription,
            date: Date.now(),
            price: listingPrice * amount,
            seller: toInfo.address,
            content: amount,
            paid: false,
            txId: "",
            tag: ticker,
          });

          toast.success("Successfully listed");
        } else {
          const dbRef = ref(db, "/market/" + ticker);
          push(dbRef, {
            psbt: singedPSBT.toBase64(),
            data: inscription,
            date: Date.now(),
            price: listingPrice * amount,
            seller: toInfo.address,
            content: amount,
            paid: false,
            txId: "",
            tag: ticker,
          }).then(async () => {
            toast.success("Successfully listed");
          });
        }

        await handleUpdateStatus();

        await addlistForSale(
          ticker,
          inscription?.inscriptionId,
          amount,
          listingPrice * amount
        );

        closeModal();
      }
      setPendingTx(false);
    } catch (error) {
      setPendingTx(false);
      toast.error("Something went wrong when creating PSBT");
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="cs-modal relative"
    >
      <div className="text-center text-2xl font-semibold">
        List {ticker} for sale
      </div>

      <div
        className="mx-auto w-full h-32 rounded-md bg-primary-contentDark text-3xl flex justify-center items-center my-3"
        style={{ overflowWrap: "anywhere" }}
      >
        <div className="font-bold px-3 text-center text-sm">
          <p className="text-lg text-center">{amount}</p>
          <p className="text-center">{ticker}</p>
        </div>
      </div>

      <div className="mt-1">
        <div className="mb-1 w-fit">Input Price:</div>
        <div className="flex gap-1">
          <input
            onChange={(e) => setListingPrice(e.target.value)}
            min={0.002}
            type="number"
            className="py-1 rounded-md bg-primary-dark/10 cs-border px-2 w-full"
            placeholder="Input Price"
          />
          <div className="px-2 py-1 bg-primary-contentDark rounded-md text-sm flex justify-center items-center w-36 cs-border overflow-hidden ">
            {listingPrice ? (
              <>~$ {(listingPrice * price * amount).toFixed(1)}</>
            ) : (
              "~$ 0.00"
            )}
          </div>
        </div>
      </div>

      <ReceiveAddress
        onChange={(val) => {
          setToInfo(val);
        }}
      />

      <div className="flex gap-2">
        <button
          className="main_btn w-full py-2 px-3 rounded-md mt-3"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        <button
          className="main_btn w-full py-2 px-3 rounded-md mt-3 bg-sky-600"
          onClick={generatePSBTListingInscriptionForSale}
        >
          Sign & Create PSBT Listing
        </button>
      </div>

      {pendingTx && (
        <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/60 flex justify-center items-center">
          <ImSpinner10  className="text-3xl font-semibold animate-spin" />
        </div>
      )}
    </Modal>
  );
}
