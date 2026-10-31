import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Route, Compass, Download, ArrowLeft, Clock, Calendar, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Trip Planning in the App — NashikExplore',
  description:
    'Discover how the NashikExplore Android app helps you plan multi-day trips around Nashik with customized itineraries, distance estimates, and Google Maps navigation.',
  alternates: {
    canonical: '/trip-planner',
  },
  openGraph: {
    title: 'Trip Planning in the App — NashikExplore',
    description:
      'Plan multi-day travel itineraries in Nashik with the NashikExplore Android app.',
    url: 'https://nashik.sooubh.me/trip-planner',
    images: ['/images/ai-planner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trip Planning in the App — NashikExplore',
    description:
      'Plan multi-day travel itineraries in Nashik with the NashikExplore Android app.',
    images: ['/images/ai-planner.png'],
  },
};

export default function TripPlannerPage() {
  return (
    <div className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
      {/* Top Breadcrumb / Return */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-bold border border-slate-200 dark:border-slate-700">
          <Calendar className="w-3.5 h-3.5" />
          <span>Android App Feature Guide</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-3xl text-left space-y-4">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 block">
          Itinerary Planning Engine
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white headline-editorial">
          Trip planning built for real travel in Nashik.
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          The NashikExplore app includes a dedicated itinerary builder designed to eliminate backtracking between wine estates, pilgrimage centers, and Sahyadri mountains.
        </p>
      </div>

      {/* Feature Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: How it works in the app */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="editorial-card p-6 sm:p-8 rounded-3xl space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              How the Itinerary Builder Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Instead of manually coordinating scattered attractions on different maps, the app guides you through four clear preferences:
            </p>

            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Transit Hub Departure:</strong> Choose your exact arrival hub — Nashik Road Railway Station, Ozar Airport, or CBS (Thakkar Bazaar) — to sequence stops geographically.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Duration &amp; Travel Pace:</strong> Plan 1, 2, or 3 days with relaxed pacing (2–3 major sights) or active pacing (4+ stops with sunrise treks).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Smart Engine with Offline Fallback:</strong> The app connects to a Cloudflare Worker backend for assisted scheduling, with a deterministic offline heuristic generator if cell reception is absent.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white">Direct Road Navigation:</strong> Point-to-point geographic distances are computed, and individual stops open directly in Google Maps for live turn-by-turn road directions.
                </div>
              </li>
            </ul>
          </div>

          {/* Real Sample Itinerary Display (Zero Random Data) */}
          <div className="editorial-card p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Example 2-Day Itinerary: Heritage &amp; Wine Country
              </h3>
            </div>
            
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400">Day 1 • Sacred Heritage &amp; Jyotirlinga</span>
                  <span className="text-[11px] text-slate-400">Depart: Nashik Road Station</span>
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                  <li><strong>Morning:</strong> Shree Kalaram Mandir &amp; holy Ramkund ghats in old Panchavati</li>
                  <li><strong>Midday:</strong> Drive to Trimbakeshwar (36 km), visit sacred Kushavarta Kund</li>
                  <li><strong>Afternoon:</strong> Darshan at Trimbakeshwar Jyotirlinga temple at the base of Brahmagiri</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Day 2 • Wine Estates &amp; Cascades</span>
                  <span className="text-[11px] text-slate-400">Gangapur Catchment</span>
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
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
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors active:scale-[0.98] min-h-[48px]"
            >
              <Download className="w-5 h-5" />
              <span>Download NashikExplore on Google Play</span>
            </a>
          </div>
        </div>

        {/* Right: Actual App Screenshot in tactile frame */}
        <div className="lg:col-span-5 flex justify-center sticky top-28">
          <div className="device-frame w-full max-w-[280px] sm:max-w-[320px]">
            <div className="device-screen-container">
              <div className="device-camera" />
              <div className="device-screen-glare" />
              <Image
                src="/images/ai-planner.png"
                alt="NashikExplore Trip Planner Screen Preview"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
