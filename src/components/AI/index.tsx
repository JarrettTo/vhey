"use client";

import Image from "next/image";

const AIProcess = () => {
  return (
    <section id="AI" className="mx-auto py-0 lg:py-6">
      <div
        className="grid grid-cols-9 items-stretch gap-8 sm:px-10 px-4 lg:px-0"
        style={{ gridAutoRows: "1fr" }} // Ensures all rows are the same height
      >
        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>
        <div className="col-span-9 lg:col-span-3 py-6 bg-darkgreen h-full rounded-3xl flex flex-col justify-center px-5 lg:px-10 border-primary border-[2px]">
          <h2 className="mb-6 text-3xl text-primary font-light dark:text-white">
            Upload your <span className="font-bold text-primary">video assets, scripts, and pegs</span>.
          </h2>
          <p className="mb-8 text-cream font-light">
            Upload your footage and assets, describe your vision with pegs, scripts, or storyboards, and let AI analyze it to create the perfect edit for you.
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
        <div className="col-span-9 lg:col-span-4 h-full relative overflow-hidden rounded-3xl border-primary border-[2px]">
          <Image
            src="/images/AI/extract.jpg"
            alt="About"
            className="object-cover h-full w-full"
            height={500}
            width={800}
          />
        </div>
        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>
        {/* Image Section */}
        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>  
        <div className="col-span-9 lg:col-span-4 h-full relative overflow-hidden rounded-3xl border-primary border-[2px]">
          <Image
            src="/images/AI/editing.jpg"
            alt="About"
            className="object-cover h-full w-full"
            height={500}
            width={800}
          />
        </div>

        {/* Text Section */}
        <div className="col-span-9 py-6 lg:col-span-3 bg-darkgreen h-full rounded-3xl flex flex-col justify-center px-5 lg:px-10 border-primary border-[2px]">
          <h2 className="mb-6 text-3xl text-primary font-light dark:text-white">
            <span className="font-bold text-primary">AI </span> will analyze your editing and content style.
          </h2>
          <p className="mb-8 text-cream font-light">
            AI will analyze the pegs' content and editing style to make sure that the output matches the aesthetic you're looking for. That way, it feels seamless and authentic to your audience.
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
            <span className="font-bold text-primary">Eva's CUA AI </span>will edit your clips on CapCut.
          </h2>
          <p className="mb-8 text-cream font-light">
            Eva's CUA AI seamlessly integrates with CapCut, handling trimming, arranging, color grading, and effect placement at precise timestamps to match the provided script, storyboard, and analyzed content style.          </p>
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
        <div className="col-span-9 lg:col-span-4 h-full relative overflow-hidden rounded-3xl border-primary border-[2px]">
          <Image
            src="/images/AI/capcut.jpg"
            alt="About"
            className="object-cover h-full w-full"
            height={500}
            width={800}
          />
        </div>

        <div className="hidden col-span-0 lg:block lg:col-span-1"></div>
      </div>
      <div className="w-full flex flex-col lg:flex-row mt-12 border border-primary bg-[#101518]">
        <div className="w-full lg:w-1/2 flex flex-col">
          <Image
            src="/images/AI/HITL.jpg"
            alt="About"
            className=""
            height={1000}
            width={1600}
          />
          <div className="flex flex-col px-16 mt-10 text-white gap-3 py-3 pb-16">
            <h1 className="text-primary text-2xl lg:text-3xl">Human experts to adjust<br/>and verify AI's output</h1>
            <p className=" text-md lg:text-lg">Eva's human experts fine-tune the AI agent's edits to ensure every detail aligns with your pegs, scripts, and styl, delivering polished, ready-to-post content.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex-col">
          <Image
            src="/images/AI/revisions.jpg"
            alt="About"
            className=""
            height={1000}
            width={1600}
          />
          <div className="flex flex-col px-16 mt-10 text-white gap-3 py-3 pb-16">
            <h1 className="text-primary text-2xl lg:text-3xl">Flag revisions and adjustments<br/> for AI and expert</h1>
            <p className=" text-md lg:text-lg">Eva's AI will adjust the video based on revisions and feedback while a human expert will verify and correct the final output.</p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default AIProcess;
