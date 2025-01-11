"use client";

import Image from "next/image";

const AIProcess = () => {
  return (
    <section id="AI" className="mx-auto py-12">
      <div
        className="grid grid-cols-9 items-stretch gap-8 sm:px-10 px-4 lg:px-0"
        style={{ gridAutoRows: "1fr" }} // Ensures all rows are the same height
      >
        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>

        {/* Image Section */}
        <div className="col-span-9 lg:col-span-4 h-full relative overflow-hidden rounded-3xl">
          <Image
            src="/images/AI/custom.jpg"
            alt="About"
            className="object-cover h-full w-full"
            height={500}
            width={800}
          />
        </div>

        {/* Text Section */}
        <div className="col-span-9 py-6 lg:col-span-3 bg-darkgreen h-full rounded-3xl flex flex-col justify-center px-5 lg:px-10 border-primary border-[2px]">
          <h2 className="mb-6 text-3xl text-primary font-light dark:text-white">
            Your expert comes with our <span className="font-bold text-primary">AI Agents</span>.
          </h2>
          <p className="mb-8 text-cream font-light">
            We build custom AI agents and workflows tailored to your business and personal processes, providing better productivity and accuracy and allowing your expert to do more.
          </p>
          <div>
            <a
              href="/contact"
              className="group mt-7.5 inline-flex items-center gap-2.5 text-cream hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <span className="duration-300 group-hover:pr-2">Know More</span>
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

        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>

        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>

        {/* Text Section */}
        <div className="col-span-9 lg:col-span-3 py-6 bg-darkgreen h-full rounded-3xl flex flex-col justify-center px-5 lg:px-10 border-primary border-[2px]">
          <h2 className="mb-6 text-3xl text-primary font-light dark:text-white">
            No more <span className="font-bold text-primary">manual data entry</span>.
          </h2>
          <p className="mb-8 text-cream font-light">
            We build custom AI agents and workflows tailored to your business and personal processes, providing better productivity and accuracy and allowing your expert to do more.
          </p>
          <div>
            <a
              href="/contact"
              className="group mt-7.5 inline-flex items-center gap-2.5 text-cream hover:text-primary dark:text-white dark:hover:text-primary"
            >
              <span className="duration-300 group-hover:pr-2">Know More</span>
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

        {/* Image Section */}
        <div className="col-span-9 lg:col-span-4 h-full relative overflow-hidden rounded-3xl">
          <Image
            src="/images/AI/extract.jpg"
            alt="About"
            className="object-cover h-full w-full"
            height={500}
            width={800}
          />
        </div>

        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>
      </div>

    </section>
  );
};

export default AIProcess;
