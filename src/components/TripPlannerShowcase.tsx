import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Route, Clock, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

export function TripPlannerShowcase() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-gradient-to-br from-brand-900 via-brand-blue to-brand-950 text-white p-8 sm:p-12 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
        {/* Glow ambient background orbs */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-brand-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-brand-300 animate-spin-slow shrink-0" />
              <span>Smart On-Device Router</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
              AI Smart Itinerary Planner
            </h2>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Plan your 1 to 3-day Nashik trip in seconds. Choose your arrival transit hub (Nashik Road Station, Ozar Airport, or Thakkar Bazaar), select interests, and get optimized itineraries with real-time distance calculations and safety cautions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 text-left">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <Route className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm font-bold text-white">Haversine Distance</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <ShieldAlert className="w-5 h-5 text-amber-300 shrink-0" />
                <span className="text-sm font-bold text-white">Monsoon Cautions</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <Clock className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm font-bold text-white">Time Slots</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
                <Compass className="w-5 h-5 text-emerald-300 shrink-0" />
                <span className="text-sm font-bold text-white">Maps Navigation</span>
              </div>
            </div>

            <div className="pt-4 sm:pt-6 flex justify-center lg:justify-start">
              <Link
                href="/trip-planner"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-brand-blue hover:bg-brand-50 transition-all font-bold text-sm shadow-soft-lg active:scale-[0.97] min-h-[44px] min-w-[44px] w-full sm:w-auto"
              >
                <span>Launch Interactive Planner</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[230px] sm:w-[270px] md:w-[300px] aspect-[9/19] rounded-2xl overflow-hidden shadow-soft-xl border-2 border-white/20 bg-slate-900">
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
    </section>
  );
}
