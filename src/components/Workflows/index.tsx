"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import Lottie from "lottie-react";
import inquiriesAnimation from "/public/images/workflows/Inquiries.json";
import deliverablesAnimation from "/public/images/workflows/Deliverables.json";
import mediakitAnimation from "/public/images/workflows/Media Kit.json";
import invoicingAnimation from "/public/images/workflows/Invoicing.json";
import socialMediaAnimation from "/public/images/workflows/Social Media Management.json";
const Workflows = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>("Handling Inquiries");
  
  return (
    <section
      id="ai"
      className=" pt-20 w-full dark:bg-dark-2 lg:pt-[40px] overflow-hidden"
      style={{
        backgroundImage: 'url("/images/workflows/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full flex flex-col items-center md:items-start  relative z-10  ">
        <div className="flex flex-wrap px-4 md:px-8 lg:px-28">
          <div
            className={`wow fadeInUp w-full`}
            data-wow-delay=".1s"
            style={{ maxWidth: "905px" }}
          >
            <h2 className="mb-4 text-2xl font-normal text-dark text-center lg:text-start lg:text-dark dark:text-white sm:text-4xl md:text-3xl lg:text-4xl md:leading-[1.2]">
              <span className="text-[#ADBC42]">Eva</span> does the <span className="text-[#ADBC42]">boring</span> and <span className="text-[#ADBC42]">manual</span> work so your team can <span className="text-[#ADBC42]">do more</span> and <span className="text-[#ADBC42]">focus on growth</span>
            </h2>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 px-4 md:px-8 lg:px-28">
          {[
            'Handling Inquiries',
            'Managing Deliverables',
            'Invoicing',
            'Media Kit Generation',
            'Social Media Management'
          ].map((workflow) => (
            <button
              key={workflow}
              onClick={() => setSelectedWorkflow(workflow)}
              className={`text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedWorkflow === workflow ? 'bg-[#ADBC42] text-white' : 'bg-transparent text-[#101517] hover:bg-[#ADBC42] hover:text-white'
              }`}
            >
              {workflow}
            </button>
          ))}
        </div>

        <div className="w-full h-[400px] bg-[#D7E47D] mt-8 flex items-center justify-center">
          {selectedWorkflow === "Handling Inquiries" && (
            <Lottie 
              animationData={inquiriesAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
            />
          )}
          {selectedWorkflow === "Managing Deliverables" && (
            <Lottie 
              animationData={deliverablesAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
            />
          )}
          {selectedWorkflow === "Media Kit Generation" && (
            <Lottie 
              animationData={mediakitAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
            />
          )}
          {selectedWorkflow === "Invoicing" && (  
            <Lottie 
              animationData={invoicingAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
            />
          )}
          {selectedWorkflow === "Social Media Management" && (
            <Lottie 
              animationData={socialMediaAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }} 
            />
          )}
        </div>

       
      </div>
    </section>
  );
};

export default Workflows;

