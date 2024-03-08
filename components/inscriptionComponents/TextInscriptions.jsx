import React, { useState, useRef, useEffect, useContext } from "react";
import { Transition } from "@headlessui/react";
import Bills from "../UI/Bills";
import FeeRecommend from "../UI/FeeRecommend";
import { useDispatch } from "react-redux";
import { updateFeeRate } from "@/store/slices/inscribe";
import WaitingPayment from "../WaitingPayment";
import { feeAmount } from "@/configs/constants";

function TextInscriptions() {
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(0);
  const [moving, setMoving] = useState("right");
  const [steps, setSteps] = useState([
    { name: "Step 1", href: "#", status: "current" },
    { name: "Step 2", href: "#", status: "upcoming" },
    { name: "Step 3", href: "#", status: "upcoming" },
    { name: "Step 4", href: "#", status: "upcoming" },
  ]);
  const [inscriptionText, setInscriptionText] = useState("");
  const [destAddress, setDestAddress] = useState("");
  const [textType, setTextType] = useState(1);
  const [feeOption, setFeeOption] = useState("1000000");
  const [totalFee, setTotalFee] = useState(2);
  const handleChangeFeeOption = (e) => {
    dispatch(updateFeeRate(e));
  };

  const prevStep = () => {
    setMoving("left");
    setSteps((old) =>
      old.map((v, i) => {
        if (i === currentStep) {
          v.status = "upcoming";
        } else if (i === currentStep - 1) {
          v.status = "current";
        }
        return v;
      })
    );
    setCurrentStep(currentStep - 1);
    return false;
  };

  const nextStep = async () => {
    setMoving("right");
    // getValues('firstname')

    if (true) {
      setSteps((old) =>
        old.map((v, i) => {
          if (i === currentStep) {
            v.status = "complete";
          } else if (i === currentStep + 1) {
            v.status = "current";
          }
          return v;
        })
      );
      setCurrentStep(currentStep + 1);
    }
    return false;
  };

  const wrapper = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(1);

  useEffect(() => {
    function handleResize() {
      if (wrapper.current !== null) {
        setWrapperWidth(wrapper.current.offsetWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white flex">
      <div className="flex-1 flex flex-col justify-top px-1 sm:px-1 ">
        <div
          className="flex items-start overflow-hidden w-96 sm:w-full"
          ref={wrapper}
        >
          <div className="flex flex-nowrap ">
            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 0}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-full opacity-0`
                  : `translate-x-full opacity-0`
              }
              className="w-0 bg-green-200 overflow-visible"
              as="div"
            >
              <div
                className="dark:bg-slate-800 bg-gray-300 rounded-md p-3"
                style={{ width: `${wrapperWidth}px` }}
              >
                <div className="flex gap-2 justify-center gap-4 my-3">
                  <div className="flex gap-2 cursor">
                    <input
                      type="radio"
                      name="text_type"
                      id=""
                      onChange={(e) => setTextType(1)}
                      value={textType}
                      checked={textType === 1 ? "checked" : ""}
                    />
                    Single
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="text_type"
                      id=""
                      onChange={(e) => setTextType(2)}
                      value={textType}
                      checked={textType === 2 ? "checked" : ""}
                    />
                    Bulk
                  </div>
                </div>

                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                  placeholder={
                    textType === 1
                      ? "Add Text here"
                      : "Hello\nDoginal\ninscriptions"
                  }
                  className="w-full rounded-md p-3 dark:bg-gray-700 bg-gray-200 focus:outline-none"
                  onChange={(e) => setInscriptionText(e.target.value)}
                  value={inscriptionText}
                ></textarea>

                <input
                  type="text"
                  placeholder="Input Receive Address"
                  className="w-full mt-3 mb-4 rounded-md p-2 dark:bg-gray-700 bg-gray-200 focus:outline-none"
                  value={destAddress}
                  onChange={(e) => setDestAddress(e.target.value)}
                />
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 1}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="bg-red-200 w-0 overflow-visible"
              as="div"
            >
              <div
                className="dark:bg-slate-800 bg-gray-300 rounded-md p-3"
                style={{ width: `${wrapperWidth}px` }}
              >
                <h1 className="text-center font-semibold text-lg">
                  Confirmation
                </h1>
                <p className="text-sm text-center mt-2">
                  Please check your order and confirm it.
                </p>
                <p className="text-[11px] text-gray-300  text-center">
                  You are about to inscribe
                  <span className="text-white font-semibol"></span>
                  dpay(s)
                </p>
                <div className="flex flex-col mt-2 items-center rounded w-full max-h-[200px] bg-primary-dark/20 cursor-pointer  overflow-y-auto overflow-x-hidden scroll-smooth	transition ease-in-out duration-150">
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="5"
                    placeholder=""
                    className="w-full rounded-md p-3 dark:bg-gray-700 bg-gray-200 focus:outline-none"
                    onChange={(e) => setInscriptionText(e.target.value)}
                    value={inscriptionText}
                    disabled
                  ></textarea>

                  <input
                    type="text"
                    placeholder="Input Receive Address"
                    className="w-full mt-3 mb-4 rounded-md p-2 dark:bg-gray-700 bg-gray-200 focus:outline-none"
                    value={destAddress}
                    disabled
                  />
                  <div className="flex w-full justify-center mt-3 mb-4">
                    <input
                      type="checkbox"
                      className=" rounded-md mr-2 dark:bg-gray-700 bg-gray-200 focus:outline-none"
                    />
                    <span>I confirm the accuracy of Input Data</span>
                  </div>
                </div>
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 2}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
                <FeeRecommend
                  feeOption={feeOption}
                  setFeeOption={setFeeOption}
                  onChange={handleChangeFeeOption}
                />
                <Bills
                  textData={inscriptionText}
                  feeAmount={feeAmount}
                  networkFee={feeOption}
                  setTotalFee={setTotalFee}
                />
              </div>
            </Transition>

            <Transition
              appear={false}
              unmount={false}
              show={currentStep === 3}
              enter="transform transition ease-in-out duration-500"
              enterFrom={
                moving === "right"
                  ? `translate-x-96 opacity-0`
                  : `-translate-x-96 opacity-0`
              }
              enterTo={`translate-x-0 opacity-100`}
              leave="transform transition ease-in-out duration-500 "
              leaveFrom={`translate-x-0 opacity-100`}
              leaveTo={
                moving === "right"
                  ? `-translate-x-96 opacity-0`
                  : `translate-x-96 opacity-0`
              }
              className="bg-blue-200 w-0 overflow-visible"
              as="div"
            >
              <div style={{ width: `${wrapperWidth}px` }}>
                <WaitingPayment totalFee={totalFee} networkFee={feeOption} />
              </div>
            </Transition>
          </div>
        </div>
        <div className={`mt-2`}>
          <p className="text-sm font-medium mb-1 mt-3 text-center">
            Step {steps.findIndex((step) => step.status === "current") + 1} of{" "}
            {steps.length}
          </p>
          <nav
            className="flex items-center justify-center"
            aria-label="Progress"
          >
            <button
              className="main_btn rounded-md p-2 w-full float-left"
              disabled={currentStep === 0}
              onClick={() => prevStep()}
            >
              Prev
            </button>
            <ol className="mx-8 flex items-center space-x-5">
              {steps.map((step, i) => (
                <li key={`step_${i}`}>
                  {step.status === "complete" ? (
                    <a
                      href={step.href}
                      className="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
                    >
                      <span className="sr-only"></span>
                    </a>
                  ) : step.status === "current" ? (
                    <a
                      href={step.href}
                      className="relative flex items-center justify-center"
                      aria-current="step"
                    >
                      <span
                        className="absolute w-5 h-5 p-px flex"
                        aria-hidden="true"
                      >
                        <span className="w-full h-full rounded-full bg-indigo-200" />
                      </span>
                      <span
                        className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full"
                        aria-hidden="true"
                      />
                      <span className="sr-only"></span>
                    </a>
                  ) : (
                    <a
                      href={step.href}
                      className="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
                    >
                      <span className="sr-only"></span>
                    </a>
                  )}
                </li>
              ))}
            </ol>
            <button
              className="main_btn rounded-md p-2 w-full float-right"
              disabled={currentStep === 3}
              onClick={() => nextStep()}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TextInscriptions;
