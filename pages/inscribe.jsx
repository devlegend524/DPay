import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/sections/layouts/Layout";

const Inscribe = () => {
  const [type, setType] = useState("text");

  const renderContent = () => {
    if (type === "text") {
      return (
        <div className="dark:bg-slate-800 bg-gray-300 rounded-md p-3">
          <div className="flex gap-2 justify-around my-3">
            <div className="flex gap-2 cursor">
              <input type="checkbox" name="" id="" />
              Single
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              Bulk
            </div>
          </div>

          <textarea
            name=""
            id=""
            cols="20"
            rows="5"
            placeholder="Add Text here"
            className="w-full rounded-md p-3 dark:bg-gray-700 bg-gray-200 focus:outline-none"
          ></textarea>

          <input
            type="text"
            placeholder="Input Receive Address"
            className="w-full mt-3 mb-4 rounded-md p-2 dark:bg-gray-700 bg-gray-200 focus:outline-none"
          />

          <button className="main_btn rounded-md py-2 w-full">Next</button>
        </div>
      );
    } else if (type === "drc20") {
      return (
        <div className="dark:bg-slate-800 bg-gray-300 rounded-md p-3">
          <div className="flex gap-2 justify-around my-3">
            <div className="flex gap-2 cursor">
              <input type="checkbox" name="" id="" />
              Single
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              Bulk
            </div>
          </div>

          <textarea
            name=""
            id=""
            cols="20"
            rows="5"
            placeholder="Add Text here"
            className="w-full rounded-md p-3 dark:bg-gray-700 bg-gray-200 focus:outline-none"
          ></textarea>

          <input
            type="text"
            placeholder="Input Receive Address"
            className="w-full mt-3 mb-4 rounded-md p-2 dark:bg-gray-700 bg-gray-200 focus:outline-none"
          />

          <button className="main_btn rounded-md py-2 w-full">Next</button>
        </div>
      );
    } else {
      return (
        <div className="dark:bg-slate-800 bg-gray-300 rounded-md p-3">
          <div className="flex gap-2 justify-around my-3">
            <div className="flex gap-2 cursor">
              <input type="checkbox" name="" id="" />
              Single
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              Bulk
            </div>
          </div>

          <textarea
            name=""
            id=""
            cols="20"
            rows="5"
            placeholder="Add Text here"
            className="w-full rounded-md p-3 dark:bg-gray-700 bg-gray-200 focus:outline-none"
          ></textarea>

          <input
            type="text"
            placeholder="Input Receive Address"
            className="w-full mt-3 mb-4 rounded-md p-2 dark:bg-gray-700 bg-gray-200 focus:outline-none"
          />

          <button className="main_btn rounded-md py-2 w-full">Next</button>
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
              onClick={() => setType("text")}
              className={`px-4 py-2 rounded-md focus:outline-none ${
                type === "text" ? "main_btn" : ""
              }`}
            >
              Text
            </button>
            <button
              onClick={() => setType("drc20")}
              className={`px-4 py-2 rounded-md focus:outline-none ${
                type === "drc20" ? "main_btn" : ""
              }`}
            >
              Drc-20
            </button>
            <button
              onClick={() => setType("file")}
              className={`px-4 py-2 rounded-md focus:outline-none ${
                type === "file" ? "main_btn" : ""
              }`}
            >
              Files
            </button>
          </div>
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
};

export default Inscribe;
