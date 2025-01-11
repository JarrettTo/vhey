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
        <h1 className=" text-4xl xl:text-5xl text-center text-primary font-light">
          Not work related?<br/>
          <span className="font-bold">Not a problem.</span>
        </h1>
        <p className="text-md xl:text-xl text-primary text-center mt-4 font-light">
          Nothing's too personal for your expert.
        </p>
      </div>
      <div className="block lg:hidden w-4/4 px-5 md:px-0 md:w-3/4 h-full flex flex-col items-center justify-center"
      >
      <h1 className="text-4xl text-center text-primary font-light md:text-5xl">
        Not work related?<br/>
        <span className="font-bold">Not a problem.</span>
      </h1>
      <p className="text-lg text-primary text-center mt-4 font-light">
        Ask them to book flights, order food, schedule appointments, etc.
      </p>
      </div>
    </section>
  );
};

export default Personal;
