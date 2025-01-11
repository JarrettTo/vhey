"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";


const Trained = () => {
 
  return (
    <div className="mx-auto bg-black flex justify-center md:py-12 lg:py-4 xl:py-0">
          <div className="flex flex-col md:flex-row items-center justify-center py-12  w-5/6 ">
            <div
              className="relative w-4/4 md:block md:w-1/2 md:mt-0 flex flex-row"
            >
              <Image
                src="/images/integration.png"
                alt="About"
                className="pointer-events-none dark:hidden mx-auto my-auto"
                height={350}
                width={350}
              />
            </div>
            <div className="flex justify-center w-4/4 md:w-1/2">
              <div
                className="animate_right w-3/4 flex flex-col items-center"
              >
                <Image
                  src="/images/element.svg"
                  alt="Agent Icon"
                  className="hidden lg:block mb-8"
                  width={70} // Adjust width
                  height={70} // Adjust height
                />
                <h2 className="relative mb-6 text-4xl text-bold text-primary font-light text-center xl:text-hero mt-10 md:mt-0">
                    Integrated and trained on all <br/><span className="font-bold text-primary">your systems</span>.
                </h2>
                <p className="mb-8 text-primary font-light text-center">
                  Your expert will come with our own AI and will be trained to integrate with House Call Pro, Quickbooks, Joist, MotionOps, LNVO, or any systems that you're already using!
                </p>
                <div>
                  <a
                    href="/contact"
                    className="bg-cream px-10 py-3 group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary rounded-3xl dark:text-white dark:hover:text-primary"
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
        </div>
  );
};

export default Trained;
