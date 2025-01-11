import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative z-10 overflow-hidden py-20 lg:py-[115px] px-6 sm:px-2 md:px-0"
    style={{
      backgroundImage: "url('/images/CTA/banner.jpg')",
      backgroundSize: "100% 100%", // Ensures the image fits the width and height of the div
      backgroundPosition: "top", // Centers the image
    }}
    >
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap items-stretch">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[570px] text-center">
                <h2 className="mb-2.5 text-3xl font-bold text-cream md:text-[38px] md:leading-[1.44]">
                  <span>Want to Know More?</span>
                  <span className="text-3xl font-normal text-primary md:text-[40px]">
                    {" "}
                    Get a Free Consultation{" "}
                  </span>
                </h2>
                <p className="mx-auto mb-6 mt-2 max-w-[515px] text-base font-light leading-[1.5] text-cream">
                  Hop on a quick 30-minute discovery call to see how our experts can help you scale your business and take back time.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-md border border-transparent bg-primary px-7 py-3 text-base font-medium text-darkgreen transition hover:bg-white hover:text-black"
                >
                  Schedule a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute left-0 top-0">
          <svg
            width="495"
            height="470"
            viewBox="0 0 495 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="55"
              cy="442"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="446"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
              stroke="white"
              strokeOpacity="0.08"
              strokeWidth="12"
            />
          </svg>
        </span>
        <span className="absolute bottom-0 right-0">
          <svg
            width="493"
            height="470"
            viewBox="0 0 493 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="462"
              cy="5"
              r="138"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="50"
            />
            <circle
              cx="49"
              cy="470"
              r="39"
              stroke="white"
              strokeOpacity="0.04"
              strokeWidth="20"
            />
            <path
              d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
              stroke="white"
              strokeOpacity="0.06"
              strokeWidth="13"
            />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default CallToAction;
