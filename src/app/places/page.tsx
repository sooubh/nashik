import { Metadata } from 'next';
import { DESTINATIONS_DATA } from '@/data/destinationsData';
import { PlacesDirectoryClient } from '@/components/directory/PlacesDirectoryClient';
import { SiteNav } from '@/components/SiteNav';
import { SiteFooter } from '@/components/SiteFooter';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContextualAppCta } from '@/components/places/ContextualAppCta';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `Places to Visit in Nashik · Directory of 23 Verified Attractions | ${SITE_CONFIG.name}`,
  description:
    'Comprehensive directory of top places to visit in Nashik: Jyotirlinga temples, Sula wine estates, Sahyadri rock steps treks, waterfalls, and authentic misal eateries.',
  alternates: {
    canonical: '/places',
  },
  openGraph: {
    title: `Places to Visit in Nashik · Directory of 23 Verified Attractions`,
    description:
      'Explore verified timings, entry tickets, and transit routes for 23 top Nashik destinations.',
    url: `${SITE_CONFIG.canonicalUrl}/places`,
  },
};

export default function PlacesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Places to Visit', href: '/places' },
  ];

  return (
    <div className="min-h-screen bg-paper flex flex-col justify-between">
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
