"use client";
import React from 'react';

const CreatorsHero = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center" style={{
      backgroundImage: 'url("/images/hero/background.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="text-center z-10 px-16">
        <h1 className="text-4xl md:text-7xl font-eastlane font-normal text-darkgreen tracking-tight mb-6  leading-tight">
          amplifying the next<br/>generation of <span className="font-instrument-serif tracking-tight italic">influence</span>.
        </h1>
        <p className="text-xl md:text-2xl mx-auto px-4 text-[#798143] font-light max-w-2xl">
          the engine powering creators to break barriers, reach new audiences, and unlock their full potential.
        </p>
        <button 
        onClick={() => window.location.href = '/creators/contact'}
        className="mt-8 bg-primary text-darkgreen text-xl items-center px-10 py-4 rounded-full hover:bg-opacity-90 transition-colors duration-200"
      >
        Get Started
      </button>
      </div>
    </section>
  )
};

export default CreatorsHero; 