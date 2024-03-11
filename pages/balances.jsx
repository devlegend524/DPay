import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/sections/layouts/Layout";
import openApi from "@/services/openAPI";
import ReactPaginate from "react-paginate";
import { CiSearch } from "react-icons/ci";
import { BiLoaderCircle } from "react-icons/bi";
import { useWallet } from "@/store/hooks";

const Balances = () => {
  const { price } = useWallet();
  const [balance, setBalance] = useState(0);
  const [searchKey, setSearchKey] = useState("");
  const [type, setType] = useState("dorginals");

  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(48);
  const [fetchingData, setFetchingData] = useState(false);
  const [inscriptions, setInscriptions] = useState([]);
  const [tokens, setTokens] = useState([]);

  const handlePageClick = (e) => {
    setOffset(e.selected * pageSize);
  };

  const getDoginals = async () => {
    setType("dorginals");
    setFetchingData(true);
    try {
      const res = await openApi.getAddressInscriptions(
        searchKey,
        offset,
        pageSize
      );
      if (res.total > 0) {
        setTotal(res.total);
        setInscriptions(res.list);
      }

      setFetchingData(false);
    } catch (error) {
      setFetchingData(false);
    }
  };

  const getLtc20 = async () => {
    setType("drc20");
    setFetchingData(true);
    try {
      const res = await openApi.getAddressTokenBalances(
        searchKey,
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

  const fetchbalance = async (address) => {
    try {
      if (address) {
        setFetchingData(true);

        const utxos = await openApi.getAddressBalance(address);
        let balance = 0;
        if (utxos.length > 0) {
          utxos.map((utxo) => {
            balance += utxo.satoshis;
          });
        }

        const inscriptions = await openApi.getAddressInscriptions(
          address,
          0,
          20
        );

        const drc20 = await openApi.getAddressTokenBalances(address, 0, 20);
        setTotal(inscriptions.total);
        setInscriptions(inscriptions.list);
        setTokens(drc20.list);
        setBalance(balance);
        setFetchingData(false);
      }
    } catch (error) {
      setFetchingData(false);
      // console.log(error);
    }
  };

  const handleSearchKey = (e) => {
    if (searchKey) {
      fetchbalance(searchKey);
    }
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      fetchbalance(e.target.value);
    }
  };

  const renderIterms = (type) => {
    if (type === "dorginals") {
      return (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 w-full">
            {inscriptions.map((iterm) => {
              return (
                <div className="in-card" key={iterm.inscriptionNumber}>
                  <div className="in-content">
                    <iframe
                      src={iterm.content}
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      className="flex justify-center items-center bg-black rounded-md w-full h-full"
                    ></iframe>
                  </div>
                  <p className="text-center text-sm mt-2">
                    #{iterm.inscriptionNumber}
                  </p>
                </div>
              );
            })}
          </div>
        </>
      );
    } else if (type === "drc20") {
      return (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 w-full">
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
    }
  };

  return (
    <Layout>
      <Head>
        <title>DPAY - Balances</title>
        <meta name="description" content="DPAY - DPAY Balances" />
      </Head>

      <div className="h-full flex flex-col items-center justify-center mt-16 container-fluid mx-auto max-w-[1600px]">
        <h1 className="text-3xl font-bold text-center">
          Uncover DRC20 Tokens and Doginal Balances with Ease
        </h1>

        <div className="dark:text-gray-200 text-slate-800 text-center mb-8 max-w-[600px]">
          $DPAY market has a powerful scanner designed to simplify the search
          for DRC20 tokens and Doginal balances by address.
        </div>

        <div className="mb-8 flex justify-center w-full">
          <div className="form-icon relative w-full max-w-[800px] mx-auto">
            <CiSearch className="text-lg absolute top-1/2 -translate-y-1/2 start-3" />
            <input
              onChange={(e) => setSearchKey(e.target.value)}
              type="text"
              className="form-input w-full ps-10 pr-24 py-2 pl-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-200 focus:border-red-600 dark:border-gray-800 dark:focus:border-red-600 focus:ring-0 bg-white text-sm"
              name="s"
              id="searchItem"
              placeholder="Search drc20 token and doginal balances for address"
              onKeyUp={(e) => handleSearch(e)}
            />
            <button
              className="rounded-3xl main_btn absolute top-1/2 -translate-y-1/2 right-1 py-1 px-3"
              onClick={handleSearchKey}
            >
              Search
            </button>
          </div>
        </div>

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

          <div className="flex justify-between items-center gap-1 w-full">
            <div className="flex justify-center">
              {" "}
              <button
                className={`py-2 sm:w-24 h-full w-full focus:outline-none text-center cursor-pointer text-sm  rounded-md ${
                  type == "dorginals" ? "main_btn" : ""
                }`}
                onClick={() => getDoginals()}
              >
                Doginals
              </button>
              <button
                className={`py-2 sm:w-24 h-full w-full focus:outline-none text-center cursor-pointer text-sm  rounded-md ${
                  type == "drc20" ? "main_btn" : ""
                }`}
                onClick={() => getLtc20()}
              >
                DRC-20
              </button>
            </div>
            <div className="text-sm flex gap-2">
              <span>
                {balance / 10 ** 8 ? (balance / 10 ** 8).toFixed(2) : "0.00"}{" "}
                <span className="text-sm font-bold text-orange-500">DOGE</span>{" "}
              </span>
              <span className="text-sm font-extralight dark:text-gray-200 text-slate-900">
                ~${" "}
                {(balance / 10 ** 8) * price
                  ? ((balance / 10 ** 8) * price).toFixed(2)
                  : "0.00"}
              </span>
            </div>
          </div>
        </div>

        {fetchingData ? (
          <>
            <div className="flex justify-center items-center h-[200px]">
              <BiLoaderCircle className="text-3xl animate-spin" />
            </div>
          </>
        ) : (
          <>
            {total > 0 ? (
              <>
                <div className="my-8 w-full">{renderIterms(type)}</div>

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
};

export default Balances;
