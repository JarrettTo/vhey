"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import featuresTabData from "./featuresTabData";
import FeaturesTabItem from "./FeaturesTabItem";


const Process = () => {
  const [currentTab, setCurrentTab] = useState("tabThree");
  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      
      <section className="relative pb-20 pt-18.5 lg:pb-22.5 my-12 py-12">
        
        <div className="relative mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center">
          <h2 className="relative mb-6 text-3xl text-black dark:text-white xl:text-hero">
            How we pick our experts
              
          </h2>
          <p className="w-2/2 px-10 md:w-1/2 md:px-0 mb-10 text-center">
            We go through <span className="text-primary font-bold">50,000+ Virtual Assistant applications.</span> Here's how we find the <span className="text-primary font-bold">top 6%</span>.
          </p>
          </div>
          {/* <!-- Tab Menues Start --> */}
          <div
            className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  01
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Resume and experience
                </button>
              </div>
            </div>
        
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  02
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  English proficiency
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  03
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Practical projects
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabFour")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabFour"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  04
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Personal Interview
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabFive")}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === "tabFive"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-12.5 w-12.5 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  05
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Training on your needs
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
          <div
            className="animate_top mx-auto max-w-c-1154 px-12 mx-12 mt-12 py-12"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default Process;
