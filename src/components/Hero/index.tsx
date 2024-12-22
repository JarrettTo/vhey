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
      alert("Please enter a valid email.");
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-black pt-[120px] md:pt-[130px] lg:pt-[160px]"
        style={{
          backgroundImage: "url('/images/hero/background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="rounded-3xl bg-[#191919]/40 px-6 py-2 mb-8 outline outline-[1px] outline-primary">
              <LinearGradient
                className="font-bold"
                gradient={["to left", "#41D1FF,#4177FF"]}
              >
                with our Virtual Experts + AI
              </LinearGradient>
            </div>
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-5xl font leading-snug text-white sm:text-5xl sm:leading-snug lg:text-6xl lg:leading-[1.2]">
                  Run your HVAC business
                  <br />
                  <LinearGradient
                    gradient={["to left", "#41D1FF,#4177FF"]}
                  >
                    on autopilot.
                  </LinearGradient>
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Let our Virtual Assistants and AI take care of manual and
                  time-consuming tasks so you can focus on the things that
                  matter.
                </p>
                <ul className="mt-16 mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <div className="flex justify-center items-center">
                      <input
                        type="email"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={handleEmailChange}
                        className="py-3 rounded-lg bg-[#191919]/40 border-[2px] border-[#262626] text-white w-[400px] px-8 outline-none placeholder:text-white/60"
                      />
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={handleGetStarted}
                      className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-[14px] text-center text-base font-medium text-white shadow-1 transition duration-300 ease-in-out hover:bg-gray-2 hover:text-black"
                    >
                      Get Started
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
