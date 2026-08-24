import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Compass, Route, Clock, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

export function TripPlannerShowcase() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-br from-brand-900 via-brand-blue to-slate-900 text-white p-6 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Glow ambient background orbs */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-sky/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-light text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-sky animate-spin-slow shrink-0" />
              <span>Smart On-Device Router</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              AI Smart Itinerary Planner
            </h2>

            <p className="text-brand-100 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Plan your 1 to 3-day Nashik trip in seconds. Choose your arrival transit hub (Nashik Road Station, Ozar Airport, or Thakkar Bazaar), select interests, and get optimized itineraries with real-time distance calculations and safety cautions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-1 text-left">
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Route className="w-4 h-4 sm:w-5 sm:h-5 text-brand-light shrink-0" />
                <span className="text-xs font-semibold">Haversine Distance Optimization</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 shrink-0" />
                <span className="text-xs font-semibold">Monsoon & Stair Cautions</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-light shrink-0" />
                <span className="text-xs font-semibold">Morning / Afternoon Slots</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300 shrink-0" />
                <span className="text-xs font-semibold">Google Maps Navigation</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
              <Link
                href="/trip-planner"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-2xl bg-white text-brand-blue hover:bg-brand-50 transition-all font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 group w-full sm:w-auto min-h-[48px]"
              >
                <span>Launch Interactive Planner</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[230px] sm:w-[270px] md:w-[300px] aspect-[9/19] bg-slate-950 rounded-[40px] sm:rounded-[44px] p-2.5 sm:p-3 shadow-2xl border-4 border-white/20 ring-4 ring-black/40 overflow-hidden">
              <div className="relative w-full h-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-900">
                <Image
                  src="/images/ai-planner.png"
                  alt="AI Trip Planner in Action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 230px, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
