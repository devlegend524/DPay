import React from "react";
import Head from "next/head";
import Layout from "@/components/sections/layouts/Layout";

const Explorer = () => {
  return (
    <Layout>
      <Head>
        <title>Dpay - Explorer</title>
        <meta name="description" content="Dpay - Dpay Explorer" />
      </Head>

      <div className="h-full flex flex-col items-center justify-center mt-32">
        <h1 className="text-5xl font-bold mb-8 animate-pulse">Coming Soon.</h1>
        <p className="text-lg mb-8 text-center">
          We are working hard to give you something cool!
        </p>
      </div>
    </Layout>
  );
};

export default Explorer;
