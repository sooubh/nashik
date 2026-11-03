'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';

interface PackageCard {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  highlights: string[];
  description: string;
  mapsUrl: string;
}

const PACKAGES: PackageCard[] = [
  {
    id: 'wine-country',
    title: 'Wine Country & Gangapur Lake',
    duration: '2 Days / 1 Night',
    price: '₹4,999',
    image: '/images/destinations/sula-vineyards.jpg',
    highlights: ['Barrel Cellar Tour', 'Sunset Lake Cruise', 'Estate Dining'],
    description: 'Private tour across rolling vineyard estates, guided 6-wine masterclass tasting, and sunset catamaran cruise on Gangapur backwaters.',
    mapsUrl: 'https://maps.google.com/?q=Sula+Vineyards+Nashik',
  },
  {
    id: 'sacred-forts',
    title: 'Jyotirlinga & Sahyadri Forts',
    duration: '3 Days / 2 Nights',
    price: '₹6,499',
    image: '/images/destinations/harihar-fort.jpg',
    highlights: ['Trimbakeshwar Darshan', '80° Rock Stairway', 'Ancient Caves'],
    description: 'VIP darshan protocol at Trimbakeshwar Shiva temple, escorted trek of Harihar rock-cut stairs, and sunset walk at Pandavleni.',
    mapsUrl: 'https://maps.google.com/?q=Harihar+Fort+Nashik',
  },
];

export function TourPackagesSection() {
  return (
    <section className="w-full bg-[#F4F1F8] py-20 lg:py-28 px-6 sm:px-12 lg:px-16" id="packages">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Introductory Panel */}
          <div className="lg:col-span-5 bg-white rounded-[32px] p-8 sm:p-12 border border-[#ded9e8] flex flex-col justify-between shadow-sm">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-deep-violet text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Experiences</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-on-surface leading-tight">
                Authentic Nashik Tour Packages
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant mt-4 leading-relaxed">
                Handcrafted multi-day experiences designed to eliminate travel friction: verified temple aarti windows, chauffeured transit from Nashik Road rail terminus, and reserved vineyard harvest tastings.
              </p>

              {/* Package Inclusions Checklist */}
              <div className="mt-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-signal-lime fill-[#221045] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface">
                    Private sanitized transit from Nashik Road Railway & Ozar Airport
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-signal-lime fill-[#221045] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface">
                    Temple sanctum guidelines & priority darshan assistance
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-signal-lime fill-[#221045] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-on-surface">
                    Exclusive barrel room access & local Maharashtrian culinary stops
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Primary CTA */}
            <div className="mt-10 pt-6 border-t border-brand-100">
              <a
                href={SITE_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#34146c] hover:bg-[#4B2E83] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore All Packages in App</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Two Image-Based Package Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="group relative min-h-[480px] rounded-[32px] overflow-hidden flex flex-col justify-between p-6 sm:p-8 bg-slate-900 border border-black/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Background Image */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-black/30 group-hover:from-slate-950/95 transition-colors" />

                {/* Top Floating Badge Row */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-[11px] font-semibold text-white/90">
                    <Clock className="w-3 h-3 text-signal-lime" />
                    <span>{pkg.duration}</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-xs font-bold text-white">
                    {pkg.price}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10">
                  <h3 className="font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug group-hover:text-signal-lime transition-colors">
                    {pkg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 line-clamp-2 mt-2 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Highlights Pill Row */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {pkg.highlights.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm text-[10px] sm:text-[11px] font-medium text-white/90 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  <a
                    href={pkg.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full py-2.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-slate-950 border border-white/30 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
