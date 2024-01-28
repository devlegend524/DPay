import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import "@/styles/globals.css";
import Script from "next/script";
import { LuArrowBigUp } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" dir="ltr">
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

      <body className="font-urbanist bg-white text-base text-black dark:text-white dark:bg-slate-900">
        <Navbar />
        {children}
        <a
      href="#"
      onClick="topFunction()"
      id="back-to-top"
      className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-violet-600 align-middle text-white leading-9"
      ><LuArrowBigUp className=" text-center align-middle mt-2 ml-2" /></a>

    <div className="fixed top-[25%] -left-2 z-50 hidden sm:block">
      <span className="relative inline-block rotate-90">
        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
        <label
          className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
          for="chk"
        >
          <FaMoon className="text-[20px] text-gray-500"/>
          <MdOutlineWbSunny className="text-[20px] text-gray-500"/>
          {/* <i className="uil uil-moon text-[20px] text-yellow-500"></i>
          <i className="uil uil-sun text-[20px] text-yellow-500"></i> */}
          <span
            className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"
          ></span>
        </label>
      </span>
    </div>

    <div className="fixed top-[40%] -left-3 z-50">
      <a href="index-nine.html" id="switchRtl">
        <span
          className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden"
          >LTR</span
        >
        <span
          className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden"
          >RTL</span
        >
      </a>
    </div>
        <Footer />

        <Script src="/assets/libs/tiny-slider/min/tiny-slider.js"></Script>
        <Script src="/assets/libs/feather-icons/feather.min.js"></Script>
        <Script src="/assets/js/plugins.init.js"></Script>
        <Script src="/assets/js/app.js"></Script>
      </body>
    </html>
  );
}
