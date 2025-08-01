"use client";
import React from 'react';

export default function DistributePage() {
  const trustedItems = [
    {
      id: 1,
      header: "78%",
      subheader: "Average increase in total reach and engagement"
    },
    {
      id: 2,
      header: "Global",
      subheader: "Reach and exposure to deals and opportunities"
    },
    {
      id: 3,
      header: "$0",
      subheader: "Upfront cost"
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
                   Distribute your content at scale.
                 </h1>
                 <p className="text-base md:text-xl text-darkgreen leading-relaxed max-w-2xl">
                    We localize and distribute your content across multiple platforms and regions to maximize reach and develop new revenue streams.
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
                   backgroundImage: 'url("/images/creators/distribute/1.jpg")',
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
                   Adapt and Recycle Content
                 </h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
                    We use a combination of AI and human expertise to help you turn pieces of content into multiple formats. Whether that's clipping streams into multiple shorts or compiling clips, we've got you covered.
                 </p>
               </div>
             </div>

             {/* Second Rounded Square */}
             <div className="rounded-xl overflow-hidden relative h-64 md:h-80">
               {/* Background image with grayscale filter */}
               <div 
                 className="absolute inset-0"
                 style={{
                   backgroundImage: 'url("/images/creators/deals/4.jpg")',
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
                   Distribution to other platforms and regions
                 </h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
                  We cross-post and distribute your content to other platforms like TikTok, YouTube, Instagram, and Xiao Hong Shu to maximize reach and engagement and unlock new audiences and income streams.
                 </p>
               </div>
               
             </div>
             <div className="rounded-xl overflow-hidden relative h-64 md:h-80">
               {/* Background image with grayscale filter */}
               <div 
                 className="absolute inset-0"
                 style={{
                   backgroundImage: 'url("/images/creators/distribute/3.jpg")',
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
                   Localization and Translation
                 </h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
                  We localize and translate your content to the target audience using AI and human expertise, ensuring it resonates with the local culture and language.
                 </p>
               </div>
               
             </div>
             <div className="rounded-xl overflow-hidden relative h-64 md:h-80">
               {/* Background image with grayscale filter */}
               <div 
                 className="absolute inset-0"
                 style={{
                   backgroundImage: 'url("/images/creators/deals/1.jpg")',
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
                   Take advantage of new revenue streams
                 </h3>
                 <p className="text-gray-200 text-sm leading-relaxed">
                    By posting content in creator-fund supported regions, you can unlock new revenue streams and grow your income.
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
                  AI Powered Distribution
                </h2 >
                <p className="mt-5 text-lg md:text-xl font-normal text-darkgreen text-start">Eva uses advanced AI technology to localize and distribute your content across multiple platforms and regions to maximize reach and develop new revenue streams.</p>
                <div 
                  className="mt-8 w-full h-48 rounded-xl"
                  style={{
                    backgroundImage: 'url("/images/creators/deals/3.jpg")',
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
    
       {/* How it works Section */}
       <section className="bg-white py-10 md:py-20 px-8">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-instrument-serif font-normal text-darkgreen mb-4">
               How it works
             </h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
             {/* Steps - Left side */}
             <div className="space-y-8">
               {[
                 {
                   step: 1,
                   title: "You send us your content via Telegram with any specific posting instructions"
                 },
                 {
                   step: 2,
                   title: "AI automatically adapts your content for each platform's format and audience preferences"
                 },
                 {
                   step: 3,
                   title: "Content gets translated, dubbed, or clipped based on what performs best per region"
                 },
                 {
                   step: 4,
                   title: "Our team reviews everything to ensure it matches your brand voice and style"
                 },
                 {
                   step: 5,
                   title: "Content goes live across all your platforms on optimized schedules for maximum reach"
                 }
               ].map((item, index) => (
                 <div key={item.step} className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                   <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                     <span className="text-darkgreen font-bold text-lg">{item.step}</span>
                   </div>
                   <div className="flex-1">
                     <p className="text-base md:text-lg text-darkgreen leading-relaxed">
                       {item.title}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
             
             {/* Image - Right side */}
             <div className="rounded-xl overflow-hidden relative h-64 md:h-96">
               {/* Background image with grayscale filter */}
               <div 
                 className="absolute inset-0"
                 style={{
                   backgroundImage: 'url("/images/creators/deals/5.jpg")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                 }}
               ></div>
               
               {/* Overlay for better text readability */}
             </div>
           </div>
         </div>
       </section>
       
    </main>
  );
} 