import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addressFormat } from "@/utils";

export default function LastSales({ slug, lastSales, price, isLTC20 }) {
  const empyImage = (e) => {
    e.target.src = "/empty.png";
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 65,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 2,
    },
  };

  const content = (slug, sale) => {

    if (isLTC20) {
      return (
        <div className="in-content">
          <div className="font-bold px-3 text-sm">
            <p className="text-center">{sale.content}</p>
            <p className="uppercase text-center">{slug}</p>
          </div>
        </div>
      );
    }

    if (slug == "dpay") {
      return <div className="in-content">{sale.content}</div>;
    }

    return (
      <div className="in-content">
        <img
          key={sale.id}
          src={`https://ordinalslite.com/content/${sale.id}`}
          className="object-cover w-full h-full"
          alt=""
          onError={(e) => empyImage(e)}
        />
      </div>
    );
  };

  return (
    <div className="w-full">
      {lastSales && (
        <>
          <div className="my-3 text-xl font-semibold">Last Biggest Sales</div>

          <Carousel
            responsive={responsive}
            containerClass="mb-3 pb-3"
            itemClass="px-1"
          >
            {lastSales.map((sale) => {
              return (
                <div className="in-card" key={sale.id}>
                  {content(slug, sale)}
                  <div className="flex justify-between gap-1 mb-2 text-sm">
                    <p>Price:</p>
                    <p>
                      {sale?.price}{" "}
                      <span className="text-[11px] text-green-500">
                        ~$ {(sale?.price * price).toFixed(3)}
                      </span>
                    </p>
                  </div>

                  <div className="flex justify-between gap-1 text-sm">
                    <p>Tx:</p>
                    <a
                    href={"https://sochain.com/tx/DOGE/"+ sale?.tx}
                      className="cursor-pointer text-sky-500"
                      target={"_blank"}
                    >
                      {addressFormat(sale?.tx, 4)}
                    </a>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </>
      )}
    </div>
  );
}
