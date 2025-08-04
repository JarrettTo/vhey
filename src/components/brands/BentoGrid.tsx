"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BrandsBentoGrid = () => {
  const router = useRouter();
  
  // Slideshow data for the first element
  const slideshowData = [
    {
      id: 1,
      title: "Adidas AdiClub 2025",
      subtitle: "See our recent campaigns and projects.",
      image: "/images/brands/bento/1.jpg"
    },
    {
      id: 2,
      title: "Maybelline NY Super Stay Launch",
      subtitle: "See our recent campaigns and projects.",
      image: "/images/brands/bento/2.jpg"
    },
    {
      id: 3,
      title: "Pure Culture Summer Campaign",
      subtitle: "See our recent campaigns and projects.",
      image: "/images/brands/bento/3.jpeg"
    },
    {
      id:4,
      title: "GetKlean Challenge Accepted 2025",
      subtitle: "See our recent campaigns and projects.",
      image: "/images/brands/bento/4.JPG"
    }
  ];
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowData.length);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [slideshowData.length]);
  
  const gridItems = [
    {
      id: 1,
      title: "Our projects",
      subtitle: "See projects and brands we've helped grow with data-driven influencer partnerships and campaigns.",
      className: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
      url: null // No button for first element
    },
    {
      id: 2,
      title: "Data-driven influencer campaigns",
      subtitle: "Eva uses proprietary AI to find and deploy the best influencers for your brand and campaign.",
      className: "col-span-1 md:col-span-2 row-span-1",
      url: "/creators/strategy"
    },
    {
      id: 3,
      title: "Live campaign tracking and reporting",
      subtitle: "Measure and report on the success of your campaigns in real-time.",
      className: "col-span-1 row-span-1",
      url: "/creators/network"
    },
    {
      id: 4,
      title: "Global creator network",
      subtitle: "We work with creators from all over the world across different niches.",
      className: "col-span-1 md:col-span-1 row-span-1 md:row-span-1",
      url: "/creators/deals"
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
              {/* Special handling for first element (slideshow) */}
              {item.id === 1 ? (
                <>
                  {/* Slideshow background images */}
                  {slideshowData.map((slide, index) => (
                    <div 
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        backgroundImage: `url('${slide.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                  ))}
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  
                  {/* Slideshow content */}
                  <div className="relative z-10 flex flex-col justify-end h-full">
                    <div className="transition-opacity duration-1000">
                      <h3 className="text-2xl md:text-3xl font-instrument-serif text-white mb-3 font-eastlane">
                        {slideshowData[currentSlide].title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4">
                        {slideshowData[currentSlide].subtitle}
                      </p>
                    </div>
                    
                    {/* Slideshow indicators */}
                    <div className="flex justify-center space-x-2 mt-4">
                      {slideshowData.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            index === currentSlide ? 'bg-primary' : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Regular background image with grayscale filter */}
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
                        onClick={() => {
                          // Scroll to specific sections based on item ID
                          if (item.id === 2) {
                            const element = document.getElementById('ai');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          } else if (item.id === 3) {
                            const element = document.getElementById('tracking');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          } else if (item.id === 4) {
                            const element = document.getElementById('network');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                          }
                        }}
                        className="bg-primary text-darkgreen rounded-lg px-4 py-2 text-sm font-semibold hover:bg-opacity-90 transition-colors duration-200 w-fit"
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsBentoGrid; 