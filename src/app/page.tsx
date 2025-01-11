import About from "@/components/About";
import Benefits from "@/components/Benefits";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Personal from "@/components/Personal";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import StaffingProfiles from "@/components/Profiles";
import Steps from "@/components/Steps";
import Tasks from "@/components/Tasks";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import AIProcess from "@/components/AI";
import Trained from "@/components/Trained";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import Extraction from "@/components/Extraction";
import Comparison from "@/components/Comparison";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Play Next.js - SaaS Starter Kit and Boilerplate for Next.js",
  description: "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <div
        style={{
          backgroundImage: "url('/images/mobile.jpg')",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents repeating
        }}
      >
        <ScrollUp />
        <Hero />
        <Features />

        <Tasks />
        <Personal />
        <Trained/>
        <StaffingProfiles/>
        <Steps/>
        <AIProcess/>
        <CallToAction />
      </div>
      <div
        style={{
          backgroundImage: "url('/images/background3.jpg')",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents repeating
        }}
      >
        <Pricing />
        <Testimonials />
        <Faq />
      </div>
      <div
        style={{
          backgroundImage: "url('/images/background5.jpg')",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents repeating
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </main>
  );
}
