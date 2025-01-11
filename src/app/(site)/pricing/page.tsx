import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <div style={{
      backgroundImage: "url('/images/background3.jpg')",
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundRepeat: "no-repeat", // Prevents repeating
    }}>
      <Pricing />
      <Faq />
    </div>
  );
};

export default PricingPage;
