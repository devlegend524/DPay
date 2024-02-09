import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/sections/layouts/Layout";
import { MdOutlineSwapCalls } from "react-icons/md";

const Inscribe = () => {
  const [type, setType] = useState("swap");

  const renderContent = () => {
    if (type === "swap") {
      return (
        <div className="dark:bg-slate-800 bg-gray-300 rounded-md px-3 py-6">
          <div className="flex justify-center">
            <h2 className="text-center text-3xl font-semibold">Swap</h2>
          </div>

          <div className="flex w-full justify-end text-sm mt-8 pr-3">
            Transferable: 0.000
          </div>
          <div className="rounded-full dark:bg-slate-900 bg-white p-2 flex gap-2">
            <div className="p-2 dark:bg-slate-800 bg-gray-300 rounded-full flex gap-2 items-center w-[150px] cursor-pointer">
              <img
                src="/logo.png"
                alt=""
                srcset=""
                className="w-[28px] h-[28px]"
              />
              <p> $Dpay</p>
            </div>

            <input
              type="number"
              className="h-full w-full bg-transparent px-4 py-2 text-xl font-semibold text-end focus:outline-none"
              placeholder="0.00"
            />
          </div>

          <div className="w-full relative h-[25px]">
            <div className="p-1.5 rounded-full dark:bg-slate-800 bg-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:rotate-180 duration-300">
              <div className="p-1.5 dark:bg-slate-900 bg-white rounded-full">
                <MdOutlineSwapCalls className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="rounded-full dark:bg-slate-900 bg-white p-2 flex gap-2">
            <div className="p-2 dark:bg-slate-800 bg-gray-300 rounded-full flex gap-2 items-center w-[150px] cursor-pointer">
              <img
                src="/DOGE.png"
                alt=""
                srcset=""
                className="w-[28px] h-[28px]"
              />
              <p> DOGE</p>
            </div>

            <input
              type="number"
              className="h-full w-full bg-transparent px-4 py-2 text-xl font-semibold text-end focus:outline-none"
              placeholder="0.00"
            />
          </div>

          <button className="main_btn rounded-md py-2 w-full mt-6">Swap</button>

          <div className="mt-6">
            Available Exchanges
            <div className="flex gap-2 justify-between w-full text-sm h-[28px] items-center border-b dark:border-slate-500/30 border-gray-200/30 border-[0.5px]">
              <div>1000 $dpay / 1 DOGE</div>
              <div className="px-3 py-0.5 dark:bg-slate-700 bg-gray-200 rounded-full flex items-center">
                Best Match
              </div>
            </div>
            <div className="flex gap-2 justify-between w-full text-sm h-[28px] items-center border-b dark:border-slate-500/30 border-gray-200/30 border-[0.5px]">
              <div>1000 $dpay / 1 DOGE</div>
              <div></div>
            </div>
            <div className="flex gap-2 justify-between w-full text-sm h-[28px] items-center border-b dark:border-slate-500/30 border-gray-200/30 border-[0.5px]">
              <div>1000 $dpay / 1 DOGE</div>
            </div>
            <div className="flex gap-2 justify-between w-full text-sm h-[28px] items-center border-b dark:border-slate-500/30 border-gray-200/30 border-[0.5px]">
              <div>1000 $dpay / 1 DOGE</div>
              <div></div>
            </div>
          </div>
        </div>
      );
    } else if (type === "liquidity") {
      return (
        <div className="dark:bg-slate-800 bg-gray-300 rounded-md px-3 py-6">
          <div className="flex justify-center">
            <h2 className="text-center text-3xl font-semibold">
              Add Liquidity
            </h2>
          </div>

          <div className="flex w-full justify-end text-sm pr-3 mt-8">
            Transferable: 0.000
          </div>
          <div className="rounded-full dark:bg-slate-900 bg-white p-2 flex gap-2">
            <div className="p-2 dark:bg-slate-800 bg-gray-300 rounded-full flex gap-2 items-center w-[150px] cursor-pointer">
              <img
                src="/logo.png"
                alt=""
                srcset=""
                className="w-[28px] h-[28px]"
              />
              <p> $Dpay</p>
            </div>

            <input
              type="number"
              className="h-full w-full bg-transparent px-4 py-2 text-xl font-semibold text-end focus:outline-none"
              placeholder="0.00"
            />
          </div>

          <div className="w-full relative h-[25px]">
            <div className="p-1.5 rounded-full dark:bg-slate-800 bg-gray-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:rotate-180 duration-300">
              <div className="p-1.5 dark:bg-slate-900 bg-white rounded-full">
                <MdOutlineSwapCalls className="text-2xl" />
              </div>
            </div>
          </div>

          <div className="rounded-full dark:bg-slate-900 bg-white p-2 flex gap-2">
            <div className="p-2 dark:bg-slate-800 bg-gray-300 rounded-full flex gap-2 items-center w-[150px] cursor-pointer">
              <img
                src="/DOGE.png"
                alt=""
                srcset=""
                className="w-[28px] h-[28px]"
              />
              <p> DOGE</p>
            </div>

            <input
              type="number"
              className="h-full w-full bg-transparent px-4 py-2 text-xl font-semibold text-end focus:outline-none"
              placeholder="0.00"
            />
          </div>

          <button className="main_btn rounded-md py-2 w-full mt-8">Add</button>
        </div>
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>Dpay - Inscribe</title>
        <meta name="description" content="Dpay - Dpay inscribe" />
      </Head>

      <div className="mt-16">
        <div className="mx-auto max-w-[600px] w-full">
          <div className="my-3 flex gap-2 p-3 rounded-md dark:bg-slate-800 bg-gray-300 mx-auto">
            <button
              onClick={() => setType("swap")}
              className={`px-4 py-2 rounded-md focus:outline-none w-full ${
                type === "swap" ? "main_btn" : ""
              }`}
            >
              Swap
            </button>
            <button
              onClick={() => setType("liquidity")}
              className={`px-4 py-2 rounded-md focus:outline-none w-full ${
                type === "liquidity" ? "main_btn" : ""
              }`}
            >
              Liquidity
            </button>
          </div>
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default Inscribe;
