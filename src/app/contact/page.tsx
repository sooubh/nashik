import { Metadata } from 'next';
import { ContactClient } from '@/components/Contact/ContactClient';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Contact Trivio Support & Editorial Team',
  description: 'Get in touch with the Trivio team for corrections, local partnerships, app assistance, or verified guide inquiries. Email trivio-support@sooubh.in.',
  path: '/contact',
  ogType: 'website',
  ogImage: '/images/destinations/sula-vineyards.webp',
  ogImageAlt: 'Contact Trivio Support & Editorial Team',
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_CONFIG.canonicalUrl },
          { name: 'Contact Support', url: `${SITE_CONFIG.canonicalUrl}/contact` },
        ]}
      />
      <ContactClient />
    </>
  );
}
