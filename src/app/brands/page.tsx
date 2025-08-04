"use client";
import CreatorsHero from '@/components/creators/Hero';
import BentoGrid from '@/components/creators/BentoGrid';
import TrustedSection from '@/components/creators/TrustedSection';
import SizeSection from '@/components/creators/SizeSection';
import MoreSection from '@/components/creators/MoreSection';
import TechSection from '@/components/creators/TechSection';
import BrandsHero from '@/components/brands/Hero';
import BrandsBentoGrid from '@/components/brands/BentoGrid';
import BrandTrustedSection from '@/components/brands/TrustedSection';
import BrandSizeSection from '@/components/brands/SizeSection';
import BrandMoreSection from '@/components/brands/MoreSection';
import BrandTechSection from '@/components/brands/TechSection';

export default function CreatorsPage() {
  return (
    <main>
      <BrandsHero />
      <BrandsBentoGrid />
      <BrandTrustedSection />
      <BrandSizeSection/>
      <BrandMoreSection />
      <BrandTechSection />
    </main>
  );
} 