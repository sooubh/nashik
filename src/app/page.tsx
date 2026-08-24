import React from 'react';
import { Hero } from '@/components/Hero';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { FeatureShowcase } from '@/components/FeatureShowcase';
import { TripPlannerShowcase } from '@/components/TripPlannerShowcase';
import { CategoriesSection } from '@/components/CategoriesSection';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';
import { StatsSection } from '@/components/StatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FaqSection } from '@/components/FaqSection';
import { DownloadCta } from '@/components/DownloadCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeatureShowcase />
      <TripPlannerShowcase />
      <CategoriesSection />
      <ScreenshotGallery />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <DownloadCta />
    </>
  );
}
