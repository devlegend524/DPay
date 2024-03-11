import Layout from "@/components/sections/layouts/Layout";
import { WalletContext } from "@/context/wallet";
import { useContext, useState } from "react";
import Tabs from "@/components/UI/Tabs";
import Head from "next/head";
import Banner from "@/components/sections/wallet/Banner";
import ReactPaginate from "react-paginate";
import { ImSpinner10 } from "react-icons/im";
import openApi from "@/services/openAPI";
import { useEffect } from "react";
import isMobile from "is-mobile";

export default function WalletOthers() {
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const [type, setType] = useState("dorginals");

  // pagination
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(48);
  const [fetchingData, setFetchingData] = useState(true);
  const [inscriptions, setInscriptions] = useState([]);
  const [tokens, setTokens] = useState([]);

  const handlePageClick = (e) => {
    setOffset(e.selected * pageSize);
  };

  const getDoginals = async (offset, pageSize, address) => {
    setFetchingData(true);
    try {
      const res = await openApi.getAddressInscriptions(
        address,
        offset,
        pageSize
      );
      console.log(res);
      if (res.total > 0) {
        setTotal(res.total);
        setInscriptions(res.list);
      }

      setFetchingData(false);
    } catch (error) {
      setFetchingData(false);
    }
  };

  const getLtc20 = async (offset, pageSize, address) => {
    setFetchingData(true);
    try {
      const res = await openApi.getAddressTokenBalances(
        address,
        offset,
        pageSize
      );

      if (res.total > 0) {
        setTotal(total);
        setTokens(res.list);
      }

      setFetchingData(false);
    } catch (error) {
      setFetchingData(false);
    }
  };

  // pagination

  useEffect(() => {
    if (address) {
      if (type === "dorginals") {
        getDoginals(offset, pageSize, address);
      } else if (type === "drc20") {
        getLtc20(offset, pageSize, address);
      } else {
        setFetchingData(false);
        setTotal(0);
      }
    } else {
      setFetchingData(false);
      setTotal(0);
    }
  }, [type, address, offset]);

  useEffect(() => {
    if (isMobile()) {
      setPageSize(12);
    }
  }, [isMobile()]);

  const renderIterms = (type) => {
    if (type === "dorginals") {
      return (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {inscriptions.map((iterm) => {
              return (
                <div className="in-card" key={iterm.inscriptionNumber}>
                  <div className="in-content">
                    <iframe
                      src={iterm.content}
                      frameBorder="0"
                      key={iterm.inscriptionNumber}
                      className="block bg-black rounded-md w-full h-full"
                    ></iframe>
                    <button className="focus:outline-none in-transfer">
                      Transfer
                    </button>
                  </div>
                  <p className="text-center text-sm mt-2">
                    #{iterm.inscriptionNumber}
                  </p>
                  <button className="mt-2 w-full rounded-md main_btn py-1.5">
                    List
                  </button>
                </div>
              );
            })}
          </div>
        </>
      );
    } else if (type === "drc20") {
      return (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {tokens.map((item, key) => {
              return (
                <div className="in-card" key={item.ticker + key}>
                  <p className="text-lg font-semibold text-sky-500">
                    {item.ticker}
                  </p>
                  <div className="flex gap-1 justify-between text-sm">
                    <p className="dark:text-gray-200 text-gray-800">
                      Transferable:
                    </p>
                    <p>{item.transferableBalance}</p>
                  </div>
                  <div className="flex gap-1 justify-between text-sm">
                    <p className="dark:text-gray-200 text-gray-800">
                      Available:
                    </p>
                    <p>{item.availableBalance}</p>
                  </div>
                  <hr className="cs-border" />
                  <div className="flex gap-1 justify-between text-sm">
                    <p className="dark:text-gray-200 text-gray-800">overall</p>
                    <p>{item.overallBalance}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    } else if (type === "lists") {
      return (
        <div className="flex justify-center items-center h-[200px]">
          Coming Soon.
        </div>
      );
    } else if (type === "history") {
      <div className="flex justify-center items-center h-[200px]">
        Coming Soon.
      </div>;
    }
  };

  return (
    <Layout>
      <Head>
        <title>DPAY - Wallet</title>
        <meta
          name="description"
          content="DPAY - wallet history and inscriptions"
        />
      </Head>

      <div className="container-fluid mx-auto max-w-[1600px] w-full">
        <Banner address={address} />

        <Tabs setType={setType} type={type} />

        {fetchingData ? (
          <>
            <div className="flex justify-center items-center h-[200px]">
              <ImSpinner10 className="text-3xl animate-spin" />
            </div>
          </>
        ) : (
          <>
            {total > 0 ? (
              <>
                <div className="my-8">{renderIterms(type)}</div>

                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  pageCount={total / pageSize}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  className="pagination"
                />
              </>
            ) : (
              <>
                <div className="flex justify-center items-center h-[200px]">
                  No Data. {":("}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
