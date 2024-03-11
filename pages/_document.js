import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Ordinals Dogecoin inscriptions." />
        <meta
          name="keywords"
          content="DPAY, inscription, bitcoin, brc20, nft, Ordinals, Dogecoin"
        />
        <meta property="og:title" content={`DPAY`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Dogecoin Ordinals marketplace | Buy & Sell Dogecoin inscriptions`}
        />
        <meta property="og:url" content={`https://dpay-market.vercel.app/`} />
        <meta property="og:site_name" content="DPAY"></meta>
        <meta
          property="og:image"
          content="https://dpay-market.vercel.app/metaImage.jpg"
        ></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
        <meta property="og:image:width" content="2000"></meta>
        <meta property="og:image:height" content="2000"></meta>
        <meta property="og:image:alt" content="dashboard"></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link
          href="/assets/libs/tiny-slider/tiny-slider.css"
          rel="stylesheet"
        />
        <link
          href="/assets/libs/_mdi/font/css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/assets/css/tailwind.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
