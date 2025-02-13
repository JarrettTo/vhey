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
  title: "Eva AI - More Content. More Deals. More Growth using AI-Agents",
  description: "Spend less time editing videos and managing brand deals so you can focus on creating content that grows your brand.",
  keywords: [
    "Virtual Experts",
    "AI Automation",
    "Video Editing",
    "Brand Scaling",
    "Hey Eva",
    "Time Management",
    "Influencer",
    "Influencer Marketing",
    "Influencer Management",
    "Influencer Marketing Agency",
    "Influencer Marketing Services",
    "Influencer Marketing Company",
    "Talent Management",
    "AI Agents"
  ],
  openGraph: {
    title: "Eva AI - More Content. More Deals. More Growth.",
    description: "Spend less time editing videos and managing brand deals so you can focus on creating content that grows your brand.",
    url: "https://heyeva.me",
    type: "website",
    siteName: "Hey Eva",
    images: [
      {
        url: "/images/banner.jpg", // Path to the banner image
        width: 1200, // Recommended size for OpenGraph
        height: 630,
        alt: "Eva AI - More Content. More Deals. More Growth.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva AI - More Content. More Deals. More Growth.",
    description: "Spend less time editing videos and managing brand deals so you can focus on creating content that grows your brand.",
    images: ["/images/banner.jpg"], // Path to the banner image
    site: "@HeyEva", // Twitter username
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  themeColor: "#D7E47D", // Matches brand color
  appleWebApp: {
    title: "Hey Eva",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/images/favicon.ico", // Path to favicon
    apple: "/apple-touch-icon.png", // Path to Apple touch icon
  },
  alternates: {
    canonical: "https://heyeva.me",
    languages: {
      en: "https://heyeva.me/en",
      es: "https://heyeva.me/es",
    },
  },
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
        <Benefits/>
        <Tasks />
        <AIProcess/>
        <Personal/>
        <StaffingProfiles/>
        <CallToAction />
      </div>
      <div
        style={{
          backgroundImage: "url('/images/background3.jpg')",
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundRepeat: "no-repeat", // Prevents repeating
        }}
      >
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
