import openApi from "@/services/openAPI";
import Head from "next/head";
import Layout from "@/components/sections/layouts/Layout";
import Tabs from "@/components/UI/Tabs";
import LTC20BalanceCard from "../../components/UI/LTC20BalanceCard";
import ReactPaginate from "react-paginate";
import { useContext, useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useLastBlock } from "@/store/hooks";
import { WalletContext } from "@/context/wallet";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function WalletLTC20() {
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [bulkSelect, setBulkSelect] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { lastBlock } = useLastBlock();

  const [fetchingData, setfetchingData] = useState(true);
  const [tokenList, setTokenList] = useState();
  const [offset, setOffset] = useState(0);

  const handlePageClick = (e) => {
    setOffset(e.selected);
  };

  const getTransferableBalance = async (address) => {
    setfetchingData(true);

    try {
      const data = await openApi.getAddressTokenBalances(address, 0, 1000);
      setfetchingData(false);
      if (data) {
        setTokenList(data);
      }
    } catch (error) {
      setfetchingData(false);
    }
  };

  useEffect(() => {
    if (address) {
      getTransferableBalance(address);
    } else {
      setfetchingData(false);
    }
  }, [address]);

  return (
    <Layout>
      <Head>
        <title>Dpay - Wallet</title>
        <meta
          name="description"
          content="Dpay - wallet history and inscriptions"
        />
      </Head>

      <h1 className="text-3xl font-semibold my-16 text-center">My Wallet</h1>

      <div className="flex justify-center sm:justify-between w-full">
        <Tabs type={"ltc20"} loading={false} />
      </div>

      {fetchingData ? (
        <div className="my-auto flex  justify-center gap-2 items-center">
          <AiOutlineLoading3Quarters className="text-3xl animate-spin" />
        </div>
      ) : (
        <>
          {tokenList?.list?.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 text-sm gap-3 mt-8 w-full">
                {tokenList?.list
                  .slice(offset * 12, offset * 12 + 10)
                  .map((data, key) => {
                    return (
                      <LTC20BalanceCard
                        key={
                          key +
                          data?.ticker +
                          data?.overallBalance +
                          data?.availableBalance
                        }
                        data={data}
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
                pageCount={Math.ceil(tokenList?.total / 12)}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </>
          ) : (
            <>
              <div className="my-auto flex  justify-center gap-2 items-center text-xl font-semiboldd">
                No LTC Balance
              </div>
            </>
          )}
        </>
      )}
    </Layout>
  );
}
