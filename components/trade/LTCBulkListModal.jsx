import React, { useMemo } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useWallet } from "../../store/hooks";
import * as bitcoin from "bitcoinjs-lib";
import usePSBT from "../../hooks/usePSBT";
import { getTxHexById, btcTosatoshis, sleep } from "@/utils";
import { toast } from "react-hot-toast";
import ReceiveAddress from "../UI/ReceiveAddress";
import { useContext } from "react";
import { WalletContext } from "../../context/wallet";
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
import { AiOutlineLoading } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { Psbt } from "bitcoinjs-lib";
import useActivities from "../../hooks/useActivities";

export default function LTCBulkListModal({
  modalIsOpen,
  setIsOpen,
  blocks,
  setSelectedBlocks,
  tag,
  cancelBlocks,
}) {
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const { price } = useWallet();
  const { networks } = usePSBT({ network: "dogecoin" });
  const { addlistForSale } = useActivities();
  const [listingPrice, setListingPrice] = useState("");
  const [toInfo, setToInfo] = useState();
  const [pendingTx, setPendingTx] = useState(false);

  const amount = useMemo(() => {
    const sum = blocks.reduce((accumulator, currentValue) => {
      return accumulator + Number(currentValue.amount);
    }, 0);
    return sum;
  }, [blocks]);

  function closeModal() {
    setIsOpen(false);
    cancelBlocks();
  }

  const removeFromList = (id) => {
    //  console.log(id);
    const filter = blocks.filter(
      (block) => block.inscription.inscriptionId !== id
    );
    setSelectedBlocks(filter);
  };

  const handleUpdateStatus = async (tag) => {
    //  console.log("running");

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

      const dbQueryForWalletUpdate = ref(
        db,
        `wallet/${address}/${key}/inscriptions/${keyInscription}`
      );

      await update(dbQueryForWalletUpdate, {
        ...walletExist[key]["inscriptions"][keyInscription],
        listed: true,
        tag: tag,
      });
    }
  };

  async function generatePSBTListingInscriptionForSale(
    inscription,
    content,
    listingPrice,
    toInfoAddress
  ) {
    const psbt = new Psbt({
      network: networks["litecoin"],
    });
    let listed = false;
    const dbQuery = query(
      ref(db, "market/" + tag),
      orderByChild("data/inscriptionId"),
      equalTo(inscription?.inscriptionId)
    );

    onValue(dbQuery, async (snapshot) => {
      const exist = snapshot.val();
      if (exist) {
        listed = true;
      }
    });

    if (listed) {
      toast.error("Already listed");
      return;
    }

    if (!psbt) {
      toast.error("PSBT is not generated yet.");
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
        address: toInfoAddress,
        value: btcTosatoshis(listingPrice * content),
      });

      const singedPSBT = await wallet.signPsbt(psbt, {});

      if (singedPSBT) {
        const dbQueryForInscriptions = query(
          ref(db, `market/${tag}`),
          orderByChild("data/inscriptionId"),
          equalTo(inscription?.inscriptionId)
        );

        const inscriptionSnapshot = await get(dbQueryForInscriptions);
        const inscriptionExist = inscriptionSnapshot.val();

        if (inscriptionExist) {
          const key = Object.keys(inscriptionExist)[0];
          const updateInscriptionRef = ref(db, `market/${tag}/${key}`);
          await update(updateInscriptionRef, {
            psbt: singedPSBT.toBase64(),
            data: inscription,
            date: Date.now(),
            price: listingPrice * content,
            seller: toInfoAddress,
            content: content,
            paid: false,
            txId: "",
            tag: tag,
          });
          toast.success("Successfully listed");
        } else {
          const dbRef = ref(db, "/market/" + tag);
          push(dbRef, {
            psbt: singedPSBT.toBase64(),
            data: inscription,
            date: Date.now(),
            price: listingPrice * content,
            seller: toInfoAddress,
            content: content,
            paid: false,
            txId: "",
            tag: tag,
          }).then(async () => {
            toast.success("Successfully listed");
          });
        }

        await addlistForSale(
          tag,
          inscription?.inscriptionId,
          content,
          listingPrice * amount
        );
        await handleUpdateStatus(tag);
        await sleep(0.2);
      }
      setPendingTx(false);
    } catch (error) {
      setPendingTx(false);
      //  console.log(error);
      toast.error(
        "Something went wrong when creating PSBT. Please try again after some mins."
      );
    }
  }

  async function generatePSBTsListingInscriptionForSale() {
    if (!address) {
      toast.error("Please connect your wallet");
      return;
    }

    if (listingPrice <= 0) {
      toast.error("Please input price to list");
      return;
    }

    if (!toInfo?.address) {
      toast.error("Please input receive address.");
      return;
    }

    try {
      await Promise.all(
        blocks.map(async (block) => {
          await generatePSBTListingInscriptionForSale(
            block,
            block.amount,
            listingPrice,
            toInfo.address
          );
        })
      );

      const dbQuery = query(ref(db, `status/${tag}`));

      const snapshot = await get(dbQuery);
      const exist = snapshot.val();

      if (!exist) {
        const dbRefStatus = ref(db, `/status/${tag}`);
        await push(dbRefStatus, {
          TVL: Number(listingPrice * amount),
          floor: Number(listingPrice * amount),
          listed: 1,
        });
      } else {
        const key = Object.keys(exist)[0];
        const url = `/status/${tag}/${key}`;
        const dbRefStatus = ref(db, url);

        const updates = {};

        updates[`TVL`] =
          Number(exist[key]?.TVL) +
          Number(listingPrice * amount) * blocks.length;
        updates[`floor`] =
          (Number(exist[key]?.TVL) +
            Number(listingPrice * amount) * blocks.length) /
          (Number(exist[key]?.listed) + blocks.length);
        updates[`listed`] = Number(exist[key]?.listed) + blocks.length;

        await update(dbRefStatus, updates);
      }
      closeModal();
    } catch (error) {
      //  console.log(error);
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
        List {amount} {tag} for sale
      </div>

      <div className="mx-auto  grid grid-cols-3 gap-1">
        {blocks.map((block, key) => {
          return (
            <div
              key={key}
              className="w-full h-24 rounded-md bg-primary-contentDark flex justify-center items-center my-3 relative p-3"
              style={{ overflowWrap: "anywhere" }}
            >
              <div className=" font-bold px-3">
                {" "}
                <p className="text-center">{block?.amount}</p>
                <p className="text-center">{tag}</p>
              </div>

              <button
                className="absolute rounded-full p-1 top-1 right-1"
                onClick={() => removeFromList(block.inscriptionId)}
              >
                <FaTimes className="text-2xl" />
              </button>
            </div>
          );
        })}
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
          onClick={generatePSBTsListingInscriptionForSale}
        >
          Sign & Create PSBT Listing
        </button>
      </div>

      {pendingTx && (
        <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/60 flex justify-center items-center">
          <AiOutlineLoading className="text-3xl font-semibold animate-spin" />
        </div>
      )}
    </Modal>
  );
}
