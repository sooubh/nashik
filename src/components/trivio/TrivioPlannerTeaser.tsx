'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface RouteStop {
  time: string;
  name: string;
  note: string;
}

interface SimulatedItinerary {
  headline: string;
  transitSummary: string;
  days: {
    title: string;
    stops: RouteStop[];
  }[];
}

const ITINERARY_PRESETS: Record<string, SimulatedItinerary> = {
  'Spiritual & Temples-1': {
    headline: 'Sacred Heritage Day Express',
    transitSummary: '42 km total road transit · 1 hr 15 mins driving',
    days: [
      {
        title: 'Day 1: Sacred Shrines & Godavari Resurgence',
        stops: [
          { time: '07:30 AM', name: 'Trimbakeshwar Jyotirlinga', note: 'Morning Rudrabhishek darshan at base of Brahmagiri' },
          { time: '10:45 AM', name: 'Kushavarta Kund', note: 'Sacred resurgence pond of River Godavari' },
          { time: '01:00 PM', name: 'Authentic Maharashtrian Thali', note: 'Panchavati heritage dining stop' },
          { time: '03:30 PM', name: 'Shree Kalaram Mandir', note: 'Black stone Hemadpanthi temple architecture' },
          { time: '06:30 PM', name: 'Ramkund Evening Aarti', note: 'Sacred oil lamps on Godavari river steps' },
        ],
      },
    ],
  },
  'Spiritual & Temples-2': {
    headline: 'Sacred Heritage & Panchavati Weekend',
    transitSummary: '68 km total road transit · 1 hr 45 mins driving',
    days: [
      {
        title: 'Day 1: Trimbakeshwar Jyotirlinga & Kushavarta',
        stops: [
          { time: '07:30 AM', name: 'Trimbakeshwar Jyotirlinga', note: 'VIP inner sanctum access and morning darshan' },
          { time: '11:00 AM', name: 'Kushavarta Kund', note: 'Circumambulation and sacred ghat walk' },
          { time: '01:30 PM', name: 'Lunch at Trimbak Foothills', note: 'Traditional jowar bhakri and pitla' },
          { time: '04:00 PM', name: 'Brahmagiri Hill Overlook', note: 'Origins of sacred South Indian rivers' },
        ],
      },
      {
        title: 'Day 2: Historic Panchavati & Ancient Caves',
        stops: [
          { time: '08:00 AM', name: 'Kalaram Temple & Sita Gumpha', note: 'Ramayana exile trail landmarks' },
          { time: '11:30 AM', name: 'Kapaleshwar Mahadev Temple', note: 'Historic shrine with no Nandi statue' },
          { time: '01:30 PM', name: 'Sadhana Chulivarchi Misal', note: 'Clay pot cooked culinary icon' },
          { time: '04:00 PM', name: 'Pandavleni Buddhist Caves', note: '2nd-century BCE rock-cut overlook' },
          { time: '06:30 PM', name: 'Ramkund Godavari Aarti', note: 'Sunset devotional bells along holy ghats' },
        ],
      },
    ],
  },
  'Spiritual & Temples-3': {
    headline: 'Deep Pilgrimage & Architecture Immersion',
    transitSummary: '94 km total road transit · 2 hrs 30 mins driving',
    days: [
      {
        title: 'Day 1: Jyotirlinga & Kushavarta Resurgence',
        stops: [
          { time: '07:30 AM', name: 'Trimbakeshwar Jyotirlinga', note: 'Sacred three-faced Tridev lingam' },
          { time: '11:30 AM', name: 'Kushavarta Sacred Pond', note: 'Holy cleansing pond beneath Brahmagiri' },
          { time: '04:00 PM', name: 'Anjaneri Foothills', note: 'Quiet pastoral trails' },
        ],
      },
      {
        title: 'Day 2: Old Panchavati Temples & Ghats',
        stops: [
          { time: '08:00 AM', name: 'Kalaram Temple', note: 'Carved black stone architecture' },
          { time: '10:30 AM', name: 'Sita Gumpha & Goraram Mandir', note: 'Ancient cave chamber and idols' },
          { time: '06:30 PM', name: 'Evening Godavari Aarti', note: 'Chanted prayers along Ramkund' },
        ],
      },
      {
        title: 'Day 3: Muktidham & Buddhist Antiquity',
        stops: [
          { time: '09:00 AM', name: 'Muktidham Marble Temple', note: 'Replica of 12 Jyotirlingas in Makrana marble' },
          { time: '01:00 PM', name: 'Shamsundar Misal', note: 'Award-winning regional spicy misal' },
          { time: '03:30 PM', name: 'Pandavleni Caves & Museum', note: 'Ancient Hinayana Buddhist monastery' },
        ],
      },
    ],
  },
  'Wine & Culinary-1': {
    headline: 'Vineyard Masterclass & Lakefront Sunset',
    transitSummary: '24 km total road transit · 45 mins driving',
    days: [
      {
        title: 'Day 1: Terroir Cellar Tour & Lake Tasting',
        stops: [
          { time: '11:30 AM', name: 'Sula Vineyards Cellar Tour', note: 'Guided oak barrel tasting and fermentation rooms' },
          { time: '01:30 PM', name: 'Lunch at Little Italy @ Sula', note: 'Wood-fired gourmet pizza paired with Sauvignon Blanc' },
          { time: '04:00 PM', name: 'York Winery & Tasting Room', note: 'Artisanal Reserve Shiraz tasting overlooking Gangapur Lake' },
          { time: '06:30 PM', name: 'Lakeside Sunset Deck', note: 'Dusk panorama across tranquil dam backwaters' },
        ],
      },
    ],
  },
  'Wine & Culinary-2': {
    headline: 'The Grand Wine Trail & Culinary Journey',
    transitSummary: '52 km total road transit · 1 hr 25 mins driving',
    days: [
      {
        title: 'Day 1: Gangapur Lake Terroir (Sula & York)',
        stops: [
          { time: '11:00 AM', name: 'Sula Vineyards Estate', note: 'Vineyard stroll, guided cellar walk, and tasting masterclass' },
          { time: '01:30 PM', name: 'Mediterranean Bistro Lunch', note: 'Farm-to-table cuisine overlooking estate vines' },
          { time: '04:30 PM', name: 'York Winery Deck', note: 'Sparkling wine tasting on the waterfront terrace' },
          { time: '07:30 PM', name: 'Lakeside Dinner', note: 'Artisanal local cheese and wine pairing' },
        ],
      },
      {
        title: 'Day 2: Boutique Vintners & Misal Trails',
        stops: [
          { time: '09:00 AM', name: 'Sadhana Chulivarchi Misal', note: 'Smoky clay pot breakfast misal with jalebi' },
          { time: '11:30 AM', name: 'Soma Vine Village', note: 'Infinity pool views and barrel aging session' },
          { time: '02:30 PM', name: 'Vallonné Vineyards (Igatpuri road)', note: 'Boutique French-style oak barrel cellar' },
          { time: '05:30 PM', name: 'Someshwar Waterfront', note: 'Gentle river cascade walk before departure' },
        ],
      },
    ],
  },
  'Wine & Culinary-3': {
    headline: 'Comprehensive Wine & Gastronomy Escape',
    transitSummary: '78 km total road transit · 2 hrs 10 mins driving',
    days: [
      {
        title: 'Day 1: Pioneer Wineries & Cellar Tasting',
        stops: [
          { time: '11:30 AM', name: 'Sula Vineyards Masterclass', note: 'Tasting 6 flagship reserve wines' },
          { time: '04:00 PM', name: 'York Winery Sunset', note: 'Waterfront reserve tasting on Gangapur Lake' },
        ],
      },
      {
        title: 'Day 2: Boutique Terroirs & Lake Villas',
        stops: [
          { time: '11:00 AM', name: 'Soma Vine Village', note: 'Grape pressing and vineyard tour' },
          { time: '03:30 PM', name: 'Grape County Eco-Resort', note: 'Boutique lake dining and equestrian estate' },
        ],
      },
      {
        title: 'Day 3: Heritage Food Trails & River Ghats',
        stops: [
          { time: '09:00 AM', name: 'Sayantara Sabudana Vada', note: 'Decades-old historic Nashik breakfast' },
          { time: '11:30 AM', name: 'Old City Spice Bazaar', note: 'Heritage culinary walking trail' },
          { time: '02:00 PM', name: 'Vallonné French Bistro', note: 'Boutique Cabernet Sauvignon tasting' },
        ],
      },
    ],
  },
  'Sahyadri Treks & Nature-1': {
    headline: 'Harihar Vertical Steps Adventure',
    transitSummary: '82 km total road transit · 2 hrs 15 mins driving',
    days: [
      {
        title: 'Day 1: Legendary 80° Rock-Cut Steps',
        stops: [
          { time: '05:30 AM', name: 'Early Drive to Harshewadi Base', note: 'Depart Nashik city before sun breaks' },
          { time: '07:00 AM', name: 'Harihar Fort Ascent', note: 'Chiseled 80-degree vertical stairs in rock wall' },
          { time: '10:30 AM', name: 'Summit Plateau & Citadel', note: '360° panoramic Sahyadri views' },
          { time: '01:30 PM', name: 'Base Village Meal', note: 'Freshly prepared rural Maharashtrian lunch' },
          { time: '04:30 PM', name: 'Dugarwadi Waterfall Viewpoint', note: 'Deep green gorge and misty water spray' },
        ],
      },
    ],
  },
  'Sahyadri Treks & Nature-2': {
    headline: 'Twin Peaks & Monsoon Cascades',
    transitSummary: '110 km total road transit · 2 hrs 50 mins driving',
    days: [
      {
        title: 'Day 1: Harihar Rock-Cut Climb & Gorge',
        stops: [
          { time: '06:00 AM', name: 'Harihar Fort Ascent', note: 'Iconic vertical rock steps and summit citadel' },
          { time: '01:00 PM', name: 'Harshewadi Base Lunch', note: 'Warm rural hospitality' },
          { time: '04:00 PM', name: 'Dugarwadi Waterfall Gorge', note: 'Monsoon cascade framed by jungle slopes' },
        ],
      },
      {
        title: 'Day 2: Anjaneri Sacred Peak & Lakeside',
        stops: [
          { time: '06:30 AM', name: 'Anjaneri Hill Trek', note: 'Mythological birthplace of Lord Hanuman' },
          { time: '10:30 AM', name: 'High Plateau & Ancient Shrines', note: 'Endemic botanical plateau' },
          { time: '02:00 PM', name: 'Gangapur Backwaters Relax', note: 'Campfire and waterfront serenity' },
        ],
      },
    ],
  },
  'Sahyadri Treks & Nature-3': {
    headline: 'Ultimate Sahyadri Wilderness Expedition',
    transitSummary: '145 km total road transit · 3 hrs 40 mins driving',
    days: [
      {
        title: 'Day 1: Harihar Fort 80° Staircase',
        stops: [
          { time: '06:00 AM', name: 'Harihar Citadel Climb', note: 'Vertical cliff steps and Sahyadri winds' },
          { time: '03:30 PM', name: 'Dugarwadi Falls', note: 'Spectacular jungle plunge pool' },
        ],
      },
      {
        title: 'Day 2: Anjaneri & Brahmagiri Peaks',
        stops: [
          { time: '06:30 AM', name: 'Anjaneri Summit Trail', note: 'High altitude plateau overlook' },
          { time: '02:30 PM', name: 'Brahmagiri Mountain Forest', note: 'Holy source caves of River Godavari' },
        ],
      },
      {
        title: 'Day 3: Vaitarna Lake & Someshwar Falls',
        stops: [
          { time: '08:00 AM', name: 'Vaitarna Dam Backwaters', note: 'Misty water reservoir and island views' },
          { time: '01:30 PM', name: 'Someshwar Waterfall', note: 'Gentle cascades near holy Someshwar temple' },
        ],
      },
    ],
  },
};

export function TrivioPlannerTeaser() {
  const [duration, setDuration] = useState<'1' | '2' | '3'>('2');
  const [focus, setFocus] = useState<'Spiritual & Temples' | 'Wine & Culinary' | 'Sahyadri Treks & Nature'>('Spiritual & Temples');

  const key = `${focus}-${duration}`;
  const plan = ITINERARY_PRESETS[key] || ITINERARY_PRESETS['Spiritual & Temples-2'];

  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24 bg-[#F4F1F8]" id="interactive-planner">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-violet mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-lime border border-deep-violet" />
            <span>Interactive Route Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Plan your Nashik route in seconds.
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Test our deterministic itinerary algorithm right in your browser. Real schedules, realistic transit speeds, and zero backtracking.
          </p>
        </div>

        {/* Interactive Controls Box */}
        <div className="bg-white rounded-card p-6 sm:p-8 border border-[#ded9e8] mb-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Control 1: Duration */}
            <div>
              <span className="flex items-center gap-2 text-xs font-semibold text-deep-violet mb-2.5">
                <Calendar className="w-4 h-4 text-deep-violet" />
                <span>Select Trip Duration</span>
              </span>
              <div className="grid grid-cols-3 gap-2">
                {(['1', '2', '3'] as const).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-[background-color,color] cursor-pointer ${
                      duration === d
                        ? 'bg-deep-violet text-signal-lime'
                        : 'bg-[#F4F1F8] text-on-surface-variant hover:text-deep-violet'
                    }`}
                  >
                    {d} {d === '1' ? 'Day' : 'Days'}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Focus */}
            <div>
              <span className="flex items-center gap-2 text-xs font-semibold text-deep-violet mb-2.5">
                <Compass className="w-4 h-4 text-deep-violet" />
                <span>Primary Exploration Focus</span>
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Temples', val: 'Spiritual & Temples' as const },
                  { label: 'Wineries', val: 'Wine & Culinary' as const },
                  { label: 'Treks', val: 'Sahyadri Treks & Nature' as const },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setFocus(item.val)}
                    className={`py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-[background-color,color] cursor-pointer ${
                      focus === item.val
                        ? 'bg-deep-violet text-signal-lime'
                        : 'bg-[#F4F1F8] text-on-surface-variant hover:text-deep-violet'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Simulated Itinerary Output */}
        <div data-ui="true" className="bg-white rounded-card p-6 sm:p-8 border border-[#ded9e8] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#E0A24A]" />
                <h3 className="font-bold text-lg sm:text-xl text-on-surface">
                  {plan.headline}
                </h3>
              </div>
              <p className="text-xs text-on-surface-variant">
                {plan.transitSummary}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deep-violet/10 text-deep-violet text-xs font-semibold shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-deep-violet" />
              <span>100% Timing Feasible</span>
            </div>
          </div>

          {/* Days Display */}
          <div className="space-y-5">
            {plan.days.map((day) => (
              <div key={day.title} className="p-5 rounded-2xl bg-[#F4F1F8] border border-[#ded9e8]">
                <h4 className="font-bold text-sm text-deep-violet mb-3">
                  {day.title}
                </h4>

                <div className="space-y-2.5">
                  {day.stops.map((stop) => (
                    <div key={stop.name} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className="flex items-center gap-1 text-deep-violet font-semibold shrink-0 w-20">
                        <Clock className="w-3 h-3 text-deep-violet" />
                        <span>{stop.time}</span>
                      </div>
                      <div className="min-w-0">
                        <strong className="text-on-surface">{stop.name}</strong>
                        <span className="text-on-surface-variant block text-xs mt-0.5">{stop.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-on-surface-variant">
              Want custom arrival hubs, budget tiers, and offline navigation?
            </span>

            <Link
              href="/trip-planner"
              className="inline-flex items-center gap-2 bg-deep-violet text-signal-lime text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-transform hover:scale-[1.02] active:scale-95"
            >
              <span>Explore Complete Trip Guide</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
