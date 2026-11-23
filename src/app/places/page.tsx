import { Metadata } from 'next';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { PlacesDirectoryClient } from '@/components/directory/PlacesDirectoryClient';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { safeJsonLd } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Top 23 Places to Visit in Nashik Guide (2026)',
  description: 'Explore 23 top places to visit in Nashik: Jyotirlinga temples, Sula vineyards, Sahyadri fort treks, and waterfalls with verified timings and fees.',
  path: '/places',
  ogType: 'website',
});

export default function PlacesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Places to Visit', href: '/places' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: `${SITE_CONFIG.canonicalUrl}/` },
    { name: 'Places to Visit in Nashik', url: `${SITE_CONFIG.canonicalUrl}/places` },
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
            Comprehensive Destination Directory
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-on-surface leading-tight">
            Places to Visit in Nashik.
          </h1>
          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Verified 2026 ground truth for 23 top attractions across Nashik, Trimbakeshwar, Igatpuri, and Dindori wine country.
          </p>
        </div>

        {/* Interactive Search & Filter Directory */}
        <PlacesDirectoryClient places={DESTINATIONS_DATA} />

        {/* App CTA */}
        <ContextualAppCta
          appCtaHook={{
            headline: 'Carry all 23 Nashik destinations in your pocket',
            subline: 'Download Trivio on Android for complete offline access to trail maps, GPS coordinates, and temple sanctum hours.',
            ctaText: 'Install Trivio Free',
            utmCampaign: 'places_directory',
          }}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
