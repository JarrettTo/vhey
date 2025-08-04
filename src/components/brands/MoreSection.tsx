"use client";
import React from 'react';

const BrandMoreSection = () => {
  const moreItems = [
    {
      id: 1,
      header: "Flexible and Affordable",
      subheader: "From large mega campaigns to smaller micro-influencer projects, Eva provides flexible campaign options to fit your needs and budget.",
      bgImage: "/images/creators/more/3.jpg",
      scrollId: "flexible-affordable"
    },
    {
      id: 2,
      header: "Your Goals, Our Systems",
      subheader: "Eva uses advanced data, AI, and human expertise to optimize your influencer campaigns and maximize ROI based on your goals and budget.",
      bgImage: "/images/creators/more/2.jpg",
      scrollId: "goals-systems"
    },
  ];

  return (
    <section id="network" className="bg-white py-10 md:py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* First row - Header/Subheader on left, Button on right */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 gap-6 md:gap-0">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-instrument-serif font-normal text-darkgreen mb-4">
              Why Eva?
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Eva uses advanced AI technology to optimize your influencer campaigns and maximize ROI based on your goals and budget.
            </p>
          </div>
          <button onClick={() => window.location.href = '/brands/contact'} className="bg-primary text-darkgreen text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-opacity-90 transition-colors duration-200 w-fit">
            Get in touch
          </button>
        </div>

        {/* Second row - 3 horizontal rounded rectangles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {moreItems.map((item) => (
            <div
              key={item.id}
              id={item.scrollId}
              className="rounded-xl overflow-hidden relative h-64 md:h-80"
            >
              {/* Background image with grayscale filter */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${item.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',

                }}
              ></div>
              
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-darkgreen bg-opacity-70 mix-blend-multiply"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-3 font-eastlane">
                  {item.header}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.subheader}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMoreSection; 