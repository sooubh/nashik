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
    <div className="pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto space-y-10 sm:space-y-16">
      {/* Top Breadcrumb / Return */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-brand-blue dark:hover:text-brand-light transition-colors py-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-blue dark:text-brand-light text-xs font-bold border border-brand-200/60 dark:border-brand-800/60">
          <Sparkles className="w-3.5 h-3.5 text-brand-sky" />
          <span>Live On-Device Simulator</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue dark:text-brand-400 mb-2 block">
          Intelligent Route Engine
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4">
          AI Smart Itinerary Planner
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Configure your starting transit hub, travel duration, pace, and destination tags below. Our on-device routing engine calculates optimal paths, travel durations, and critical safety cautions.
        </p>
      </div>

      {/* Interactive Planner Client Emulator */}
      <TripPlannerClient />

      {/* App Promotion & Features Banner */}
      <div className="rounded-[32px] sm:rounded-[36px] bg-gradient-to-br from-brand-900 via-brand-blue to-slate-950 text-white p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-sky" />
              <span>Full Offline Support on Mobile</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Take Your Custom Itinerary Offline
            </h2>

            <p className="text-brand-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Install the official Nashik Travel Guide Android application to sync generated routes, save unlimited custom boards, access 100% offline Hive databases, and receive real-time weather and landslide notifications on remote treks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 pt-1 text-left">
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Route className="w-4 h-4 text-brand-light shrink-0" />
                <span className="text-xs font-semibold">Haversine Distance Optimization</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <ShieldAlert className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-xs font-semibold">Monsoon & Stair Cautions</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Clock className="w-4 h-4 text-brand-light shrink-0" />
                <span className="text-xs font-semibold">Morning / Afternoon / Evening Slots</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Compass className="w-4 h-4 text-emerald-300 shrink-0" />
                <span className="text-xs font-semibold">Direct Google Maps Navigation</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 rounded-2xl bg-white text-brand-blue hover:bg-brand-50 transition-all font-extrabold text-sm shadow-xl hover:scale-105 active:scale-95 min-h-[48px]"
              >
                <Download className="w-4 h-4" />
                <span>Get App on Google Play</span>
              </a>

              <Link
                href="/#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all min-h-[48px]"
              >
                <span>Explore All Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-[230px] sm:w-[270px] aspect-[9/19] bg-slate-950 rounded-[42px] p-2.5 sm:p-3 shadow-2xl border-4 border-white/20 ring-4 ring-black/40 overflow-hidden">
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-900">
                <Image
                  src="/images/ai-planner.png"
                  alt="Nashik AI Trip Planner in Android App"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 230px, 270px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
