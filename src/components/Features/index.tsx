import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section 
      className="py-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/images/features/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-14 md:px-8 lg:px-28 relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div
            className={`wow fadeInUp w-full px-0 md:px-4 lg:px-8`}
            data-wow-delay=".1s"
            style={{ maxWidth: "805px" }}
          >
            <h2 className="mb-4 text-2xl font-normal text-center lg:text-start text-dark dark:text-white sm:text-4xl md:text-3xl lg:text-4xl md:leading-[1.2]">
              <span className="text-[#ADBC42]">Creators</span> and <span className="text-[#ADBC42]">talent managers</span> spend a lot of time doing <span className="text-[#ADBC42]">manual work</span>
            </h2>
            
          </div>
        </div>

        <div className="-mx-4 mt-10 md:mt-6 flex flex-wrap lg:justify-center lg:mt-10 gap-7">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
