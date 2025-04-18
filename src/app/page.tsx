import About from "@/components/About";
import Workflows from "@/components/Workflows";
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
import Know from "@/components/Know";
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
import Processes from "@/components/processes";
import Integrations from "@/components/integrations";
import Benefits from "@/components/Benefits";
import Coordination from "@/components/Coordination";

export const metadata: Metadata = {
  title: "Eva - AI Agent for Creators and Managers",
  description: "Eva is your AI agent that helps creators and managers scale their growth and earnings by helping them manage their deals, proposals, and more.",
  keywords: [
    "Brand Scaling",
    "Hey Eva",
    "Talent Management",
    "Influencer",
    "Influencer Marketing",
    "Influencer Management",
    "Influencer Marketing Agency",
    "Influencer Marketing Services",
    "Influencer Marketing Company",
    "Media Kit",
    "Rate Card",
    "AI Agents"
  ],
  openGraph: {
    title: "Eva - AI Agent for Creators and Managers",
    description: "Eva is your AI agent that helps creators and managers scale their growth and earnings by helping them manage their deals, proposals, and more.",
    url: "https://heyeva.me",
    type: "website",
    siteName: "Eva AI",
    images: [
      {
        url: "/images/banner.jpg", // Path to the banner image
        width: 1200, // Recommended size for OpenGraph
        height: 630,
        alt: "Eva - AI Agent for Creators and Managers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva - AI Agent for Creators and Managers",
    description: "Eva is your AI agent that helps creators and managers scale their growth and earnings by helping them manage their deals, proposals, and more.",    images: ["/images/banner.jpg"], // Path to the banner image
    site: "@HeyEva", // Twitter username
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  themeColor: "#D7E47D", // Matches brand color
  appleWebApp: {
    title: "Eva AI",
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
        
      >
        <ScrollUp />
        <Hero />
        <Features />
        <Workflows/>
        <Coordination/>
        <Know />
        <Integrations/>
        <Benefits/>
      </div>
      <div
      >
        <Faq />
      </div>
      <div
        style={{
          backgroundImage: "url('/images/faqs/background.jpg')",
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
