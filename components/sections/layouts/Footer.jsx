import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <div className="absolute bottom-0 left-0 text-gray-800 dark:text-gray-200 w-full bg-gray-300 dark:bg-slate-800 border-t dark:border-gray-600 border-gray-300">
      <footer className="relative container-fluid">
        <div className="py-[30px] px-0">
          <div className="px-3 text-center">
            <div className="grid md:grid-cols-2 items-center gap-6">
              <div className="md:text-start text-center">
                <div className="mb-0 flex gap-1">
                  © 2024 DPAY. Design with{" "}
                  <i className="mdi mdi-heart text-red-600"></i> by{" "}
                  <a
                    href="https://t.me/genius021120"
                    target="_blank"
                    className="text-reset"
                  >
                    {" "}
                    Austin
                  </a>
                  .
                </div>
              </div>

              <ul className="list-none md:text-end text-center gap-1 flex justify-end">
                {/* <li className="inline">
                  <a
                    href="#"
                    target="_blank"
                    className="btn btn-icon btn-sm border dark:border-gray-300 border-gray-600 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"
                  >
                    <CiYoutube className="align-middle dark:text-white text-black" />
                  </a>
                </li> */}
                <li className="inline">
                  <a
                    href="https://twitter.com/Dogepay_DRC20 X"
                    target="_blank"
                    className="btn btn-icon btn-sm border dark:border-gray-300 border-gray-600 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"
                  >
                    <FaXTwitter className="align-middle dark:text-white text-black" />
                  </a>
                </li>
                {/* <li className="inline">
                  <a
                    href="/"
                    target="_blank"
                    className="btn btn-icon btn-sm border dark:border-gray-300 border-gray-600 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"
                  >
                    <SiInstagram className="align-middle dark:text-white text-black" />
                  </a>
                </li> */}

                <li className="inline">
                  <a
                    href="https://discord.com/invite/VaRe94HWGy"
                    target="_blank"
                    className="btn btn-icon btn-sm border dark:border-gray-300 border-gray-600 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"
                  >
                    <FaTelegramPlane className="align-middle dark:text-white text-black" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://discord.com/invite/VaRe94HWGy"
                    target="_blank"
                    className="btn btn-icon btn-sm border dark:border-gray-300 border-gray-600 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"
                  >
                    <FaDiscord className="align-middle dark:text-white text-black" />
                  </a>
                </li>
                {/* <li className="inline">
                  <a
                    href="/"
                    target="_blank"
                    className="btn btn-icon btn-sm border dark:border-gray-300 border-gray-600 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"
                  >
                    <CiLinkedin className="align-middle dark:text-white text-black" />
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="/"
                    target="_blank"
                    className="btn btn-icon btn-sm border dark:border-gray-300 border-gray-600 rounded-md hover:border-red-600 dark:hover:border-red-600 hover:bg-red-600 dark:hover:bg-red-600"
                  >
                    <FaFacebook className="align-middle dark:text-white text-black" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
