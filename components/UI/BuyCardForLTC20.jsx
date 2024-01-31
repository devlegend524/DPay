import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { addressFormat } from "@/utils";
import LTCBuyModal from "../trade/LTCBuyModal";

export default function BuyCardForLTC20({
  inscription,
  price,
  utxos,
  sortedUtxos,
  dummyUTXOs,
  refreshUTXOs,
  selectUtxos,
  slug,
}) {
  const router = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);

  const goToDetails = (id) => {
    if (id) {
      router.push(`/inscription/${id}`);
    }
  };

  return (
    <>
      <div
        className="in-card"
        onClick={() => goToDetails(inscription?.data?.inscriptionId)}
      >
        <div className="in-content p-3 h-fit">
          <div className="text-sm flex flex-col items-center justify-center h-[92px]">
            <p className="text-center font-semibold">
              {inscription.content} {inscription.tag}
            </p>
            <p className="text-center">
              {(
                Number(inscription.price) / Number(inscription.content)
              ).toFixed(2)}
              /LTC
            </p>
            <p className="text-center">
              $
              {(
                (Number(inscription.price) / Number(inscription.content)) *
                price
              ).toFixed(2)}
              /LTC
            </p>
          </div>
        </div>

        <hr className="mb-2" />

        <div className="flex justify-between gap-1 text-[12px]">
          <p>seller:</p>
          <p>{addressFormat(inscription.seller, 6)}</p>
        </div>
        <div className="flex justify-between gap-1 mb-2 text-[12px]">
          <p>Price:</p>
          <p>
            {inscription?.price.toFixed(3)}{" "}
            <span className="text-gray-300">
              ~$ {(inscription?.price * price).toFixed(3)}
            </span>
          </p>
        </div>

        <button
          className="main_btn py-1 mt-1 rounded-md disabled:bg-primary-dark/10  w-full"
          onClick={(e) => {
            e.stopPropagation(); // Prevent event bubbling
            setIsOpen(true);
          }}
        >
          Buy
        </button>
      </div>

      <LTCBuyModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        list={inscription}
        utxos={utxos}
        sortedUtxos={sortedUtxos}
        dummyUTXOs={dummyUTXOs}
        refreshUTXOs={refreshUTXOs}
        selectUtxos={selectUtxos}
        tag={slug}
      />
    </>
  );
}
