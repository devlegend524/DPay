import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowRight, FaCopy } from "react-icons/fa";
import { Menu, Transition } from "@headlessui/react";
import { WalletContext } from "@/context/wallet";
import { copyToClipboard } from "@/utils";
import { toast } from "react-hot-toast";
import { Fragment, useContext, useState } from "react";
import { addressFormat } from "@/utils";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { useWallet } from "@/store/hooks";
import { useRouter } from "next/router";

export default function WalletMain({ setContentType }) {
  const { account, ltc20, balance, inscriptions, price } = useWallet();
  const wallet = useContext(WalletContext);
  const router = useRouter();
  const [listType, setListType] = useState("dorginals");
  const [pending, setPending] = useState(true);
  const [lists, setLists] = useState();
  const [fetchingLists, setFetchingLists] = useState(true);

  const goToDetails = () => {
    router.push("/wallet/" + account?.accounts[0]?.address);
  };

  const copied = () => {
    toast.success("copied!");
  };

  const fetchData = () => {
    setPending(true);
    wallet.fetchbalance();
    setTimeout(() => {
      setPending(false);
    }, [500]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-4 rounded-lg dark:bg-slate-900 cs-border bg-white">
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
                <Menu.Button className="text-lg  my-auto cursor-pointer focus:outline-none dark:hover:text-white/90 dark:hover:text-gray-800 hover:bg-primary-dark/50 rounded-lg p-1 transition ease-in-out">
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
                <Menu.Items className="absolute right-0 z-20 mt-2 w-[200px!important] p-3 dark:bg-[#243355] bg-gray-200  shadow shadow-black  origin-top-right rounded-md focus:outline-none">
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
                    Send DOGE
                  </button>
                  <button
                    onClick={() => setContentType("secrets")}
                    className="hover:bg-primary-dark/30 transition ease-in-out rounded-md focus:outline-none text-left w-full p-1"
                  >
                    Show secrets
                  </button>
                  <button
                    onClick={() => wallet.removeWallet()}
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
          {balance ? Number(balance).toFixed(2) : "0"} ( $
          {balance ? (balance * price).toFixed(2) : "0.00"} )
        </div>

        <div className="flex gap-3 mt-3">
          <button
            className="py-1 rounded-lg cursoer-pointer focus:outline-none"
            onClick={() => setListType("dorginals")}
          >
            Doginals
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
            DRC20
          </button>
        </div>

        <div className="overflow-y-auto h-[150px]">
          {listType == "dorginals" ? (
            <>
              {inscriptions?.total > 0 ? (
                <>
                  <div className="mt-3">All Doginals</div>
                  {account?.accounts && (
                    <Link
                      href={"/wallet/" + account?.accounts[0]?.address}
                      className="rounded-md bg-primary-dark/20 in-card py-3 dark:hover:text-white px-3 flex justify-between items-center hover:bg-primary-dark/30  transition ease-in-out cursor-pointer mt-2 mb-3"
                    >
                      <div className="flex gap-2 items-center">
                        <p>Doginals</p>
                      </div>
                      <div className="flex gap-3">
                        <p>{inscriptions?.total}</p>
                        <FaArrowRight className="text-xl" />
                      </div>
                    </Link>
                  )}
                </>
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
                              // onClick={() =>
                              //   // handleCancelList(
                              //   //   lists[key]?.tag,
                              //   //   lists[key]?.inscriptionId
                              //   // )
                              // }
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
                    <div className="grid grid-cols-2 gap-2 mt-3">
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
                              <p>{list.overallBalance}</p>
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
    </>
  );
}
