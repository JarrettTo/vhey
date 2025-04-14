"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
import Lottie from "lottie-react";
import comp1Animation from "../../../public/images/hero/Comp 1.json";
import "../../styles/hero.css";

const Hero = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGetStarted = () => {
    if (email) {
      router.push(`/contact?email=${encodeURIComponent(email)}`);
    } else {
      router.push(`/contact`);
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden h-[100vh] flex items-center"
        style={{
          backgroundImage: 'url("/images/hero/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 lg:gap-12 pt-10 lg:pt-0 px-2">
            {/* Left Column - Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
              <h1 className="font-eastlane font-normal text-4xl md:text-4xl lg:text-5xl text-[#545A2B] mb-2 tracking-tight">
                Your AI Assistant for Managers and Creators.
              </h1>
              <p className="font-eastlane mt-0 md:mt-2 text-xl md:text-xl text-[#798143] font-light max-w-2xl mb-8 tracking-tight">
                Eva helps managers and creators scale their growth and earnings by helping them manage deals, proposals, and more.
              </p>
              <div className="flex items-center rounded-full bg-[#D7E47D] border-[2px] border-[#ADBC42] px-1 py-1 pl-5">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  value={email}
                  onChange={handleEmailChange}
                  className="font-eastlane flex-grow bg-transparent text-black outline-none placeholder:text-black/20 px-2 tracking-tight"
                />
                <button
                  onClick={handleGetStarted}
                  className="font-eastlane ml-0 md:ml-3 rounded-full bg-[#FBFFDC] p-2 md:p-4 text-black font-medium transition duration-300 ease-in-out hover:bg-gray-2 hover:text-black tracking-tight"
                  aria-label="Submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Animation */}
            <div className="lg:w-1/2 w-full max-w-[500px] lg:max-w-none">
              <Lottie
                animationData={comp1Animation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
