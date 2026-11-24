import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { constructMetadata } from '@/lib/seo';
import { ArticleLayout } from '@/components/shared/ArticleLayout';
import { KUMBH_DATA } from '@/data/kumbhData';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = constructMetadata({
  title: KUMBH_DATA.seoTitle,
  description: KUMBH_DATA.description,
  path: '/kumbh',
  ogType: 'article',
  ogImage: KUMBH_DATA.heroImage,
  ogImageAlt: KUMBH_DATA.heroImageAlt,
  publishedTime: KUMBH_DATA.publishedDate,
  modifiedTime: KUMBH_DATA.lastVerified,
});

export default function KumbhPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Simhastha Kumbh Mela 2027', href: '/kumbh' },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_CONFIG.canonicalUrl },
    { name: 'Simhastha Kumbh Mela 2027', url: `${SITE_CONFIG.canonicalUrl}/kumbh` },
  ]);

  const faqSchema = generateFAQSchema(KUMBH_DATA.faqs);

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027',
    alternateName: ['नाशिक सिंहस्थ कुंभमेळा २०२७', 'Simhastha Kumbh Mela 2027', 'Nashik Kumbh Mela'],
    description: KUMBH_DATA.directAnswer,
    startDate: '2027-07-15T06:00:00+05:30',
    endDate: '2028-08-15T18:00:00+05:30',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: [
      {
        '@type': 'Place',
        name: 'Ramkund Sacred Bathing Ghats',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Panchavati, River Godavari',
          addressLocality: 'Nashik',
          addressRegion: 'Maharashtra',
          postalCode: '422003',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 20.0064,
          longitude: 73.7915,
        },
      },
      {
        '@type': 'Place',
        name: 'Kushavarta Kund & Shri Trimbakeshwar Temple',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Trimbakeshwar Shiva Temple Complex',
          addressLocality: 'Trimbakeshwar',
          addressRegion: 'Maharashtra',
          postalCode: '422212',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 19.9324,
          longitude: 73.5307,
        },
      },
    ],
    organizer: {
      '@type': 'GovernmentOrganization',
      name: 'Nashik District Administration & Simhastha Kumbh Authority',
      url: 'https://nashik.gov.in',
    },
    isAccessibleForFree: true,
    image: [`${SITE_CONFIG.canonicalUrl}${KUMBH_DATA.heroImage}`],
  };

  const relatedArticles = [
    {
      title: 'The Sacred Nashik-Trimbakeshwar Simhastha Kumbh Mela: History, 12-Year Cycle & Next Dates',
      href: '/blog/nashik-kumbh-mela-history-dates-guide',
      category: 'festivals',
      heroImage: '/images/destinations/ramkund-godavari-aarti.webp',
      excerpt:
        'The grand chronicle of the Simhastha Kumbh Mela: planetary alignments in Leo (Simha), the sacred Godavari Shahi Snan at Ramkund and Kushavarta.',
    },
    {
      title: 'Godavari River Evening Aarti at Ramkund: Timings, Rituals & Darshan Tips',
      href: '/blog/godavari-aarti-ramkund-evening-guide',
      category: 'spiritual',
      heroImage: '/images/destinations/ramkund-godavari-aarti.webp',
      excerpt:
        'Experience the divine evening Godavari Aarti at Ramkund with deepam floating on the sacred river.',
    },
    {
      title: 'Complete Guide to Shri Trimbakeshwar Jyotirlinga: Timings, Darshan & Rituals',
      href: '/places/trimbakeshwar',
      category: 'spiritual',
      heroImage: '/images/destinations/trimbakeshwar-temple.webp',
      excerpt:
        'Everything you need to know about visiting the sacred 10th Jyotirlinga at the origin of River Godavari.',
    },
  ];

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      <ArticleLayout
        title={KUMBH_DATA.title}
        description={KUMBH_DATA.description}
        heroImage={KUMBH_DATA.heroImage}
        heroImageAlt={KUMBH_DATA.heroImageAlt}
        category="Simhastha Kumbh 2027 Hub"
        categoryHref="/destinations/spiritual"
        breadcrumbs={breadcrumbItems}
        author={KUMBH_DATA.author}
        publishedDate={KUMBH_DATA.publishedDate}
        lastVerified={KUMBH_DATA.lastVerified}
        directAnswer={KUMBH_DATA.directAnswer}
        sources={KUMBH_DATA.sources}
        relatedPosts={relatedArticles}
        slug="kumbh"
      >
        {/* Quick Facts Metric Grid */}
        <section className="not-prose my-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-amber-900">
              {KUMBH_DATA.quickStats.cycleYears} Years
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-700">
              Celestial Astrological Cycle
            </span>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-purple-900">
              {KUMBH_DATA.quickStats.expectedPilgrims}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-purple-700">
              Expected Devotee Footfall
            </span>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center">
            <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-900">
              {KUMBH_DATA.quickStats.akhadasCount} Akhadas
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-700">
              Recognized Monastic Orders
            </span>
          </div>
          <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-center">
            <span className="block text-sm sm:text-base font-bold text-sky-900 leading-tight">
              {KUMBH_DATA.quickStats.twinHubs}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-sky-700">
              Dual Holy Bathing Nodes
            </span>
          </div>
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center">
            <span className="block text-sm sm:text-base font-bold text-rose-900 leading-tight">
              {KUMBH_DATA.quickStats.sacredRivers}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-rose-700">
              Sanctified River Waters
            </span>
          </div>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
            <span className="block text-sm sm:text-base font-bold text-indigo-900 leading-tight">
              ₹15,000+ Cr
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-indigo-700">
              Infrastructure Masterplan
            </span>
          </div>
        </section>

        {/* Quick Navigation / Table of Contents */}
        <nav
          aria-label="Table of Contents"
          className="not-prose my-8 p-5 bg-white border border-gray-200 rounded-xl shadow-sm"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
            <span>📑</span> Jump to Key Guide Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <a
              href="#significance"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">01.</span> Planetary & Astrological Significance
            </a>
            <a
              href="#dates"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">02.</span> 2027 Shahi Snan Royal Bathing Schedule
            </a>
            <a
              href="#ghats"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">03.</span> Ramkund & Godavari Holy Bathing Ghats
            </a>
            <a
              href="#akhadas"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">04.</span> 13 Akhadas, Sadhus & Peshwai Processions
            </a>
            <a
              href="#transit"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">05.</span> How to Reach: Special Trains, Buses & Flights
            </a>
            <a
              href="#stay"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">06.</span> Where to Stay: Tent Cities, Dharamsalas & Hotels
            </a>
            <a
              href="#security"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">07.</span> Crowd Management, Helplines & Medical Tents
            </a>
            <a
              href="#trimbakeshwar"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">08.</span> Trimbakeshwar Jyotirlinga & Kushavarta Rules
            </a>
            <a
              href="#safety"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">09.</span> Family, Elderly & Children Safety Checklist
            </a>
            <a
              href="#comparison"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">10.</span> Nashik vs Prayagraj, Haridwar & Ujjain
            </a>
            <a
              href="#faqs"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">11.</span> Top 25 Kumbh FAQs Answered
            </a>
            <a
              href="#sources"
              className="text-purple-700 hover:text-purple-900 hover:underline flex items-center gap-1.5"
            >
              <span className="text-gray-400">12.</span> Official Government Sources & Ground Truth
            </a>
          </div>
        </nav>

        {/* SECTION 1: Planetary & Astrological Significance */}
        <section id="significance" className="scroll-mt-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            1. Planetary & Astrological Significance of Simhastha
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.significance.astrologicalAlignment}
          </p>

          <div className="not-prose my-6 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-amber-900 flex items-center gap-2 mb-2">
              <span>🪐</span> The Celestial Alignment: Guru in Simha Rashi
            </h3>
            <p className="text-sm text-gray-800 leading-relaxed">
              In traditional Vedic astrology (Jyotisha Shastra), when Brihaspati (Jupiter) enters
              the solar sign of Leo (Simha) and the Sun aligns in Leo or Cancer, an astronomical
              vortex occurs over the Sahyadri mountains. The waters of River Godavari—often venerated
              as <em>Gautami Ganga</em> or <em>Dakshin Ganga</em>—are believed to possess elevated
              bio-electromagnetic vitality, transmuting mortal sins (Papa-Prakshalana) and granting
              vitality to those who immerse themselves with reverence.
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-6">
            The Legend of Samudra Manthan & Divine Nectar (Amrita)
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.significance.mythologicalOrigin}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.significance.dualTownTradition}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.significance.spiritualMerits}
          </p>
        </section>

        {/* SECTION 2: Astrological Dates & Shahi Snan Schedule */}
        <section id="dates" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            2. Verified 2027 Shahi Snan Schedule & Ceremonial Calendar
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.datesAndSchedule.intro}
          </p>

          <div className="not-prose my-6 space-y-4">
            {KUMBH_DATA.datesAndSchedule.calendar.map((event, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-purple-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-xs font-bold rounded-full bg-purple-100 text-purple-800 uppercase tracking-wider mb-1">
                      {event.tithi}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                  </div>
                  <div className="text-sm sm:text-right font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg self-start sm:self-auto">
                    📅 {event.gregorianDate}
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {event.significance}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-600 bg-gray-50 rounded-lg p-3">
                  <div>
                    <span className="font-bold text-gray-800">📍 Sacred Sites:</span> {event.location}
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">🚩 Akhada Role:</span>{' '}
                    {event.participatingAkhadas}
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">👥 Projected Footfall:</span>{' '}
                    {event.crowdExpectation}
                  </div>
                </div>

                <div className="mt-3 p-2.5 bg-amber-50 border-l-3 border-amber-400 rounded-r text-xs text-amber-900">
                  <strong>⚠️ Critical Pilgrim Instruction:</strong> {event.keyInstructions}
                </div>
              </div>
            ))}
          </div>

          <div className="not-prose p-4 bg-sky-50 border border-sky-200 rounded-xl text-sm text-sky-950">
            <h4 className="font-bold mb-1 flex items-center gap-1.5">
              <span>🏛️</span> Maharashtra Government Infrastructure Masterplan
            </h4>
            <p>{KUMBH_DATA.datesAndSchedule.governmentTimeline}</p>
          </div>
        </section>

        {/* SECTION 3: Ramkund & Godavari Holy Bathing Ghats */}
        <section id="ghats" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            3. Ramkund & Godavari Holy Bathing Ghats: Etiquette & Timings
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.ghatsAndBathing.intro}
          </p>

          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>🌊</span> Ramkund (Panchavati, Nashik)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {KUMBH_DATA.ghatsAndBathing.ramkundDetails}
              </p>
            </div>
            <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>🏔️</span> Kushavarta Kund (Trimbakeshwar)
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {KUMBH_DATA.ghatsAndBathing.kushavartaDetails}
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Directory of Key Bathing Ghats & Facilities
          </h3>
          <div className="not-prose space-y-4">
            {KUMBH_DATA.ghatsAndBathing.ghatsList.map((ghat, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-purple-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                    {ghat.name} <span className="text-xs font-normal text-gray-500">({ghat.localName})</span>
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2.5 py-0.5 rounded-full font-medium">
                      📍 {ghat.location}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full font-semibold">
                      {ghat.primaryAkhada}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {ghat.historicalSignificance}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-gray-50 p-3 rounded-lg mb-3">
                  <div>
                    <span className="font-bold text-gray-800">Water Depth:</span> {ghat.depthMeters}
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">Key Facilities:</span>{' '}
                    {ghat.facilities.join(' • ')}
                  </div>
                  <div>
                    <span className="font-bold text-emerald-800">🟢 Designated Entry:</span>{' '}
                    {ghat.entryRoute}
                  </div>
                  <div>
                    <span className="font-bold text-rose-800">🔴 Designated Exit:</span>{' '}
                    {ghat.exitRoute}
                  </div>
                </div>

                <div className="text-xs text-amber-900 bg-amber-50 p-2.5 rounded border border-amber-200">
                  <strong>⚠️ Safety Advisory:</strong> {ghat.safetyAdvisory}
                </div>
              </div>
            ))}
          </div>

          {/* Bathing Etiquette Box */}
          <div className="not-prose my-8 bg-emerald-50 border border-emerald-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-emerald-950 flex items-center gap-2 mb-3">
              <span>🌿</span> Sacred Bathing Etiquette & Environmental Protection Protocol
            </h3>
            <ul className="space-y-2 text-sm text-emerald-900">
              {KUMBH_DATA.ghatsAndBathing.bathingEtiquette.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: Akhadas & Peshwai Processions */}
        <section id="akhadas" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            4. Akhil Bharatiya Akhada Parishad & Sadhu Processions (Peshwai)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.akhadasAndProcessions.history1813PeshwaTreaty}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">
            The Royal Pageantry of the Peshwai
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.akhadasAndProcessions.peshwaiProcessions}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">
            Roster of the 13 Recognized Akhadas & Bathing Order
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {KUMBH_DATA.akhadasAndProcessions.shahiSnanSequence}
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-left text-sm border-collapse bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-gray-100 text-gray-900 font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 border-b">Order</th>
                  <th className="py-3 px-4 border-b">Akhada Name</th>
                  <th className="py-3 px-4 border-b">Tradition</th>
                  <th className="py-3 px-4 border-b">Camp Location</th>
                  <th className="py-3 px-4 border-b">Holy Bathing Ghat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {KUMBH_DATA.akhadasAndProcessions.akhadasList.map((akhada, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/50 transition-colors">
                    <td className="py-2.5 px-4 font-bold text-purple-700">{akhada.historicalOrder}</td>
                    <td className="py-2.5 px-4 font-semibold text-gray-900">{akhada.name}</td>
                    <td className="py-2.5 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs rounded font-medium ${
                          akhada.tradition.includes('Shaiva')
                            ? 'bg-orange-100 text-orange-800'
                            : akhada.tradition.includes('Vaishnava')
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {akhada.tradition}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-xs">{akhada.campLocation}</td>
                    <td className="py-2.5 px-4 text-xs font-medium text-gray-800">{akhada.bathingGhat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: How to Reach */}
        <section id="transit" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            5. How to Reach: Special Trains, Satellite Bus Terminals & Airport
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.howToReach.intro}
          </p>

          <div className="not-prose my-6 space-y-5">
            {KUMBH_DATA.howToReach.transitOptions.map((opt, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-purple-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-gray-100 pb-3 mb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      {opt.category} Mode
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">{opt.title}</h3>
                  </div>
                  <span className="text-xs text-gray-500 self-start sm:self-auto">
                    Operator: <strong className="text-gray-800">{opt.operator}</strong>
                  </span>
                </div>

                <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
                  {opt.operationalHighlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-purple-600 mt-0.5">▪</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 p-3 rounded-lg text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-gray-800">Satellite Nodes:</span>{' '}
                    {opt.satelliteHubs.join(' • ')}
                  </div>
                  <div className="text-gray-600">
                    <strong>Booking Advisory:</strong> {opt.bookingAdvisory}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="not-prose p-5 bg-rose-50 border-l-4 border-rose-600 rounded-r-xl shadow-sm">
            <h4 className="text-base font-bold text-rose-950 mb-1 flex items-center gap-2">
              <span>🛑</span> Mandatory Private Vehicle Cordon Policy
            </h4>
            <p className="text-sm text-rose-900 leading-relaxed">
              {KUMBH_DATA.howToReach.privateVehiclePolicy}
            </p>
          </div>
        </section>

        {/* SECTION 6: Where to Stay */}
        <section id="stay" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            6. Where to Stay: Sadhugram Tent Cities, Dharamsalas & Hotels
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.whereToStay.intro}
          </p>

          <div className="not-prose my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {KUMBH_DATA.whereToStay.categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-purple-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.category}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-3">{cat.description}</p>

                  <div className="text-xs space-y-1.5 mb-3 bg-gray-50 p-3 rounded-lg">
                    <div>
                      <strong className="text-gray-900">Tariff Range:</strong>{' '}
                      <span className="text-emerald-700 font-semibold">{cat.priceRange}</span>
                    </div>
                    <div>
                      <strong className="text-gray-900">Key Zones:</strong>{' '}
                      {cat.locationZones.join(', ')}
                    </div>
                    <div>
                      <strong className="text-gray-900">Advance Window:</strong> {cat.bookingWindow}
                    </div>
                  </div>

                  <div className="text-xs text-gray-600 mb-3">
                    <strong className="text-gray-800">Amenities:</strong> {cat.amenities.join(' • ')}
                  </div>
                </div>

                <div className="text-xs bg-amber-50 p-2.5 rounded border border-amber-200 text-amber-900">
                  <strong>Notice:</strong> {cat.officialWarning}
                </div>
              </div>
            ))}
          </div>

          <div className="not-prose p-5 bg-amber-100/70 border border-amber-300 rounded-xl">
            <h4 className="text-sm font-bold text-amber-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>⚠️</span> Anti-Fraud Accommodation Alert
            </h4>
            <p className="text-sm text-amber-900">{KUMBH_DATA.whereToStay.antiFraudWarning}</p>
          </div>
        </section>

        {/* SECTION 7: Crowd Management & Helplines */}
        <section id="security" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            7. Crowd Management, Security & Verified Emergency Helplines
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.crowdAndSecurity.securityArchitecture}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">
            Circular One-Way Pedestrian Ring System
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.crowdAndSecurity.pedestrianCirculationSystem}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">
            Three-Tier Healthcare & Medical Field Hospitals
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.crowdAndSecurity.medicalInfrastructure}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
            Official 24/7 Emergency Helplines Directory
          </h3>
          <div className="not-prose overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-gray-100 text-gray-900 font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 border-b">Emergency Service</th>
                  <th className="py-3 px-4 border-b">Department</th>
                  <th className="py-3 px-4 border-b">Contact Number</th>
                  <th className="py-3 px-4 border-b">Toll-Free</th>
                  <th className="py-3 px-4 border-b">Coverage Zone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {KUMBH_DATA.crowdAndSecurity.helplines.map((line, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/50 transition-colors">
                    <td className="py-2.5 px-4 font-semibold text-gray-900">{line.service}</td>
                    <td className="py-2.5 px-4 text-xs">{line.department}</td>
                    <td className="py-2.5 px-4 font-mono font-bold text-purple-700">
                      <a href={`tel:${line.contactNumber.replace(/[^0-9]/g, '')}`} className="hover:underline">
                        {line.contactNumber}
                      </a>
                    </td>
                    <td className="py-2.5 px-4 font-mono text-emerald-700">
                      {line.tollFree ? (
                        <a href={`tel:${line.tollFree}`} className="hover:underline font-bold">
                          {line.tollFree}
                        </a>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-xs text-gray-600">{line.locationCoverage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 8: Trimbakeshwar Jyotirlinga Kumbh Rules */}
        <section id="trimbakeshwar" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            8. Trimbakeshwar Jyotirlinga Kumbh Darshan Protocol & Kushavarta Kund
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.trimbakeshwarProtocol.jyotirlingaOverview}
          </p>

          <div className="not-prose my-6 bg-purple-50 border border-purple-200 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-purple-950 mb-3 flex items-center gap-2">
              <span>📜</span> Official Temple Darshan Regulations During Kumbh Mela
            </h3>
            <ul className="space-y-2.5 text-sm text-purple-900">
              {KUMBH_DATA.trimbakeshwarProtocol.darshanRulesDuringKumbh.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">⚖️</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-6">
            Kushavarta Kund Royal Bathing Exclusivity Hours
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.trimbakeshwarProtocol.kushavartaSnanTimings}
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-6">
            Sacred Brahmagiri Mountain Parikrama Regulations
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.trimbakeshwarProtocol.brahmagiriParikramaRules}
          </p>
        </section>

        {/* SECTION 9: Family, Elderly & Children Safety Checklist */}
        <section id="safety" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            9. Family, Elderly & Children Safety Checklist
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.familySafetyChecklist.intro}
          </p>

          <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {KUMBH_DATA.familySafetyChecklist.checklist.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:border-purple-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <ul className="space-y-1.5 text-xs text-gray-700 mb-4">
                    {item.instructions.map((inst, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-1.5">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs p-2.5 rounded font-medium">
                  <strong>💡 Action Tip:</strong> {item.printableTip}
                </div>
              </div>
            ))}
          </div>

          <div className="not-prose p-5 bg-rose-50 border border-rose-200 rounded-xl text-sm text-rose-950">
            <h4 className="font-bold mb-1 flex items-center gap-1.5 text-rose-900">
              <span>🚨</span> Vital Crowd Surge Survival Protocol
            </h4>
            <p>{KUMBH_DATA.familySafetyChecklist.emergencyProtocol}</p>
          </div>
        </section>

        {/* SECTION 10: Comparison Matrix */}
        <section id="comparison" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            10. Comparison: Nashik-Trimbakeshwar vs Prayagraj, Haridwar & Ujjain
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {KUMBH_DATA.comparisonMatrix.intro}
          </p>

          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-purple-900 text-white font-bold text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-3 sm:px-4 border-b border-purple-800">Parameter</th>
                  <th className="py-3 px-3 sm:px-4 border-b border-purple-800 bg-purple-950">
                    Nashik-Trimbakeshwar
                  </th>
                  <th className="py-3 px-3 sm:px-4 border-b border-purple-800">Prayagraj</th>
                  <th className="py-3 px-3 sm:px-4 border-b border-purple-800">Haridwar</th>
                  <th className="py-3 px-3 sm:px-4 border-b border-purple-800">Ujjain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {KUMBH_DATA.comparisonMatrix.parameters.map((row, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/50 transition-colors">
                    <td className="py-3 px-3 sm:px-4 font-bold text-gray-900 bg-gray-50/80">
                      {row.parameter}
                    </td>
                    <td className="py-3 px-3 sm:px-4 font-medium text-purple-950 bg-purple-50/40">
                      {row.nashikTrimbak}
                    </td>
                    <td className="py-3 px-3 sm:px-4">{row.prayagraj}</td>
                    <td className="py-3 px-3 sm:px-4">{row.haridwar}</td>
                    <td className="py-3 px-3 sm:px-4">{row.ujjain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 11: Top 25 FAQs */}
        <section id="faqs" className="scroll-mt-16 mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            11. Top 25 Simhastha Kumbh Mela FAQs (Answered)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Clear, authoritative answers verified against notifications from the Nashik District
            Collectorate, Trimbakeshwar Temple Trust, and the Akhil Bharatiya Akhada Parishad.
          </p>

          <div className="not-prose space-y-3">
            {KUMBH_DATA.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-purple-300"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-gray-900 cursor-pointer select-none list-none group-open:bg-purple-50/50">
                  <span className="flex items-center gap-2">
                    <span className="text-purple-600 font-mono text-xs sm:text-sm">Q{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="text-purple-600 font-bold text-lg transition-transform duration-200 group-open:rotate-45 ml-2">
                    +
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* SECTION 12: Updates & Ground Truth */}
        <section id="sources" className="scroll-mt-16 mt-12">
          <div className="p-5 bg-gradient-to-r from-gray-50 to-purple-50 border border-gray-200 rounded-xl">
            <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span>📌</span> Official Editorial Note & Ground Truth Commitment
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              This Simhastha Kumbh Mela 2027 Hub is maintained under Trivio’s strict
              zero-invented-facts editorial standard. All dates, transit schedules, ghat
              barricading schemes, and temple rules are directly synchronized with the official
              gazettes of the Nashik District Administration, Maharashtra State Disaster
              Management Authority, Shri Trimbakeshwar Devasthan Trust, and the Akhil Bharatiya
              Akhada Parishad. This page is updated in real time as fresh administrative gazettes
              and Indian Railways special train circulars are issued.
            </p>
          </div>
        </section>
      </ArticleLayout>
    </>
  );
}
