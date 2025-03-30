"use client";

import Image from "next/image";
import { useState } from "react";

const Integrations = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const dropdowns = [
    {
      title: "Communicate on any channel",
      content: "Eva can communicate with clients, managers, and creators on email, WhatsApp, Telegram, Slack, Hubspot, and even Instagram."
    },
    {
      title: "Data and Insights from anywhere",
      content: "Eva is able to track and aggregate data and insights from social media platforms including YouTube, TikTok, and Instagram."
    },
    {
      title: "No need to learn new tools",
      content: "Eva learns how to use your tools and systems, not the other way around."
    }
  ];

  return (
    <section
      id="integrations"
      className="pb-8 w-full dark:bg-dark-2 lg:pb-[70px] overflow-hidden py-10 px-5 md:px-0"
      style={{
        backgroundImage: 'url("/images/integrations/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full flex flex-col md:flex-row items-center relative z-10">
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8 lg:px-28">
          <div className="text-center md:text-left w-full">
            <h2 className="mb-8 text-2xl font-normal text-dark text-center lg:text-start lg:text-dark dark:text-white sm:text-4xl md:text-2xl lg:text-4xl md:leading-[1.2]">
            <span className="text-[#ADBC42] font-bold">Eva</span> masters all the tools and
              systems you already love.
            </h2>
            
            <div className="space-y-4">
              {dropdowns.map((dropdown, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#D7E47D]"></div>
                      <span className="text-lg font-medium">{dropdown.title}</span>
                    </div>
                    <span className="text-2xl">{openDropdown === index ? '−' : '+'}</span>
                  </button>
                  {openDropdown === index && (
                    <div className="pb-4 text-gray-600">
                      {dropdown.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full px-2 py-2 mt-8 md:mt-0 lg:px-20 lg:py-20 md:w-1/2 flex items-center justify-center">
          <Image
            src="/images/integrations/thumbnail.svg"
            alt="Integrations Thumbnail"
            width={600}
            height={400}
            className="w-4/5 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Integrations; 