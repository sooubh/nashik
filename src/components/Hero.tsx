'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Cinematic Mountain Sunrise Backdrop */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/images/destinations/sahyadri-sunrise.jpg"
          alt="Panoramic sunrise over Sahyadri mountains near Nashik"
          fill
          priority
          className="object-cover object-center opacity-20 dark:opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/80 dark:bg-[#070B14]/85" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Command & Value Proposition */}
        <div className="lg:col-span-7 text-left space-y-6 lg:space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Field Companion for Nashik, Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Explore Nashik beyond the usual spots.
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
            Field guide to Nashik&apos;s rolling vineyards, sacred river ghats, and Sahyadri mountain forts. Curated landmark dossiers, station-based itineraries, and offline wishlists.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-colors min-h-[52px]"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.793 12 3.61 22.186c-.352-.375-.568-.89-.568-1.46V3.274c0-.57.216-1.085.568-1.46zm11.238 11.24L17.7 15.91l-11.8 6.772 8.947-9.628zm0-2.108L5.9 1.318 17.7 8.09l-2.853 2.856zm1.054 1.054l3.197-1.838c.846-.486.846-1.282 0-1.768l-3.197-1.838-2.115 2.115 2.115 2.329z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-80 leading-none">Free Install on</div>
                <div className="text-sm font-extrabold leading-none mt-1">Google Play</div>
              </div>
            </a>

            <Link
              href="#places-preview"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition-colors min-h-[52px]"
            >
              <span>Explore landmarks</span>
              <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </Link>
          </div>

          {/* Practical Truthful Assurances */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              Android 8.0+ Compatible
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
              No Account Required to Browse
            </span>
          </div>

        </div>

        {/* Right Column: Authentic App Visuals (Dual Layered Presentation) */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          
          {/* Main Primary Phone: Explore Hub */}
          <div className="relative z-10 w-[270px] sm:w-[300px] rounded-[36px] bg-slate-950 p-2.5">
            <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/19.5]">
              {/* Punch hole */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black z-30" />
              <Image
                src="/images/home.png"
                alt="NashikExplore Android app explore home screen"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 270px, 300px"
              />
            </div>
          </div>

          {/* Secondary Layered Screen: Trip Planner */}
          <div className="hidden sm:block absolute -right-6 lg:-right-4 top-12 w-[240px] rounded-[32px] bg-slate-900 p-2 opacity-90 transform rotate-3">
            <div className="relative rounded-[24px] overflow-hidden bg-black aspect-[9/19.5]">
              <Image
                src="/images/ai-planner.png"
                alt="NashikExplore Android app itinerary planner screen"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
