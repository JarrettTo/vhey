"use client";
import React from 'react';

const TechSection = () => {
  return (
    <section className="bg-white py-10 md:py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl overflow-hidden relative h-96 md:h-96">
          {/* Background image with grayscale filter */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/images/creators/tech/3.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)',
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-darkgreen bg-opacity-70 mix-blend-multiply"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex items-center p-6 md:p-12">
            <div className="flex flex-col items-start gap-4 md:gap-8 w-full">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-instrument-serif font-normal text-white w-full md:w-1/3">
                No creator is an island. We'll walk with you.
              </h2>
              <button onClick={() => window.location.href = '/creators/contact'} className="mt-4 md:mt-8 bg-primary text-darkgreen text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-opacity-90 transition-colors duration-200 w-fit">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection; 