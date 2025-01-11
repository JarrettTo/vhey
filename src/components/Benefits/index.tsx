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
        <h1 className="text-3xl mb-12 flex items-center">
          <span>
            <img src="/images/logo.svg" alt="Logo" className="inline-block w-16 h-16" />
          </span>
          's AI-powered experts help trades Businesses...
        </h1>        
        </div>
        <div className="w-2/2 flex flex-row items-center gap-12">
          <div className="flex flex-col items-center px-12">
            <p className="text-xl text-primary font-light">save up to</p>
            <h1 className="text-6xl font-bold"><LinearGradient className="font-bold" gradient={['to left', '#B7CF0E,#D7E47D']}>$40,000</LinearGradient></h1>
            <p className="text-xl text-primary font-light">yearly</p>
          </div>
          <div className="flex flex-col items-center px-12">
            <p className="text-xl text-primary font-light">scale operations by</p>
            <h1 className="text-6xl font-bold"><LinearGradient className="font-bold" gradient={['to left', '#B7CF0E,#D7E47D']}>31%</LinearGradient></h1>
            <p className="text-xl text-primary font-light">yearly</p>
          </div>
          <div className="flex flex-col items-center px-12">
            <p className="text-xl text-primary font-light">take back over</p>
            <h1 className="text-6xl font-bold"><LinearGradient className="font-bold" gradient={['to left', '#B7CF0E,#D7E47D']}>1000+ hours</LinearGradient></h1>
            <p className="text-xl text-primary font-light">yearly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
