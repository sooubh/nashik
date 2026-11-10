'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function DownloadCta() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28 bg-[#160D2E] text-white" id="download">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* Left Column: Heading & Value */}
        <div className="max-w-xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-signal-lime">
            TRIVIO FOR ANDROID
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Start exploring Nashik with confidence.
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Explore Nashik temples, forts, vineyards, waterfalls and local attractions. Browse place details and shape a multi-day trip around your interests.
          </p>
          <div className="mt-4 text-xs text-white/60">
            <span>Available on Google Play for Android</span>
          </div>
        </div>

        {/* Right Column: High-contrast Actions */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-3 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-sm sm:text-base font-bold px-8 py-3.5 rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-5 h-5 shrink-0" />
            <span>Install on Google Play</span>
          </a>

          <Link
            href="/trip-planner"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm font-semibold px-4 py-2.5 transition-colors"
          >
            <span>See how trip planning works</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
