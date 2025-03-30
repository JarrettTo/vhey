"use client";

import Image from "next/image";

const Processes = () => {
  return (
    <section
      id="processes"
      className="w-full dark:bg-dark-2 overflow-hidden "
      style={{
        backgroundImage: 'url("/images/processes/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/processes/thumbnail.jpg"
            alt="Processes Thumbnail"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
        
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 lg:px-28">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-2xl font-normal text-primary text-center lg:text-start lg:text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              <span className="text-[#ADBC42] font-bold">Eva</span> adjusts to fit your processes and style.
            </h2>
            <p className="text-center lg:text-left text-gray-500 text-md max-w-xl">
              Eva works your way—using your processes, your systems, and your values to handle complex work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processes; 