import React from 'react';
import { Hero } from '@/components/Hero';
import { Benefits } from '@/components/Benefits';
import { ScreenshotStrip } from '@/components/ScreenshotStrip';
import { DownloadCta } from '@/components/DownloadCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <ScreenshotStrip />
      <DownloadCta />
    </>
  );
}
