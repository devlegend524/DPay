import React from "react";
import Layout from "@/components/sections/layouts/Layout";
import Head from "next/head";
import Banner from "../components/sections/home/Banner";
import BestCreatorsAndSellers from "../components/sections/home/BestCreatorsAndSellers";
import TopCollections from "../components/sections/home/TopCollections";
import Faq from "../components/sections/home/Faq";


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dpay - Market</title>
        <meta name="description" content="Dpay - Dpay Market" />
      </Head>

      <Banner />
      
      <div className="relative md:py-24 py-16">
        <BestCreatorsAndSellers />
        <TopCollections />
        <Faq />
      </div>
    </Layout>
  );
}
