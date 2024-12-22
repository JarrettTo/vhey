"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LinearGradient } from "react-text-gradients";

const About = () => {
  const [selectedRegion, setSelectedRegion] = useState("usa");
  const [imageDisplay, setImageDisplay] = useState("/images/about/us.png")
  const regions = [
    { id: "usa", name: "USA" },
    { id: "canada", name: "Canada" },
    { id: "australia", name: "Australia/New Zealand" },
    { id: "europe", name: "Europe" },
  ];
  useEffect(()=>{
    if(selectedRegion=="usa"){
      setImageDisplay("/images/about/us.png")
    }
    else if(selectedRegion=="canada"){
      setImageDisplay("/images/about/canada.png")
    }
    else if(selectedRegion=="australia"){
      setImageDisplay("/images/about/aus.png")
    }
    else if(selectedRegion=="europe"){
      setImageDisplay("/images/about/eu.png")
    }
  },[selectedRegion])
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mb-12 lg:mb-0 flex flex-col items-center">
                <h2 className="mb-5 max-w-[840px] text-3xl text-center font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  You need help. But hiring is <span><LinearGradient gradient={['to left', '#41D1FF,#4177FF']}>expensive</LinearGradient></span> and <span><LinearGradient gradient={['to left', '#41D1FF,#4177FF']}>eats up profit margins.</LinearGradient></span>
                </h2>
                <div className="flex flex-wrap gap-4">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`rounded-full px-6 py-2 text-base font-medium transition duration-300 ease-in-out
                        ${
                          selectedRegion === region.id
                            ? "bg-primary text-white" // Selected state
                            : "border border-gray-500 text-gray-500 bg-transparent" // Default state
                        }
                        hover:border-primary hover:text-primary
                      `}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
                <div className="mt-12 py-6 max-w-[700px]">
                  <Image src={imageDisplay} width={3000} height={3000} alt="US salary"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
