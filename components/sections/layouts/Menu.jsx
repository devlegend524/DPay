/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/UI/Navigation";
import WalletConnect from "@/components/sections/wallet/WalletConnect";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";

export default function MenuBar() {
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    });
  }, []);

  return (
    <div
      className={`flex justify-between items-center fixed top-0 left-1/2 -translate-x-1/2 border-b sm:px-6 px-3 z-50  w-full dark:border-[#ffffff1a] border-gray-300 duration-200 ${
        scrollHeader
          ? "bg-slate-900/10 backdrop-blur-2xl py-0.5 shadow shadow-black"
          : "bg-transparent py-1"
      }`}
    >
      <Link className="logo ps-0" href="/">
        <img
          src="/logo.png"
          className="inline-block w-[55px] h-[55px] my-2"
          alt=""
        />
      </Link>

      <div className="flex gap-3 items-center">
        <Navigation />

        <li className="sm:inline-block hidden mb-0">
          <div className="form-icon relative">
            <CiSearch className="text-lg absolute top-1/2 -translate-y-1/2 start-3" />
            <input
              type="text"
              className="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0 bg-white text-sm"
              name="s"
              id="searchItem"
              placeholder="Search for Address"
            />
          </div>
        </li>

        <WalletConnect />
      </div>
    </div>
  );
}
