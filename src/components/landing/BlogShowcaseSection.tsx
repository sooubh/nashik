import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowUpRight, Compass, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS_DATA } from '@/data/blogData';

export function BlogShowcaseSection() {
  // Showcase the top 6 featured itineraries on the landing page
  const featuredBlogs = BLOG_POSTS_DATA.slice(0, 6);

  return (
    <section id="blog-stories" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-deep-violet block">
            Itineraries, Food Walks &amp; Road Trips
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-on-surface leading-tight">
            Nashik Travel Itineraries &amp; Field Stories.
          </h2>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Detailed step-by-step itineraries, driving routes, food trails, and verified budgets for exploring Nashik from Mumbai and Pune.
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-bold text-deep-violet hover:text-signal-lime hover:bg-deep-violet px-5 py-2.5 rounded-full border border-deep-violet transition-all shrink-0 w-fit"
        >
          <span>View All 12 Itineraries</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid of Blog Posts with Full Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {featuredBlogs.map((post) => (
          <article
            key={post.slug}
            className="group rounded-3xl overflow-hidden border border-brand-100 bg-white shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image & Badge Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <Image
                  src={post.heroImage}
                  alt={`${post.title} - Nashik Itinerary Guide`}
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-950/80 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {post.category}
                  </span>
                  {post.itineraryDays && post.itineraryDays.length > 0 && (
                    <span className="rounded-full bg-signal-lime px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#221045]">
                      {post.itineraryDays.length}-Day Plan
                    </span>
                  )}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-3">
                {/* Meta details: Date & Author */}
                <div className="flex items-center gap-3 text-xs text-on-surface-variant font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-deep-violet" />
                    <time dateTime={post.publishedDate}>{post.publishedDate}</time>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-deep-violet" />
                    <span>{post.author}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-on-surface group-hover:text-deep-violet transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt / Summary */}
                <p className="text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>

                {/* Day-by-Day Route Pills if present */}
                {post.itineraryDays && post.itineraryDays.length > 0 && (
                  <div className="pt-2">
                    <div className="p-2.5 rounded-xl bg-brand-50 border border-brand-100 text-[11px] text-on-surface-variant space-y-1">
                      <strong className="text-deep-violet block">Route Highlights:</strong>
                      <p className="line-clamp-2">
                        {post.itineraryDays.map((d) => `Day ${d.dayNumber}: ${d.dayTitle}`).join(' → ')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer with Tags and Read Link */}
            <div className="p-6 pt-3 border-t border-brand-50 flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-[10px] text-deep-violet font-semibold bg-brand-50 px-2 py-0.5 rounded-md">
                    #{t}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-deep-violet group-hover:text-signal-lime group-hover:bg-deep-violet px-3 py-1.5 rounded-full transition-all"
              >
                <span>Read Story</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom Banner Linking to Guides & Destinations */}
      <div className="mt-12 p-8 rounded-3xl bg-deep-violet text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-2xl font-bold">Looking for specific temple timings or trek routes?</h3>
          <p className="text-sm text-white/80 max-w-xl">
            Explore our 15 in-depth travel guides covering Trimbakeshwar VIP passes, Harihar rock steps, and Sula wine etiquette.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href="/guides"
            className="inline-flex items-center justify-center gap-2 bg-signal-lime hover:bg-[#d5ff4f] text-[#221045] text-sm font-bold px-6 py-3 rounded-full transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Guides</span>
          </Link>
          <Link
            href="/places"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold px-6 py-3 rounded-full transition-colors border border-white/20"
          >
            <span>All 23 Places</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
