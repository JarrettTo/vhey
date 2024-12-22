import axios from "axios";
import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";

const PricingBox = ({ product }: { product: Price }) => {
  // POST request
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: product.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {product.nickname === "Monthly" && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
            Recommended
          </p>
        )}
        <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
          <span className="-ml-1 -tracking-[2px]">
            {product.nickname}
          </span>
        </h2>

        <div className="mb-[50px]">
          <h3 className="mb-5 text-lg font-medium text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={()=>{window.location.href=`/contact?plan=${product.nickname}`}}
            className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90"
          >
            Get This Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
