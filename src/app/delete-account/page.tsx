import { Metadata } from 'next';
import { DeleteAccountClient } from '@/components/DeleteAccount/DeleteAccountClient';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: `Request Account & Data Deletion · ${SITE_CONFIG.name}`,
  description:
    `Account and personal data deletion request page for ${SITE_CONFIG.name}. Instructions for in-app deletion and email requests to ${SITE_CONFIG.supportEmail}.`,
  alternates: {
    canonical: '/delete-account',
  },
  openGraph: {
    title: `Request Account & Data Deletion · ${SITE_CONFIG.name}`,
    description:
      `Account and data deletion instructions for ${SITE_CONFIG.name}.`,
    url: `${SITE_CONFIG.canonicalUrl}/delete-account`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Request Account & Data Deletion · ${SITE_CONFIG.name}`,
    description:
      `Account and data deletion instructions for ${SITE_CONFIG.name}.`,
  },
};

export default function DeleteAccountPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_CONFIG.canonicalUrl },
          { name: 'Delete Account & Data', url: `${SITE_CONFIG.canonicalUrl}/delete-account` },
        ]}
      />
      <DeleteAccountClient />
    </>
  );
}
