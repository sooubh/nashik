import { Metadata } from 'next';
import { DeleteAccountClient } from '@/components/DeleteAccount/DeleteAccountClient';

export const metadata: Metadata = {
  title: 'Request Account & Data Deletion — Nashik Travel Guide',
  description:
    'Official Account and Personal Data Deletion Request page for Nashik Travel Guide (com.nashikexplore.app). In compliance with Google Play Console User Data policies.',
  alternates: {
    canonical: '/delete-account',
  },
  openGraph: {
    title: 'Request Account & Data Deletion — Nashik Travel Guide',
    description:
      'Official Google Play compliant Account and Data Deletion page for Nashik Travel Guide.',
    url: 'https://nashik.sooubh.me/delete-account',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Account & Data Deletion — Nashik Travel Guide',
    description:
      'Official Google Play compliant Account and Data Deletion page for Nashik Travel Guide.',
  },
};

export default function DeleteAccountPage() {
  return <DeleteAccountClient />;
}
