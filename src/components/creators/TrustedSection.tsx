import React from 'react';

const TrustedSection = () => {
  const trustedItems = [
    {
      id: 1,
      header: "500+",
      subheader: "Brand deals handled per year"
    },
    {
      id: 2,
      header: "$500,000+",
      subheader: "In revenue handled for creators yearly"
    },
    {
      id: 3,
      header: "34%",
      subheader: "Average increase in revenue for creators"
    }
  ];

  return (
    <section className="bg-white py-10 md:py-20 px-8 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* First div - Trusted by creators */}
                      <div className="text-start">
              <h2 className="text-4xl md:text-5xl font-instrument-serif font-normal text-darkgreen">
                Trusted by creators and brands
              </h2 >
              <p className="mt-5 text-lg md:text-xl font-normal text-darkgreen text-start">Some of the largest creators already utilize Eva's offerings to supercharge their growth and influence to generate more opportunities and income.</p>
              <div 
                className="mt-8 w-full h-48 rounded-xl"
                style={{
                  backgroundImage: 'url("/images/creators/trusted/2.jpg")',
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
  );
};

export default TrustedSection; 