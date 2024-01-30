"use client"
import React from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaWallet } from "react-icons/fa6";

export default function Navbar() {
  const toggleMenu = (event) => {
    event.preventDefault();
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation')
    if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
    } else {
        isOpen.style.display = "block";
    }
  }

  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container flex justify-around">
        <Link className="logo ps-0" href="/">
          <img
            src="/assets/images/logo-icon-28.png"
            className="inline-block sm:hidden"
            alt=""
          />
          <div className="sm:block hidden">
            <img
              src="/assets/images/logo-dark.png"
              className="inline-block dark:hidden h-7"
              alt=""
            />
            <img
              src="/assets/images/logo-white.png"
              className="hidden dark:inline-block h-7"
              alt=""
            />
          </div>
        </Link>
        
        <div id="navigation">
          <ul className="navigation-menu nav-light justify-end">
            <li className="has-submenu parent-parent-menu-item">
              <a href="/">Explore</a>
              <span className="menu-arrow"></span>
              
            </li>

            <li>
              <Link href="/wallet" className="sub-menu-item">
                Wallet
              </Link>
            </li>

            <li className="has-submenu parent-parent-menu-item">
              <a href="/">Pages</a>
              <span className="menu-arrow"></span>
              
            </li>

            <li>
              <Link href="/collections" className="sub-menu-item">
                Collections
              </Link>
            </li>
          </ul>
        </div>
        <ul className="buy-button list-none mb-0">
          <li className="inline-block mb-0">
            <div className="form-icon relative">
              <CiSearch className="text-lg absolute top-1/2 -translate-y-1/2 start-3"/>
              <input
                type="text"
                className="form-input sm:w-44 w-28 ps-10 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 bg-white"
                name="s"
                id="searchItem"
                placeholder="Search..."
              />
            </div>
          </li>

          <li className="inline-block ps-1 mb-0 cursor-pointer">
            <a
              id="connectWallet"
              className="btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"
            >
              <FaWallet />
            </a>
          </li>

          <li className="dropdown inline-block relative ps-1">
            <button
              data-dropdown-toggle="dropdown"
              className="dropdown-toggle btn btn-icon rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white inline-flex"
              type="button"
            >
              <img
                src="/assets/images/client/05.jpg"
                className="rounded-full"
                alt=""
              />
            </button>

            <div
              className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden"
              onClick={(e) => {e.stopPropagation();}}
            >

              <div className="relative">
                <div className="py-8 bg-gradient-to-tr from-violet-600 to-red-600"></div>
                <div className="absolute px-4 -bottom-7 start-0">
                  <div className="flex items-end">
                    <img
                      src="/assets/images/client/05.jpg"
                      className="rounded-full w-10 h-w-10 shadow dark:shadow-gray-700"
                      alt=""
                    />

                    <span className="font-semibold text-[15px] ms-1">
                      Jenny Jimenez
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 px-4">
                <h5 className="font-semibold text-[15px]">Wallet:</h5>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-slate-400">
                    qhut0...hfteh45
                  </span>
                  <a href="/" className="text-violet-600">
                    <i className="uil uil-copy"></i>
                  </a>
                </div>
              </div>

              <div className="mt-4 px-4">
                <h5 className="text-[15px]">
                  Balance:{" "}
                  <span className="text-violet-600 font-semibold">
                    0.00045ETH
                  </span>
                </h5>
              </div>

              <ul className="py-2 text-start">
                <li>
                  <a
                    href="/"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
                  >
                    <i className="uil uil-user text-[16px] align-middle me-1"></i>{" "}
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
                  >
                    <i className="uil uil-setting text-[16px] align-middle me-1"></i>{" "}
                    Settings
                  </a>
                </li>
                <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                <li>
                  <a
                    href="/"
                    className="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"
                  >
                    <i className="uil uil-sign-out-alt text-[16px] align-middle me-1"></i>{" "}
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </nav>
  );
}
