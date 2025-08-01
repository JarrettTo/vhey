"use client";
import React from 'react';

export default function StrategyPage() {
  const trustedItems = [
    {
      id: 1,
      header: "50+",
      subheader: "Creators"
    },
    {
      id: 2,
      header: "4-5x",
      subheader: "Physical events a year"
    }
  ];
  return (
    <main>
      <section className="bg-white mt-20 md:mt-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl overflow-hidden relative py-10">
            {/* Background image with grayscale filter */}
            <div 
              className="absolute inset-0"
             
            ></div>
                      
                         {/* Content */}
                         <div className="relative z-10 h-full flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-0 gap-6 md:gap-0">
               <div className="flex flex-col items-start gap-4 md:gap-6">
                 <h1 className="text-3xl md:text-4xl lg:text-6xl font-instrument-serif font-normal text-darkgreen">
                 Network and Community
                 </h1>
                 <p className="text-base md:text-xl text-darkgreen leading-relaxed max-w-2xl">
                 Join our tight-knit circles and events and connect with other likeminded creators.
                 </p>
               </div>
               <button onClick={() => window.location.href = '/creators/contact'} className="bg-primary text-darkgreen text-lg md:text-xl px-8 md:px-10 py-3 md:py-4 rounded-full hover:bg-opacity-90 transition-colors duration-200 w-fit">
                 Try it
               </button>
             </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 px-8">
         <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
             {/* First Rounded Square */}
             <div className="rounded-xl overflow-hidden relative h-64 md:h-80">
               {/* Background image with grayscale filter */}
               <div 
                 className="absolute inset-0"
                 style={{
                   backgroundImage: 'url("/images/creators/network/1.jpg")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   filter: 'grayscale(100%)',
                 }}
               ></div>
               
               {/* Overlay for better text readability */}
               <div className="absolute inset-0 bg-darkgreen bg-opacity-70 mix-blend-multiply"></div>
               
               {/* Content */}
               <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                 <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 font-eastlane">
                   Workshops and events
                 </h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
                  We host regular workshops and events to help you develop as a creator and grow your network with other creators.
                 </p>
               </div>
             </div>

             {/* Second Rounded Square */}
             <div className="rounded-xl overflow-hidden relative h-64 md:h-80">
               {/* Background image with grayscale filter */}
               <div 
                 className="absolute inset-0"
                 style={{
                   backgroundImage: 'url("/images/creators/network/2.jpg")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   filter: 'grayscale(100%)',
                 }}
               ></div>
               
               {/* Overlay for better text readability */}
               <div className="absolute inset-0 bg-darkgreen bg-opacity-70 mix-blend-multiply"></div>
               
               {/* Content */}
               <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                 <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 font-eastlane">
                   Collaborate with other creators
                 </h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
                    Eva provides a platform and programs for creators to create content, collaborate, and grow together.
                 </p>
               </div>
               
             </div>
             </div>
         </div>
       </section>
      <section className="bg-white py-10 md:py-20 px-8 md:px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* First div - Trusted by creators */}
                        <div className="text-start">
                <h2 className="text-4xl md:text-5xl font-instrument-serif font-normal text-darkgreen">
                Join a tight-knit community of creators
                </h2 >
                <p className="mt-5 text-lg md:text-xl font-normal text-darkgreen text-start">Be a part of our community that enables creators to collaborate, learn, and exchange ideas with each other.</p>
                <div 
                  className="mt-8 w-full h-48 rounded-xl"
                  style={{
                    backgroundImage: 'url("/images/creators/network/3.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </div>

            {/* Second div - 3 stacked elements */}
            <div className="space-y-0 px-6">
              {trustedItems.map((item, index) => (
                <div key={item.id}>
                  <div className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
                    <h3 className="text-4xl md:text-5xl font-instrument-serif text-darkgreen font-eastlane">
                      {item.header}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.subheader}
                    </p>
                  </div>
                  
                  {/* Divider line - only show if not the last item */}
                  {index < trustedItems.length - 1 && (
                    <div className="h-px bg-darkgreen opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
                 </div>
       </section>
       
       {/* Two Rounded Squares Section */}
    
      
    </main>
  );
} 