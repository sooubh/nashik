import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Sparkles, Download } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `Trip Planning Architecture Guide · ${SITE_CONFIG.name}`,
  description:
    `Discover how the ${SITE_CONFIG.name} Android app plans multi-day itineraries around Nashik with geographic clustering, zero backtracking, and offline caching.`,
  alternates: {
    canonical: '/trip-planner',
  },
  openGraph: {
    title: `Trip Planning Architecture Guide · ${SITE_CONFIG.name}`,
    description:
      `Plan multi-day travel itineraries in Nashik with ${SITE_CONFIG.name}.`,
    url: `${SITE_CONFIG.canonicalUrl}/trip-planner`,
    images: ['/images/screenshots/ai-planner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Trip Planning Architecture Guide · ${SITE_CONFIG.name}`,
    description:
      `Plan multi-day travel itineraries in Nashik with ${SITE_CONFIG.name}.`,
    images: ['/images/screenshots/ai-planner.png'],
  },
};

export default function TripPlannerPage() {
  return (
    <div className="min-h-[100dvh] bg-paper flex flex-col justify-between">
      <SiteNav />

      <main className="flex-1 pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-12">
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: SITE_CONFIG.canonicalUrl },
            { name: 'Trip Planning Guide', url: `${SITE_CONFIG.canonicalUrl}/trip-planner` },
          ]}
        />

        {/* Top return & badge */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet hover:underline py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 text-xs text-deep-violet font-semibold bg-deep-violet/10 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-signal-lime" />
            <span>Android App Feature Dossier</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="max-w-2xl text-left space-y-3">
          <span className="font-editorial italic text-base text-deep-violet block">
            Itinerary Architecture Guide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
            Trip planning built for real travel in Nashik.
          </h1>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
            The {SITE_CONFIG.name} app includes a dedicated itinerary builder designed to eliminate backtracking between wine estates, sacred ghats, and Sahyadri mountains.
          </p>
        </div>

        {/* Feature Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: How it works in the app */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="p-6 sm:p-8 rounded-card bg-[#F4F1F8] border border-[#ded9e8] space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
                How the Itinerary Builder Works
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Instead of manually coordinating scattered attractions on different maps, {SITE_CONFIG.name} guides you through clear geographic preferences:
              </p>

              <ul className="space-y-4 text-sm text-on-surface">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-deep-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-violet">Transit Hub Departure:</strong> Choose your exact arrival hub, such as Nashik Road Railway Station, Ozar Airport, or Central Bus Stand (CBS), to sequence stops geographically.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-deep-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-violet">Duration and Travel Pace:</strong> Plan 1, 2, or 3 days with relaxed pacing (2 to 3 major sights) or active pacing (4 or more stops with sunrise treks).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-deep-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-violet">Offline Fallback:</strong> The app connects to an assisted scheduling service, with a deterministic offline heuristic generator if cell reception drops in Sahyadri valleys.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-deep-violet shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-deep-violet">Direct Road Navigation:</strong> Point-to-point geographic distances are computed, and individual stops open directly in your favorite maps app for live turn-by-turn road directions.
                  </div>
                </li>
              </ul>
            </div>

            {/* Real Sample Itinerary Display */}
            <div className="p-6 sm:p-8 rounded-card bg-[#F4F1F8] border border-[#ded9e8] space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E0A24A]" />
                <h3 className="text-base sm:text-lg font-bold text-on-surface">
                  Example 2-Day Itinerary: Heritage &amp; Wine Country
                </h3>
              </div>
              
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#ded9e8]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-deep-violet">Day 1: Sacred Heritage &amp; Jyotirlinga</span>
                    <span className="text-[11px] text-on-surface-variant font-medium">Depart: Nashik Road Station</span>
                  </div>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li><strong>Morning:</strong> Shree Kalaram Mandir &amp; holy Ramkund ghats in old Panchavati</li>
                    <li><strong>Midday:</strong> Drive to Trimbakeshwar (36 km), visit sacred Kushavarta Kund</li>
                    <li><strong>Afternoon:</strong> Darshan at Trimbakeshwar Jyotirlinga temple at the base of Brahmagiri</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#ded9e8]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-deep-violet">Day 2: Wine Estates &amp; Cascades</span>
                    <span className="text-[11px] text-on-surface-variant font-medium">Gangapur Catchment</span>
                  </div>
                  <ul className="text-xs text-on-surface-variant space-y-1.5 list-disc pl-4 leading-relaxed">
                    <li><strong>Morning:</strong> Someshwar Waterfall &amp; 2nd-century BCE Pandavleni Caves</li>
                    <li><strong>Afternoon:</strong> Guided cellar tasting and barrel tour at Sula Vineyards</li>
                    <li><strong>Sunset:</strong> Lakeside dinner &amp; artisanal wine tasting at York Winery on Gangapur lake</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-sm sm:text-base font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-5 h-5 shrink-0" />
                <span>Get App on Google Play</span>
              </a>
            </div>
          </div>

          {/* Right: Real Phone Preview */}
          <div className="lg:col-span-5 flex justify-center sticky top-28">
            <div className="max-w-[280px] w-full rounded-[36px] p-2.5 bg-slate-950 border-4 border-slate-800 overflow-hidden">
              <div className="relative rounded-[28px] overflow-hidden aspect-[9/19.5] bg-slate-900">
                <Image
                  src="/images/screenshots/ai-planner.png"
                  alt={`${SITE_CONFIG.name} AI Trip Planner Screen`}
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
