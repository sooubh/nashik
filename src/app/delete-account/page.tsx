import { Metadata } from 'next';
import { DeleteAccountClient } from '@/components/DeleteAccount/DeleteAccountClient';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { SITE_CONFIG } from '@/config/site';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Account & Travel Data Deletion Request',
  description: 'Step-by-step instructions to delete your Trivio account, saved bookmarks, and custom itinerary data in full compliance with Google Play requirements.',
  path: '/delete-account',
  ogType: 'website',
});

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
