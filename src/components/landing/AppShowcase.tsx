'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Compass, Calendar, Bookmark, Home, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface ShowcaseTab {
  id: string;
  label: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  proofs: Array<{ title: string; detail: string }>;
  screenshot: string;
}

const TABS: ShowcaseTab[] = [
  {
    id: 'explore',
    label: 'Topographic Discovery',
    icon: Compass,
    headline: 'Curated discovery tailored to Nashik topography.',
    description:
      'Browse verified spots across temples, vineyard estates, fort climbs, and waterfalls with verified coordinates, entry timings, and elevation warnings.',
    proofs: [
      {
        title: 'Geographic Distance',
        detail: 'Instant distance calculations from Nashik Road Railway Station and major hubs.',
      },
      {
        title: 'Google Maps Handoff',
        detail: 'One-tap direct GPS coordinates push into your preferred navigation app.',
      },
      {
        title: 'Sanctum Timings',
        detail: 'Morning and afternoon aarti hours verified by resident caretakers.',
      },
    ],
    screenshot: '/images/screenshots/explore.png',
  },
  {
    id: 'home',
    label: 'Home Dashboard',
    icon: Home,
    headline: 'Quick filters for weather, categories, and top picks.',
    description:
      'Instant access to the six primary exploration dimensions: Sacred Temples, Wine Country, Sahyadri Treks, Waterfalls, Food Trails, and Ancient Caves.',
    proofs: [
      {
        title: 'Monsoon Advice',
        detail: 'Live seasonal guidance for waterfall flow rates and slippery Ghat steps.',
      },
      {
        title: 'Weekend Itineraries',
        detail: 'Handpicked routes optimized for short two-day or three-day weekend visits.',
      },
      {
        title: 'Zero Distractions',
        detail: 'Clean, fast interface with zero third-party banner advertisements or tracking.',
      },
    ],
    screenshot: '/images/screenshots/home.png',
  },
  {
    id: 'planner',
    label: 'Trip Planner',
    icon: Calendar,
    headline: 'Deterministic itinerary sequencing with zero backtracking.',
    description:
      'Generate personalized multi-day trip itineraries optimized geographically from your arrival transit hub.',
    proofs: [
      {
        title: 'Arrival Hub Sequencing',
        detail: 'Sequences routes starting from Nashik Road Station, Ozar Airport, or CBS.',
      },
      {
        title: 'Timing Synchronization',
        detail: 'Aligns early morning temple darshan with afternoon vineyard cellar tours.',
      },
      {
        title: 'Backtracking Prevention',
        detail: 'Prevents repetitive cross-city traffic jams by clustering nearby spots.',
      },
    ],
    screenshot: '/images/screenshots/ai-planner.png',
  },
  {
    id: 'saved',
    label: 'Offline Storage',
    icon: Bookmark,
    headline: 'Full offline access when cellular reception drops.',
    description:
      'Save favorite spots and trails to on-device local storage. When signal disappears at fort summits or rural valleys, all data remains accessible.',
    proofs: [
      {
        title: 'On-Device Caching',
        detail: 'Full offline guides with GPS coordinates cached directly in local NoSQL.',
      },
      {
        title: 'Zero Network Spinners',
        detail: 'Instant responses in deep Sahyadri valleys without connection timeouts.',
      },
      {
        title: 'No Mandatory Account',
        detail: 'Bookmarking and offline planning work without requiring login or profile creation.',
      },
    ],
    screenshot: '/images/screenshots/saved.png',
  },
];

export function AppShowcase() {
  const [activeTabId, setActiveTabId] = useState('explore');
  const activeTab = TABS.find((tab) => tab.id === activeTabId) || TABS[0];

  return (
    <section className="w-full bg-[#FBFAFD] py-20 lg:py-28 px-6 sm:px-10 lg:px-16" id="features">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            Designed for travel in Maharashtra.
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
            Inspect real production screenshots from the Android app, highlighting offline maps, geographic clustering, and verified trail guidance.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10" role="tablist">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 ${
                  isActive
                    ? 'bg-deep-violet text-white'
                    : 'bg-white text-on-surface-variant hover:text-deep-violet hover:bg-brand-50 border border-brand-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-signal-lime' : 'text-on-surface-variant'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Feature Canvas */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-brand-100 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Feature Narrative & Proofs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-4 leading-snug">
              {activeTab.headline}
            </h3>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-8">
              {activeTab.description}
            </p>

            <div className="space-y-4 mb-8">
              {activeTab.proofs.map((proof) => (
                <div key={proof.title} className="p-4 rounded-xl bg-brand-50">
                  <span className="font-bold text-sm text-deep-violet block mb-1">
                    {proof.title}
                  </span>
                  <span className="text-xs sm:text-sm text-on-surface leading-relaxed block">
                    {proof.detail}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={SITE_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-deep-violet hover:bg-[#392066] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors"
              >
                <span>Install Trivio on Google Play</span>
                <ArrowUpRight className="w-4 h-4 text-signal-lime" />
              </a>
              <span className="text-xs text-on-surface-variant">
                100% Free on Android · Works Offline
              </span>
            </div>
          </div>

          {/* Clean Android Phone Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[9/19.5] rounded-3xl bg-slate-950 p-2.5 border-2 border-slate-800">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  key={activeTab.screenshot}
                  src={activeTab.screenshot}
                  alt={`${activeTab.label} in Trivio App`}
                  fill
                  sizes="(max-width: 640px) 280px, 300px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
