import React from "react";
import Head from "next/head";
import MenuBar from "@/components/sections/layouts/Menu";
import Footer from "@/components/sections/layouts/Footer";
import FixedLeftBar from "@/components/UI/FixedLeftBar";

export default function Layout(props) {
  return (
    <main>
      <Head>
        <title>ordinals.fun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Dpay: The Best ordinals market place on Dogecoin"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />
        <meta
          content="Dpay, ordinals, litecoin, PSBT, market place, NFTs, NFT, Banksy superstar set 1, Lil Ordies, Lite Punks, Dogecoin Glitch Ordinals, Moonbirds, Punks, ordirobots, Ballers, Drip Cats, Armored, Lizards  "
          name="keywords"
        />
        <meta property="og:title" content="ordinals.fun " />
        <meta property="og:type" content="ordinals.fun" />
        <meta
          property="og:description"
          content="Dpay: The Best ordinals market place on Dogecoin"
        />
        <meta property="og:url" content="https://dpay-xi.vercel.app" />
        <meta property="og:site_name" content="ordinals.fun"></meta>
        <meta
          property="og:image"
          content="https://dpay-xi.vercel.app/logo.png"
        ></meta>
        <meta property="og:image:type" content="image/png"></meta>
        <meta property="og:image:width" content="2000"></meta>
        <meta property="og:image:height" content="2000"></meta>
        <meta property="og:image:alt" content="Logo"></meta>
      </Head>

      <div className="flex items-center flex-col min-h-screen py-[90px] relative w-full overflow-hidden">
        <MenuBar />
        <div className="mb-16 w-full">{props.children}</div>
        <Footer />
        <FixedLeftBar />
      </div>
    </main>
  );
}
