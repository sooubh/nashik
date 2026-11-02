import React from 'react';
import Image from 'next/image';

export function TrivioJourney() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-16 py-16 lg:py-24" id="journey">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-violet mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-lime border border-deep-violet" />
            <span>How Trivio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
            From screen to sanctuary in three steps.
          </h2>
        </div>

        {/* The Continuous Vertical Spine Flow Chart */}
        <div className="relative">
          {/* The linear connecting line running vertically down */}
          <div className="absolute top-8 bottom-12 left-6 md:left-1/2 md:-translate-x-1/2 w-0.5 bg-[#4B2E83]/20 pointer-events-none" />

          {/* STEP 1: Find where to go */}
          <div className="relative mb-20 md:mb-28 pl-16 md:pl-0">
            {/* Node Marker */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-deep-violet text-signal-lime font-bold text-sm flex items-center justify-center ring-4 ring-paper z-10">
              1
            </div>
            {/* 2-Col Layout centered on line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left side: Text */}
              <div className="md:text-right md:pr-4">
                <span className="inline-block text-xs font-semibold text-deep-violet bg-deep-violet/10 px-2.5 py-1 rounded-full mb-3">
                  Live now · Nashik
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface mb-2">
                  Find where to go
                </h3>
                <p className="text-base text-on-surface-variant leading-relaxed mb-4">
                  Hand-curated quiet trails, riverbank ghats, and hidden viewpoints worth an hour of your time. No cluttered algorithm noise.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet md:justify-end">
                  <span className="w-2 h-2 rounded-full bg-signal-lime" />
                  <span>50+ Verified Nashik Spots</span>
                </div>
              </div>
              {/* Right side: Clean Phone Card */}
              <div className="md:pl-4">
                <div data-ui="true" className="max-w-[270px] mx-auto md:mx-0 rounded-[28px] p-2 bg-slate-900 border border-slate-700/60 overflow-hidden group">
                  <div className="relative rounded-[22px] overflow-hidden aspect-[9/16] bg-slate-950">
                    <Image
                      src="/images/trivio/step-discover.jpg"
                      alt="Trivio discover feed view"
                      width={270}
                      height={480}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-3 bottom-3 p-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-white">
                      <div className="text-[11px] font-bold text-signal-lime">Morning Ghats Trail</div>
                      <div className="text-[10px] text-white/70">Godavari River · 0.8 km away</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 2: Step into the real world */}
          <div className="relative mb-20 md:mb-28 pl-16 md:pl-0">
            {/* Node Marker */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-deep-violet text-signal-lime font-bold text-sm flex items-center justify-center ring-4 ring-paper z-10">
              2
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left side on desktop: Phone mockup (Alternating) */}
              <div className="order-2 md:order-1 md:text-right md:pr-4">
                <div data-ui="true" className="max-w-[270px] mx-auto md:ml-auto md:mr-0 rounded-[28px] p-2 bg-slate-900 border border-slate-700/60 overflow-hidden group">
                  <div className="relative rounded-[22px] overflow-hidden aspect-[9/16] bg-slate-950">
                    <Image
                      src="/images/trivio/step-navigation.jpg"
                      alt="Trivio route navigation"
                      width={270}
                      height={480}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-3 bottom-3 p-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-white">
                      <div className="text-[11px] font-bold text-signal-lime flex items-center gap-1 justify-start">
                        <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                        </svg>
                        <span>Direct Coordinates</span>
                      </div>
                      <div className="text-[10px] text-white/70">One tap transfer to your maps</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right side: Text */}
              <div className="order-1 md:order-2 md:pl-4">
                <span className="inline-block text-xs font-semibold text-deep-violet bg-deep-violet/10 px-2.5 py-1 rounded-full mb-3">
                  Turn-by-turn handoff
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface mb-2">
                  Step into the real world
                </h3>
                <p className="text-base text-on-surface-variant leading-relaxed mb-4">
                  One tap pushes exact GPS coordinates into your favorite map app. Pocket your phone, take in the scenery, and explore.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet">
                  <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Zero distraction · Pure outdoors</span>
                </div>
              </div>
            </div>
          </div>

          {/* STEP 3: Meet what's next */}
          <div className="relative pl-16 md:pl-0">
            {/* Node Marker */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-deep-violet text-signal-lime font-bold text-sm flex items-center justify-center ring-4 ring-paper z-10">
              3
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Left side: Text */}
              <div className="md:text-right md:pr-4">
                <span className="inline-block text-xs font-semibold text-deep-violet bg-deep-violet/10 px-2.5 py-1 rounded-full mb-3">
                  Coming soon · Q2 2026
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface mb-2">
                  Meet what's next
                </h3>
                <p className="text-base text-on-surface-variant leading-relaxed mb-4">
                  Intimate dusk acoustic sessions, heritage pottery circles, and dawn trekking clusters organized by locals.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-deep-violet md:justify-end">
                  <span className="w-2 h-2 rounded-full bg-[#E0A24A]" />
                  <span>Events &amp; Community Circles</span>
                </div>
              </div>
              {/* Right side: Preview card */}
              <div className="md:pl-4">
                <div data-ui="true" className="max-w-[270px] mx-auto md:mx-0 rounded-[28px] p-2 bg-slate-900 border border-slate-700/60 overflow-hidden group">
                  <div className="relative rounded-[22px] overflow-hidden aspect-[9/16] bg-slate-950">
                    <Image
                      src="/images/trivio/step-community.jpg"
                      alt="Trivio community events preview"
                      width={270}
                      height={480}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-3 bottom-3 p-2.5 rounded-xl bg-slate-950/90 border border-white/10 text-white">
                      <div className="text-[11px] font-bold text-[#fcba60]">Dawn Trekkers Cluster</div>
                      <div className="text-[10px] text-white/70">Anjaneri Peak · Sunrise Meet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
