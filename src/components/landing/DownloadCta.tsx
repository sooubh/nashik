'use client';

import React from 'react';
import Link from 'next/link';
import { Download, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

export function DownloadCta() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-28 bg-[#160D2E] text-white" id="download">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* Left Column: Heading & Value */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Start exploring Nashik with confidence.
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            Download Trivio on your Android device. Complete offline guides, sanctum hours, and zero tracking.
          </p>
          <div className="mt-4 text-xs text-white/60">
            <span>Free on Google Play</span>
          </div>
        </div>

        {/* Right Column: High-contrast Actions */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <a
            href={SITE_CONFIG.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-sm sm:text-base font-bold px-8 py-4 rounded-xl transition-colors"
          >
            <Download className="w-5 h-5 shrink-0" />
            <span>Install on Google Play</span>
          </a>

          <Link
            href="/trip-planner"
            className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm font-semibold px-4 py-2.5 transition-colors"
          >
            <span>Read Trip Architecture Guide</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
