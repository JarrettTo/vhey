import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/features/feature1.svg"
        alt="Handling Inquiries"
        width={35}
        height={35}
      />
    ),
    title: "Handling Inquiries",
    paragraph: "Managing a flood of DMs, emails, and brand requests—leading to missed opportunities, slow responses, and overwhelming admin work.",
    btn: "Learn More",
    btnLink: "/contact",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/features/feature2.svg"
        alt="Negotiating Deals"
        width={35}
        height={35}
      />
    ),
    title: "Negotiating Deals",
    paragraph: "Lowball offers, endless back-and-forths, and undervalued deals—securing fair terms shouldn't be this hard.",
    btn: "Learn More",
    btnLink: "/contact",
  },
  {
    id: 3,
    icon: (
      <Image
        src="/images/features/feature3.svg"
        alt="Tracking and Scheduling Deliverables"
        width={35}
        height={35}
      />
    ),
    title: "Tracking and Scheduling Deliverables",
    paragraph: "Aligning creator availability with brand deadlines is a constant balancing act. Not to mention, having to remind creators of due commitments.",
    btn: "Learn More",
    btnLink: "/contact",
  },
  {
    id: 4,
    icon: (
      <Image
        src="/images/features/feature4.svg"
        alt="Monitoring creator analytics"
        width={35}
        height={35}
      />
    ),
    title: "Monitoring creator analytics",
    paragraph: "Keeping up with creator analytics is tough—vital for optimizing growth and proving value to brands, yet scattered across platforms.",
    btn: "Learn More",
    btnLink: "/contact",
  },
];
export default featuresData;
