import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS_DATA } from '@/data/blogData';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Nashik Travel Itineraries & Road Trips Guide',
  description: 'Curated Nashik itineraries & road trips: 1-day whirlwind plan, Mumbai Samruddhi expressway drive, Pune route, and Old Nashik heritage food walks.',
  path: '/blog',
  ogType: 'website',
});

export default function BlogPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog & Itineraries', href: '/blog' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${SITE_CONFIG.canonicalUrl}/` },
    { name: 'Nashik Travel Itineraries & Blog', url: `${SITE_CONFIG.canonicalUrl}/blog` },
  ]);

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      <SiteNav />

      <main id="main-content" className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-8 sm:space-y-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-deep-violet block">
            Itinerary Architecture &amp; Travelogues
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            Nashik Itineraries &amp; Blog.
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Multi-day road trip plans, budget strategies, food walks, and weekend getaways from Mumbai and Pune.
          </p>
        </div>

        {/* Blog / Itinerary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS_DATA.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-brand-100 bg-white shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={post.heroImage}
                    alt={`${post.title} - Nashik Itinerary`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {post.itineraryDays && (
                    <span className="absolute top-3 left-3 rounded-full bg-signal-lime px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#221045]">
                      {post.itineraryDays.length}-Day Route
                    </span>
                  )}
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-deep-violet" />
                      {post.publishedDate}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5 text-deep-violet" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-on-surface group-hover:text-deep-violet transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-brand-50 flex items-center justify-between text-xs font-bold text-deep-violet">
                <span>View Full Itinerary</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* App CTA */}
        <ContextualAppCta
          appCtaHook={{
            headline: 'Custom multi-day itineraries in seconds',
            subline: 'Use the Trivio Android app to generate zero-backtracking itineraries sequenced from your arrival railway station, airport, or bus stand.',
            ctaText: 'Build Route in App',
            utmCampaign: 'blog_directory',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
