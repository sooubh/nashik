#!/usr/bin/env node
/**
 * IndexNow submission script for Trivio (nashik.sooubh.in)
 * Automatically notifies Bing, Yandex, and other search engines of all indexable URLs.
 */

const HOST = 'nashik.sooubh.in';
const KEY = 'b8d32d0c5a274ffab6ee2088f58b688d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Key canonical URLs to notify IndexNow
const URL_LIST = [
  `https://${HOST}`,
  `https://${HOST}/places`,
  `https://${HOST}/destinations`,
  `https://${HOST}/guides`,
  `https://${HOST}/blog`,
  `https://${HOST}/contact`,
  `https://${HOST}/places/trimbakeshwar`,
  `https://${HOST}/places/sula-vineyards`,
  `https://${HOST}/places/harihar-fort`,
  `https://${HOST}/places/panchavati-kalaram`,
  `https://${HOST}/places/dugarwadi-waterfall`,
  `https://${HOST}/places/saptashrungi-gad`,
  `https://${HOST}/places/muktidham-temple`,
  `https://${HOST}/places/someshwar-waterfall`,
  `https://${HOST}/places/pandavleni-caves`,
  `https://${HOST}/places/anjaveri-hills`,
  `https://${HOST}/places/york-winery`,
  `https://${HOST}/places/soma-vine-village`,
];

async function submitIndexNow() {
  console.log(`Submitting ${URL_LIST.length} URLs to IndexNow for host: ${HOST}...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST,
  };

  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`✅ IndexNow ping SUCCESS! HTTP ${response.status} ${response.statusText}`);
    } else {
      console.warn(`⚠️ IndexNow response: HTTP ${response.status} ${response.statusText}`);
      const body = await response.text();
      if (body) console.log('Response body:', body);
    }
  } catch (err) {
    console.error('❌ Failed to ping IndexNow:', err.message);
  }
}

submitIndexNow();
