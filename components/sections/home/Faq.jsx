import React from "react";

export default function Faq() {
  return (
    <div className="container md:mt-24 mt-16">
      <div className="grid grid-cols-1 text-center">
        <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
          Q&A
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          We are a huge marketplace dedicated to connecting great artists of all
          Dpay with their fans and unique token collectors!
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <div className="lg:w-2/3">
          <div
            id="accordion-collapseone"
            data-accordion="collapse"
            className="mt-6"
          >
            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
              <h2
                className="text-base font-semibold"
                id="accordion-collapse-heading-1"
              >
                <button
                  type="button"
                  className="flex justify-between items-center p-5 w-full font-semibold text-start"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span>What happens when I hold $Dpay ?</span>
                  <svg
                    data-accordion-icon
                    className="w-4 h-4 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div className="p-5">
                  <p className="text-slate-400 dark:text-gray-400">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
              <h2
                className="text-base font-semibold"
                id="accordion-collapse-heading-2"
              >
                <button
                  type="button"
                  className="flex justify-between items-center p-5 w-full font-semibold text-start"
                  data-accordion-target="#accordion-collapse-body-2"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-2"
                >
                  <span>How do I create my own collection ?</span>
                  <svg
                    data-accordion-icon
                    className="w-4 h-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-2"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-2"
              >
                <div className="p-5">
                  <p className="text-slate-400 dark:text-gray-400">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
              <h2
                className="text-base font-semibold"
                id="accordion-collapse-heading-3"
              >
                <button
                  type="button"
                  className="flex justify-between items-center p-5 w-full font-semibold text-start"
                  data-accordion-target="#accordion-collapse-body-3"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-3"
                >
                  <span>How does Dpay wallet work ?</span>
                  <svg
                    data-accordion-icon
                    className="w-4 h-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-3"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-3"
              >
                <div className="p-5">
                  <p className="text-slate-400 dark:text-gray-400">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
              <h2
                className="text-base font-semibold"
                id="accordion-collapse-heading-4"
              >
                <button
                  type="button"
                  className="flex justify-between items-center p-5 w-full font-semibold text-start"
                  data-accordion-target="#accordion-collapse-body-4"
                  aria-expanded="false"
                  aria-controls="accordion-collapse-body-4"
                >
                  <span>What happens when I hold $Dpay?</span>
                  <svg
                    data-accordion-icon
                    className="w-4 h-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-4"
                className="hidden"
                aria-labelledby="accordion-collapse-heading-4"
              >
                <div className="p-5">
                  <p className="text-slate-400 dark:text-gray-400">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
