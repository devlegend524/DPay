import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/sections/layouts/Layout";
import TextInscriptions from "@/components/inscriptionComponents/TextInscriptions";
import Drc20Inscriptions from "@/components/inscriptionComponents/Drc20Inscriptions";
import FileInscriptions from "@/components/inscriptionComponents/FileInscriptions";

const Inscribe = () => {
  const [type, setType] = useState("text");

  const renderContent = () => {
    if (type === "text") {
      return <TextInscriptions />;
    } else if (type === "drc20") {
      return <Drc20Inscriptions />;
    } else {
      return <FileInscriptions />;
    }
  };

  return (
    <Layout>
      <Head>
        <title>DPAY - Inscribe</title>
        <meta name="description" content="DPAY - DPAY inscribe" />
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
