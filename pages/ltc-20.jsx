import React from "react";
import Layout from "@/components/sections/Layout";
import CollectionTr from "../components/UI/CollectionTr";
import Head from "next/head";
import { useEffect } from "react";
import { useState } from "react";
import LTCCollectionTr from "../components/UI/LTCCollectionTr";

export default function Ltc20() {
  const [collections, setColections] = useState();

  async function getCollection() {
    const [collectionsFromGithub] = await Promise.all([
      fetch(
        `https://raw.githubusercontent.com/nextidearly/collections/main/LTC20/metas.json`
      ).then((response) => response.json()),
    ]);
    setColections(collectionsFromGithub);
  }

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Dpay - NFT Collections</title>
        <meta
          name="description"
          content="Dpay - NFT Collections for market"
        />
      </Head>

      <div className="">
        <h2 className="text-4xl font-bold mt-16 mb-2 text-center sm:text-left">
          LTC20 Collections
        </h2>
        <p className="text-sm text-center w-full max-w-[900px] mb-12 mx-auto lg:px-[150px]">
          LTC20 PSBT market place on Dogecoin.
        </p>
      </div>

      <div className="w-full flex justify-end my-2">
        <a
          href="https://t.me/AVAXLEWIS2"
          target={"_blank"}
          className="main_btn px-2 py-2 rounded-md"
        >
          Create Collection
        </a>
      </div>

      <div className="my-3 w-full">
        <table className="table-auto w-full">
          <thead>
            <tr className="px-[6px!important] my-[4px!important]">
              <th className="px-1 lg:px-3 py-1">#</th>
              <th className="py-1">Logo</th>
              <th className="py-1 pl-1">Name</th>
              <th className="py-1">ticker</th>
              <th className="py-1 hidden lg:inline-block">Link</th>
              <th className="py-1">Supply</th>
            </tr>
          </thead>
          <tbody>
            {collections &&
              collections.map((collection, key) => {
                return (
                  <LTCCollectionTr
                    key={key}
                    collection={collection}
                    index={key}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
