"use client";
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const Contact = () => {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "I'm interested in getting a Virtual Assistant for my HVAC business",
  });

  useEffect(() => {
    // Fetch query parameters
    const queryPlan = searchParams.get("plan") || "";
    const queryEmail = searchParams.get("email") || "";

    // Update formData using a single state update
    setFormData((prev) => ({
      ...prev,
      email: queryEmail || prev.email,
      message: queryPlan
        ? `I'm interested in getting a Virtual Assistant for my HVAC business. I'd like to select the ${queryPlan} plan.`
        : prev.message,
    }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div
        className="absolute left-0 top-0 -z-[1] h-1/2 w-full dark:bg-dark-700 lg:h-[45%] xl:h-1/2"
        style={{
          backgroundImage: "url('/images/CTA/banner.jpg')",
          backgroundSize: "100% 100%",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-4/12 xl:w-4/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[250px]">
                <span className="mb-6 block text-base font-medium text-white dark:text-white">
                  30-minute Discovery Call
                </span>
                <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-white dark:text-white">
                  Get a Free Consultation
                </h2>
                <p className="mt-6 mb-8 pb-12 text-white pr-12">Schedule a quick call for us to understand your goals and how we can help you achieve them.</p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-8/12 xl:w-8/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Schedule a Call
              </h3>
              <form>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Adam Gelius"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+885 1254 5211 552"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Type your message here"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                  >
                    Schedule Call
                  </button>
                  <p className="mt-6">Our experts will be in touch within the day to schedule your call.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
