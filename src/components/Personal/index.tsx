"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";


const Personal = () => {
 
  return (
    <section
      id="tasks"
      className="bg-white h-[100vh] overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url(/images/personal/background.jpg)",
        backgroundSize: "cover", // Ensures the background image covers the entire div
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the background from repeating
      }}
    >
      <h1 className="text-5xl text-center">
        Not work related?<br/>
        <LinearGradient gradient={['to left', '#41D1FF,#4177FF']}>Not a problem.</LinearGradient>
      </h1>
      <p className="text-2xl text-center mt-8">
        Nothing's too personal for your expert.
      </p>
    </section>
  );
};

export default Personal;
