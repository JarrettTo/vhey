import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="py-16 lg:bg-primary mx-9 md:mx-14 my-14 rounded-3xl">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div
            className={`wow fadeInUp w-full px-0 md:px-4 lg:px-8`}
            data-wow-delay=".1s"
            style={{ maxWidth: "635px" }}
          >
            <h2 className="mb-4 text-2xl font-bold text-primary text-center lg:text-start lg:text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Trades Businesses spend a lot of time doing <span className="text-secondary">manual work</span>
            </h2>
            <p className="text-base text-center lg:text-start font-light leading-relaxed text-primary lg:text-darkgreen lg:text-md text-sm text-black dark:text-dark-6 sm:leading-relaxed">
              Numerous manual and repetitive tasks consume valuable time that could be spent on scaling the business or enjoying personal activities.
            </p>
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
