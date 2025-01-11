"use client";
import { comparison } from "@/stripe/comparison";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import { pricingData } from "@/stripe/pricingData";

const Pricing = () => {
  return (
    <section
      id="comparison"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-4 dark:bg-dark lg:pb-[90px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle=""
            title="Why do HVAC Businesses choose Maria?"
            paragraph="We provide you with experts and benefits tailored to your needs that allow you to scale your business and take back your time."
            center
          />
        </div>

        <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {comparison.map((plan) => (
              <th
                key={plan.id}
                className={`px-4 py-2 border border-gray-300 text-center font-bold ${
                  plan.nickname === "Maria's Experts and AI" ? "text-primary" : "text-black"
                }`}
              >
                {plan.nickname}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Dynamically generate rows based on the offers */}
          {comparison[0].offers.map((_, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {comparison.map((plan, planIndex) => (
                <td
                  key={`${plan.id}-${index}`}
                  className={`px-4 py-2 border border-gray-300 text-center ${
                    planIndex === 0 ? "text-primary" : "text-black"
                  }`}
                >
                  {plan.offers[index]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
