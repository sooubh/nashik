'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TourItem {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  tags: string[];
  duration: string;
  category: string;
  mapsUrl: string;
}

const TOURS_DATA: TourItem[] = [
  {
    id: 'sula-vineyards',
    name: 'Sula Vineyards',
    price: '₹2,499',
    image: '/images/destinations/sula-vineyards.jpg',
    description: 'Stroll sun-drenched vine terraces, tour temperature-controlled barrel cellars, and enjoy wine tastings overlooking Gangapur lake.',
    tags: ['wine tour', 'tasting'],
    duration: '1 day',
    category: 'Vineyard',
    mapsUrl: 'https://maps.google.com/?q=Sula+Vineyards+Nashik',
  },
  {
    id: 'trimbakeshwar',
    name: 'Trimbakeshwar Temple',
    price: '₹1,499',
    image: '/images/destinations/trimbakeshwar-temple.jpg',
    description: 'Journey to one of India’s 12 sacred Jyotirlingas beneath the misty peaks of Brahmagiri, with ancient black basalt architecture.',
    tags: ['heritage', 'sacred'],
    duration: '1 day',
    category: 'Temple',
    mapsUrl: 'https://maps.google.com/?q=Trimbakeshwar+Shiva+Temple+Nashik',
  },
  {
    id: 'harihar-fort',
    name: 'Harihar Fort Trail',
    price: '₹1,999',
    image: '/images/destinations/harihar-fort.jpg',
    description: 'Ascend the world-renowned 80-degree vertical rock-cut stairway carved directly into the sheer Sahyadri mountain prism.',
    tags: ['popular', 'trek'],
    duration: '2 days',
    category: 'Sahyadri Trek',
    mapsUrl: 'https://maps.google.com/?q=Harihar+Fort+Nashik',
  },
  {
    id: 'pandavleni-caves',
    name: 'Pandavleni Caves',
    price: '₹899',
    image: '/images/destinations/sahyadri-sunrise.jpg',
    description: 'Climb Trirashmi hill to 24 ancient Hinayana Buddhist rock-cut caves dating to 2nd century BCE with citywide panoramic views.',
    tags: ['culture', 'ancient'],
    duration: 'half day',
    category: 'Historic Caves',
    mapsUrl: 'https://maps.google.com/?q=Pandavleni+Caves+Nashik',
  },
  {
    id: 'gangapur-dam',
    name: 'Gangapur Dam Retreat',
    price: '₹1,299',
    image: '/images/destinations/gangapur-lake-sunset.jpg',
    description: 'Slow down beside the peaceful lake, surrounded by green hills, quiet waterfront promenades, and sunset boat cruises.',
    tags: ['relax', 'lakefront'],
    duration: '1 day',
    category: 'Nature & Lake',
    mapsUrl: 'https://maps.google.com/?q=Gangapur+Dam+Nashik',
  },
];

export function PopularToursSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card active by default

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TOURS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TOURS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#FCFBFD] py-20 lg:py-28 overflow-hidden select-none" id="tours">
      <div className="w-full flex flex-col items-center">
        {/* Centered Pill Eyebrow */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100/90 text-slate-700 text-xs font-semibold tracking-widest uppercase mb-4 shadow-sm border border-slate-200/50">
          YOUR JOURNEY
        </div>

        {/* Editorial Heading: Discover Our Most Popular Tours */}
        <h2 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-bold tracking-tight text-slate-900 leading-[1.12] text-center mb-14 sm:mb-20 px-4">
          <span>Discover </span>
          <span className="font-editorial italic font-normal text-slate-800">Our Most</span>
          <br />
          <span className="font-editorial italic font-normal text-slate-800">Popular</span>
          <span> Tours</span>
        </h2>

        {/* Full-Bleed Edge-to-Edge 5-Card Scaled Carousel matching blueprint */}
        <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[560px] sm:min-h-[620px] px-2 sm:px-6">
          <div className="flex items-center justify-center gap-3 sm:gap-6 w-full max-w-[1920px]">
            {TOURS_DATA.map((tour, index) => {
              const offset = index - activeIndex;
              const isCenter = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isOuter = Math.abs(offset) === 2;

              // Hide cards that are beyond 2 positions away on desktop, or beyond 1 on mobile
              const isVisible = Math.abs(offset) <= 2;
              if (!isVisible) return null;

              return (
                <motion.div
                  key={tour.id}
                  layout
                  transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                  onClick={() => setActiveIndex(index)}
                  className={`relative shrink-0 rounded-[28px] sm:rounded-[34px] overflow-hidden cursor-pointer transition-all duration-300 ${
                    isCenter
                      ? 'w-[310px] sm:w-[360px] md:w-[390px] h-[520px] sm:h-[580px] z-30 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-black/10 scale-100'
                      : isAdjacent
                      ? 'hidden sm:block sm:w-[280px] md:w-[310px] h-[460px] sm:h-[510px] z-20 opacity-85 hover:opacity-100 scale-95'
                      : 'hidden md:block md:w-[250px] lg:w-[280px] h-[410px] sm:h-[460px] z-10 opacity-55 hover:opacity-85 scale-90'
                  }`}
                >
                  {/* Full Bleed Destination Image */}
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    sizes="(max-width: 640px) 310px, (max-width: 1024px) 310px, 390px"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Top Vignette Gradient for Image Depth */}
                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

                  {/* Frosted Glass Bottom Panel matching blueprint */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 bg-slate-950/75 backdrop-blur-md rounded-b-[28px] sm:rounded-b-[34px] border-t border-white/10 text-white flex flex-col justify-between">
                    {/* Header Row: Title & Price Pill */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight leading-snug line-clamp-1">
                        {tour.name}
                      </h3>
                      <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white/95">
                        {tour.price}
                      </span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-[13px] text-white/80 line-clamp-2 mt-2 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Tags & Duration Row */}
                    <div className="flex items-center gap-2 mt-3.5">
                      {tour.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-medium text-white/90 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] sm:text-[11px] font-medium text-white/90 border border-white/10">
                        {tour.duration}
                      </span>
                    </div>

                    {/* Explore CTA Pill Button */}
                    <a
                      href={tour.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!isCenter) {
                          e.preventDefault();
                          setActiveIndex(index);
                        }
                      }}
                      className="mt-4 w-full py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm text-center shadow-md transition-colors block"
                    >
                      Explore
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Carousel Controls: Prev Arrow, View More Tours, Next Arrow */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12 sm:mt-16">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous tour"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* View More Tours Link */}
          <a
            href="#packages"
            className="text-sm sm:text-base font-semibold text-slate-900 hover:text-black tracking-wide underline-offset-4 hover:underline transition-colors"
          >
            View More Tours
          </a>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next tour"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-slate-300 hover:border-slate-900 bg-white hover:bg-slate-50 text-slate-800 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
