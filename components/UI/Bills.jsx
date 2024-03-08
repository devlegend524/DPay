import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { useInscribe, useWallet } from "@/store/hooks";

export default function Bills({
  textData,
  feeAmount = 3000,
  netWorkFee = 100000000,
  setTotalFee,
}) {
  const { selectedBlock } = useInscribe();
  const { price } = useWallet();

  const length = textData.split("\n").length;
  const inscribeFee = length * 10000;
  const serviceFee = Number((length * (510000 + 10 ** 8 / price)).toFixed(0));
  const sizeFee = length * 19;
  const totalFee = Number((inscribeFee + serviceFee + sizeFee).toFixed(0));
  setTotalFee(totalFee);

  return (
    <>
      <hr className="w-[80%] mt-3 mx-auto" />
      <div className="pt-2">
        <div className="grid grid-cols-2 font-light py-1 text-sm">
          <p className="text-right pr-2 ">Shibes In Inscription:</p>
          <p className="text-left pl-2 ">
            {selectedBlock.length} * 10000 shibes
            <span className="text-[11px] text-gray-300 ">
              &nbsp; ~$&nbsp;
              {((inscribeFee / 10 ** 8) * price).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 font-light py-1  text-sm">
          <p className="text-right pr-2">Service Fee:</p>
          <p className="text-left pl-2">
            {serviceFee} shibes
            <span className=" text-[11px] text-gray-300 ">
              &nbsp;~$ {((serviceFee / 10 ** 8) * price).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 font-light py-1  text-sm">
          <p className="text-right pr-2">Size Fee:</p>
          <p className="text-left pl-2">
            {sizeFee} shibes
            <span className=" text-[11px] text-gray-300 ">
              &nbsp;~$ {((sizeFee / 10 ** 8) * price).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 font-light py-1  text-sm">
          <p className="text-right pr-2">=</p>
          <p className="text-left pl-2">
            <span className="line-through"> {totalFee}</span> shibes
            <span className=" text-[11px] text-gray-300 ">
              &nbsp;~$ {((totalFee / 10 ** 8) * price).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 font-light py-1 mt-3  text-sm">
          <p className="text-right pr-2">Total Fee:</p>
          <p className="text-left pl-2">
            {totalFee - (totalFee % 1000)} shibes
            <span className=" text-[11px] text-gray-300 ">
              &nbsp;~$
              {(((totalFee - (totalFee % 1000)) / 10 ** 8) * price).toFixed(2)}
            </span>
          </p>
        </div>
      </div>

      <div className="text-sm font-extralight flex justify-center w-full mt-3 text-yellow-500">
        <p className="flex gap-1 text-center">
          <AiFillWarning className="text-lg ml-auto" />
          Please note the inscribing transaction delivers the inscription to the
          receiving address directly.
        </p>
      </div>

      <div className="text-sm font-extralight flex justify-center w-full mt-3 text-red-500">
        <p className="flex gap-1 text-center">
          <AiFillWarning className="text-lg" />
          We dont verify if these dpays are minted or not.
        </p>
      </div>
    </>
  );
}
