import React from "react";
import Head from "next/head";
import openApi from "@/services/openAPI";
import Layout from "@/components/sections/layouts/Layout";
import Link from "next/link";
import Tabs from "@/components/UI/Tabs";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { WalletContext } from "@/context/wallet";
import { useMemo } from "react";
import { FaArrowLeft, FaList } from "react-icons/fa";
import { ImSpinner10 } from "react-icons/im";
import ReactPaginate from "react-paginate";
import { toast } from "react-hot-toast";
import Ltc20tokenCard from "../../../components/UI/ltc20tokenCard";
import { LuPencilLine } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import Ltc20SummaryBar from "../../../components/UI/Ltc20SummaryBar";
import LTCBulkListModal from "../../../components/trade/LTCBulkListModal";
import InscribeModal from "../../../components/trade/Inscribe";

export default function LTC20Token() {
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const router = useRouter();

  const [isOpenInscribe, setIsOpenInscribe] = useState(false);

  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [bulkSelect, setBulkSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [ticker, setTicker] = useState();
  const [fetchingData, setFetchingData] = useState(true);
  const [tokenSummary, setTokenSummary] = useState({
    tokenBalance: {
      ticker,
      overallBalance: "",
      availableBalance: "",
      transferableBalance: "",
      availableBalanceSafe: "",
      availableBalanceUnSafe: "",
    },
    tokenInfo: {
      totalSupply: "",
      totalMinted: "",
    },
    historyList: [],
    transferableList: [],
  });

  const [transferableList, setTransferableList] = useState();
  const [total, setTotal] = useState();
  const [pageSize, setPageSize] = useState(12);
  const [offset, setOffset] = useState(0);

  const outOfMint =
    tokenSummary.tokenInfo.totalMinted == tokenSummary.tokenInfo.totalSupply;

  const shouldShowSafe =
    tokenSummary.tokenBalance.availableBalanceSafe !==
    tokenSummary.tokenBalance.availableBalance;

  const balance = useMemo(() => {
    if (!tokenSummary) {
      return "--";
    }
    return tokenSummary?.tokenBalance.overallBalance;
  }, [tokenSummary]);

  const cancelBlocks = () => {
    setSelectedBlocks([]);
    setBulkSelect(false);
  };

  const handlePageClick = (e) => {
    setOffset(e.selected);
  };

  const getTokenSummary = async (address, ticker) => {
    try {
      const res = await openApi.getAddressTokenSummary(address, ticker);
      setTokenSummary(res);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      setFetchingData(true);
      const { list, total } = await openApi.getTokenTransferableList(
        address,
        ticker,
        offset + 1,
        pageSize
      );
      setTransferableList(list);
      setTotal(total);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setFetchingData(false);
    }
  };

  const BulkList = () => {
    if (selectedBlocks.length <= 0) {
      toast.error("Please select inscriptions");
      return;
    }
    setBulkSelect(false);
    setIsOpen(true);
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      if (router?.query?.ticker) {
        setTicker(router?.query?.ticker);
      }
    }
  }, [router.isReady]);

  useEffect(() => {
    if (ticker && address) {
      getTokenSummary(address, ticker);
    }
  }, [ticker, address]);

  useEffect(() => {
    if (ticker && address) {
      fetchData();
    }
  }, [offset, ticker, address]);

  return (
    <Layout>
      <Head>
        <title>DPAY - LTC20 Token</title>
        <meta
          name="description"
          content="DPAY - wallet history and inscriptions"
        />
      </Head>

      <h1 className="text-3xl font-semibold my-16 text-center">My Wallet</h1>

      {/* {!bulkSelect ? (
        <button
          className="main_btn px-2 py-1 rounded-md sm:hidden inline-block mb-1"
          onClick={() => setBulkSelect(true)}
        >
          Bulk Select
        </button>
      ) : (
        <button
          className=" bg-red-500 main_btn px-2 py-1 rounded-md gap-2 items-center sm:hidden flex  mb-1"
          onClick={() => cancelBlocks()}
        >
          <MdCancel /> Cancel
        </button>
      )} */}

      <div className="flex justify-center sm:justify-between w-full">
        <Tabs type={"ltc20"} loading={false} />

        {/* {!bulkSelect ? (
          <button
            className="main_btn px-2 py-1 rounded-md hidden sm:inline-block"
            onClick={() => setBulkSelect(true)}
          >
            Bulk Select
          </button>
        ) : (
          <button
            className=" bg-red-500 main_btn px-2 py-1 rounded-md gap-2  items-center hidden sm:flex"
            onClick={() => cancelBlocks()}
          >
            <MdCancel /> Cancel
          </button>
        )} */}
      </div>

      <div className="flex justify-between w-full gap-2 items-center">
        <Link
          href={"/wallet/ltc20"}
          className="px-4 py-2 main_btn rounded-md mb-3 mt-4"
        >
          <FaArrowLeft className="text-xl" />
        </Link>

        <button
          className="main_btn px-3 py-2 rounded-md flex gap-2 items-center justify-center"
          onClick={() => setIsOpenInscribe(true)}
        >
          <LuPencilLine /> Inscribe
        </button>
      </div>

      <Ltc20SummaryBar tokenSummary={tokenSummary} />

      {fetchingData ? (
        <div className="my-auto flex  justify-center gap-2 items-center">
          <ImSpinner10 className="text-3xl animate-spin" />
        </div>
      ) : (
        <>
          {transferableList?.length > 0 ? (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                {transferableList.map((item, index) => {
                  return (
                    <Ltc20tokenCard
                      data={item}
                      key={index + offset}
                      ticker={ticker}
                      bulkSelect={bulkSelect}
                      setSelectedBlocks={setSelectedBlocks}
                      selectedBlocks={selectedBlocks}
                      cancelBlocks={cancelBlocks}
                    />
                  );
                })}
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={Math.ceil(total / 12)}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </>
          ) : (
            <>
              <div className="my-auto flex  justify-center gap-2 items-center text-xl font-semiboldd">
                No {ticker} Transferable Balance
              </div>
            </>
          )}
        </>
      )}

      <div
        className={`fixed z-50  left-1/2 border border-transparent ${
          !bulkSelect ? "-bottom-64 border-[#ffffff1a]" : "bottom-6 sm:bottom-6"
        }   -translate-x-1/2 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-2xl duration-200 flex items-center gap-3 flex-wrap shadow-black shadow-lg`}
      >
        <p>{selectedBlocks.length} inscriptions selected.</p>
        <div className="flex gap-3 sm:justify-end justify-center">
          <button
            className="main_btn py-2 px-4 rounded-lg flex items-center gap-2 bg-transparent"
            onClick={() => cancelBlocks()}
          >
            <MdCancel /> Cancel
          </button>
          <button
            className="main_btn py-2 px-4 rounded-lg flex items-center gap-2 bg-sky-600"
            onClick={BulkList}
          >
            List <FaList />
          </button>
        </div>
      </div>

      <LTCBulkListModal
        modalIsOpen={isOpen}
        setIsOpen={setIsOpen}
        tag={ticker}
        blocks={selectedBlocks}
        setSelectedBlocks={setSelectedBlocks}
        cancelBlocks={cancelBlocks}
      />

      <InscribeModal
        modalIsOpen={isOpenInscribe}
        setIsOpen={setIsOpenInscribe}
        ticker={ticker}
        tokenSummary={tokenSummary}
      />
    </Layout>
  );
}
