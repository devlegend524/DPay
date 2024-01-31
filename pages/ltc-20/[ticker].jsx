import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/sections/Layout";
import ReactPaginate from "react-paginate";
import { useWallet } from "../../store/hooks";
import useUTXOs from "../../hooks/useUTXOs";
import BuyCardForNFTs from "../../components/UI/BuyCardForNFTs";
import BuyCardSkelenton from "../../components/UI/BuyCardSkelenton";
import NFTCollectionBanner from "../../components/trade/NFTCollectionBanner";
import { onValue, ref, query, orderByChild, equalTo } from "firebase/database";
import { db } from "@/services/firebase";
import BuyCardForLTC20 from "../../components/UI/BuyCardForLTC20";
import LTCBuyCardSkelenton from "../../components/UI/LTCBuyCardSkelenton";
import Link from "next/link";
import LastSales from "../../components/sections/LastSales";

export default function Collection() {
  const router = useRouter();
  const { utxos, sortedUtxos, dummyUTXOs, refreshUTXOs, selectUtxos } =
    useUTXOs();
  const { price } = useWallet();

  const [slug, setslug] = useState();
  const [collection, setCollection] = useState();
  const [listedNFTs, setListedNFTs] = useState();
  const [listedNumber, setListedNumber] = useState(0);
  const [fetchingListings, setFetchingListings] = useState(true);
  const [offsetListed, setOffsetListed] = useState(0);
  const [lastSales, setLastSales] = useState();

  const handlePageClickForListed = () => {
    setOffsetListed(e.selected);
  };

  async function getCollection(collectionSlug) {
    const [collectionsFromGithub] = await Promise.all([
      fetch(
        `https://raw.githubusercontent.com/nextidearly/collections/main/LTC20/metas.json`
      ).then((response) => response.json()),
    ]);
    const filter = collectionsFromGithub.filter(
      (i) => i.ticker === collectionSlug
    );
    setCollection(filter[0]);
  }

  const fetchList = async () => {
    // let dbQuery = query(
    //   ref(db, "market/" + slug),
    //   orderByChild("paid"),
    //   equalTo(false)
    // );

    let dbQuery = query(
      ref(db, "market/" + slug),
      orderByChild("paid"),
      equalTo(false)
    );

    onValue(dbQuery, async (snapshot) => {
      const exist = snapshot.val();
      if (exist) {
        setListedNumber(snapshot.size);
        setListedNFTs(exist);
      }
      setFetchingListings(false);
    });
  };

  useEffect(() => {
    if (router.asPath !== router.route) {
      setslug(router?.query?.ticker);
    }
  }, [router.isReady]);

  useEffect(() => {
    if (slug) {
      getCollection(slug);
      fetchList();
    }
  }, [slug]);

  return (
    <Layout>
      <Head>
        <title>Dpay - {collection?.name} Market </title>
        <meta
          name="description"
          content="Dpay - NFTs Market place on Dogecoin"
        />
      </Head>

      <NFTCollectionBanner
        key={slug}
        collection={collection}
        tag={slug}
        isLTC20={true}
        setLastSales={setLastSales}
      />

      <h1 className="my-3 w-full flex justify-end">
        <Link
          href={"/wallet/ltc20Token/" + slug}
          className="main_btn px-4 py-2 rounded-md"
        >
          Create List ({slug})
        </Link>
      </h1>

      {fetchingListings ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 w-full">
          {Array.from({ length: 24 }, (_, index) => {
            return <LTCBuyCardSkelenton key={index} />;
          })}
        </div>
      ) : (
        <>
          {listedNFTs ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 w-full">
                {Object.keys(listedNFTs)
                  .reverse()
                  .slice(offsetListed * 24, offsetListed * 24 + 24)
                  .map((key, index) => {
                    return (
                      <BuyCardForLTC20
                        key={index}
                        inscription={listedNFTs[key]}
                        price={price}
                        utxos={utxos}
                        sortedUtxos={sortedUtxos}
                        dummyUTXOs={dummyUTXOs}
                        refreshUTXOs={refreshUTXOs}
                        selectUtxos={selectUtxos}
                        slug={slug}
                        isListed={true}
                      />
                    );
                  })}
              </div>

              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClickForListed}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={Math.ceil(listedNumber / 24)}
                previousLabel="<"
                renderOnZeroPageCount={null}
                className="pagination"
              />
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4 w-full relative">
                {Array.from({ length: 12 }, (_, index) => {
                  return <LTCBuyCardSkelenton key={index} />;
                })}

                <div className="absolute w-full h-full rounded-md flex justify-center items-center ">
                  <div className="p-6 rounded-md bg-white/10 backdrop-blur-sm">
                    <p className="text-center">There is not listed NFTs Yet.</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      <LastSales
        slug={slug}
        lastSales={lastSales}
        price={price}
        isLTC20={true}
      />
    </Layout>
  );
}
