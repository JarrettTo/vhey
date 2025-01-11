"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";


const Steps = () => {
 
  return (
    <section id="process relative" className="py-12">
      <div className="w-full flex flex-col items-center px-5 md:px-15  mb-4">
        <Image
          src="/images/element.svg"
          alt="About"
          className="hidden md:block pointer-events-none dark:hidden mx-auto mb-5"
          height={90}
          width={90}
        />
        <h1 className="hidden md:flex text-4xl mb-2 flex items-center text-cream gap-4">
          The{" "}
          <span>
            <img src="/images/logo.svg" alt="Logo" className="inline-block w-13 h-13" />
          </span>
          process
        </h1>
        <h1 className="flex md:hidden text-3xl mb-0 flex items-center text-cream gap-2">
          The{" "}
          <span>
            <img src="/images/logo.svg" alt="Logo" className="inline-block w-20 h-20" />
          </span>
          process
        </h1>    
        <p className="text-xl text-center text-primary font-light">
          Get started in <span className="text-primary font-bold">less than 3 weeks</span>.
        </p>
        <button
          aria-label="get started button"
          onClick={()=>{window.location.href="/contact"}}
          className="waitlist mt-6 sm:text-lg md:text-lg text-xs flex max-w-4/5 md:w-1/2 items-center px-4 justify-center rounded-full bg-primary py-2.5 text-darkgreen duration-300 ease-in-out hover:bg-blackho dark:bg-btndark lg:w-1/3 dark:hover:bg-blackho lg:text-lg"
        >
          Transform your Operations Now
        </button>      
      </div>
      
      <div className="hidden lg:flex relative mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 py-4 bg-dark-800" style={{ paddingBottom: "6rem" }}>
        <div className="relative w-full max-w-7xl">
          {/* Curved Path */}
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-2/3 xl:w-3/4 h-48"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0 150 Q500 50 1000 150"
              stroke="#D7E47D"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Steps Positioned Along the Path */}
          <div className="relative w-full h-48">
            {/* Step 1 */}
            <div
              className="absolute flex flex-col items-center text-center"
              style={{ top: "120px", left: "0%" }} /* Position along the start of the path */
            >
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-darkgreen font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-bold text-primary mt-4">
                Understanding your needs
              </h4>
              <p className="text-primary font-light text-sm mt-2 max-w-xs">
                We sit down with you to learn in detail the areas and processes in
                your day-to-day life that you need help with.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className="absolute flex flex-col items-center text-center"
              style={{ top: "60px", left: "50%", transform: "translateX(-50%)" }} /* Position at the peak */
            >
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-darkgreen font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-bold text-primary mt-4">
                Selecting the right talent
              </h4>
              <p className="text-primary font-light text-sm mt-2 max-w-xs">
                We look from both our existing pool of talent and external candidates
                to find the perfect candidate for you based on your needs.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className="absolute flex flex-col items-center text-center"
              style={{ top: "120px", right: "0%" }} /* Position along the end of the path */
            >
              <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-darkgreen font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-bold text-primary mt-4">
                Onboarding and training
              </h4>
              <p className="text-primary font-light text-sm mt-2 max-w-xs">
                We train and onboard your expert on your processes and SOPs to ensure
                they know and master your systems by heart.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 flex lg:hidden relative mx-auto px-5 flex flex-col lg:flex-row items-center justify-center gap-12 py-4 bg-dark-800" >

        {/* Steps Positioned Along the Path */}
       
          {/* Step 1 */}
          <div
            className="flex flex-col items-center text-center"
          >
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-darkgreen font-bold text-lg">
              1
            </div>
            <h4 className="text-lg font-bold text-primary mt-4">
              Understanding your needs
            </h4>
            <p className="text-primary font-light text-sm mt-2 max-w-xs">
              We sit down with you to learn in detail the areas and processes in
              your day-to-day life that you need help with.
            </p>
          </div>

          {/* Step 2 */}
          <div
            className="flex flex-col items-center text-center"
          >
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-darkgreen font-bold text-lg">
              2
            </div>
            <h4 className="text-lg font-bold text-primary mt-4">
              Selecting the right talent
            </h4>
            <p className="text-primary font-light text-sm mt-2 max-w-xs">
              We look from both our existing pool of talent and external candidates
              to find the perfect candidate for you based on your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div
            className="flex flex-col items-center text-center"
          >
            <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center text-darkgreen font-bold text-lg">
              3
            </div>
            <h4 className="text-lg font-bold text-primary mt-4">
              Onboarding and training
            </h4>
            <p className="text-primary font-light text-sm mt-2 max-w-xs">
              We train and onboard your expert on your processes and SOPs to ensure
              they know and master your systems by heart.
            </p>
          </div>
        </div>
     
    </section>
  );
};

export default Steps;
