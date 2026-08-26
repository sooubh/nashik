import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Route, Compass, Download, ArrowLeft, ShieldAlert, Clock, ArrowRight } from 'lucide-react';
import { TripPlannerClient } from '@/components/TripPlanner/TripPlannerClient';

export const metadata: Metadata = {
  title: 'AI Smart Itinerary Planner — Nashik Travel Guide',
  description:
    'Experience the interactive AI Itinerary Planner built into the Nashik Travel Guide Android App. Customize transit hubs, trip duration, pace, and interests with on-device GPS Haversine calculations and monsoon safety alerts.',
  alternates: {
    canonical: '/trip-planner',
  },
  openGraph: {
    title: 'AI Smart Itinerary Planner — Nashik Travel Guide',
    description:
      'Generate optimized multi-day travel itineraries for Nashik with Haversine distance calculations, weather recommendations, and verified trekking warnings.',
    url: 'https://nashik.sooubh.me/trip-planner',
    images: ['/images/ai-planner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Smart Itinerary Planner — Nashik Travel Guide',
    description:
      'Generate optimized multi-day travel itineraries for Nashik with Haversine distance calculations and safety alerts.',
    images: ['/images/ai-planner.png'],
  },
};

export default function TripPlannerPage() {
  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-14 sm:space-y-18">
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
          <Sparkles className="w-3.5 h-3.5" />
          <span>Live On-Device Simulator</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-blue dark:text-brand-400 mb-3 block">
          Intelligent Route Engine
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          AI Smart Itinerary Planner
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
          Configure your starting transit hub, travel duration, pace, and destination tags below. Our on-device routing engine calculates optimal paths, travel durations, and critical safety cautions.
        </p>
      </div>

      {/* Interactive Planner Client Emulator */}
      <TripPlannerClient />

      {/* App Promotion & Features Banner */}
      <div className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 shadow-card p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden mt-14 sm:mt-18">
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-400/10 dark:bg-brand-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-brand-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-slate-800 border border-brand-100 dark:border-slate-700 text-brand-blue dark:text-brand-400 text-xs font-bold uppercase tracking-widest min-h-[44px]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Offline Support on Mobile</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Take Your Custom Itinerary Offline
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Install the official Nashik Travel Guide Android application to sync generated routes, save unlimited custom boards, access 100% offline Hive databases, and receive real-time weather and landslide notifications on remote treks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-left">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <Route className="w-4 h-4 text-brand-blue dark:text-brand-400 shrink-0" />
                <span className="text-sm font-bold text-slate-900 dark:text-white">Haversine Distance Optimization</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-sm font-bold text-slate-900 dark:text-white">Monsoon & Stair Cautions</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <Clock className="w-4 h-4 text-brand-blue dark:text-brand-400 shrink-0" />
                <span className="text-sm font-bold text-slate-900 dark:text-white">Time Slot Scheduling</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60">
                <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sm font-bold text-slate-900 dark:text-white">Direct Maps Navigation</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-700 text-white font-bold text-sm shadow-glow-sm transition-all active:scale-[0.97] min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Get App on Google Play</span>
              </a>

              <Link
                href="/#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-brand-300 dark:hover:border-brand-700 font-bold text-sm transition-all shadow-soft-sm min-h-[44px]"
              >
                <span>Explore All Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            {/* Flat screenshot-card styling without phone mockup */}
            <div className="relative w-full max-w-[280px] aspect-[9/19] rounded-2xl overflow-hidden shadow-card dark:shadow-card-dark border border-slate-200/60 dark:border-slate-800/60 bg-slate-900 screenshot-card">
              <Image
                src="/images/ai-planner.png"
                alt="Nashik AI Trip Planner in Android App"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, 280px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
