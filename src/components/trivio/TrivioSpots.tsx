import React from 'react';

const SPOTS = [
  {
    name: 'Panchavati',
    desc: 'Historic river ghats and Godavari temples.',
  },
  {
    name: 'Trimbakeshwar',
    desc: 'Sacred shrine tucked beneath Brahmagiri peaks.',
  },
  {
    name: 'Sula Vineyards',
    desc: 'Rolling green trails and tasting rooms.',
  },
  {
    name: 'Pandavleni',
    desc: '2nd-century BCE rock-cut hill overlook.',
  },
];

export function TrivioSpots() {
  return (
    <section className="w-full bg-[#F4F1F8] px-6 sm:px-10 lg:px-16 py-16" id="places">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
          <div>
            <span className="text-xs font-semibold text-deep-violet block mb-1">Live in Nashik</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">Spots to begin with</h2>
          </div>
          <span className="text-xs text-on-surface-variant font-medium">Tap to inspect in app</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
          {SPOTS.map((spot) => (
            <div
              key={spot.name}
              className="bg-white rounded-xl p-4 border border-[#ded9e8] hover:border-deep-violet/40 transition-[border-color,transform] hover:-translate-y-0.5"
            >
              <span className="w-2 h-2 rounded-full bg-signal-lime inline-block mb-2" />
              <h3 className="font-bold text-base text-on-surface">{spot.name}</h3>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{spot.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
