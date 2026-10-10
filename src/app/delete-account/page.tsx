import { Metadata } from 'next';
import { DeleteAccountClient } from '@/components/DeleteAccount/DeleteAccountClient';

export const metadata: Metadata = {
  title: 'Request Account & Data Deletion — NashikExplore',
  description:
    'Account and Personal Data Deletion Request page for NashikExplore. Instructions for in-app deletion and email-based deletion requests.',
  alternates: {
    canonical: '/delete-account',
  },
  openGraph: {
    title: 'Request Account & Data Deletion — NashikExplore',
    description:
      'Account and Data Deletion instructions for NashikExplore.',
    url: 'https://nashik.sooubh.me/delete-account',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Request Account & Data Deletion — NashikExplore',
    description:
      'Account and Data Deletion instructions for NashikExplore.',
  },
};

export default function DeleteAccountPage() {
  return <DeleteAccountClient />;
}
