"use client";
import React from 'react';

const BrandsHero = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center" style={{
      backgroundImage: 'url("/images/hero/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="text-center z-10 px-16">
        <h1 className="text-4xl md:text-7xl font-eastlane font-normal text-darkgreen tracking-tight mb-6  leading-tight">
          building brand culture<br/>with <span className="font-instrument-serif tracking-tight italic">influence</span>.
        </h1>
        <p className="text-xl md:text-2xl mx-auto px-4 text-[#798143] font-light max-w-2xl">
          Data-driven influencer partnerships powered by AI insights that deliver measurable brand growth.        </p>
        <button 
        onClick={() => window.location.href = '/brands/contact'}
        className="mt-8 bg-primary text-darkgreen text-xl items-center px-10 py-4 rounded-full hover:bg-opacity-90 transition-colors duration-200"
      >
        Get Started
      </button>
      </div>
    </section>
  )
};

export default BrandsHero; 