import { Metadata } from 'next';
import { ContactClient } from '@/components/Contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Support & Helpdesk — Nashik Travel Guide',
  description:
    'Contact the official Nashik Travel Guide developer helpdesk. Inquire about spot submissions, moderation, lifetime upgrade support, and data privacy requests.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Support & Helpdesk — Nashik Travel Guide',
    description:
      'Contact the official Nashik Travel Guide developer helpdesk for app support and moderation.',
    url: 'https://nashik.sooubh.me/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Support & Helpdesk — Nashik Travel Guide',
    description:
      'Contact the official Nashik Travel Guide developer helpdesk for app support.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
