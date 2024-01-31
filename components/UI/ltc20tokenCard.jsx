import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  ref,
  query,
  orderByChild,
  equalTo,
  update,
  remove,
  get,
} from "firebase/database";
import { db } from "@/services/firebase";
import { toast } from "react-hot-toast";
import { WalletContext } from "../../context/wallet";
import { AiOutlineLoading } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { TbArticleOff } from "react-icons/tb";
import { TbGiftOff } from "react-icons/tb";
import useActivities from "../../hooks/useActivities";
import LTCListModal from "../trade/LTCListModal";
import LTCTransferModal from "../trade/LTCTransferModal";

export default function Ltc20tokenCard({
  data,
  ticker,
  bulkSelect,
  setSelectedBlocks,
  selectedBlocks,
}) {
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const { removeListFromMarket } = useActivities();
  const [content, setContent] = useState(data.amount);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isOpenTransfer, setIsOpenTransfer] = useState(false);
  const [added, setAdded] = useState(false);
  const [adding, setAdding] = useState(false);

  const [isListed, setIsListed] = useState(false);
  const [checkingListed, setCheckingListed] = useState(true);

  const openListModal = async () => {
    setIsOpen(true);
  };

  const openTransferModal = async () => {
    setIsOpenTransfer(true);
  };

  const handleCancelList = async (ticker, inscriptionId) => {
    if (!address) {
      toast.error("Please connect your wallet.");
      return;
    }

    let listedInscriptionData;
    const dbRef = ref(db, "market/" + ticker);
    const dbQuery = query(
      dbRef,
      orderByChild("data/inscriptionId"),
      equalTo(inscriptionId)
    );

    const snapshot = await get(dbQuery);
    const exist = snapshot.val();

    if (exist) {
      const key = Object.keys(exist)[0];
      listedInscriptionData = exist[key];

      await remove(ref(db, `market/${ticker}/${key}`));
    }

    const dbRefWallet = ref(db, "wallet/" + address);
    const dbQueryForWallet = query(dbRefWallet);

    const walletSnapshot = await get(dbQueryForWallet);
    const walletData = walletSnapshot.val();

    const key = Object.keys(walletData)[0];

    const dbRefInscription = ref(db, `wallet/${address}/${key}/inscriptions`);
    const dbQueryForInscription = query(
      dbRefInscription,
      orderByChild("inscriptionId"),
      equalTo(inscriptionId)
    );

    const inscriptionSnapshot = await get(dbQueryForInscription);
    const inscriptionData = inscriptionSnapshot.val();

    const keyInscription = Object.keys(inscriptionData)[0];

    const dbRefUpdate = ref(
      db,
      `wallet/${address}/${key}/inscriptions/${keyInscription}`
    );

    await update(dbRefUpdate, { listed: false, tag: "" });

    const dbRefStatus = ref(db, "status/" + ticker);
    const dbQueryForStatus = query(dbRefStatus);

    const statusSnapshot = await get(dbQueryForStatus);
    const statusData = statusSnapshot.val();

    if (statusData) {
      const key = Object.keys(statusData)[0];
      const dbRefUpdate = ref(db, `status/${ticker}/${key}`);

      const updates = {};

      updates[`TVL`] =
        Number(statusData[key]?.TVL) - Number(listedInscriptionData?.price) ||
        0;
      updates[`floor`] =
        Number(statusData[key]?.listed) - 1 == 0
          ? 0
          : (Number(statusData[key]?.TVL) -
              Number(listedInscriptionData?.price)) /
              (Number(statusData[key]?.listed) - 1) || 0;
      updates[`listed`] = Number(statusData[key]?.listed) - 1 || 0;

      await update(dbRefUpdate, updates);
    }

    await removeListFromMarket(inscriptionId);
  };

  const AddList = async () => {
    if (!content) {
      toast.error("Please wait until feching content");
      return;
    }

    if (!data?.inscriptionId) {
      toast.error("Unknown inscription ID");
      return;
    }

    try {
      setAdding(true);

      const newBlock = {
        amount: data.amount,
        inscriptionId: data.inscriptionId,
        inscriptionNumber: data.inscriptionNumber,
      };

      const updatedBlocks = [...selectedBlocks, newBlock];

      setSelectedBlocks(updatedBlocks);
      setAdding(false);
    } catch (error) {
      toast.error("When validating:", error);
      //  console.log(error);
      setAdding(true);
    }
  };

  const checkListed = async (id) => {
    setCheckingListed(true);

    const dbQueryForWallet = query(ref(db, `wallet/${address}`));

    const walletSnapshot = await get(dbQueryForWallet);
    const walletExist = walletSnapshot.val();

    if (walletExist) {
      const key = Object.keys(walletExist)[0];

      const dbRefInscription = ref(db, `wallet/${address}/${key}/inscriptions`);
      const dbQueryForInscription = query(
        dbRefInscription,
        orderByChild("inscriptionId"),
        equalTo(id)
      );

      const inscriptionSnapshot = await get(dbQueryForInscription);
      const inscriptionData = inscriptionSnapshot.val();
      if (inscriptionData) {
        setIsListed(true);
      }
    }
    setCheckingListed(false);
  };

  const removeFromList = () => {
    const filter = selectedBlocks.filter(
      (block) => block.inscriptionId !== data.inscriptionId
    );
    setSelectedBlocks(filter);
    setAdded(false);
  };

  useEffect(() => {
    const exist = selectedBlocks.filter(
      (block) => block.inscriptionId == data.inscriptionId
    );
    if (exist.length > 0) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [selectedBlocks]);

  useEffect(() => {
    if (data) {
      checkListed(data?.inscriptionId);
    }
  }, [data]);

  return (
    <>
      <div className={`${added && "cs-border"} in-card`}>
        <div className="in-content flex-col h-[130px] w-full">
          {data?.amount} <br />
          <p className="mt-1 text-sm text-gray-300 text-center">
            {data?.ticker}
          </p>
          <button
            className="in-transfer"
            onClick={(e) => {
              e.stopPropagation();
              openTransferModal();
            }}
          >
            Transfer
          </button>
        </div>
        <hr className="cs-border" />
        <div className="text-center text-sm text-gray-300">
          #{data?.inscriptionNumber}
        </div>

        {isListed ? (
          <>
            <button
              className="main_btn mt-1  py-1 rounded-md bg-transparent disabled:bg-primary-light/10 w-full flex gap-1 justify-center items-center"
              onClick={(e) => {
                e.stopPropagation();
                handleCancelList(data?.ticker, data.inscriptionId);
              }}
            >
              <TbGiftOff /> Listed
            </button>
          </>
        ) : (
          <>
            {bulkSelect ? (
              <>
                {added ? (
                  <button
                    className="main_btn mt-1  cs-border bg-transparent py-1 h-8  rounded-md w-full flex justify-center items-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFromList();
                    }}
                  >
                    <TbArticleOff />
                    Added
                  </button>
                ) : (
                  <button
                    disabled={adding || added}
                    className="main_btn mt-1  py-1 h-8  rounded-md w-full flex justify-center items-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      AddList();
                    }}
                  >
                    <>
                      {adding ? (
                        <AiOutlineLoading className="text-lg text-white font-semibold animate-spin" />
                      ) : (
                        <>
                          <FaPlus />
                          Add
                        </>
                      )}
                    </>
                  </button>
                )}
              </>
            ) : (
              <button
                disabled={isListed || checkingListed}
                className="main_btn mt-1  py-1 h-8 rounded-md w-full flex justify-center items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation();
                  openListModal();
                }}
              >
                <>
                  {checkingListed ? (
                    <AiOutlineLoading className="text-lg text-white font-semibold animate-spin" />
                  ) : (
                    <>List</>
                  )}
                </>
              </button>
            )}
          </>
        )}
      </div>

      <LTCListModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        ticker={ticker}
        amount={data.amount}
        inscription={data}
      />

      <LTCTransferModal
        modalIsOpen={isOpenTransfer}
        setIsOpen={setIsOpenTransfer}
        content={data.amount}
        id={data?.inscriptionId}
        inscription={data}
        ticker={ticker}
      />
    </>
  );
}
