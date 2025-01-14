"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { LinearGradient } from "react-text-gradients";
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
        className="relative overflow-hidden h-[100vh] flex items-center pt-[80px]"
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center">
            <div className="lg:w-1/2 hidden lg:block"> 
              <Image
                src="/images/Group 66.svg"
                alt="Agent Icon"
                width={550} // Adjust width
                height={550} // Adjust height
              />
            </div>
            <div className="lg:w-1/2 ">
              <div
                className="hero-content relative wow fadeInUp w-full lg:max-w-[780px] text-center lg:text-right flex flex-col items-center lg:items-end"
                data-wow-delay=".2s"
              >
                <Image
                  className="hidden lg:block"
                  src="/images/logo.svg"
                  alt="Agent Icon"
                  width={100} // Adjust width
                  height={100} // Adjust height
                />
                <Image
                  className="block lg:hidden"
                  src="/images/element.svg"
                  alt="Agent Icon"
                  width={80} // Adjust width
                  height={80} // Adjust height
                />
                <h1 className="font-sans font-light mt-4 px-5 lg:px-0 mb-8 lg:mb-8 text-4xl font leading-none text-[#D7E47D] sm:text-5xl sm:leading-none lg:text-4xl xl:text-5xl lg:leading-[1.2]">
                  Run your trades business
                  <br />
                  <span className="font-sans font-bold">
                    on autopilot.
                    </span>
                </h1>

                <p className="mb-5 max-w-[400px] text-sm px-10 lg:px-0 text-base font-sans font-light text-[#D7E47D] sm:text-lg sm:leading-[1.44]">
                  Let our Human Office Managers and AI take care of manual and
                  time-consuming tasks so you can focus on the things that
                  matter.
                </p>
                <ul className="hidden md:block mt-8 mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <div className="flex items-center rounded-full bg-[#D7E47D] border-[2px] border-[#ADBC42] px-1 py-1 pl-5">
                      <input
                        type="email"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={handleEmailChange}
                        className="flex-grow bg-transparent text-black outline-none placeholder:text-black/20 px-2"
                      />
                      <button
                        onClick={handleGetStarted}
                        className="ml-3 rounded-full bg-[#FBFFDC] px-8 py-4 text-black font-medium text-sm transition duration-300 ease-in-out hover:bg-gray-2 hover:text-black"
                      >
                        Get Started
                      </button>
                    </div>
                  </li>
                </ul>
                <button
                  onClick={handleGetStarted}
                  className="mt-4 block md:hidden rounded-full bg-[#FBFFDC] px-8 py-4 text-black font-medium text-sm transition duration-300 ease-in-out hover:bg-gray-2 hover:text-black"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
