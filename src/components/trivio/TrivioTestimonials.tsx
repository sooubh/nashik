import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    author: 'Pooja Deshmukh',
    location: 'Wine Connoisseur & Foodie · Mumbai',
    quote:
      'Trivio saved our weekend anniversary trip. We wanted to visit both Trimbakeshwar and three vineyards, but had no idea how to time the darshan with winery tasting sessions. Trivio organized the exact route with zero backtracking. The cellar tasting tips were spot on.',
  },
  {
    author: 'Vikramaditya Rathore',
    location: 'Avid Trekker & Photographer · Pune',
    quote:
      'The safety warnings for the Harihar Fort trek were invaluable. It warned us about the wet 80-degree rock steps and told us exactly when cloud cover clears for sunrise photography. Best of all, the app worked completely offline at the fort summit with zero bars.',
  },
  {
    author: 'Dr. Rajesh & Sunita Kulkarni',
    location: 'Family Pilgrims · Hyderabad',
    quote:
      'Traveling with elderly parents requires extra care regarding walking distances and footwear counters. Trivio explicitly verified ramp accessibility and queue timings for sanctum access. Truly the most thoughtful travel companion for Maharashtra.',
  },
];

export function TrivioTestimonials() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24 bg-paper" id="reviews">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-violet mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-lime border border-deep-violet" />
            <span>Field Notes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Stories from the trail.
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Real feedback from wine enthusiasts, fort trekkers, and pilgrims exploring Nashik with Trivio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.author}
              className="bg-[#F4F1F8] rounded-card p-6 border border-[#ded9e8] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#E0A24A] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#E0A24A]" />
                  ))}
                </div>

                <p className="font-editorial italic text-sm sm:text-base text-on-surface leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div>
                <strong className="text-sm font-bold text-on-surface block">
                  {item.author}
                </strong>
                <span className="text-xs text-on-surface-variant block mt-0.5">
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
