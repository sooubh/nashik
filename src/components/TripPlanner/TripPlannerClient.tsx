'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  MapPin,
  Clock,
  Sparkles,
  ShieldAlert,
  RotateCcw,
  Navigation,
  ExternalLink,
  ChevronRight,
  Wifi,
  Battery,
  AlertTriangle,
} from 'lucide-react';
import { transitHubsData } from '@/data/hubs';
import { attractionsData } from '@/data/attractions';
import { generateItinerary, PlanOptions } from '@/lib/planner';
import { DayItinerary } from '@/lib/types';
import { cn } from '@/lib/utils';

export function TripPlannerClient() {
  // Config state
  const [selectedHubId, setSelectedHubId] = useState('nashik_road');
  const [durationDays, setDurationDays] = useState(2);
  const [budgetTier, setBudgetTier] = useState<'budget' | 'moderate' | 'premium'>('moderate');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'temple',
    'vineyard',
    'fort',
    'waterfall',
    'heritage',
  ]);
  const [travelPace, setTravelPace] = useState<'relaxed' | 'moderate'>('moderate');
  const [enableDistance, setEnableDistance] = useState(true);

  // Generator & UI State
  const [status, setStatus] = useState<'welcome' | 'loading' | 'results'>('welcome');
  const [loadingStep, setLoadingStep] = useState(0);
  const [itinerary, setItinerary] = useState<DayItinerary[]>([]);
  const [activeDay, setActiveDay] = useState(1);
  const [currentTime, setCurrentTime] = useState('9:41 AM');

  // Clock in status bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const toggleCategory = (catId: string) => {
    if (selectedCategories.includes(catId)) {
      if (selectedCategories.length > 1) {
        setSelectedCategories(selectedCategories.filter((c) => c !== catId));
      }
    } else {
      setSelectedCategories([...selectedCategories, catId]);
    }
  };

  const handleGenerate = () => {
    setStatus('loading');
    setLoadingStep(0);

    const stepInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          // Complete and show results
          const hub = transitHubsData.find((h) => h.id === selectedHubId) || transitHubsData[0];
          const result = generateItinerary({
            transitHub: hub,
            durationDays,
            budgetTier,
            selectedCategories,
            travelPace,
            enableDistanceCalculation: enableDistance,
            destinationPool: attractionsData,
          });
          setItinerary(result);
          setActiveDay(1);
          setStatus('results');
          return 3;
        }
        return prev + 1;
      });
    }, 600);
  };

  const handleReset = () => {
    setStatus('welcome');
    setLoadingStep(0);
  };

  const loadingSteps = [
    'Connecting to Firestore cache...',
    'Filtering by budget tier & tags...',
    'Computing Haversine distance vectors...',
    'Assembling on-device timeline cards...',
  ];

  const currentDayData = itinerary.find((d) => d.day === activeDay) || itinerary[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Preferences Configuration Panel */}
      <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <h2 className="font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight">
              Planner Preferences
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Customize your travel parameters
            </p>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-blue dark:text-brand-light border border-brand-200/50 dark:border-brand-800/50">
            Offline Ready
          </span>
        </div>

        {/* 1. Transit Hub */}
        <div>
          <label htmlFor="transit-hub-select" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
            Starting Point / Transit Hub
          </label>
          <select
            id="transit-hub-select"
            value={selectedHubId}
            onChange={(e) => setSelectedHubId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            {transitHubsData.map((hub) => (
              <option key={hub.id} value={hub.id}>
                {hub.name}
              </option>
            ))}
          </select>
        </div>

        {/* 2. Duration Slider */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="duration-slider-input" className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Trip Duration
            </label>
            <span className="font-extrabold text-sm text-brand-blue dark:text-brand-light px-2.5 py-0.5 rounded-lg bg-brand-50 dark:bg-brand-950/60 border border-brand-200/50 dark:border-brand-800/50">
              {durationDays} {durationDays === 1 ? 'Day' : 'Days'}
            </span>
          </div>
          <input
            id="duration-slider-input"
            type="range"
            min={1}
            max={3}
            step={1}
            value={durationDays}
            onChange={(e) => setDurationDays(parseInt(e.target.value))}
            className="w-full accent-brand-blue h-2 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-bold mt-1">
            <span>1 Day (Quick)</span>
            <span>2 Days (Weekend)</span>
            <span>3 Days (Complete)</span>
          </div>
        </div>

        {/* 3. Budget Tier */}
        <div>
          <label htmlFor="budget-tier-select" className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
            Budget Tier
          </label>
          <select
            id="budget-tier-select"
            value={budgetTier}
            onChange={(e) => setBudgetTier(e.target.value as any)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            <option value="budget">Budget-Friendly (Free / Low Cost)</option>
            <option value="moderate">Moderate (Standard Entry Fees)</option>
            <option value="premium">Premium Experience (Unlimited)</option>
          </select>
        </div>

        {/* 4. Categories Checkboxes */}
        <div>
          <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            Attraction Categories
          </span>
          <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold">
            {[
              { id: 'temple', label: '🛕 Temples & Spiritual' },
              { id: 'vineyard', label: '🍇 Vineyards & Wine' },
              { id: 'fort', label: '⛰️ Forts & Treks' },
              { id: 'waterfall', label: '🌊 Waterfalls' },
              { id: 'heritage', label: '🏛️ Caves & Heritage' },
            ].map((cat) => {
              const checked = selectedCategories.includes(cat.id);
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => toggleCategory(cat.id)}
                  className={cn(
                    'p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all focus:outline-none',
                    checked
                      ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-300 dark:border-brand-800 text-brand-blue dark:text-brand-light font-bold'
                      : 'bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  )}
                >
                  <span className="text-sm">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Travel Pace */}
        <div>
          <span className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
            Travel Pace
          </span>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTravelPace('relaxed')}
              className={cn(
                'p-3 rounded-xl border text-center transition-all text-xs font-bold focus:outline-none',
                travelPace === 'relaxed'
                  ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-300 dark:border-brand-800 text-brand-blue dark:text-brand-light'
                  : 'bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              )}
            >
              <span>Relaxed (2 stops/day)</span>
            </button>
            <button
              type="button"
              onClick={() => setTravelPace('moderate')}
              className={cn(
                'p-3 rounded-xl border text-center transition-all text-xs font-bold focus:outline-none',
                travelPace === 'moderate'
                  ? 'bg-brand-50 dark:bg-brand-950/60 border-brand-300 dark:border-brand-800 text-brand-blue dark:text-brand-light'
                  : 'bg-slate-50 dark:bg-slate-850 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
              )}
            >
              <span>Standard (3 stops/day)</span>
            </button>
          </div>
        </div>

        {/* 6. Dynamic Haversine Distance Toggle */}
        <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
              Haversine Vector Calculations
            </span>
            <span className="block text-[10px] text-slate-500 dark:text-slate-400">
              Computes precise GPS distance from transit hub
            </span>
          </div>
          <button
            type="button"
            onClick={() => setEnableDistance(!enableDistance)}
            className={cn(
              'w-11 h-6 rounded-full transition-colors relative focus:outline-none',
              enableDistance ? 'bg-brand-blue' : 'bg-slate-300 dark:bg-slate-700'
            )}
            aria-label="Toggle distance calculation"
          >
            <div
              className={cn(
                'w-4 h-4 rounded-full bg-white transition-transform absolute top-1',
                enableDistance ? 'translate-x-6' : 'translate-x-1'
              )}
            />
          </button>
        </div>

        {/* Generate CTA */}
        <button
          onClick={handleGenerate}
          disabled={status === 'loading'}
          type="button"
          className="w-full py-4 rounded-2xl text-white font-extrabold text-base text-center bg-gradient-to-r from-brand-blue via-brand-500 to-brand-sky hover:from-brand-secondary hover:to-brand-blue shadow-lg shadow-brand-blue/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span>{status === 'results' ? 'Re-Generate Itinerary' : 'Generate Smart Itinerary'}</span>
        </button>
      </div>

      {/* Right Column: Phone Mockup Emulator */}
      <div className="lg:col-span-7 flex justify-center">
        <div className="relative w-full max-w-[420px] aspect-[9/19] bg-slate-950 rounded-[50px] p-3.5 shadow-2xl border-4 border-slate-800 ring-8 ring-slate-900/30 overflow-hidden flex flex-col">
          {/* Phone Shell Inner */}
          <div className="w-full h-full bg-[#F8FAFC] dark:bg-slate-950 rounded-[38px] overflow-hidden flex flex-col relative text-slate-900 dark:text-slate-100 shadow-inner">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 flex items-center justify-end px-3">
              <span className="h-2 w-2 rounded-full bg-slate-900" />
            </div>

            {/* Status Bar */}
            <div className="h-10 pt-2 px-6 flex items-center justify-between text-[11px] font-extrabold tracking-wide text-slate-800 dark:text-slate-200 z-30 shrink-0">
              <span>{currentTime}</span>
              <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Screen Content Body */}
            <div className="flex-1 overflow-y-auto px-4 pb-6 flex flex-col">
              {/* STATE 1: WELCOME SCREEN */}
              {status === 'welcome' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-6 my-auto">
                  <div className="h-20 w-20 rounded-3xl bg-brand-50 dark:bg-brand-950 text-brand-blue dark:text-brand-light flex items-center justify-center shadow-md border border-brand-200/50 dark:border-brand-800/50">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-2xl tracking-tight mb-2 text-slate-900 dark:text-white">
                      Nashik Travel Guide
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-[260px] mx-auto">
                      Configure your transit hub, duration, and preferences on the left and tap &ldquo;Generate Smart Itinerary&rdquo;.
                    </p>
                  </div>
                  <div className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 shadow-sm">
                    Ready to compute
                  </div>
                </div>
              )}

              {/* STATE 2: LOADING GENERATING */}
              {status === 'loading' && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto">
                  <div className="relative h-20 w-20 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-brand-blue border-r-brand-sky animate-spin" />
                    <Compass className="w-8 h-8 text-brand-blue dark:text-brand-light animate-pulse" />
                  </div>
                  <h4 className="font-extrabold text-lg mb-4 text-slate-900 dark:text-white">
                    Generating Smart Route
                  </h4>
                  <div className="space-y-2 text-[11px] font-semibold text-slate-500 text-left w-full max-w-[260px]">
                    {loadingSteps.map((step, idx) => (
                      <div key={step} className="flex items-center gap-2">
                        <span
                          className={cn(
                            'h-2 w-2 rounded-full transition-colors',
                            loadingStep > idx
                              ? 'bg-emerald-500'
                              : loadingStep === idx
                              ? 'bg-brand-blue animate-ping'
                              : 'bg-slate-300 dark:bg-slate-700'
                          )}
                        />
                        <span
                          className={cn(
                            loadingStep > idx
                              ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                              : loadingStep === idx
                              ? 'text-brand-blue dark:text-brand-light font-bold'
                              : 'text-slate-400'
                          )}
                        >
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STATE 3: RESULTS ITINERARY VIEW */}
              {status === 'results' && itinerary.length > 0 && (
                <div className="flex-1 flex flex-col pt-2 animate-in fade-in duration-300">
                  {/* Day Select Tabs */}
                  <div className="flex border-b border-slate-200 dark:border-slate-800 mb-4 shrink-0">
                    {itinerary.map((d) => (
                      <button
                        key={d.day}
                        onClick={() => setActiveDay(d.day)}
                        type="button"
                        className={cn(
                          'flex-1 py-2 text-center text-xs font-bold transition-all border-b-2 focus:outline-none',
                          activeDay === d.day
                            ? 'border-brand-blue text-brand-blue dark:border-brand-light dark:text-brand-light font-extrabold'
                            : 'border-transparent text-slate-400 hover:text-slate-600'
                        )}
                      >
                        Day {d.day}
                      </button>
                    ))}
                  </div>

                  {/* Timeline Stop Cards */}
                  <div className="relative flex-1 space-y-4">
                    {/* Vertical timeline connector */}
                    <div className="absolute left-3 top-3 bottom-3 w-[2px] bg-gradient-to-b from-brand-blue via-brand-sky to-emerald-400 rounded-full z-0" />

                    <div className="space-y-3.5 relative z-10 pl-6">
                      {currentDayData?.stops.map((stop, idx) => (
                        <div
                          key={`${stop.place.id}-${idx}`}
                          className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow"
                        >
                          {/* Dot marker */}
                          <div className="absolute -left-[20px] top-[18px] h-3 w-3 rounded-full border-2 border-brand-sky bg-white dark:bg-slate-950 z-20" />

                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">
                              {stop.slot}
                            </span>
                            <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-blue dark:text-brand-light uppercase border border-brand-200/50 dark:border-brand-800/50">
                              {stop.place.categoryLabel}
                            </span>
                          </div>

                          <h5 className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">
                            {stop.place.name}
                          </h5>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-2.5">
                            {stop.place.comment}
                          </p>

                          {/* Stats info row */}
                          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-brand-sky" />
                              <span>{stop.distanceKm} km from hub</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-brand-sky" />
                              <span>{stop.place.duration} mins stay</span>
                            </div>
                          </div>

                          {/* Dynamic Caution Badges */}
                          {stop.place.climbingWarning && (
                            <div className="mt-2.5 p-2 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/60 rounded-xl text-[10px] text-amber-800 dark:text-amber-300 font-semibold leading-normal flex items-start gap-1.5">
                              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                              <span>Stair Caution: Steep climb. Avoid wet steps in heavy rain.</span>
                            </div>
                          )}

                          {stop.place.waterfallWarning && (
                            <div className="mt-2.5 p-2 bg-rose-50 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/60 rounded-xl text-[10px] text-rose-800 dark:text-rose-300 font-semibold leading-normal flex items-start gap-1.5">
                              <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                              <span>Water Hazard: Rapid currents in monsoons. Stay clear of deep basins.</span>
                            </div>
                          )}

                          {stop.place.wineWarning && (
                            <div className="mt-2.5 p-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/60 rounded-xl text-[10px] text-blue-800 dark:text-blue-300 font-semibold leading-normal flex items-start gap-1.5">
                              <span>🍇 Legal 25+ age verification enforced for wine tasting in Maharashtra.</span>
                            </div>
                          )}

                          <div className="mt-3 flex justify-between items-center text-[10px] font-bold">
                            <span className="text-slate-500 dark:text-slate-400">
                              Entry: {stop.place.entryFee === 0 ? 'Free' : `₹${stop.place.entryFee}`}
                            </span>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${stop.place.latitude},${stop.place.longitude}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-blue dark:text-brand-light hover:underline flex items-center gap-1"
                            >
                              <span>Google Maps</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Home Indicator bar */}
            <div className="h-5 flex items-center justify-center pb-2 z-30 shrink-0">
              <span className="w-28 h-1 bg-slate-800 dark:bg-slate-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
