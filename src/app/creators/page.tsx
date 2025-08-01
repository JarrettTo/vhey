"use client";
import CreatorsHero from '@/components/creators/Hero';
import BentoGrid from '@/components/creators/BentoGrid';
import TrustedSection from '@/components/creators/TrustedSection';
import SizeSection from '@/components/creators/SizeSection';
import MoreSection from '@/components/creators/MoreSection';
import TechSection from '@/components/creators/TechSection';

export default function CreatorsPage() {
  return (
    <main>
      <CreatorsHero />
      <BentoGrid />
      <TrustedSection />
      <SizeSection/>
      <MoreSection />
      <TechSection />
    </main>
  );
} 