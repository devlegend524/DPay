import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRight, FaCopy } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { WalletContext } from "../../context/wallet";
import {
  ref,
  query,
  orderByChild,
  equalTo,
  get,
  remove,
  update,
} from "firebase/database";
import { db } from "@/services/firebase";
import { copyToClipboard } from "@/utils";
import { toast } from "react-hot-toast";
import { Fragment, useContext, useState } from "react";
import { addressFormat } from "@/utils";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { LuAlertOctagon } from "react-icons/lu";
import Modal from "react-modal";
import { useWallet } from "../../store/hooks";
import useActivities from "../../hooks/useActivities";
import { useRouter } from "next/router";

export default function WalletMain({ setContentType }) {
  const { account, ltc20, balance, inscriptions, price } = useWallet();
  const wallet = useContext(WalletContext);
  const router = useRouter();
  const { removeListFromMarket } = useActivities();
  const [listType, setListType] = useState("inscriptions");
  const [pending, setPending] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [lists, setLists] = useState();
  const [fetchingLists, setFetchingLists] = useState(true);

  const goToDetails = (ticker) => {
    router.push("/wallet/ltc20Token/" + ticker);
  };

  const copied = () => {
    toast.success("copied!");
  };

  const confirm = () => {
    wallet.removeWallet();
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const fetchData = () => {
    setPending(true);
    wallet.fetchbalance();
    setTimeout(() => {
      setPending(false);
    }, [500]);
  };

  async function fetchLists() {
    setFetchingLists(true);
    const dbQuery = query(ref(db, `wallet/${account?.accounts[0]?.address}`));
    const snapshot = await get(dbQuery);
    const exist = snapshot.val();

    if (exist) {
      const key = Object.keys(exist)[0];
      if (key !== "activities") {
        const dbQueryList = query(
          ref(
            db,
            `wallet/${account?.accounts[0]?.address}/${key}/inscriptions`
          ),
          orderByChild("listed"),
          equalTo(true)
        );
        const snapshotList = await get(dbQueryList);
        const existList = snapshotList.val();
        if (existList) {
          setLists(existList);
        }
      }
    }
    setFetchingLists(false);
  }

  const handleCancelList = async (ticker, inscriptionId) => {
    if (!account?.accounts[0]?.address) {
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

    const dbRefWallet = ref(db, "wallet/" + account?.accounts[0]?.address);
    const dbQueryForWallet = query(dbRefWallet);

    const walletSnapshot = await get(dbQueryForWallet);
    const walletData = walletSnapshot.val();

    const key = Object.keys(walletData)[0];

    const dbRefInscription = ref(
      db,
      `wallet/${account?.accounts[0]?.address}/${key}/inscriptions`
    );
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
      `wallet/${account?.accounts[0]?.address}/${key}/inscriptions/${keyInscription}`
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
    fetchLists();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (account && account.accounts) {
      fetchLists();
    }
  }, [account]);

  return (
    <>
      <div className="p-4 rounded-lg bg-[#031a2b]">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer rounded-lg"
            onClick={() => {
              copyToClipboard(account?.accounts[0]?.address);
              copied();
            }}
          >
            {account?.accounts &&
              addressFormat(account?.accounts[0]?.address, 5)}
            <FaCopy />
          </div>
          <div className="flex gap-3">
            {!pending ? (
              <FaArrowsRotate
                className="text-3xl cursor-pointer p-1.5"
                onClick={() => fetchData()}
              />
            ) : (
              <AiOutlineLoading3Quarters className="text-3xl cursor-pointer p-1.5 animate-spin" />
            )}

            <Menu as="div" className="relative inline-block text-left">
              <div className="flex justify-center items-center">
                <Menu.Button className="text-lg  my-auto cursor-pointer focus:outline-none hover:text-white/90 hover:bg-primary-dark/50 rounded-lg p-1 transition ease-in-out">
                  <BsThreeDotsVertical className="text-xl cursor-pointer" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-20 mt-2 w-[200px!important] p-3 bg-[#102c43]  shadow shadow-black  origin-top-right rounded-md focus:outline-none">
                  <button
                    onClick={() => wallet.unlockWallet()}
                    className="hover:bg-primary-dark/30 transition ease-in-out rounded-md focus:outline-none text-left w-full p-1"
                  >
                    Unlock wallet
                  </button>
                  <button
                    onClick={() => setContentType("send")}
                    className="hover:bg-primary-dark/30 transition ease-in-out rounded-md focus:outline-none text-left w-full p-1"
                  >
                    Send LTC
                  </button>
                  <button
                    onClick={() => setContentType("secrets")}
                    className="hover:bg-primary-dark/30 transition ease-in-out rounded-md focus:outline-none text-left w-full p-1"
                  >
                    Show secrets
                  </button>
                  <button
                    onClick={() => setModalIsOpen(true)}
                    className="hover:bg-primary-dark/30 transition ease-in-out rounded-md focus:outline-none text-left w-full text-red-600 p-1"
                  >
                    Delete Wallet
                  </button>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="mt-3">
          {Number(balance?.amount).toFixed(5)} ( $
          {(balance?.amount * price).toFixed(2)} )
        </div>

        <div className="flex gap-3 mt-3">
          <button
            className="py-1 rounded-lg cursoer-pointer focus:outline-none"
            onClick={() => setListType("inscriptions")}
          >
            Inscriptions
          </button>
          <button
            className="py-1 rounded-lg cursoer-pointer focus:outline-none"
            onClick={() => setListType("list")}
          >
            Lists
          </button>
          <button
            className="py-1 rounded-lg cursoer-pointer focus:outline-none"
            onClick={() => setListType("ltc20")}
          >
            LTC20
          </button>
        </div>

        <div className=" overflow-y-auto h-[150px]">
          {listType == "inscriptions" ? (
            <>
              {inscriptions?.total > 0 ? (
                <Link href={"/wallet/others"} className="hover:text-white">
                  <div className="mt-3">All Inscriptions</div>
                  <div className="rounded-md bg-primary-dark/20  py-2 px-3 flex justify-between items-center hover:bg-primary-dark/30  transition ease-in-out cursor-pointer mt-2 mb-3">
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/logo.png"
                        width={40}
                        height={40}
                        className="rounded-md"
                        alt=""
                      />
                      <p>All inscriptions</p>
                    </div>
                    <div className="flex gap-3">
                      <p>{inscriptions?.total}</p>
                      <FaArrowRight className="text-xl" />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="py-8 w-full flex justify-center">
                  No inscription.
                </div>
              )}
            </>
          ) : (
            <>
              {listType == "list" ? (
                <>
                  {!fetchingLists && lists ? (
                    <>
                      <div className="grid grid-cols-3 text-sm text-gay-300">
                        <div>In-Number</div>
                        <div>Tag</div>
                        <div>Action</div>
                      </div>
                      {Object.keys(lists).map((key) => {
                        return (
                          <div
                            key={lists[key]?.inscriptionId}
                            className="rounded-md bg-primary-dark/20  py-2 px-3 grid grid-cols-3 hover:bg-primary-dark/30  transition ease-in-out cursor-pointer mt-2 mb-1"
                          >
                            <div className="flex gap-2 items-center">
                              {lists[key]?.contentType.indexOf("image") >
                                -1 && (
                                <>
                                  <Image
                                    key={lists[key]?.inscriptionId}
                                    src={`https://ordinalslite.com/content/${lists[key]?.inscriptionId}`}
                                    width={40}
                                    height={60}
                                    className="rounded-md"
                                    onError={(e) => empyImage(e)}
                                  />
                                </>
                              )}

                              {lists[key]?.contentType.indexOf("text") > -1 && (
                                <>{lists[key]?.inscriptionNumber}</>
                              )}
                            </div>
                            <p>{lists[key]?.tag}</p>
                            <button
                              className="main_btn text-sm rounded-md px-1"
                              onClick={() =>
                                handleCancelList(
                                  lists[key]?.tag,
                                  lists[key]?.inscriptionId
                                )
                              }
                            >
                              Unlist
                            </button>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="py-8 w-full flex justify-center">
                      No Lists.
                    </div>
                  )}
                </>
              ) : (
                <>
                  {ltc20?.total > 0 ? (
                    <div className="grid grid-cols-2 gap-2 px-2">
                      {ltc20.list.map((list) => {
                        return (
                          <div
                            className="in-card"
                            key={list.ticker}
                            onClick={() => goToDetails(list.ticker)}
                          >
                            <p className="text-sm font-semibold text-sky-500">
                              {list.ticker}
                            </p>
                            <div className="flex gap-1 justify-between text-[11px]">
                              <p>Transferable:</p>
                              <p>{list.transferableBalance}</p>
                            </div>
                            <div className="flex gap-1 justify-between text-[11px]">
                              <p>Available:</p>
                              <p>{list.availableBalance}</p>
                            </div>
                            <hr className="cs-border" />
                            <div className="flex gap-1 justify-between text-[11px]">
                              <p>overall</p>
                              <p>{list.overallBalane}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="py-8 w-full flex justify-center">
                      No Lists.
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="cs-modal relative"
      >
        <div className="text-center text-2xl font-semibold">
          Are you sure to delete this wallet?
        </div>

        <div className="flex justify-center items-center p-3 my-8">
          <LuAlertOctagon className="text-9xl text-yellow-500" />
        </div>

        <div className="flex gap-2">
          <button className="main_btn h-8 w-full " onClick={closeModal}>
            No
          </button>
          <button className="main_btn h-8 w-full bg-red-500" onClick={confirm}>
            Yes
          </button>
        </div>
      </Modal>
    </>
  );
}
