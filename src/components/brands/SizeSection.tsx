import React from 'react'

const BrandSizeSection = () => {
  return (
    <section className="bg-white py-10 md:py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* First Row */}
        <div id="ai" className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div 
              className="w-full h-96 rounded-xl"
              style={{
                backgroundImage: 'url("/images/brands/features/1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-instrument-serif font-normal text-darkgreen mb-6">
              Work with the right creators for your campaign
            </h2>
            <p className="text-lg md:text-xl text-darkgreen leading-relaxed">
              Eva uses proprietary AI to find and deploy the best influencers for your brand and campaign. Our data-driven approach ensures maximum ROI and authentic brand partnerships.
            </p>
          </div>
        </div>
        
        {/* Second Row */}
        <div id="tracking" className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Image - First on mobile */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div 
              className="w-full h-96 rounded-xl"
              style={{
                backgroundImage: 'url("/images/brands/features/2.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          {/* Content - Second on mobile */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-instrument-serif font-normal text-darkgreen mb-6">
              Live campaign tracking and reporting
            </h2>
            <p className="text-lg md:text-xl text-darkgreen leading-relaxed">
              Measure and report on the success of your campaigns in real-time. Get detailed analytics, engagement metrics, and ROI tracking to optimize your influencer marketing strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSizeSection;