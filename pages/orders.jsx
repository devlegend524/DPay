import React, { useEffect } from "react";
import { useState } from "react";
import { onValue, ref, query, orderByChild, equalTo } from "firebase/database";
import { db } from "@/services/firebase";
import { addressFormat } from "@/utils";
import { useRouter } from "next/router";
import Layout from "@/components/sections/Layout";
import { useContext } from "react";
import { WalletContext } from "@/context/wallet";
import Head from "next/head";

export default function Orders() {
  const router = useRouter();
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const [orders, setOrders] = useState();
  const [fetchingData, setFetchingData] = useState(true);

  const goToPayment = (id) => {
    router.push("/order/" + id);
  };

  const test = async () => {
    const res = await fetch("/api/activity/route", {
      method: "POST",
      body: JSON.stringify({
        content: "",
        date: 1705646413592,
        inscriptionId:
          "317b03d49d70b0c86f9b2b485f4cf4f5af9388c60d50a34d2ce8c4e5bb3d5100i0",
        price: "0.003",
        tag: "others",
        tx: "c7d8c24febd6f55f6815123a38f9f34666e342fb0401b609599d13e7f6d3b31a",
        type: "Buy",
      }),
    });
    const resJson = await res.json();
    console.log(resJson);
  };

  useEffect(() => {
    if (address) {
      setFetchingData(true);
      const dbQuery = query(
        ref(db, "orders"),
        orderByChild("receiveAddress"),
        equalTo(address)
      );

      onValue(dbQuery, async (snapshot) => {
        const exist = snapshot.val();
        if (exist) {
          setOrders(exist);
        }
        setFetchingData(false);
      });
    } else {
      setFetchingData(false);
    }
  }, [address]);

  return (
    <Layout>
      <Head>
        <title>Dpay - Orders</title>
        <meta
          name="description"
          content="Dpay - Orders history for inscribe"
        />
      </Head>

      {/* <button onClick={test}>test</button> */}

      <p className="my-16 text-center text-3xl font-semibold">My orders</p>

      <div className="w-full max-w-[700px] max-h-[1200px] rounded-lg shadow-lg shadow-black/30 mt-6">
        <div className="grid grid-cols-12 px-3 py-2 bg-primary-dark/20  rounded-t-lg">
          <div className="col-span-6">Order ID</div>
          <div className="col-span-3">Status</div>
          <div className="col-span-3">Date</div>
        </div>

        {orders && !fetchingData ? (
          <div className="bg-primary-dark/10 rounded-b-lg px-1 py-1">
            {Object.keys(orders)
              .reverse()
              .map((key, index) => {
                return (
                  <div
                    key={index}
                    className="grid grid-cols-12 px-3 mb-1.5 hover:bg-primary-dark/30  bg-primary-dark/20  cursor-pointer items-center gap-2 py-1"
                    onClick={() => goToPayment(orders[key].orderId)}
                  >
                    <div key={index + "id"} className="my-1 col-span-6 text-sm">
                      {addressFormat(orders[key].orderId, 10)}
                    </div>
                    <div key={index + "status"} className="col-span-3">
                      {orders[key]?.paid == true ? (
                        <>
                          <span className="text-sm text-green-500">Paid</span>
                        </>
                      ) : (
                        <span className="text-sm text-red-500">No Action</span>
                      )}
                    </div>
                    <div key={index + "Date"} className="col-span-3 text-sm">
                      {new Date(
                        orders[key]?.charge?.created_at * 1000
                      ).toDateString()}
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <>
            {fetchingData ? (
              <div className="col-span-12 text-center py-3 hover:bg-primary-dark/10 bg-primary-light/10">
                Fetching order records...
              </div>
            ) : (
              <div className="col-span-12 text-center py-3 hover:bg-primary-dark/10 bg-primary-light/10">
                No Order Records are Founded.
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
