"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";

const Benefits = () => {
  
  return (
    <section
      id="benefits"
      className="pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px] mb-12"
    >
      <div className="w-full px-12 flex flex-col items-center">
        <div className="w-2/2 flex flex-col items-center">
          <h1 className="font-bold text-3xl mb-12">VHey's <span className="text-primary">AI-powered experts</span> help HVAC Businesses...</h1>
        </div>
        <div className="w-2/2 flex flex-row items-center gap-12">
          <div className="flex flex-col items-center px-12">
            <p className="text-xl">save up to</p>
            <h1 className="text-6xl font-bold"><LinearGradient className="font-bold" gradient={['to left', '#41D1FF,#4177FF']}>$40,000</LinearGradient></h1>
            <p className="text-xl">yearly</p>
          </div>
          <div className="flex flex-col items-center px-12">
            <p className="text-xl">scale operations by</p>
            <h1 className="text-6xl font-bold"><LinearGradient className="font-bold" gradient={['to left', '#41D1FF,#4177FF']}>31%</LinearGradient></h1>
            <p className="text-xl">yearly</p>
          </div>
          <div className="flex flex-col items-center px-12">
            <p className="text-xl">take back over</p>
            <h1 className="text-6xl font-bold"><LinearGradient className="font-bold" gradient={['to left', '#41D1FF,#4177FF']}>1000+ hours</LinearGradient></h1>
            <p className="text-xl">yearly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
