import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Faq() {
  const styles = {
    bgColor: "transparent",
  };

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
      <div className="mt-3">
        <Accordion
          allowMultipleExpanded={true}
          className="rounded-md cs-border"
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="dark:bg-slate-800 px-4 py-6 bg-gray-200 rounded-t-md">
                What is $dpay?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                $dpay is not just another DRC-20 token. It&#39;s an emblem of
                the online zeitgeist, an extraordinary digital currency and
                ecosystem that transcends the norms of blockchain utility.
                Inspired by the fun and whimsical culture of the Doge meme,
                DogePay is on an unstoppable mission to make a difference — both
                in the blockchain universe and in the real world. We encourage
                the creation of Doge-tastic Doge ordinals aka Doginals and help
                folks with innovative inscription/shibescription services. We
                also developed a one-of-a-kind wallet and market for all your
                DRC-20 and Doginals needs.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="dark:bg-slate-800 px-4 py-6 bg-gray-200 ">
                How does $dpay wallet work?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                $Dpay Market comes with built-in wallet, there is no need to
                download any browser extension. Your private keys are stored in
                the browser and are never sent to the server
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton className="dark:bg-slate-800 px-4 py-6 bg-gray-200 ">
                What can $dpay holders get?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                As a $dpay holder, you have exclusive access to a range of
                benefits and privileges on our $dpay marketplace. One of the key
                advantages is the significant reduction in fees for all services
                offered on the platform, including trading, inscription, and
                more.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
