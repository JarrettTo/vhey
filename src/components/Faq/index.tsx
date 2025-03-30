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
              question="How does Eva help influencers create content faster?"
              answer="Eva's AI-powered editing automates tedious tasks like trimming, arranging clips, adding effects, and syncing to music, while human experts refine the final output to ensure quality and style consistency."
            />

            <SingleFaq
              question="Can Eva help me negotiate brand deals?"
              answer="Yes! Eva assists in sourcing and negotiating brand deals by analyzing contracts, preparing responses, and streamlining communication with brands to ensure the best possible partnerships."
            />

            <SingleFaq
              question="What kind of content can Eva help create?"
              answer="Eva can handle everything from short-form social media videos (TikToks, Reels, YouTube Shorts) to long-form YouTube content, podcast clips, and even ad creatives."
            />

            <SingleFaq
              question="Do I still have creative control over my content?"
              answer="Absolutely! You provide your pegs, scripts, and vision, and Eva ensures the final output aligns with your unique style while making the process significantly faster."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How does Eva ensure my content matches my brand style?"
              answer="Eva learns from your past content, reference videos, and provided scripts to replicate your unique style. Human experts further refine the edits to ensure brand consistency."
            />

            <SingleFaq
              question="Can Eva handle bulk content creation?"
              answer="Yes! Eva is designed to handle batch processing, helping you produce multiple videos efficiently while maintaining high-quality edits."
            />

            <SingleFaq
              question="How much does it cost?"
              answer="Eva offers flexible pricing based on usage, whether you need occasional edits or full-scale content automation. Plans vary based on AI processing and human review requirements."
            />

            <SingleFaq
              question="What's the turnaround time for content creation?"
              answer="Depending on the complexity, Eva can deliver fully edited videos in as little as an hour to 24 hours, significantly reducing traditional editing time."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
