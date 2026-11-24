#!/usr/bin/env node
/**
 * IndexNow submission script for Trivio (nashik.sooubh.in)
 * Automatically notifies Bing, Yandex, Naver, Seznam, and Yep of all indexable canonical URLs.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const HOST = 'nashik.sooubh.in';
const KEY = 'b8d32d0c5a274ffab6ee2088f58b688d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function extractSlugs(filePath) {
  try {
    const fullPath = path.join(ROOT_DIR, filePath);
    if (!fs.existsSync(fullPath)) return [];
    const content = fs.readFileSync(fullPath, 'utf8');
    const matches = content.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
    return Array.from(matches, (m) => m[1]);
  } catch {
    return [];
  }
}

// Extract published slugs dynamically
const placeSlugs = extractSlugs('src/data/destinationsData.ts');
const guideSlugs = extractSlugs('src/data/guidesData.ts');
const blogSlugs = extractSlugs('src/data/blogData.ts');

const staticPaths = [
  '',
  '/places',
  '/destinations',
  '/guides',
  '/blog',
  '/contact',
  '/data-safety',
  '/privacy-policy',
  '/terms-of-use',
  '/cookies-policy',
  '/disclaimer',
];

const categorySlugs = [
  'spiritual',
  'vineyards',
  'treks',
  'waterfalls',
  'food',
  'itineraries',
  'logistics',
  'festivals',
  'nashik',
  'trimbakeshwar',
  'igatpuri',
  'dindori',
];

// Fallback curated place list in case data files cannot be read
const fallbackPlaces = [
  'trimbakeshwar',
  'sula-vineyards',
  'harihar-fort',
  'panchavati-kalaram',
  'dugarwadi-waterfall',
  'saptashrungi-devi',
  'muktidham-temple',
  'someshwar-waterfall',
  'pandavleni-caves',
  'anjaneri-hills',
  'york-winery',
  'soma-vine-village',
  'brahmagiri-hill',
  'ramshej-fort',
  'salher-fort',
  'vihigaon-waterfall',
  'bhandardara-falls',
  'sadhana-misal',
  'shamsundar-misal',
  'ambika-misal',
  'chandon-india',
  'vallonne-vineyards',
  'kapaleshwar-temple',
];

const effectivePlaces = placeSlugs.length > 0 ? placeSlugs : fallbackPlaces;

const urlSet = new Set();

// 1. Static platform pages
staticPaths.forEach((p) => urlSet.add(`https://${HOST}${p}`));

// 2. Destination hub categories
categorySlugs.forEach((c) => urlSet.add(`https://${HOST}/destinations/${c}`));

// 3. Verified destination place pages
effectivePlaces.forEach((slug) => urlSet.add(`https://${HOST}/places/${slug}`));

// 4. Expert guides
guideSlugs.forEach((slug) => urlSet.add(`https://${HOST}/guides/${slug}`));

// 5. Blog posts and itineraries
blogSlugs.forEach((slug) => urlSet.add(`https://${HOST}/blog/${slug}`));

const URL_LIST = Array.from(urlSet);

async function submitIndexNow() {
  console.log(`Submitting ${URL_LIST.length} verified canonical URLs to IndexNow for host: ${HOST}...`);

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
