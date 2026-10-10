import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Route, Compass, Download, ArrowLeft, Clock, Calendar, CheckCircle2 } from 'lucide-react';

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
    <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 sm:space-y-16">
      {/* Top Breadcrumb / Return */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue dark:hover:text-brand-400 transition-colors py-2 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-50 dark:bg-slate-900/50 text-brand-blue dark:text-brand-400 text-xs font-bold border border-slate-200/60 dark:border-slate-800/60 min-h-[44px]">
          <Calendar className="w-3.5 h-3.5" />
          <span>Mobile App Feature</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-3 block">
          Itinerary Planning
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Trip Planning in the App
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          The NashikExplore Android app includes a dedicated trip planner to help you build customized multi-day itineraries based on your interests, pace, and starting location.
        </p>
      </div>

      {/* Feature Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: How it works in the app */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-card space-y-5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Trip Planning Works
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Instead of manually coordinating schedules across different attractions, the app assists you through a simple multi-step flow:
            </p>

            <ul className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <strong>Set Your Starting Point:</strong> Choose a transit hub such as Nashik Road Railway Station, Ozar Airport, or central bus stands.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <strong>Select Duration &amp; Pace:</strong> Plan from 1 to multiple days with relaxed, moderate, or active pacing.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <strong>Smart Generation with Offline Fallback:</strong> The app requests a Cloudflare Worker backend for AI-assisted itinerary assembly, with a deterministic heuristic fallback if network is unavailable.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <strong>Directions via Google Maps:</strong> Distances between spots are estimated, and individual stops or full days open directly in Google Maps for turn-by-turn road navigation.
                </div>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-center">
              <Route className="w-5 h-5 text-brand-blue mx-auto mb-2" />
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Distance Estimates</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Approximate point-to-point</span>
            </div>
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-center">
              <Clock className="w-5 h-5 text-brand-blue mx-auto mb-2" />
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Daily Time Slots</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Morning, afternoon, evening</span>
            </div>
            <div className="p-4 rounded-xl bg-surface-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 text-center">
              <Compass className="w-5 h-5 text-brand-blue mx-auto mb-2" />
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Maps Navigation</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Opens in Google Maps</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-700 text-white font-bold text-sm shadow-glow-sm transition-all active:scale-[0.97] min-h-[48px]"
            >
              <Download className="w-5 h-5" />
              <span>Get the App on Google Play</span>
            </a>
          </div>
        </div>

        {/* Right: Actual App Screenshot */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-slate-200/60 dark:border-slate-800/60 bg-slate-900 screenshot-card">
            <Image
              src="/images/ai-planner.png"
              alt="NashikExplore Trip Planner Screen"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px, 320px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
