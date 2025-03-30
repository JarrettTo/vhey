"use client";

import Image from "next/image";

const Benefits = () => {
  const benefits = [
    {
      icon: "/images/benefits/icon1.svg",
      title: "Manage more<br/>creators and talent",
      highlight: "creators and talent",
      description: "Eva helps managers take care of manual and repetitive tasks, freeing them up to handle more creators and source more deals driving more revenue for creators and the business"
    },
    {
      icon: "/images/benefits/icon2.svg",
      title: "Source and track more<br/>deals and opportunities",
      highlight: "deals and opportunities",
      description: "Eva helps managers identify high-fit brands, auto-respond to inbound offers, and surface follow-up opportunities from past convos—so no deal slips through the cracks."
    },
    {
      icon: "/images/benefits/icon3.svg",
      title: "Improve influencer<br/>growth and retention",
      highlight: "growth and retention",
      description: "Eva helps managers stay on top of content schedules, performance insights, and brand feedback—ensuring influencers feel supported and set up to grow long-term."
    }
  ];

  const renderTitle = (title: string, highlight: string) => {
    // First split by line breaks
    const lines = title.split('<br/>');
    
    return lines.map((line, lineIndex) => {
      // Then split each line by the highlight text
      const parts = line.split(highlight);
      
      return (
        <span key={lineIndex}>
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < parts.length - 1 && (
                <span className="text-[#ADBC42]">{highlight}</span>
              )}
            </span>
          ))}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <section className="w-full py-20 px-10 md:px-0">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-3xl lg:text-4xl text-start text-dark mb-12">
          <span className="text-[#ADBC42]">Eva</span> helps talent and<br/>
          influencer managers
        </h1>

        <div className="w-full h-[1px] bg-[#ECECEC] mb-16"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col h-full">
              <div className="flex-shrink-0 mb-4">
                <Image
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  width={130}
                  height={130}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-normal mb-4">
                  {renderTitle(benefit.title, benefit.highlight)}
                </h2>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits; 