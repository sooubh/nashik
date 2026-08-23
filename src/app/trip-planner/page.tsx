import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Route, Compass, Download, ArrowLeft, ShieldAlert, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Smart Itinerary Planner - Nashik Travel Guide Mobile App',
  description:
    'Experience the on-device AI Itinerary Planner built into the Nashik Travel Guide Android App. Optimized routing, safety cautions, and instant offline access.',
};

export default function TripPlannerPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue dark:text-brand-light hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Showcase</span>
        </Link>
      </div>

      <div className="rounded-[40px] bg-gradient-to-br from-brand-900 via-brand-blue to-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-sky animate-spin-slow" />
              <span>Built into Nashik Travel Guide App</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              AI Smart Itinerary Planner
            </h1>

            <p className="text-brand-100 text-base sm:text-lg leading-relaxed max-w-xl">
              Plan your 1 to 3-day Nashik trip in seconds inside our Android companion app. Choose transit hubs (Nashik Road Station, Ozar Airport, or Thakkar Bazaar), select interests, and get optimized itineraries with real-time distance calculations and safety cautions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Route className="w-5 h-5 text-brand-light shrink-0" />
                <span className="text-xs font-semibold">Haversine Distance Optimization</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <ShieldAlert className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-xs font-semibold">Monsoon Hazard & Stair Cautions</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Clock className="w-5 h-5 text-brand-light shrink-0" />
                <span className="text-xs font-semibold">Morning / Afternoon / Evening Slots</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Compass className="w-5 h-5 text-emerald-300 shrink-0" />
                <span className="text-xs font-semibold">Direct Google Maps Navigation</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand-blue hover:bg-brand-50 transition-all font-extrabold text-base shadow-xl hover:scale-105 active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Get on Google Play</span>
              </a>

              <Link
                href="/#features"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all"
              >
                <span>View App Features</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[310px] aspect-[9/19] bg-slate-950 rounded-[44px] p-3 shadow-2xl border-4 border-white/20 ring-4 ring-black/40 overflow-hidden">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900">
                <Image
                  src="/images/ai-planner.png"
                  alt="AI Trip Planner in Action"
                  fill
                  className="object-cover"
                  sizes="310px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
