import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { TrivioNav } from '@/components/trivio/TrivioNav';
import { TrivioFooter } from '@/components/trivio/TrivioFooter';

export const metadata: Metadata = {
  title: 'Trip Planning Guide: Trivio',
  description:
    'Discover how the Trivio Android app helps you plan multi-day trips around Nashik with customized itineraries, distance estimates, and Google Maps navigation.',
  alternates: {
    canonical: '/trip-planner',
  },
  openGraph: {
    title: 'Trip Planning Guide: Trivio',
    description:
      'Plan multi-day travel itineraries in Nashik with the Trivio Android app.',
    url: 'https://nashik.sooubh.me/trip-planner',
    images: ['/images/trivio/step-discover.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Planning Guide: Trivio',
    description:
      'Plan multi-day travel itineraries in Nashik with the Trivio Android app.',
    images: ['/images/trivio/step-discover.jpg'],
  },
};

export default function TripPlannerPage() {
  return (
    <div className="min-h-[100dvh] bg-paper flex flex-col justify-between">
      <TrivioNav />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-12">
        <BreadcrumbJsonLd
          items={[
            { name: 'Home', url: 'https://nashik.sooubh.me' },
            { name: 'Trip Planning Guide', url: 'https://nashik.sooubh.me/trip-planner' },
          ]}
        />

        {/* Top return & badge */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet hover:underline py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Trivio Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 text-xs text-deep-violet font-semibold bg-deep-violet/10 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-signal-lime" />
            <span>Android App Feature Dossier</span>
          </div>
        </div>

        {/* Page Header */}
        <div className="max-w-2xl text-left space-y-3">
          <span className="font-editorial italic text-base text-deep-violet block">
            Itinerary Planning Guide
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface leading-tight">
            Trip planning built for real travel in Nashik.
          </h1>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
            The Trivio app includes a dedicated itinerary builder designed to eliminate backtracking between wine estates, sacred ghats, and Sahyadri mountains.
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
                Instead of manually coordinating scattered attractions on different maps, Trivio guides you through four clear preferences:
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
                    <strong className="text-deep-violet">Offline Fallback:</strong> The app connects to a Cloudflare Worker backend for assisted scheduling, with a deterministic offline heuristic generator if cell reception drops in Sahyadri valleys.
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
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-sm sm:text-base font-bold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.02] active:scale-95"
              >
                <svg aria-hidden="true" className="w-5 h-5 fill-[#221045] shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.185c-.382-.363-.61-.884-.61-1.47V3.284c0-.585.228-1.106.609-1.47zm11.242 11.243l2.364 2.364-12.08 6.942 9.716-9.306zm0-2.115L5.135 1.637l12.08 6.942-2.364 2.363zm1.488 1.058l3.774 2.167c.928.532.928 1.401 0 1.934l-3.774 2.167-2.302-2.301 2.302-2.267z" />
                </svg>
                <span>Get Trivio on Google Play</span>
              </a>
            </div>
          </div>

          {/* Right: Phone preview chassis */}
          <div className="lg:col-span-5 flex justify-center sticky top-24">
            <div data-ui="true" className="max-w-[270px] w-full rounded-[28px] p-2 bg-slate-900 border border-slate-700/60 overflow-hidden">
              <div className="relative rounded-[22px] overflow-hidden aspect-[9/16] bg-slate-950">
                <Image
                  src="/images/trivio/step-discover.jpg"
                  alt="Trivio Trip Planner Screen Preview"
                  fill
                  className="object-cover"
                  sizes="270px"
                  priority
                />
                <div className="absolute inset-x-3 bottom-3 p-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-white">
                  <div className="text-[11px] font-bold text-signal-lime">Deterministic Itineraries</div>
                  <div className="text-[10px] text-white/70">Sequenced by proximity · 0 backtracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <TrivioFooter />
    </div>
  );
}
