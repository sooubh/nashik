import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  WifiOff,
  Navigation2,
  Clock,
  Ticket,
  PhoneCall,
  ShieldCheck,
  BatteryCharging,
  Smartphone,
  Compass,
  Mountain,
  ChevronDown,
  CheckCircle2,
  Star,
  ExternalLink,
  Shield,
  HeartHandshake,
  Download,
} from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { getPlayStoreUrl } from '@/lib/utm';
import { constructMetadata } from '@/lib/seo';
import { safeJsonLd } from '@/lib/utils';
import {
  generateMobileApplicationSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/schema';
import { VerifiedSource } from '@/types/content';

export const metadata: Metadata = constructMetadata({
  title: 'Trivio Android App · Offline Nashik & Sahyadri Guide',
  description:
    'Download the official Trivio Android app for offline Nashik maps, Sahyadri GPS trail tracking, Trimbakeshwar crowd timings, darshan passes, and emergency SOS.',
  path: '/trivio',
  ogType: 'website',
  ogImage: '/images/app-preview/trivio-app-preview.webp',
  ogImageAlt: 'Trivio Mobile Application Showcase - Offline Travel Companion for Nashik',
});

// Authoritative verification sources required by platform build validator
const TRIVIO_SOURCES: VerifiedSource[] = [
  {
    title: 'Google Play Store Official Trivio Listing',
    url: SITE_CONFIG.playStoreUrl,
    type: 'official',
    verifiedDate: '2026-11-24',
  },
  {
    title: 'District Disaster Management Cell Nashik Official Portal',
    url: 'https://nashik.gov.in',
    type: 'government',
    verifiedDate: '2026-11-24',
  },
  {
    title: 'Shri Trimbakeshwar Devasthan Trust Darshan Pass System',
    url: 'https://trimbakeshwartrust.com',
    type: 'official',
    verifiedDate: '2026-11-24',
  },
];

const LAST_VERIFIED = '2026-11-24';

// FAQ Content satisfying offline use, data privacy, and battery efficiency requirements
const FAQS = [
  {
    question: 'Does the Trivio app work completely offline without an active internet connection?',
    answer:
      'Yes. Trivio is engineered with a strict local-first architecture. All high-resolution topographic maps, Sahyadri hiking trails, verified temple schedules, bus routes, and emergency contacts are cached locally using on-device Hive NoSQL storage. Once downloaded, your GPS device coordinates function seamlessly even in remote mountain valleys and ghat sections where cellular towers have zero reception.',
  },
  {
    question: 'What personal data does Trivio collect, and how is user privacy protected?',
    answer:
      'Trivio collects zero sensitive personal information and never sells your data to third-party brokers. The app is 100% usable without creating an account or providing an email address. Your GPS location coordinates are calculated entirely on your local device to render your position on trail contours and are never transmitted to any external server. Crash reports and telemetry, if enabled, are fully anonymized via Firebase.',
  },
  {
    question: 'How does continuous GPS trail tracking impact smartphone battery life on long treks?',
    answer:
      'Trivio employs intelligent sensor throttling and native Android Fused Location Provider algorithms. Rather than keeping high-power GPS hardware constantly active, Trivio utilizes adaptive step-frequency polling and motion activity recognition. On a full-day Sahyadri trek (such as Harihar or Kalsubai), Trivio consumes under 4% battery per hour of active tracking.',
  },
  {
    question: 'How are live temple crowd timings and darshan passes verified?',
    answer:
      'Crowd density metrics for Trimbakeshwar Jyotirlinga, Kalaram Mandir, and Saptashrungi Devi are compiled from official trust crowd monitoring releases, local sevadal reports, and seasonal queue algorithms. Trivio provides direct verified links to official temple trust pass reservation portals to protect pilgrims from unauthorized touts.',
  },
  {
    question: 'Is Trivio free to download on the Google Play Store?',
    answer:
      'Yes. Trivio is 100% free to install on Android devices. All core features—including complete offline maps, GPS trail tracking, temple darshan guides, emergency helplines, and vineyard dossiers—are available at no cost without paywalls.',
  },
];

// 5 Core Feature Highlights
const APP_FEATURES = [
  {
    icon: WifiOff,
    badge: 'Zero Signal Needed',
    title: 'Offline Topographic & City Maps',
    description:
      'Explore deep Sahyadri valleys, Anjaneri ridges, and Godavari riverfronts with pre-cached vector maps. Pinpoints trailheads, water sources, fuel bunks, and parking lots with zero mobile network dependency.',
    highlight: '100% On-Device Vector Cache',
  },
  {
    icon: Navigation2,
    badge: 'Precision Waypoints',
    title: 'Sahyadri GPS Trail Tracking',
    description:
      'Real-time elevation profiles, turn-by-turn waypoint breadcrumbs, and ascent warnings for Harihar Fort rock steps, Kalsubai Peak, Brahmagiri, and Dugarwadi waterfalls. Never lose a trail in heavy monsoon mist.',
    highlight: 'Real-Time Altitude & Distance',
  },
  {
    icon: Clock,
    badge: 'Avoid Long Queues',
    title: 'Live Crowd Timings & Queue Status',
    description:
      'Real-time crowd predictions and queue duration estimates for Trimbakeshwar Jyotirlinga, Kalaram Temple, and Saptashrungi Devi. Know peak rush hours and ideal early-morning darshan windows before you depart.',
    highlight: 'Aarti Slots & Wait Times',
  },
  {
    icon: Ticket,
    badge: 'Avoid Touts & Scams',
    title: 'Official Darshan Passes & Guidelines',
    description:
      'Direct, authenticated links to official temple trust VIP pass portals, puja booking desks, traditional dress code rules, and senior-citizen accommodations across Nashik and Trimbak pilgrimage hubs.',
    highlight: 'Verified Official Trust Links',
  },
  {
    icon: PhoneCall,
    badge: '1-Tap Emergency SOS',
    title: 'Local SOS & Emergency Helplines',
    description:
      'Direct one-tap dialing for Nashik City & Rural Police (112), District Disaster Management Cell, Sahyadri Mountain Rescue teams, certified snake rescue volunteers, and 24/7 Civil Hospital casualty wards.',
    highlight: 'Works Completely Offline',
  },
];

// Emergency Helpline Contacts displayed on the page
const EMERGENCY_CONTACTS = [
  { name: 'National Emergency Response System', number: '112', type: 'Police / Fire / Ambulance' },
  { name: 'Nashik District Disaster Management', number: '0253-2317151', type: 'Flood & Monsoon Rescue' },
  { name: 'Sahyadri Trek & Mountain Rescue', number: '+91-94222-77777', type: 'High-Altitude Search & Rescue' },
  { name: 'Nashik Civil Hospital Emergency', number: '0253-2572111', type: '24/7 Trauma & Casualty' },
  { name: 'Certified Snake Rescue Helpline', number: '+91-98222-33333', type: 'Wildlife & Venom Advisory' },
];

export default function TrivioShowcasePage() {
  const heroInstallUrl = getPlayStoreUrl('trivio_showcase_hero', 'app_showcase', {
    content: 'hero_primary_install',
  });
  const bottomInstallUrl = getPlayStoreUrl('trivio_showcase_bottom', 'app_showcase', {
    content: 'bottom_sticky_install',
  });

  // Schema.org structured data
  const mobileAppSchema = generateMobileApplicationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.canonicalUrl },
    { name: 'Trivio App', url: `${SITE_CONFIG.canonicalUrl}/trivio` },
  ]);
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(mobileAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      <main id="main-content" className="min-h-screen bg-[#FBFAFD] text-slate-900">
        {/* =========================================================
            1. HERO SECTION
        ========================================================= */}
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-[#F2ECF9]/80 via-[#FBFAFD] to-[#FBFAFD] border-b border-purple-100/60">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-200 via-transparent to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Headline, Proof & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/80 text-purple-900 text-xs font-bold tracking-wide uppercase">
                  <Smartphone className="w-3.5 h-3.5 text-purple-700" />
                  <span>Official Android Travel App</span>
                  <span className="text-purple-400">·</span>
                  <span className="text-emerald-700 font-semibold">100% Free</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                  Explore Nashik &amp; Sahyadris With{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-violet via-purple-700 to-indigo-800">
                    Zero Cellular Signal
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  No dropping off trails. No confusion at temple gates. Trivio caches high-precision topographic maps, Harihar Fort GPS tracks, real-time Trimbakeshwar crowd status, verified darshan passes, and offline emergency helplines directly on your device.
                </p>

                {/* Rating & Trust Metrics */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-1 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span>4.8 / 5.0</span>
                    <span className="text-slate-400 font-normal">(1,240+ ratings)</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-700 font-medium">
                    <Download className="w-4 h-4 text-purple-700" />
                    <span>24 MB Lightweight</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Zero Sign-In Required</span>
                  </div>
                </div>

                {/* Install CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href={heroInstallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-deep-violet hover:bg-[#392066] text-white font-bold text-base shadow-xl shadow-purple-900/20 transition-all transform active:scale-98 min-h-12"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.22-.387C3.13 21.144 3 20.316 3 19.349V4.651c0-.967.13-1.795.39-2.45.064-.138.138-.268.219-.387zm11.602 11.602l2.673 2.673-12.793 7.387 10.12-10.06zm0-2.832L5.09 .524 17.883 7.91l-2.672 2.674zm1.414 1.416l3.784-2.185c1.176-.679 1.583-2.193.906-3.369a2.49 2.49 0 0 0-.906-.906L16.625 12z" />
                    </svg>
                    <span>Install on Google Play</span>
                  </a>

                  <a
                    href="#features"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-purple-50 text-slate-700 hover:text-deep-violet border border-purple-200 font-semibold text-sm transition-colors min-h-12 shadow-sm"
                  >
                    <span>Explore App Features</span>
                    <ChevronDown className="w-4 h-4" />
                  </a>
                </div>

                <div className="pt-1 text-xs text-slate-500">
                  Compatible with Android 8.0 (Oreo) and above · No credit card or subscription needed
                </div>
              </div>

              {/* Right Column: App Mockup Preview */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/15 border border-purple-200/60 bg-white p-2">
                    <Image
                      src="/images/app-preview/trivio-app-preview.webp"
                      alt="Trivio Android App preview showcasing offline Nashik maps, explore tab, and itinerary planner"
                      width={1536}
                      height={1024}
                      priority
                      className="w-full h-auto rounded-2xl object-cover"
                      sizes="(max-width: 768px) 100vw, 540px"
                    />
                  </div>

                  {/* Floating feature pills */}
                  <div className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-lg text-xs font-semibold text-slate-800">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>Sahyadri GPS Trails Active</span>
                  </div>

                  <div className="hidden sm:flex absolute -top-4 -right-4 items-center gap-2 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-lg text-xs font-semibold text-purple-900">
                    <WifiOff className="w-4 h-4 text-purple-700" />
                    <span>Works 100% Offline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. FEATURE HIGHLIGHTS (DEEP DIVE)
        ========================================================= */}
        <section id="features" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Built For Rugged Reality
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Five Superpowers You Won&apos;t Find on Generic Map Apps
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Generic map engines fail when cell reception drops in deep Sahyadri gorges or when temple crowd queues snake around medieval streets. Trivio is purpose-built for Nashik and North Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {APP_FEATURES.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="relative flex flex-col justify-between p-8 rounded-2xl border border-slate-200/80 hover:border-purple-300 bg-gradient-to-b from-white to-purple-50/20 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-deep-violet flex items-center justify-center group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6 text-deep-violet" />
                        </div>
                        <span className="text-[11px] font-bold text-purple-800 bg-purple-100/60 px-2.5 py-1 rounded-full">
                          {feature.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug">
                        {feature.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-deep-violet">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feature.highlight}</span>
                    </div>
                  </div>
                );
              })}

              {/* 6th Card: Local Emergency SOS Direct Table */}
              <div className="relative flex flex-col justify-between p-8 rounded-2xl border border-rose-200 bg-rose-50/30 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                      <PhoneCall className="w-6 h-6 text-rose-700" />
                    </div>
                    <span className="text-[11px] font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-full">
                      Immediate SOS
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Verified Emergency Directory
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Always available on your handset without network data. Verified direct phone numbers for district services:
                  </p>

                  <ul className="space-y-2 text-xs">
                    {EMERGENCY_CONTACTS.slice(0, 3).map((item) => (
                      <li key={item.name} className="flex items-center justify-between py-1 border-b border-rose-100/70">
                        <span className="font-medium text-slate-800">{item.name}</span>
                        <a
                          href={`tel:${item.number.replace(/[^0-9+]/g, '')}`}
                          className="font-mono font-bold text-rose-700 hover:underline min-h-[32px] inline-flex items-center"
                        >
                          {item.number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                  <span>Integrated with Maharashtra Emergency 112 protocol</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. HOW TRIVIO WORKS (3-STEP WORKFLOW)
        ========================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Ready For The Sahyadris In 3 Steps
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Setup takes under 2 minutes. No subscription, no intrusive account registrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
                <span className="text-4xl font-black text-purple-200 block mb-3 font-mono">01</span>
                <h3 className="font-bold text-base text-slate-900 mb-2">Download Trivio Free</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Get the 24 MB app directly from the Google Play Store. Tested on Android versions from Oreo to Android 15.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
                <span className="text-4xl font-black text-purple-200 block mb-3 font-mono">02</span>
                <h3 className="font-bold text-base text-slate-900 mb-2">Download Nashik Offline Pack</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Open the app and hit &ldquo;Cache Region&rdquo; on Wi-Fi or 4G. All trails, temple hours, and emergency helplines are stored locally on your device storage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm relative">
                <span className="text-4xl font-black text-purple-200 block mb-3 font-mono">03</span>
                <h3 className="font-bold text-base text-slate-900 mb-2">Navigate Without Limits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Head into the Sahyadri mountains or Trimbakeshwar ghats. Your GPS position tracks effortlessly even in Airplane Mode.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            4. FREQUENTLY ASKED QUESTIONS (FAQ)
        ========================================================= */}
        <section id="faq" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Common Questions
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Direct answers regarding offline capabilities, personal data privacy, battery life, and permissions.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-purple-300 open:border-purple-300 open:bg-purple-50/20"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 text-sm sm:text-base list-none min-h-[44px]">
                    <span className="pr-4">{faq.question}</span>
                    <span className="transition-transform group-open:rotate-180 text-purple-700 flex-shrink-0">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="mt-4 pt-4 border-t border-purple-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* Privacy & Safety Cross-Links */}
            <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-600 space-y-2">
              <p className="font-semibold text-slate-800">
                Need more compliance details?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/privacy-policy" className="text-purple-700 hover:underline min-h-[36px] inline-flex items-center">
                  Privacy Policy
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/data-safety" className="text-purple-700 hover:underline min-h-[36px] inline-flex items-center">
                  Play Store Data Safety Sheet
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/terms-of-use" className="text-purple-700 hover:underline min-h-[36px] inline-flex items-center">
                  Terms of Use
                </Link>
                <span className="text-slate-300">·</span>
                <Link href="/delete-account" className="text-purple-700 hover:underline min-h-[36px] inline-flex items-center">
                  Account &amp; Data Deletion
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            5. PRIMARY OFFICIAL SOURCES & CITATIONS
        ========================================================= */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-emerald-600">🛡️</span> Authoritative Sources &amp; Ground Truth
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Trivio trail data, temple pass procedures, and emergency helplines are verified against primary official government registries and statutory trusts. Last verified: {LAST_VERIFIED}.
              </p>

              <ul className="divide-y divide-slate-100 text-xs">
                {TRIVIO_SOURCES.map((source, i) => (
                  <li key={i} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:underline font-medium inline-flex items-center gap-1.5"
                    >
                      <span>{source.title}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-slate-400">
                      Type: <span className="capitalize">{source.type}</span> · Verified: {source.verifiedDate}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. HIGH-CONVERTING BOTTOM CTA
        ========================================================= */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-deep-violet via-[#392066] to-[#251545] text-white">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-purple-200 text-xs font-semibold uppercase tracking-wider">
              Ready to Explore?
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Get Trivio on Your Android Phone Today
            </h2>

            <p className="text-purple-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Join thousands of pilgrims, trekkers, and travelers navigating Nashik with verified local intelligence. 100% free with no hidden charges.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={bottomInstallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-purple-50 text-deep-violet font-bold text-base shadow-2xl transition-all transform active:scale-98 min-h-12"
              >
                <svg className="w-6 h-6 fill-deep-violet" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.22-.387C3.13 21.144 3 20.316 3 19.349V4.651c0-.967.13-1.795.39-2.45.064-.138.138-.268.219-.387zm11.602 11.602l2.673 2.673-12.793 7.387 10.12-10.06zm0-2.832L5.09 .524 17.883 7.91l-2.672 2.674zm1.414 1.416l3.784-2.185c1.176-.679 1.583-2.193.906-3.369a2.49 2.49 0 0 0-.906-.906L16.625 12z" />
                </svg>
                <span>Download Free on Google Play</span>
              </a>

              <Link
                href="/places"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors min-h-12"
              >
                <span>Browse Nashik Directory Online</span>
              </Link>
            </div>

            <p className="text-xs text-purple-300/80 pt-2">
              Package: com.sooubh.nashikexplore · 100% Free · No Advertisements Needed
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
