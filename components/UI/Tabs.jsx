import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Tabs({ type, setType }) {
  return (
    <div className="gap-2 sm:flex sm:justify-between w-full border-b pb-2 dark:border-slate-700 border-gray-300">
      <div className="form-icon relative flex sm:hidden w-full mb-3">
        <CiSearch className="text-lg absolute top-1/2 -translate-y-1/2 start-3" />
        <input
          type="text"
          className="form-input w-full sm:w-44 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0 bg-white text-sm"
          name="s"
          id="searchItem"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center w-full sm:w-none gap-1">
        <button
          className={`py-2 sm:w-24 h-full w-full focus:outline-none text-center cursor-pointer text-sm  rounded-md ${
            type == "dorginals" ? "main_btn" : ""
          }`}
          onClick={() => setType("dorginals")}
        >
          Dorginals
        </button>
        <button
          className={`py-2 sm:w-24 h-full w-full focus:outline-none text-center cursor-pointer text-sm  rounded-md ${
            type == "drc20" ? "main_btn" : ""
          }`}
          onClick={() => setType("drc20")}
        >
          DRC-20
        </button>
        <button
          className={`py-2 sm:w-24 h-full w-full focus:outline-none text-center cursor-pointer text-sm  rounded-md ${
            type == "lists" ? "main_btn" : ""
          }`}
          onClick={() => setType("lists")}
        >
          Lists
        </button>
        <button
          className={`py-2 sm:w-24 h-full w-full focus:outline-none text-center cursor-pointer text-sm  rounded-md ${
            type == "history" ? "main_btn" : ""
          }`}
          onClick={() => setType("history")}
        >
          History
        </button>
      </div>

      <div className="form-icon relative hidden sm:inline-block">
        <CiSearch className="text-lg absolute top-1/2 -translate-y-1/2 start-3" />
        <input
          type="text"
          className="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0 bg-white text-sm"
          name="s"
          id="searchItem"
          placeholder="Search"
        />
      </div>
    </div>
  );
}
