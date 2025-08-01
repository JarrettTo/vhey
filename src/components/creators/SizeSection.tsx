"use client";
import React, { useState } from 'react'

const SizeSection = () => {
  const [value, setValue] = useState(5000);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  const formatValue = (val: number) => {
    if (val >= 100000000) return '100M+';
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
    return val.toString();
  };

  return (
    <section className="bg-white py-10 md:py-20 px-8">
      <div className="mx-auto w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-instrument-serif font-normal text-darkgreen text-center">
          Size doesn't matter.
        </h2>
        <p className="mt-2 text-lg md:text-lg max-w-xl font-normal text-darkgreen text-center">Not to us anyway! Eva serves all creators, regardless of where they are in their journey.</p>
        <button onClick={() => window.location.href = '/creators/contact'} className="mt-8 bg-primary text-darkgreen text-xl items-center px-10 py-4 rounded-full">
          Join Eva
        </button>
        {/* Slider Container */}
        <div className="w-full max-w-4xl mt-12">
          {/* Slider */}
          <input
            type="range"
            min="5000"
            max="5000000"
            value={value}
            onChange={handleSliderChange}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #DFEA96 0%, #DFEA96 ${((value - 5000) / (5000000 - 5000)) * 100}%, #E5E7EB ${((value - 5000) / (5000000 - 5000)) * 100}%, #E5E7EB 100%)`
            }}
          />
          
          {/* Legends */}
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>5K</span>
            <span>5M+</span>
          </div>
          
          {/* Current Value Display */}
          <div className="text-center mt-4">
            <span className="text-3xl font-bold text-darkgreen">{formatValue(value)}</span>
            <span className="text-lg text-gray-600 ml-2">followers</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SizeSection;