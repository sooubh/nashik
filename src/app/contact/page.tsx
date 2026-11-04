import { Metadata } from 'next';
import { ContactClient } from '@/components/Contact/ContactClient';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `Contact Support · ${SITE_CONFIG.name}`,
  description:
    `Contact the ${SITE_CONFIG.name} travel support team at ${SITE_CONFIG.supportEmail}. Send inquiries, spot suggestions, corrections, and data privacy requests.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: `Contact Support · ${SITE_CONFIG.name}`,
    description:
      `Contact ${SITE_CONFIG.name} support at ${SITE_CONFIG.supportEmail} for app inquiries and assistance.`,
    url: `${SITE_CONFIG.canonicalUrl}/contact`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Contact Support · ${SITE_CONFIG.name}`,
    description:
      `Contact ${SITE_CONFIG.name} support at ${SITE_CONFIG.supportEmail} for app inquiries and assistance.`,
  },
};

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
