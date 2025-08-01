"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const BentoGrid = () => {
  const router = useRouter();
  
  const gridItems = [
    {
      id: 1,
      title: "Our services and capabilities",
      subtitle: "See the AI powered engine that helps creators scale their platform, influence, and income.",
      className: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
      url: null // No button for first element
    },
    {
      id: 2,
      title: "Strategize growth and content",
      subtitle: "We craft tailored content and branding strategies to maximize growth based on data.",
      className: "col-span-1 md:col-span-2 row-span-1",
      url: "/creators/strategy"
    },
    {
      id: 3,
      title: "Network and Community",
      subtitle: "Join our events and connect with other likeminded creators.",
      className: "col-span-1 row-span-1",
      url: "/creators/network"
    },
    {
      id: 4,
      title: "Manage deals and negotiations",
      subtitle: "We handle inbound deals and actively source new opportunities for you to grow your platform and income.",
      className: "col-span-1 md:col-span-1 row-span-1 md:row-span-2",
      url: "/creators/deals"
    },
    {
      id: 5,
      title: "Edit videos and content",
      subtitle: "We help handle editing and post-production so you can focus on creating more content.",
      className: "col-span-1 row-span-1",
      url: "/creators/editing"
    },
    {
      id: 6,
      title: "Distribute your content at scale",
      subtitle: "We localize and distribute your content across multiple platforms and regions to maximize reach and develop new revenue streams.",
      className: "col-span-1 md:col-span-2 row-span-1",
      url: "/creators/distribute"
    },
  ];

  return (
    <section className="bg-white py-10 md:py-20 px-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" style={{ 
          gridAutoRows: '300px',
          gridTemplateRows: 'repeat(auto-fit, 300px)',
          minHeight: 'auto'
        }}>
          {gridItems.map((item) => (
                        <div
              key={item.id}
              className={`${item.className} rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-gray-200 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Background image with grayscale filter */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('/images/creators/bento/${item.id}.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(100%)',
                }}
              ></div>
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-darkgreen bg-opacity-90 mix-blend-multiply"></div>
                
                <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="text-2xl md:text-3xl font-instrument-serif text-white mb-3 font-eastlane">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-4">
                  {item.subtitle}
                </p>
                {item.url && (
                  <button 
                    onClick={() => router.push(item.url)}
                    className="bg-primary text-darkgreen rounded-lg px-4 py-2 text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200 w-fit"
                  >
                    Learn More
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid; 