"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { LinearGradient } from "react-text-gradients";
import Lottie from "lottie-react";
import inquiriesAnimation from "/public/images/workflows/Inquiries.json";
import deliverablesAnimation from "/public/images/workflows/Deliverables.json";
import mediakitAnimation from "/public/images/workflows/Media Kit.json";
import invoicingAnimation from "/public/images/workflows/Invoicing.json";
import socialMediaAnimation from "/public/images/workflows/Social Media Management.json";
import { useRouter } from "next/navigation";

type WorkflowType = 'Handling Inquiries' | 'Managing Deliverables' | 'Invoicing' | 'Media Kit Generation' | 'Social Media Management';

const Workflows = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<WorkflowType>("Handling Inquiries");
  const lottieRef = useRef<any>(null);
  const router = useRouter();

  const handleReplay = () => {
    if (lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true);
    }
  };

  const handleLearnMore = () => {
    const routeMap: Record<WorkflowType, string> = {
      'Handling Inquiries': '/contact',
      'Managing Deliverables': '/contact',
      'Invoicing': '/contact',
      'Media Kit Generation': '/contact',
      'Social Media Management': '/contact'
    };
    router.push(routeMap[selectedWorkflow]);
  };
  
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
          {([
            'Handling Inquiries',
            'Managing Deliverables',
            'Invoicing',
            'Media Kit Generation',
            'Social Media Management'
          ] as WorkflowType[]).map((workflow) => (
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

        <div className="w-full h-[600px] bg-[#D7E47D] mt-8 flex items-center justify-center relative">
          {selectedWorkflow === "Handling Inquiries" && (
            <Lottie 
              animationData={inquiriesAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
              lottieRef={lottieRef}
            />
          )}
          {selectedWorkflow === "Managing Deliverables" && (
            <Lottie 
              animationData={deliverablesAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
              lottieRef={lottieRef}
            />
          )}
          {selectedWorkflow === "Media Kit Generation" && (
            <Lottie 
              animationData={mediakitAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
              lottieRef={lottieRef}
            />
          )}
          {selectedWorkflow === "Invoicing" && (  
            <Lottie 
              animationData={invoicingAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }}
              lottieRef={lottieRef}
            />
          )}
          {selectedWorkflow === "Social Media Management" && (
            <Lottie 
              animationData={socialMediaAnimation} 
              loop={true}
              autoplay={true}
              style={{ width: '80%', height: '80%' }} 
              lottieRef={lottieRef}
            />
          )}
          
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={handleLearnMore}
              className="px-6 py-2 rounded-full bg-white text-[#101517] hover:bg-[#ADBC42] hover:text-white transition-all duration-200"
            >
              Learn more
            </button>
            <button
              onClick={handleReplay}
              className="px-6 py-2 rounded-full bg-white text-[#101517] hover:bg-[#ADBC42] hover:text-white transition-all duration-200"
            >
              Replay
            </button>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Workflows;

