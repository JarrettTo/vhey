import Link from "next/link";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";
import SectionTitleCream from "../Common/SectionTitle2";

const Faq = () => {
  return (
    <section id="faq" className="relative z-20 overflow-hidden pb-8 pt-10 dark:bg-dark lg:pb-[50px] lg:pt-[60px]">
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
          className="mt-5 inline-block rounded-3xl border border-transparent bg-primary px-7 py-3 text-base font-medium text-[#545A2B] transition hover:bg-white hover:text-[#545A2B]"
        >
          Have more questions?
        </Link>
        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How does Eva handle task execution?"
              answer="Eva listens to all the conversations between creators, managers, and clients and takes action based on the context of the conversation, whether that be creating a campaign record, drafting a media kit, or filing an invoice. "
            />

            <SingleFaq
              question="What kind of tasks can Eva handle?"
              answer="Eva can handle a wide range of tasks including handling inquiries and conversations between creators and clients, managing deliverables and reminding creators of deadlines, managing payments and royalties, creating media kits and proposals, managing creator social media accounts, and so much more."
            />

            <SingleFaq
              question="Does Eva have its own platform?"
              answer="Eva has its own platform that users can access to monitor creator dashboards, deals, earnings, and more. Users can also create media kits and proposals using live creator analytics and AI insights. It's a one-stop-shop for all creator management needs that is self-maintained by Eva, an AI agent."
            />

            <SingleFaq
              question="How does Eva's AI create media kits and proposals?"
              answer="Eva uses live creator analytics and AI insights to create media kits and proposals. It can even draft and highlight key previous collaborations and posts depending on the context of the recipient. Users can also make adjustments and edits to the media kit before sending it out via a shareable link."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="What payment methods does Eva support for invoicing?"
              answer="Eva supports all major payment methods including credit card, PayPal, and bank transfer. Users can also set up their own payout structure and split the earnings between themselves and their creators."
            />

            <SingleFaq
              question="How does Eva track creator analytics?"
              answer="Users can track creator analytics including views, engagement, audience data, and more using 1st party data from creator platforms like YouTube, TikTok, and Instagram. All creators have to do is connect their accounts to Eva and the data will be automatically updated."
            />

            <SingleFaq
              question="How does Eva handle inquiries and conversations between creators and clients?"
              answer="Eva integrates into channels like Email, Slack, and WhatsApp to listen for inquiries and conversations between creators and clients. Using creator data such as their rates, schedule, analytics, media kits, and more, Eva can take action on behalf of the creator, whether that be responding to rate inquiries or sending a proposal."
            />

            <SingleFaq
              question="How does Eva handle social media management?"
              answer="Once creators connect their social media accounts to the platform, Eva can draft captions, schedule posts, and monitor engagement based on campaign deals and agreements, as well as creator preferences."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
