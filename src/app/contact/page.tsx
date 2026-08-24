import React from 'react';
import { Metadata } from 'next';
import { ContactClient } from '@/components/Contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Support & Helpdesk — Nashik Travel Guide',
  description:
    'Get in touch with the official Nashik Travel Guide Android application support and moderation team. Inquire about attractions, submit spot corrections, request lifetime tier assistance, or submit data deletion requests.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Support & Helpdesk — Nashik Travel Guide',
    description:
      'Contact our team for app inquiries, spot submissions, data deletion, and lifetime premium billing support.',
    url: 'https://nashikexplore.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Support & Helpdesk — Nashik Travel Guide',
    description:
      'Contact our team for app inquiries, spot submissions, data deletion, and lifetime premium billing support.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
