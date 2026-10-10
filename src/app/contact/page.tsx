import { Metadata } from 'next';
import { ContactClient } from '@/components/Contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Support — NashikExplore',
  description:
    'Contact the NashikExplore support channel. Send inquiries, spot suggestions, corrections, and data privacy requests.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Support — NashikExplore',
    description:
      'Contact NashikExplore support for app inquiries and assistance.',
    url: 'https://nashik.sooubh.me/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Support — NashikExplore',
    description:
      'Contact NashikExplore support for app inquiries and assistance.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
