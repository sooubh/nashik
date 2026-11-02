'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function TrivioHero() {
  return (
    <header className="relative min-h-[90vh] lg:min-h-[94vh] flex flex-col justify-between overflow-hidden bg-slate-900 rounded-t-frame">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/trivio/hero-meadow.jpg"
          alt="Lush anime meadow with snowy mountain peaks in Nashik"
          fill
          priority
          className="object-cover object-center scale-[1.02]"
          sizes="100vw"
        />
        {/* Soft Readability Scrim */}
        <div className="absolute inset-0 bg-slate-950/45 pointer-events-none" />
      </div>

      {/* Floating Pill Navigation inside top */}
      <nav aria-label="Main Navigation" className="relative z-20 w-full px-4 sm:px-8 pt-6 sm:pt-8">
        <div className="max-w-3xl mx-auto h-14 px-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-full"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-signal-lime" />
            <span>trivio</span>
          </Link>

          <div className="flex items-center gap-5 sm:gap-7">
            <a href="#journey" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Journey
            </a>
            <a href="#places" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Places
            </a>
            <a href="#contact" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-4 sm:px-5 rounded-full bg-white text-deep-violet text-sm font-semibold flex items-center justify-center transition-transform hover:scale-[1.02] active:scale-95"
          >
            Get the app
          </a>
        </div>
      </nav>

      {/* Minimal Hero Content */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-6 py-12 text-center my-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/25 text-white text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-signal-lime" />
          <span>Live now in Nashik, Maharashtra</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08] mb-4">
          Every road leads somewhere worth going.
        </h1>

        <p className="text-lg sm:text-xl text-white/95 font-medium max-w-md mb-8 leading-snug">
          Places, events and people in one app.
        </p>

        {/* Google Play Button */}
        <a
          href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-base font-bold px-8 py-3.5 rounded-full transition-transform hover:scale-[1.02] active:scale-95"
        >
          <svg aria-hidden="true" className="w-5 h-5 fill-[#221045] shrink-0" viewBox="0 0 24 24">
            <path d="M3.609 1.814L13.792 12 3.61 22.185c-.382-.363-.61-.884-.61-1.47V3.284c0-.585.228-1.106.609-1.47zm11.242 11.243l2.364 2.364-12.08 6.942 9.716-9.306zm0-2.115L5.135 1.637l12.08 6.942-2.364 2.363zm1.488 1.058l3.774 2.167c.928.532.928 1.401 0 1.934l-3.774 2.167-2.302-2.301 2.302-2.267z" />
          </svg>
          <span>Get it on Google Play</span>
        </a>
      </div>

      {/* Subtle Bottom Transition */}
      <div className="relative z-20 w-full h-8 pointer-events-none" />
    </header>
  );
}
