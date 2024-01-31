import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { AiFillCheckCircle, AiOutlineLoading } from "react-icons/ai";
import FeeRecommend from "../UI/FeeRecommend";
import { useContext } from "react";
import { WalletContext } from "../../context/wallet";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { LuPenLine } from "react-icons/lu";
import { sleep } from "@/utils";
import { MdOutlineCancel } from "react-icons/md";
import { feeAddress } from "../../configs/constants";

export default function InscribeModal({
  modalIsOpen,
  setIsOpen,
  ticker,
  tokenSummary,
}) {
  const wallet = useContext(WalletContext);
  const address = wallet.getAddress();
  const [pendingTx, setPendingTx] = useState(false);
  const [inputAmount, setAmount] = useState("");
  const [feeRate, setFeeRate] = useState("economy");
  const [rawTx, setRawTx] = useState();
  const [error, setError] = useState("");
  const [succeed, setSucceed] = useState(false);
  const [tx, setTx] = useState();
  const [disabled, setDisabled] = useState(true);
  const [creatingTx, setCreatingTx] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setSucceed(false);
    setTx();
  }

  useEffect(() => {
    setError("");
    setDisabled(true);

    const amount = parseInt(inputAmount);
    if (!amount) {
      return;
    }

    if (!tokenSummary.tokenBalance) {
      return;
    }

    if (amount <= 0) {
      return;
    }

    if (amount > parseInt(tokenSummary.tokenBalance.availableBalanceSafe)) {
      setError("Insufficient Balance");
      return;
    }

    if (feeRate <= 0) {
      return;
    }

    if (address && ticker && amount.toString() && feeRate) {
      setCreatingTx(true);
      try {
        wallet
          .inscribeBRC20Transfer(address, ticker, amount.toString(), feeRate)
          .then((order) => {
            if (order?.payAddress) {
              wallet
                .createMultiBitcoinTx(
                  [
                    { address: order.payAddress, amount: order.totalFee },
                    {
                      address: feeAddress,
                      amount: 140000,
                    },
                  ],
                  order.totalFee + 140000,
                  feeRate,
                  false
                )
                .then((rawTxInfo) => {
                  setRawTx(rawTxInfo);
                  setDisabled(false);
                  setCreatingTx(false);
                });
            }
          });
      } catch (error) {
        toast.error(`${error}`);
        setError(error?.message);
      }
    }
  }, [inputAmount, feeRate, tokenSummary.tokenBalance, address, ticker]);

  const handleInscribe = async () => {
    setPendingTx(true);
    if (!rawTx) {
      return;
    }

    try {
      const txid = await wallet.pushTx(rawTx);
      await sleep(1); // Wait for transaction synchronization

      if (txid.indexOf("Broadcast") == -1) {
        setSucceed(true);
        setTx(txid);
        toast.success("Your transaction has been sent successfully.");
      }
      setPendingTx(false);
    } catch (e) {
      setPendingTx(false);
      setSucceed(false);
      toast.error(`${e}`);
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="cs-modal relative"
    >
      <div className="text-center text-2xl font-semibold">
        Inscribe {ticker}
      </div>

      <div className="my-8">
        <div className="mb-1 w-full flex justify-between">
          <p className="text-gray-300"> Available:</p>{" "}
          <span
            className="cursor-pointer"
            onClick={() =>
              setAmount(tokenSummary.tokenBalance.availableBalance)
            }
          >
            {tokenSummary.tokenBalance.availableBalance} {ticker}
          </span>
        </div>
        <div className="flex gap-1">
          <input
            value={inputAmount}
            onChange={(e) => setAmount(e.target.value)}
            min={1}
            max={tokenSummary.tokenBalance.availableBalance}
            type="number"
            className="py-1 rounded-md bg-primary-dark/10 cs-border px-2 w-full"
            placeholder="Input Price"
          />
        </div>
        {error && <p className="text-red-400">{error}</p>}
      </div>

      <p className="my-3 text-center">
        * To send & List LTC-20, You have to inscribe a TRANSFER inscription
        first.
      </p>

      <FeeRecommend feeOption={feeRate} setFeeOption={setFeeRate} />

      <div className="flex gap-2">
        <button
          className="main_btn w-full py-2 px-3 rounded-md mt-3"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        <button
          disabled={disabled || creatingTx}
          className="main_btn w-full py-2 px-3 rounded-md mt-3 bg-sky-600 flex justify-center items-center gap-2"
          onClick={handleInscribe}
        >
          {creatingTx ? (
            <AiOutlineLoading className="text-lg font-semibold animate-spin" />
          ) : (
            <>
              <LuPenLine /> Inscribe
            </>
          )}
        </button>
      </div>

      {pendingTx && (
        <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/60 flex justify-center items-center">
          <AiOutlineLoading className="text-3xl font-semibold animate-spin" />
        </div>
      )}

      {succeed && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-primary-dark  flex justify-center items-center">
            <div>
              <AiFillCheckCircle className="text-6xl font-semibold mx-auto text-green-600" />
              <a
                href={"https://litecoinspace.org/tx/" + tx}
                className="underline"
                target="_blank"
              >
                View Transaction
              </a>
            </div>
          </div>
          <MdOutlineCancel
            className="absolute top-2 right-2 text-3xl cursor-pointer"
            onClick={closeModal}
          />
        </>
      )}
    </Modal>
  );
}
