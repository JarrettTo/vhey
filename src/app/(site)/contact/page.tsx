import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { Suspense } from "react";

export const metadata: Metadata = {
  title:
    "Contact Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is contact page description",
};

const ContactPage = () => {
  return (
    <div  style={{
      backgroundImage: "url('/images/faqs/background.jpg')",
      backgroundSize: "cover", // Ensures the image covers the entire div
      backgroundRepeat: "no-repeat", // Prevents repeating
    }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default ContactPage;
