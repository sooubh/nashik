'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const FEATURE_TABS = [
  {
    id: 'discovery',
    name: 'Discovery Feed',
    image: '/images/screenshots/home.png',
    title: 'Curated Destination Discovery',
    subtitle: 'Browse 150+ verified attractions categorized by spiritual shrines, sprawling vineyards, historic hill forts, and scenic waterfalls.',
    bullets: [
      'Weekly handpicked spotlight destinations in Nashik',
      'Instant filter chips: "Open Now", "Entry Pass Required", "Monsoon Peak"',
      'High-resolution photography and verified seasonal timing notices',
    ],
  },
  {
    id: 'search',
    name: 'Universal Search',
    image: '/images/screenshots/explore.png',
    title: 'Intelligent Universal Search',
    subtitle: 'Find exactly what you crave in milliseconds with semantic tags, category filters, and bilingual search support.',
    bullets: [
      'Search by interest: "Grape Stomping", "Rock Cut Steps", "River Aarti"',
      'Bilingual script recognition: English, Hindi (हिन्दी), and Marathi (मराठी)',
      'Real-time geographic distance estimates calculated from your coordinates',
    ],
  },
  {
    id: 'planner',
    name: 'Itinerary Engine',
    image: '/images/screenshots/ai-planner.png',
    title: 'Smart Multi-Day Itinerary Engine',
    subtitle: 'Tell Trivio your travel duration and pace to receive a mathematically optimized schedule with zero hallucinations.',
    bullets: [
      'Feasibility validation: strictly checks opening/closing hours and aarti times',
      'Automatic dining injection: curates authentic lunch and dinner along your route',
      'Proximity-based stop sequencing that saves up to 3 hours of backtracking',
    ],
  },
  {
    id: 'wishlists',
    name: 'Wishlists & Boards',
    image: '/images/screenshots/saved.png',
    title: 'Custom Wishlist & Trip Boards',
    subtitle: 'Save your bucket list destinations into organized boards for weekend getaways, wine trails, or monsoon treks.',
    bullets: [
      'Organized custom boards: "Monsoon Weekend", "Wine Trail 2026", "Sacred Sights"',
      '100% on-device caching: review saved places anywhere with zero signal',
      'One-tap navigation handoff from any saved card directly to your maps app',
    ],
  },
  {
    id: 'community',
    name: 'Community & Alerts',
    image: '/images/screenshots/profile.png',
    title: 'Verified Community & Safety Notes',
    subtitle: 'Read candid, verified reviews from fellow travelers, check trail safety alerts, and track visited milestones.',
    bullets: [
      'Strict review moderation: zero promotional bots or unverified listings',
      'Real-time trail safety warnings: wet rock step alerts and parking queue notices',
      'Explorer milestones and local cultural etiquette guidelines',
    ],
  },
];

export function TrivioFeatures() {
  const [activeTab, setActiveTab] = useState(0);
  const current = FEATURE_TABS[activeTab];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24 bg-paper" id="features">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-violet mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-lime border border-deep-violet" />
            <span>Powerful Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Engineered for the modern explorer.
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            From solo backpackers trekking the Western Ghats to families embarking on sacred pilgrimages, Trivio adapts to your journey.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {FEATURE_TABS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-[background-color,color] cursor-pointer ${
                activeTab === idx
                  ? 'bg-deep-violet text-signal-lime'
                  : 'bg-[#F4F1F8] text-on-surface-variant hover:text-deep-violet'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Feature Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-semibold text-deep-violet bg-deep-violet/10 px-3 py-1 rounded-full">
              Feature {activeTab + 1} of 5
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {current.subtitle}
            </p>

            <ul className="space-y-3 pt-2">
              {current.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-deep-violet/10 text-deep-violet flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-deep-violet" />
                  </div>
                  <span className="text-xs sm:text-sm text-on-surface leading-relaxed">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Phone Screen Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              data-ui="true"
              className="w-full max-w-[270px] rounded-[32px] p-2 bg-slate-900 border border-slate-700/60 overflow-hidden"
            >
              <div className="relative rounded-[26px] overflow-hidden aspect-[9/18.5] bg-slate-950">
                <Image
                  src={current.image}
                  alt={`${current.title} screen preview`}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="270px"
                  priority={activeTab === 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
