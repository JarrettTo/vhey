"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";


const Personal = () => {
 
  return (
    <section
      id="tasks"
      className="h-[100vh] overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="hidden lg:flex w-3/4 h-full flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url(/images/personal/elements.svg)",
          backgroundSize: "contain", // Ensures the background image covers the entire div
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents the background from repeating
        }}
      >
        <h1 className=" text-4xl xl:text-4xl text-center text-primary font-light">
          End-to-end<br/>
          <span className="font-medium">Talent Management</span>
        </h1>
        <p className="text-md xl:text-xl text-primary text-center mt-4 font-light flex flex-row items-center gap-2">
          with <span><img src="/images/logo.svg" className="h-8" height={10} width={"auto"}></img></span> AI
        </p>
      </div>
      <div className="block lg:hidden w-4/4 px-5 md:px-0 md:w-3/4 h-full w-full flex flex-col items-center justify-center bg-[#101518]"
      >
      <Image
        className="block lg:hidden mb-12"
        src="/images/personal/mobile.svg"
        alt="Agent Icon"
        width={200} // Adjust width
        height={200} // Adjust height
      />
      <h1 className=" text-3xl  text-center text-primary font-light">
          End-to-end<br/>
          <span className="font-medium">Talent Management</span>
        </h1>
        <p className="text-md xl:text-xl text-primary text-center mt-4 font-light flex flex-row items-center gap-2">
          with <span><img src="/images/logo.svg" className="h-8" height={10} width={"auto"}></img></span> AI
        </p>
      </div>
    </section>
  );
};

export default Personal;
