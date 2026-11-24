import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MapPin, BookOpen, Calendar, ArrowUpRight, Clock, Tag as TagIcon, Compass, Sparkles } from 'lucide-react';
import { getAllTags, getTagBySlug, getAllTagSlugs, TagData } from '@/lib/tags';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllTagSlugs();
  return slugs.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const tagData = getTagBySlug(params.tag);

  if (!tagData) {
    return constructMetadata({
      title: 'Tag Not Found | Nashik Travel Directory',
      description: 'The requested travel tag was not found in the Nashik tourism directory.',
      path: `/tags/${params.tag}`,
      noindex: true,
      follow: true,
    });
  }

  // Section 10 Rule: tags with 3+ posts are indexed (index, follow); tags with <3 get (noindex, follow)
  const isIndexed = tagData.totalCount >= 3;
  const heroImg =
    tagData.destinations[0]?.heroImage ||
    tagData.guides[0]?.heroImage ||
    tagData.blogPosts[0]?.heroImage ||
    '/images/destinations/sula-vineyards.webp';

  return constructMetadata({
    title: `${tagData.name} in Nashik: Top Places, Guides & Itineraries (2026)`,
    description: tagData.description,
    path: `/tags/${tagData.slug}`,
    noindex: !isIndexed,
    follow: true,
    ogImage: heroImg,
    ogImageAlt: `${tagData.name} attractions and travel guides in Nashik`,
  });
}

export default function TagDiscoveryPage({ params }: TagPageProps) {
  const tagData = getTagBySlug(params.tag);

  if (!tagData) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Tags', href: '/tags' },
    { label: tagData.name, href: `/tags/${tagData.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${SITE_CONFIG.canonicalUrl}/` },
    { name: 'Nashik Travel Tags', url: `${SITE_CONFIG.canonicalUrl}/tags` },
    { name: tagData.name, url: `${SITE_CONFIG.canonicalUrl}/tags/${tagData.slug}` },
  ]);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${tagData.name} in Nashik: Attractions, Guides & Routes`,
    description: tagData.description,
    url: `${SITE_CONFIG.canonicalUrl}/tags/${tagData.slug}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.canonicalUrl,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tagData.totalCount,
      itemListElement: [
        ...tagData.destinations.map((p, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: p.title,
          url: `${SITE_CONFIG.canonicalUrl}/places/${p.slug}`,
        })),
        ...tagData.guides.map((g, idx) => ({
          '@type': 'ListItem',
          position: tagData.destinations.length + idx + 1,
          name: g.title,
          url: `${SITE_CONFIG.canonicalUrl}/guides/${g.slug}`,
        })),
        ...tagData.blogPosts.map((b, idx) => ({
          '@type': 'ListItem',
          position: tagData.destinations.length + tagData.guides.length + idx + 1,
          name: b.title,
          url: `${SITE_CONFIG.canonicalUrl}/blog/${b.slug}`,
        })),
      ],
    },
  };

  // Find related tags for internal mesh linking
  const allTags = getAllTags();
  const relatedTags = allTags
    .filter((t) => t.slug !== tagData.slug && (t.isIndexed || t.totalCount >= 2))
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(collectionSchema),
        }}
      />

      <SiteNav />

      <main
        id="main-content"
        className="flex-1 pt-24 sm:pt-28 pb-16 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full space-y-12"
      >
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-bold text-deep-violet">
            <TagIcon className="h-3.5 w-3.5" />
            <span>Nashik Travel Theme · 2026 Verified</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            {tagData.name} in Nashik.
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            {tagData.description}
          </p>

          {/* Metrics summary */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-deep-violet">
            <span className="rounded-xl bg-surface px-3 py-1.5 border border-brand-100 shadow-xs">
              {tagData.totalCount} Verified {tagData.totalCount === 1 ? 'Resource' : 'Resources'}
            </span>
            {tagData.destinations.length > 0 && (
              <span className="rounded-xl bg-surface px-3 py-1.5 border border-brand-100 shadow-xs">
                {tagData.destinations.length} Places to Visit
              </span>
            )}
            {tagData.guides.length > 0 && (
              <span className="rounded-xl bg-surface px-3 py-1.5 border border-brand-100 shadow-xs">
                {tagData.guides.length} Expert Guides
              </span>
            )}
            {tagData.blogPosts.length > 0 && (
              <span className="rounded-xl bg-surface px-3 py-1.5 border border-brand-100 shadow-xs">
                {tagData.blogPosts.length} Road Trips &amp; Itineraries
              </span>
            )}
          </div>
        </header>

        {/* Section 1: Places to Visit */}
        {tagData.destinations.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-brand-100">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-deep-violet" />
              <h2 className="text-2xl font-bold tracking-tight text-on-surface">
                {tagData.name} Places &amp; Attractions ({tagData.destinations.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tagData.destinations.map((place) => (
                <Link
                  key={place.slug}
                  href={`/places/${place.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-brand-100 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-200 transition-all"
                >
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={place.heroImage}
                      alt={`${place.title} - Nashik`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                        {place.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-on-surface group-hover:text-deep-violet transition-colors">
                        {place.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                        {place.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-brand-50 flex items-center justify-between text-xs font-semibold text-deep-violet">
                      <span>{place.timings?.open ? `Open: ${place.timings.open}` : 'View details'}</span>
                      <span className="inline-flex items-center gap-1">
                        Timings &amp; Map <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 2: In-Depth Guides */}
        {tagData.guides.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-brand-100">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-deep-violet" />
              <h2 className="text-2xl font-bold tracking-tight text-on-surface">
                {tagData.name} Travel Guides &amp; Tips ({tagData.guides.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tagData.guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex flex-col rounded-2xl bg-white border border-brand-100 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-200 transition-all"
                >
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={guide.heroImage}
                      alt={guide.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-white inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{guide.readingTime}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-on-surface group-hover:text-deep-violet transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                        {guide.excerpt}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-brand-50 flex items-center justify-between text-xs font-semibold text-deep-violet">
                      <span>Full Practical Guide</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Blog Itineraries */}
        {tagData.blogPosts.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-brand-100">
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-deep-violet" />
              <h2 className="text-2xl font-bold tracking-tight text-on-surface">
                {tagData.name} Itineraries &amp; Road Trips ({tagData.blogPosts.length})
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tagData.blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row rounded-2xl bg-white border border-brand-100 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-200 transition-all"
                >
                  <div className="relative h-44 sm:h-auto sm:w-48 bg-slate-100 overflow-hidden shrink-0">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 200px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] text-on-surface-variant font-medium">
                        <Calendar className="h-3 w-3" />
                        <span>{post.publishedDate}</span>
                        <span>·</span>
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-base font-bold text-on-surface group-hover:text-deep-violet transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-semibold text-deep-violet">
                      <span>Read Route Itinerary</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Related Nashik Travel Themes (Dense Hub-and-Spoke Discovery) */}
        <section className="space-y-4 pt-6 border-t border-brand-100">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-deep-violet" />
            <h2 className="text-lg font-bold text-on-surface">
              Explore More Nashik Travel Themes
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {relatedTags.map((t) => (
              <Link
                key={t.slug}
                href={`/tags/${t.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-100 px-3.5 py-1.5 text-xs font-semibold text-on-surface hover:text-deep-violet hover:border-brand-200 hover:bg-brand-50 transition-all shadow-2xs"
              >
                <TagIcon className="h-3 w-3 text-deep-violet" />
                <span>{t.name}</span>
                <span className="text-[10px] text-on-surface-variant/70 font-normal">
                  ({t.totalCount})
                </span>
              </Link>
            ))}
            <Link
              href="/tags"
              className="inline-flex items-center gap-1 rounded-full bg-brand-50 border border-brand-100 px-3.5 py-1.5 text-xs font-bold text-deep-violet hover:bg-brand-100 transition-colors"
            >
              <span>View All Tags &rarr;</span>
            </Link>
          </div>
        </section>

        {/* Contextual App CTA */}
        <ContextualAppCta
          appCtaHook={{
            headline: `Explore ${tagData.name} attractions offline with Trivio`,
            subline:
              'Get GPS waypoint navigation, live darshan updates, bus routes, and local emergency alerts directly on your phone.',
            ctaText: 'Install Free Android App',
            utmCampaign: `tag_${tagData.slug}`,
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
