"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";


const AIProcess = () => {
 
  return (
    <section id="AI" className="mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div
              className="animate_left relative w-4/4 aspect-[1982/1666] md:block md:w-1/2 w-3/4 mt-10 md:mt-0"
            >
              <Image
                src="/images/AI/custom.jpg"
                alt="About"
                className="pointer-events-none dark:hidden"
                fill
              />
            </div>
            <div className="flex justify-center w-4/4 md:w-1/2">
            <div
              className="animate_right w-3/4"
            >
              <h2 className="relative mb-6 text-4xl text-bold dark:text-white xl:text-hero mt-10 md:mt-0">
                  Your expert comes with our <span className="font-bold text-primary">AI Agents</span>.
              </h2>
              <p className="mb-8">
                We build custom AI agents and workflows tailored fit to your business and personal processes, providing better productivity and accuracy and allowing your expert to do more.
              </p>
              <div>
                <a
                  href="/contact"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </div>
            </div>
          </div>
        </section>
  );
};

export default AIProcess;
