import React from "react";
import { RiGlobalFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { useState } from "react";
import {
  equalTo,
  onValue,
  orderByChild,
  query,
  ref,
  limitToLast,
} from "firebase/database";
import { db } from "@/services/firebase";
import NumberFormat from "@/components/UI/NumberFormatter";

export default function NFTCollectionBanner({
  collection,
  tag,
  isLTC20,
  setLastSales,
}) {
  const [status, setStatus] = useState(0);
  const [volume24, setVolume24] = useState(0);
  const [volumeh, setVolumeh] = useState(0);
  const [trade24, setTrades24] = useState(0);

  const empyImage = (e) => {
    e.target.src = "/empty.png";
  };

  useState(() => {
    async function fetchStatus() {
      const dbQuery = query(ref(db, "status/" + tag));
      onValue(dbQuery, async (snapshot) => {
        const exist = snapshot.val();
        if (exist) {
          const data = exist[Object.keys(exist)[0]];
          setStatus(data);
        }
      });

      try {
        const dbTradesQuery = query(
          ref(db, "activities"),
          orderByChild("tag"),
          equalTo(tag),
          limitToLast(100)
        );

        onValue(dbTradesQuery, async (snapshot) => {
          const exist = snapshot.val();
          if (exist) {
            let TVL = 0;
            let trades = 0;
            let lastSales = [];
            Object.keys(exist).map((index) => {
              // if (exist[index].date > Date.now() - 86400000)
              TVL += Number(exist[index].price);
              trades += 1;
              lastSales.push(exist[index]);
            });
            const sortedSales = lastSales.sort((a, b) => b.price - a.price);
            setLastSales(sortedSales.slice(0, 12));
            setTrades24(trades);
            setVolume24(TVL);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    if (tag) {
      fetchStatus();
    }
  }, [tag]);

  return (
    <div
      className="text-4xl py-4 grid grid-cols-1 sm:grid-cols-12 w-full gap-3 items-center"
      key={tag + "NFT collections"}
    >
      {collection?.inscription_icon ===
      "9278bd914fdc07f866fc4b4e402c87a0aa04666cfc9f0c9dde6ead58b17abcf7i0" ? (
        <img
          src={`/litecoin.png`}
          className="rounded-md w-full col-span-12 sm:col-span-2 mx-auto max-w-[150px]"
          alt="logo"
          onError={(e) => empyImage(e)}
        />
      ) : (
        <img
          src={`${
            isLTC20
              ? collection?.logo
              : `https://ordinalslite.com/content/${collection?.inscription_icon}`
          }`}
          className="rounded-md w-full col-span-12 sm:col-span-2 mx-auto max-w-[150px]"
          alt="logo"
          onError={(e) => empyImage(e)}
        />
      )}
      <div className="col-span-12 sm:col-span-10">
        <div className="flex gap-2 divide-x divide-gray-400/50">
          <p className="font-semibold text-xl">{collection?.name}</p>
          <div className="flex gap-2">
            <div className="flex gap-2">
              <a
                className={`p-1.5 rounded-full main_btn ml-2 ${
                  !collection?.website_link &&
                  "bg-gray-600/80 cursor-not-allowed"
                }`}
                target="_blank"
                href={collection?.website_link}
                onClick={(e) => {
                  e.stopPropagation();
                  // Additional button event logic
                }}
              >
                <RiGlobalFill className="text-sm" />
              </a>
              <a
                className={`p-1.5 rounded-full main_btn ${
                  !collection?.twitter_link &&
                  "bg-gray-600/80 cursor-not-allowed"
                }`}
                target="_blank"
                href={collection?.twitter_link}
                onClick={(e) => {
                  e.stopPropagation();
                  // Additional button event logic
                }}
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                className={`p-1.5 rounded-full main_btn ${
                  !collection?.discord_link &&
                  "bg-gray-600/80 cursor-not-allowed"
                }`}
                target="_blank"
                href={collection?.discord_link}
                onClick={(e) => {
                  e.stopPropagation();
                  // Additional button event logic
                }}
              >
                <BsDiscord className="text-sm" />
              </a>
            </div>
          </div>
        </div>
        <p className="text-sm w-full sm:max-w-[900px] my-3 ">
          {collection?.description}
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-sm">
          <div className="flex gap-1">
            <p className="text-gray-300">Averge price:</p>
            <p className="text-white font-semibold">
              {status ? (
                <NumberFormat number={status?.floor?.toFixed(2)} />
              ) : (
                "0.00"
              )}{" "}
              LTC
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-300">Total volume:</p>
            <p className="text-white font-semibold">
              {status ? <NumberFormat number={status?.TVL?.toFixed(2)} /> : 0.0}{" "}
              LTC
            </p>
          </div>{" "}
          <div className="flex gap-1">
            <p className="text-gray-300">Volume (24h):</p>
            <p className="text-white font-semibold">
              {volume24 ? (
                <NumberFormat number={volume24?.toFixed(2)} />
              ) : (
                "0.00"
              )}{" "}
              LTC
            </p>
          </div>{" "}
          <div className="flex gap-1">
            <p className="text-gray-300">Trades (24h):</p>
            <p className="text-white font-semibold">
              {trade24 ? <NumberFormat number={trade24} /> : 0}
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-300">Listed:</p>
            <p className="text-white font-semibold">
              {status?.listed ? <NumberFormat number={status?.listed} /> : 0}
            </p>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-300">Supply:</p>
            <p className="text-white font-semibold">
              {isLTC20 ? collection?.totalSupply : collection?.supply}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
