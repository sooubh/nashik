import { Metadata } from 'next';
import Link from 'next/link';
import { Tag as TagIcon, Sparkles, Compass, ArrowUpRight, Grid } from 'lucide-react';
import { getAllTags, getIndexedTags } from '@/lib/tags';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Nashik Travel Tags & Themes Directory | Trivio',
  description:
    'Browse all verified Nashik travel themes and tags: Jyotirlinga shrines, Sahyadri treks, waterfalls, vineyards, heritage walks, and misal food trails.',
  path: '/tags',
  ogType: 'website',
});

export default function AllTagsDirectoryPage() {
  const allTags = getAllTags();
  const indexedTags = getIndexedTags();

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Travel Tags', href: '/tags' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${SITE_CONFIG.canonicalUrl}/` },
    { name: 'Nashik Travel Tags Directory', url: `${SITE_CONFIG.canonicalUrl}/tags` },
  ]);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Nashik Travel Tags & Themes Directory',
    description:
      'Curated index of all Nashik travel themes, pilgrim circuits, trekking destinations, and vineyard tours.',
    url: `${SITE_CONFIG.canonicalUrl}/tags`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: allTags.length,
      itemListElement: allTags.map((t, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: t.name,
        url: `${SITE_CONFIG.canonicalUrl}/tags/${t.slug}`,
      })),
    },
  };

  // Group all tags by first letter (A-Z)
  const alphabetMap: Record<string, typeof allTags> = {};
  for (const t of allTags) {
    const firstChar = (t.name.charAt(0) || '#').toUpperCase();
    const groupKey = /[A-Z]/.test(firstChar) ? firstChar : '#';
    if (!alphabetMap[groupKey]) {
      alphabetMap[groupKey] = [];
    }
    alphabetMap[groupKey].push(t);
  }
  const alphabetKeys = Object.keys(alphabetMap).sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b);
  });

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
            <Compass className="h-3.5 w-3.5" />
            <span>Curated Travel Taxonomy &middot; 2026 Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            Explore Nashik by Travel Themes &amp; Tags.
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Discover places, expert guides, and detailed itineraries grouped by theme. From sacred
            Jyotirlinga shrines and Sahyadri fort stairs to boutique wine tastings and roaring monsoon
            waterfalls, browse our verified taxonomy below.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm font-semibold text-deep-violet">
            <span className="rounded-xl bg-surface px-3 py-1.5 border border-brand-100 shadow-xs">
              {indexedTags.length} Major Themes
            </span>
            <span className="rounded-xl bg-surface px-3 py-1.5 border border-brand-100 shadow-xs">
              {allTags.length} Total Tags
            </span>
          </div>
        </header>

        {/* Section 1: Major Themes (Indexed Tags with >= 3 posts) */}
        <section className="space-y-6 pt-6 border-t border-brand-100">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-deep-violet" />
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">
              Featured Travel Themes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {indexedTags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/tags/${tag.slug}`}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-brand-100 p-6 shadow-xs hover:shadow-md hover:border-brand-200 hover:bg-brand-50/50 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-deep-violet">
                      <TagIcon className="h-3 w-3" />
                      <span>{tag.name}</span>
                    </span>
                    <span className="rounded-full bg-brand-50 border border-brand-100 px-2.5 py-0.5 text-[11px] font-bold text-deep-violet">
                      {tag.totalCount} {tag.totalCount === 1 ? 'item' : 'items'}
                    </span>
                  </div>

                  <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">
                    {tag.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-brand-50 flex items-center justify-between text-xs font-semibold text-deep-violet">
                  <span>Explore theme resources</span>
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Complete A-Z Tag Directory */}
        <section className="space-y-6 pt-6 border-t border-brand-100">
          <div className="flex items-center gap-2">
            <Grid className="h-5 w-5 text-deep-violet" />
            <h2 className="text-2xl font-bold tracking-tight text-on-surface">
              Complete A-Z Tag Directory
            </h2>
          </div>

          <div className="space-y-8">
            {alphabetKeys.map((letter) => {
              const tagsInGroup = alphabetMap[letter] || [];
              return (
                <div key={letter} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-deep-violet text-white text-sm font-black">
                      {letter}
                    </span>
                    <span className="h-px flex-1 bg-brand-100" />
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {tagsInGroup.map((tag) => (
                      <Link
                        key={tag.slug}
                        href={`/tags/${tag.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand-100 px-3.5 py-1.5 text-xs font-semibold text-on-surface hover:text-deep-violet hover:border-brand-200 hover:bg-brand-50 transition-all shadow-2xs"
                      >
                        <span>{tag.name}</span>
                        <span className="text-[10px] text-on-surface-variant/70 font-normal">
                          ({tag.totalCount})
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contextual App CTA */}
        <ContextualAppCta
          appCtaHook={{
            headline: 'Offline GPS navigation across all Nashik travel themes',
            subline:
              'Whether visiting remote waterfalls, hiking Sahyadri summits, or exploring ancient temple ghats, Trivio keeps you oriented without internet connectivity.',
            ctaText: 'Install Free Android App',
            utmCampaign: 'tags_directory_hub',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
