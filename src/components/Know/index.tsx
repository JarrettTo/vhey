"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";

const Know = () => {
  return (
    <section
      id="benefits"
      className="pb-8 pt-20 w-full dark:bg-dark-2 lg:pb-[70px] lg:pt-[40px] overflow-hidden py-28"
      style={{
        backgroundImage: 'url("/images/know/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-3/5 flex items-center justify-center px-10 md:px-8 lg:px-28">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-2xl font-normal text-dark text-center lg:text-start lg:text-dark dark:text-white sm:text-4xl md:text-3xl lg:text-4xl md:leading-[1.2]">
              <span className="text-[#ADBC42] font-bold">Eva</span> knows and keeps track of everything about <span className="text-[#ADBC42]">creators</span>
            </h2>
            <p className="text-center lg:text-left text-gray-500 text-md max-w-xl">Eva is able to take action and respond accurately based on each creator’s information and context, which includes rates, analytics, availability and more!</p>
          </div>
        </div>
        
        <div className="w-full md:w-2/5 flex items-center justify-center  mt-4 md:mt-0">
          <Image
            src="/images/know/profiles.svg"
            alt="Profiles"
            width={400}
            height={400}
            className="w-full  h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Know;
