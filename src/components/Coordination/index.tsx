"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import Lottie from "lottie-react";
import deliverablesAnimation from "/public/images/workflows/Deliverables.json";

const Coordination = () => {
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
        <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0">
          <Lottie
            animationData={deliverablesAnimation}
            loop={true}
            className="w-full h-auto"
          />
        </div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center px-10 md:px-8 lg:px-28">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-2xl font-normal text-dark text-center lg:text-start lg:text-dark dark:text-white sm:text-4xl md:text-3xl lg:text-4xl md:leading-[1.2]">
              <span className="text-[#ADBC42] font-bold">Eva</span> does all the work for you <span className="text-[#ADBC42]">proactively</span> without you lifting a finger.
            </h2>
            <p className="text-center lg:text-left text-gray-500 text-md max-w-xl">
              Eva is not just another tool. It takes care of executing tasks and deliverables on its own based on messages and emails between conversations amongst creators, managers, and clients. All you have to do is approve and make the final decision.
            </p>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default Coordination;
