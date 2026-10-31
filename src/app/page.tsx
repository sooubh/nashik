import React from 'react';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { PlacesExplorer } from '@/components/PlacesExplorer';
import { ScreenshotStrip } from '@/components/ScreenshotStrip';
import { TravelFaq } from '@/components/TravelFaq';
import { DownloadCta } from '@/components/DownloadCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <PlacesExplorer />
      <ScreenshotStrip />
      <TravelFaq />
      <DownloadCta />
    </>
  );
}
