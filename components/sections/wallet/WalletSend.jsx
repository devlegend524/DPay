import React, { useContext, useEffect, useMemo } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { WalletContext } from "@/context/wallet";
import { useState } from "react";
import { FeeRateBar } from "./WalletFeeRate";
import { amountToSatoshis, isValidAddress, satoshisToAmount } from "@/utils";
import { bitcoinTx, updateBitcoinTx } from "@/store/slices/wallet";
import WAValidator from "multicoin-address-validator";
import { sleep } from "@/utils";
import { AiFillCheckCircle, AiOutlineLoading } from "react-icons/ai";
import { useWallet } from "@/store/hooks";
import { API_STATUS } from "@/shared/constant";

const SATS_DOMAIN = ".lits";
const UNISAT_DOMAIN = ".unilit";
const LTC_DOMAIN = ".ltc";
const LITE_DOMAIN = ".lite";
const COIN_DUST = 1000;

export default function WalletSend({ setContentType }) {
  const dispatch = useDispatch();
  const { balance } = useWallet();
  const wallet = useContext(WalletContext);
  const [step, setStep] = useState(0);
  const [inputAmount, setAmount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isValidAmount, setIsValidAmount] = useState(false);
  const [feeRate, setFeeRate] = useState(5);
  const [autoAdjust, setAutoAdjust] = useState(false);
  const [error, setError] = useState("");
  const [rawTxInfo, setRawTxInfo] = useState();

  // address Input
  const [toInfo, setAddress] = useState({});
  const addressInputData = {
    address: "",
    domain: "",
  };
  const [validAddress, setValidAddress] = useState(addressInputData.address);
  const [parseAddress, setParseAddress] = useState(
    addressInputData.domain ? addressInputData.address : ""
  );
  const [parseError, setParseError] = useState("");
  const [formatError, setFormatError] = useState("");
  const [inputVal, setInputVal] = useState(
    addressInputData.domain || addressInputData.address
  );
  const [inscription, setInscription] = useState();
  const [pendingTx, setPendingTx] = useState(false);
  const [succeed, setSucceed] = useState(false);
  const [txid, setTxId] = useState();

  // address Input

  const maxAmount = () => {
    const amount = balance - 0.001;
    if (amount > 0) {
      setAmount(amount);
    } else {
      toast.error("You do not have enough balance to send.");
    }
  };

  useEffect(() => {
    setAddress({
      address: validAddress,
      domain: parseAddress ? inputVal : "",
      inscription,
    });
  }, [validAddress]);

  const handleInputAddress = (e) => {
    const inputAddress = e.target.value;
    setInputVal(inputAddress);

    if (parseError) {
      setParseError("");
    }
    if (parseAddress) {
      setParseAddress("");
    }
    if (formatError) {
      setFormatError("");
    }

    if (validAddress) {
      setValidAddress("");
    }

    // const teststr = inputAddress.toLowerCase();
    // if (
    //   teststr.endsWith(SATS_DOMAIN) ||
    //   teststr.endsWith(UNISAT_DOMAIN) ||
    //   teststr.endsWith(LTC_DOMAIN) ||
    //   teststr.endsWith(LITE_DOMAIN)
    // ) {
    //   wallet
    //     .queryDomainInfo(encodeURIComponent(inputAddress))
    //     .then((inscription) => {
    //       if (inscription) {
    //         setInscription(inscription);
    //         const address = inscription.address || "";
    //         setParseAddress(address);
    //         setValidAddress(address);
    //       } else {
    //         setParseError(`${inputAddress} does not exist`);
    //       }
    //     })
    //     .catch((err) => {
    //       const errMsg = err.message + " for " + inputAddress;
    //       setFormatError(errMsg);
    //     });
    // } else {
    const isValid = WAValidator.validate(inputAddress, "dogecoin");
    if (!isValid) {
      setFormatError("Recipient address is invalid");
      return;
    }
    setValidAddress(inputAddress);
    // }
  };

  const addressAmount = async () => {
    setIsValidAmount(balance > amount);
  };

  const toSatoshis = useMemo(() => {
    if (!inputAmount) return 0;
    return amountToSatoshis(inputAmount);
  }, [inputAmount]);

  useEffect(() => {
    setError("");

    if (!isValidAddress(toInfo.address)) {
      return;
    }
    if (!toSatoshis) {
      return;
    }
    if (toSatoshis < COIN_DUST) {
      setError(`Amount must be at least 0.00001 LTC`);
      return;
    }

    if (feeRate <= 0) {
      return;
    }
    console.log(feeRate);

    if (
      toInfo.address == bitcoinTx.toAddress &&
      toSatoshis == bitcoinTx.toSatoshis &&
      autoAdjust == bitcoinTx.autoAdjust &&
      feeRate == bitcoinTx.feeRate
    ) {
      //Prevent repeated triggering caused by setAmount
      return;
    }

    wallet
      .createBitcoinTx(toInfo, toSatoshis, feeRate, autoAdjust)
      .then((data) => {
        //  console.log(data);
        // if (data.fee < data.estimateFee) {
        //   setError(`Network fee must be at leat ${data.estimateFee}`);
        //   return;
        // }
        setRawTxInfo(data);
        dispatch(
          bitcoinTx({
            toInfo: toInfo,
            toSatoshis: toSatoshis,
            feeRate: feeRate,
            autoAdjust: autoAdjust,
          })
        );
      })
      .catch((e) => {
        //  console.log(e);
        setError(e.message);
      });
  }, [toInfo, inputAmount, autoAdjust, feeRate]);

  const pushBitcoinTx = async () => {
    setPendingTx(true);
    const ret = {
      success: false,
      txid: "",
      error: "",
    };

    if (!rawTxInfo) {
      return;
    }

    const decodedPsbt = await wallet.decodePsbt(rawTxInfo.psbtHex);
    console.log(decodedPsbt)

    if (decodedPsbt.warning) {
      toast.error("RawTx decoding is failed");
      return;
    }

    try {
      const res = await wallet.pushTx(rawTxInfo.rawtx);
      if (res.status == API_STATUS.FAILED) {
        toast.error(res.message);
      } else {
        dispatch(updateBitcoinTx(res.result));
        toast.success(`Sent ${inputAmount} successfully.`);
        setSucceed(true);
        setTxId(res.result);
      }
      setPendingTx(false);
    } catch (e) {
      setPendingTx(false);
      //  console.log(e);
    }

    return ret;
  };

  if (step === 0) {
    return (
      <div className="p-4 rounded-lg  dark:bg-slate-900 border border-gray-600 bg-white relative">
        <button
          className=" focus:outline-none"
          onClick={() => setContentType("main")}
        >
          <BsArrowLeft className="text-xl" />
        </button>
        <label htmlFor="" className="w-full mt-2">
          Address:
        </label>
        <input
          className="w-full mt-1 rounded-lg py-2 px-2 bg-transparent border border-[white!important]  "
          type="text"
          placeholder="D1qdmy...0pqe5mzn"
          onChange={async (e) => {
            handleInputAddress(e);
          }}
          defaultValue={inputVal}
        />
        {parseError && <p className="text-red-500">{parseError}</p>}
        {formatError && <p className="text-red-500">{formatError}</p>}

        <div className="w-full flex justify-between mt-2">
          <label htmlFor="">DOGE Amount:</label>
          <div className="flex gap-2">
            <button
              disabled={!balance}
              className=" focus:outline-none hover:text-blue-300"
              onClick={maxAmount}
            >
              MAX: {Number(balance).toFixed(2)}
            </button>
          </div>
        </div>

        <div>
          <input
            className="w-full mt-1 rounded-lg py-2 px-2 bg-transparent border border-[white!important]  "
            type="number"
            placeholder="0.00 (DOGE)"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            value={inputAmount}
            min={0}
          />
          {error && <span className="text-red-500 text-[12px]">{error}</span>}
        </div>

        <FeeRateBar
          onChange={(val) => {
            setFeeRate(val);
          }}
        />

        <button
          className="mt-3 w-full main_btn py-2.5 rounded-lg"
          disabled={
            error ||
            formatError ||
            parseError ||
            !Number(inputAmount) ||
            !balance
          }
          onClick={() => pushBitcoinTx()}
        >
          Send
        </button>
        {pendingTx && (
          <div className="absolute w-full h-full rounded-lg flex justify-center items-center bg-[#12273da7] top-0 left-0">
            <AiOutlineLoading className="text-3xl animate-spin" />
          </div>
        )}

        {succeed && (
          <>
            <div className="absolute top-0 left-0 w-full h-full bg-primary-dark  flex justify-center items-center bg-[#12273d]">
              <div className="mb-16">
                <AiFillCheckCircle className="text-8xl font-semibold mx-auto text-green-600" />
                <a
                  href={"https://sochain.com/tx/" + txid}
                  className="underline"
                  target="_blank"
                >
                  View Transaction
                </a>
              </div>
            </div>
            {/* <MdOutlineCancel
              className="absolute top-2 right-2 text-3xl cursor-pointer"
              // onClick={closeModal}
            /> */}
            <button
              className="w-full main_btn py-2 rounded-md"
              onClick={() => setContentType(4)}
            >
              Done
            </button>
          </>
        )}
      </div>
    );
  }
}
