"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";

const Benefits = () => {
  
  return (
    <section
      id="benefits"
      className="pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[40px] mb-12"
    >
      <div className="w-full px-12 flex flex-col items-center">
        <div className="w-2/2 flex flex-col items-center text-primary">
          <h1 className="text-3xl mb-12 text-center lg:flex lg:justify-center lg:items-center leading-relaxed">
            <span>
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="inline-block w-16 h-16 pt-6 lg:pt-0 align-text-bottom"
              />
            </span>
            <span className="">'s AI-agents + humans help creators and talent managers...</span>
          </h1>
        </div>

        <div className="w-2/2 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex flex-col items-center justify px-12">
            <p className="text-xl text-primary font-light text-center">save up to</p>
            <h1 className=" text-5xl md:text-6xl font-bold text-center"><LinearGradient className="font-bold" gradient={['to left', '#B7CF0E,#D7E47D']}>1100+ hours</LinearGradient></h1>
            <p className="text-xl text-primary font-light text-center">yearly on video editing</p>
          </div>
          <div className="flex flex-col items-center px-12">
            <p className="text-xl text-primary font-light text-center">create up to</p>
            <h1 className="text-5xl md:text-6xl font-bold text-center"><LinearGradient className="font-bold" gradient={['to left', '#B7CF0E,#D7E47D']}>51%</LinearGradient></h1>
            <p className="text-xl text-primary font-light text-center">more content</p>
          </div>
          <div className="flex flex-col items-center px-12">
            <p className="text-xl text-primary font-light text-center">increase brand deals by up to</p>
            <h1 className="text-5xl md:text-6xl font-bold text-center"><LinearGradient className="font-bold" gradient={['to left', '#B7CF0E,#D7E47D']}>$100,000</LinearGradient></h1>
            <p className="text-xl text-primary font-light text-center">yearly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
