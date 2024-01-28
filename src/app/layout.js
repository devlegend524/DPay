import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import "@/styles/globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="/assets/libs/tiny-slider/tiny-slider.css"
          rel="stylesheet"
        />
        {/* <link
          href="/assets/libs/_iconscout/unicons/css/line.css"
          type="text/css"
          rel="stylesheet"
        /> */}
        <link
          href="/assets/libs/_mdi/font/css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="/assets/css/tailwind.min.css" />
      </head>

      <body className="font-urbanist text-base text-black dark:text-white dark:bg-slate-900">
        <Navbar />
        {children}
        <Footer />

        <Script src="/assets/libs/tiny-slider/min/tiny-slider.js"></Script>
        <Script src="/assets/libs/feather-icons/feather.min.js"></Script>
        <Script src="/assets/js/plugins.init.js"></Script>
        <Script src="/assets/js/app.js"></Script>
      </body>
    </html>
  );
}
