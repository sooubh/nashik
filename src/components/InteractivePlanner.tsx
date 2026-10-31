'use client';

import React, { useState } from 'react';
import { TRANSIT_HUBS, TRAVEL_STYLES, SAMPLE_ITINERARIES, ItineraryDay } from '@/data/itineraryData';
import { Calendar, MapPin, Clock, Route, Check, Navigation, Sparkles } from 'lucide-react';

export function InteractivePlanner() {
  const [selectedHub, setSelectedHub] = useState<'station' | 'airport' | 'bus'>('station');
  const [selectedStyle, setSelectedStyle] = useState<'heritage' | 'wine' | 'adventure'>('wine');
  const [activeDayIndex, setActiveDayIndex] = useState<number>(0);

  const itineraryKey = `${selectedHub}-${selectedStyle}-2`;
  const defaultFallbackKey = `station-${selectedStyle}-2`;
  const days: ItineraryDay[] = SAMPLE_ITINERARIES[itineraryKey] || SAMPLE_ITINERARIES[defaultFallbackKey];
  const activeDay = days[activeDayIndex] || days[0];

  return (
    <section id="trip-planner-demo" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Intro */}
      <div className="max-w-3xl mb-12 text-left">
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 block mb-3">
          Interactive Itinerary Builder
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Test the transit planner in your browser.
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
          Select your arrival station and preferred travel pace. The app calculates geographic proximity to sequence your morning, afternoon, and evening stops with zero backtracking.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div data-ui="true" className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 lg:p-12">
        
        {/* Step 1: Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
          
          {/* Hub Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-3">
              1. Choose Starting Transit Hub
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {TRANSIT_HUBS.map((hub) => {
                const isSelected = selectedHub === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub.id)}
                    type="button"
                    className={`p-3.5 rounded-2xl text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block">{hub.code}</span>
                    <span className="text-xs block font-semibold mt-1 truncate">{hub.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Style Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-3">
              2. Select Travel Theme
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {TRAVEL_STYLES.map((style) => {
                const isSelected = selectedStyle === style.id;
                return (
                  <button
                    key={style.id}
                    onClick={() => {
                      setSelectedStyle(style.id);
                      setActiveDayIndex(0);
                    }}
                    type="button"
                    className={`p-3.5 rounded-2xl text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <span className="text-xs font-bold block truncate">{style.label}</span>
                    <span className="text-[11px] block text-slate-300 opacity-80 mt-1 line-clamp-1">
                      {style.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Step 2: Day Tabs & Engine Metadata */}
        <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {days.map((day, idx) => (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDayIndex(idx)}
                type="button"
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  activeDayIndex === idx
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                Day {day.dayNumber} Overview
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 font-medium">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Offline heuristic engine
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Navigation className="w-3.5 h-3.5 text-blue-400" />
              Google Maps ready
            </span>
          </div>
        </div>

        {/* Step 3: Day Sequence Timeline */}
        <div className="pt-6">
          <div className="mb-6">
            <span className="text-xs font-bold text-amber-400 block mb-1">
              Day {activeDay.dayNumber} Route Focus
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activeDay.theme}
            </h3>
          </div>

          {/* Stops List */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {activeDay.stops.map((stop, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Stop Time and Category */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-blue-900 text-blue-200">
                      {stop.timeSlot}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {stop.duration}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                    {stop.placeName}
                  </h4>
                  <p className="text-xs font-medium text-slate-400 mb-3">
                    {stop.marathiName}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {stop.highlight}
                  </p>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Route className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{stop.distanceFromPrev}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 text-xs text-slate-300 leading-relaxed">
                    <strong className="text-amber-300 block mb-0.5">Field Tip:</strong>
                    {stop.travelerNote}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Conversion Bar */}
          <div className="mt-8 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              The full mobile app supports custom durations (1 to 3 days), custom wishlist pins, and turns.
            </span>
            <a
              href="https://play.google.com/store/apps/details?id=com.nashikexplore.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
            >
              <span>Get Planner in Mobile App</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
