import React, { useState } from "react";
import { FaCopy, FaEye } from "react-icons/fa";
import { copyToClipboard } from "@/utils";
import { ImCheckmark } from "react-icons/im";

export default function Banner({ address }) {
  const [copied, setCopied] = useState(false);

  const copiedf = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
      <div className="rounded-lg p-4 my-8 banner flex justify-between flex-wrap gap-2">
        <div className="flex flex-wrap gap-3 w-fit">
          <img src="/avatar.png" alt="" className="mx-auto rounded-full h-[130px] w-[130px]" />
          <div className="my-auto">
            <h1 className="text-2xl font-semibold">My Wallet</h1>
            <div
              className="flex gap-2 cursor-pointer"
              onClick={() => {
                copyToClipboard(address);
                copiedf();
              }}
            >
              <p className="text-sm">{address}</p>
              {copied ? (
                <ImCheckmark className=" text-green-400" />
              ) : (
                <FaCopy />
              )}
            </div>
          </div>
        </div>

        <div className="my-auto ml-auto">
          <a
            href={`https://dogechain.info/address/${address}`}
            target="_blank"
            className="flex gap-1 items-center"
          >
            <FaEye />
            View Transactions
          </a>
        </div>
      </div>
  );
}
