'use client';

import React from 'react';

const COMPARISONS = [
  {
    topic: 'Temple Sanctum Timings',
    standard:
      'Displays outer gate opening hours; ignores afternoon Garbhagriha closures and VIP puja pass slots.',
    trivio:
      'Flags inner sanctum entry windows, morning Rudrabhishek aartis, and traditional dhoti/kurta dress codes.',
  },
  {
    topic: 'Vineyard Cellar Tours',
    standard:
      'Presents a roadside pin with generic commercial hours, missing cellar tasting reservations.',
    trivio:
      'Direct guidance on daily tasting room sessions, seasonal harvest stomping (Jan–Mar), and lakeside deck tables.',
  },
  {
    topic: 'Sahyadri Trail Hazards',
    standard:
      'Shows a basic trail line without elevation gradient, water warnings, or seasonal cliff hazards.',
    trivio:
      'Explicit alerts for Harihar’s 80° rock-cut steps, monsoon slickness, and mandatory early morning start hours.',
  },
  {
    topic: 'Route Sequencing',
    standard:
      'Point-to-point routing that causes repetitive backtracking through congested city intersections.',
    trivio:
      'Geographic clustering that sequences morning, afternoon, and sunset stops smoothly from your arrival hub.',
  },
  {
    topic: 'Western Ghats Dead Zones',
    standard:
      'Stalls with blank loading spinners when cellular reception drops in deep Sahyadri valleys.',
    trivio:
      'On-device local caching keeps full destination dossiers and GPS coordinates accessible with zero signal.',
  },
];

export function LocalAdvantage() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-20 lg:py-28 bg-white" id="comparison">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            What standard maps miss in Nashik.
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant mt-3 leading-relaxed">
            Mainstream navigation engines calculate highway logistics. Trivio factors in the cultural, topographic, and seasonal realities of the Western Ghats.
          </p>
        </div>

        {/* Editorial Comparison Ledger */}
        <div className="space-y-4">
          {COMPARISONS.map((item) => (
            <div
              key={item.topic}
              className="p-6 sm:p-7 rounded-2xl bg-[#FBFAFD] border border-brand-100 grid grid-cols-1 lg:grid-cols-12 gap-5 items-baseline"
            >
              <div className="lg:col-span-3">
                <span className="font-bold text-base sm:text-lg text-deep-violet block">
                  {item.topic}
                </span>
              </div>

              <div className="lg:col-span-4 p-4 rounded-xl bg-white border border-brand-100/60">
                <span className="text-xs font-semibold text-rose-700 block mb-1">
                  Standard Map Engines
                </span>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.standard}
                </p>
              </div>

              <div className="lg:col-span-5 p-4 rounded-xl bg-deep-violet text-white">
                <span className="text-xs font-semibold text-signal-lime block mb-1">
                  Trivio Local Intelligence
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  {item.trivio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
