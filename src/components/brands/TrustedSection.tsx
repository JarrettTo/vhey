import React from 'react';

const BrandTrustedSection = () => {
  const trustedItems = [
    {
      id: 1,
      header: "500+",
      subheader: "Brand deals handled per year"
    },
    {
      id: 2,
      header: "23M+",
      subheader: "Views generated for brands per year"
    },
    {
      id: 3,
      header: "3.1x",
      subheader: "Average ROI for brands in EMV"
    }
  ];

  return (
    <section className="bg-white py-10 md:py-20 px-8 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* First div - Trusted by creators */}
                      <div className="text-start">
              <h2 className="text-4xl md:text-5xl font-instrument-serif font-normal text-darkgreen">
                Trusted by top brands and creators
              </h2 >
              <p className="mt-5 text-lg md:text-xl font-normal text-darkgreen text-start">Top global brands already utilize Eva's data-driven offerings to supercharge brand growth and resonate with new audiences across multiple platforms.</p>
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
        
        {/* Brand Logos Section */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between  md:gap-12">
            {[1, 2, 3, 4, 5].map((logoId) => (
              <div key={logoId} className="flex-shrink-0">
                <img 
                  src={`/images/brands/trusted/${logoId}.svg`}
                  alt={`Brand logo ${logoId}`}
                  className="h-24 md:h-36 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTrustedSection; 