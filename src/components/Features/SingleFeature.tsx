import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-8 lg:w-3/7 xl:w-7/14 py-8 bg-[#F6F9DF] rounded-3xl">
      <div className="wow fadeInUp group rounded-3xl" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#ADBC42] px-3 py-3">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-3 text-lg font-bold text-dark dark:text-white">
          {title}
        </h3>
        <p className="mb-4 text-black font-light text-sm dark:text-dark-6 lg:mb-4">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
