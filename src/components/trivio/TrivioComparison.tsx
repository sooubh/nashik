import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const COMPARISON_ROWS = [
  {
    topic: 'Temple Sanctum Timings',
    generic: 'Only lists general gate opening hours; ignores aarti closures and pass requirements.',
    trivio: 'Tracks inner garbhagriha VIP darshan passes, morning Rudrabhishek aartis, and traditional dress codes.',
  },
  {
    topic: 'Vineyard Tasting Slots',
    generic: 'Shows a roadside pin without cellar tour slots or tasting room reservation hours.',
    trivio: 'Direct info on daily cellar tasting sessions, seasonal harvest stomping, and lakeside dining reservations.',
  },
  {
    topic: 'Fort Trekking Hazards',
    generic: 'Shows a basic walking trail line without elevation gradient or safety warnings.',
    trivio: 'Warns about sheer 80-degree rock-cut steps (Harihar), wet monsoon slip risks, and recommended start times.',
  },
  {
    topic: 'Route Sequencing',
    generic: 'Point-to-point routing that causes repetitive backtracking across city traffic.',
    trivio: 'Deterministic clustering engine that sequences morning, afternoon, and sunset stops by geographic proximity.',
  },
  {
    topic: 'Offline Dead Zones',
    generic: 'Fails with network error screens when cellular signal drops in deep Sahyadri valleys.',
    trivio: '100% local-first caching ensures full destination guides and saved coordinates remain available with zero signal.',
  },
];

export function TrivioComparison() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24 bg-[#F4F1F8]" id="comparison">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-violet mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-lime border border-deep-violet" />
            <span>The Local Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Why generic maps fall short in Nashik.
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Standard maps know the road. Trivio is architected specifically around the unique cultural, seasonal, and spiritual rhythms of Nashik.
          </p>
        </div>

        <div className="space-y-4">
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.topic}
              className="bg-white rounded-card p-5 sm:p-6 border border-[#ded9e8] grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              <div className="md:col-span-3">
                <span className="font-bold text-sm text-deep-violet block">
                  {row.topic}
                </span>
              </div>

              <div className="md:col-span-4 flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-[#ba1a1a] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {row.generic}
                </p>
              </div>

              <div className="md:col-span-5 flex items-start gap-2.5 bg-[#F4F1F8] p-3.5 rounded-xl border border-[#ded9e8]">
                <CheckCircle2 className="w-4 h-4 text-deep-violet shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-medium text-on-surface leading-relaxed">
                  {row.trivio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
