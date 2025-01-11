import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";
import SectionTitleCream from "../Common/SectionTitle2";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden pb-8 pt-10 dark:bg-dark lg:pb-[50px] lg:pt-[30px]">
      <div className="container flex flex-col items-center">
        <Image
          src="/images/element.svg"
          alt="About"
          className="pointer-events-none dark:hidden mx-auto mb-5"
          height={60}
          width={60}
        />
        <SectionTitleCream
          subtitle="FAQ"
          title="Frequently Asked Questions"
          paragraph=""
          width="640px"
          center
        />
        <Link
          href="/contact"
          className="mt-5 inline-block rounded-3xl border border-transparent bg-primary px-7 py-3 text-base font-medium text-darkgreen transition hover:bg-white hover:text-black"
        >
          Have more questions?
        </Link>
        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="What does an HVAC virtual assistant do?"
              answer="An HVAC virtual assistant handles administrative tasks like scheduling appointments, managing customer inquiries, processing invoices, and maintaining records, allowing you to focus on growing your business."
            />

            <SingleFaq
              question="What does Maria's AI Agents and Automations team do?"
              answer="Our AI Agents and Automations team automates repetitive tasks, improves efficiency, analyzes customer data for insights, and ensures faster, more accurate decision-making to optimize your business operations."
            />

            <SingleFaq
              question="Can the virtual assistant handle industry-specific tasks?"
              answer="Yes, our virtual assistants are trained to handle HVAC-specific tasks such as job dispatching, equipment tracking, maintenance scheduling, and customer follow-ups tailored to your business needs."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How do I ensure the assistant aligns with my business processes?"
              answer="We train your assistant based on your standard operating procedures (SOPs) and systems to ensure they integrate seamlessly into your workflow and understand your specific requirements."
            />

            <SingleFaq
              question="How do you ensure data security and privacy?"
              answer="We follow strict data security protocols, including encryption and secure access, to ensure your business and customer information are safe at all times."
            />
            <SingleFaq
              question="Can my virtual assistant handle personal tasks and work?"
              answer="Yes, your virtual assistant can assist with both personal and professional tasks. For example, they can help with scheduling appointments, managing your calendar, booking travel arrangements, handling laundry services, organizing errands, and more, making your life easier and more efficient."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
