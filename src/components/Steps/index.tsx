"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";


const Steps = () => {
 
  return (
    <section id="process" className="py-12 bg-gray-1">
    <div className="w-full flex flex-col items-center px-15 mb-4">
      <h1 className="text-4xl mb-2 text-center text-black dark:text-white ">
        The <span className="text-primary font-bold">Vhey</span> process 
      </h1>
      <p className="text-xl text-center ">
        Get started in <span className="text-primary font-bold">less than 3 weeks</span>.
      </p>
      <button
        aria-label="get started button"
        onClick={()=>{window.location.href="/contact"}}
        className="waitlist mt-6 sm:text-md flex xs:w-3/4 items-center px-4 justify-center rounded-full bg-primary py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark md:w-1/3 dark:hover:bg-blackho lg:text-lg"
      >
        Transform your Operations Now
      </button>
    </div>
    <div className="bg-gray-1 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 py-12">
      <div className="shadow-md bg-white flex flex-col px-12 py-12 w-1/4">
        <h1 className="text-3xl font-bold text-primary mb-2">Week 1</h1>
        <h2 className="mb-6 font-bold text-xl">Understanding your needs</h2>
        <p>We sit down with you to learn in detail the areas and processes in your day-to-day life that you need help with.</p>
      </div>
      <div className="shadow-md bg-white flex flex-col px-12 py-12 w-1/4">
        <h1 className="text-3xl font-bold text-primary mb-2">Week 2</h1>
        <h2 className="mb-6 font-bold text-xl">Selecting the right talent</h2>
        <p>We look from both our existing pool of talent and external candidates to find the perfect candidate for you based on your needs.</p>
      </div>
      <div className="shadow-md bg-white flex flex-col px-12 py-12 w-1/4">
        <h1 className="text-3xl font-bold text-primary mb-2">Week 3</h1>
        <h2 className="mb-6 font-bold text-xl">Onboarding and training</h2>
        <p>We train and onboard your expert on your processes and SOPs to ensure they know and master your systems by heart.</p>
      </div>
    </div>
    </section>
  );
};

export default Steps;
