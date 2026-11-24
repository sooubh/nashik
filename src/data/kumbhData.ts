import { VerifiedSource } from '@/types/contract';
import { FAQItem } from '@/types/content';

export interface KumbhSnanDate {
  title: string;
  tithi: string;
  gregorianDate: string;
  significance: string;
  location: string;
  participatingAkhadas: string;
  crowdExpectation: string;
  keyInstructions: string;
}

export interface KumbhGhat {
  name: string;
  localName: string;
  location: 'Nashik City (Godavari)' | 'Trimbakeshwar';
  primaryAkhada: 'Vaishnava (Bairagi)' | 'Shaiva (Sanyasi)' | 'General Public';
  historicalSignificance: string;
  depthMeters: string;
  facilities: string[];
  safetyAdvisory: string;
  entryRoute: string;
  exitRoute: string;
}

export interface KumbhAkhada {
  name: string;
  tradition: 'Shaiva (Sanyasi)' | 'Vaishnava (Bairagi)' | 'Udasi' | 'Nirmal';
  campLocation: 'Trimbakeshwar Sadhugram' | 'Tapovan Sadhugram (Nashik)';
  bathingGhat: 'Kushavarta Kund (Trimbakeshwar)' | 'Ramkund Ghats (Nashik)';
  historicalOrder: number;
  distinctiveFeatures: string;
}

export interface KumbhTransitMode {
  title: string;
  category: 'Rail' | 'Bus' | 'Air' | 'Road';
  operator: string;
  operationalHighlights: string[];
  satelliteHubs: string[];
  bookingAdvisory: string;
  officialPortal: string;
}

export interface KumbhStayCategory {
  category: string;
  description: string;
  locationZones: string[];
  priceRange: string;
  amenities: string[];
  bookingWindow: string;
  officialWarning: string;
}

export interface KumbhHelpline {
  service: string;
  department: string;
  contactNumber: string;
  tollFree?: string;
  operationalHours: string;
  locationCoverage: string;
}

export interface KumbhSafetyItem {
  id: string;
  title: string;
  category: 'Children & Elders' | 'Health & Medication' | 'Crowd & Transit' | 'Cash & Connectivity';
  instructions: string[];
  printableTip: string;
}

export interface KumbhComparisonRow {
  parameter: string;
  nashikTrimbak: string;
  prayagraj: string;
  haridwar: string;
  ujjain: string;
}

export interface KumbhData {
  title: string;
  seoTitle: string;
  description: string;
  canonical: string;
  heroImage: string;
  heroImageAlt: string;
  publishedDate: string;
  lastVerified: string;
  author: string;
  directAnswer: string;
  quickStats: {
    cycleYears: number;
    expectedPilgrims: string;
    sacredRivers: string;
    twinHubs: string;
    akhadasCount: number;
    budgetAllocation: string;
  };
  sources: VerifiedSource[];
  significance: {
    astrologicalAlignment: string;
    mythologicalOrigin: string;
    dualTownTradition: string;
    spiritualMerits: string;
  };
  datesAndSchedule: {
    intro: string;
    calendar: KumbhSnanDate[];
    governmentTimeline: string;
  };
  ghatsAndBathing: {
    intro: string;
    ramkundDetails: string;
    kushavartaDetails: string;
    ghatsList: KumbhGhat[];
    bathingEtiquette: string[];
  };
  akhadasAndProcessions: {
    history1813PeshwaTreaty: string;
    peshwaiProcessions: string;
    shahiSnanSequence: string;
    akhadasList: KumbhAkhada[];
  };
  howToReach: {
    intro: string;
    transitOptions: KumbhTransitMode[];
    privateVehiclePolicy: string;
  };
  whereToStay: {
    intro: string;
    categories: KumbhStayCategory[];
    antiFraudWarning: string;
  };
  crowdAndSecurity: {
    securityArchitecture: string;
    pedestrianCirculationSystem: string;
    medicalInfrastructure: string;
    helplines: KumbhHelpline[];
  };
  trimbakeshwarProtocol: {
    jyotirlingaOverview: string;
    darshanRulesDuringKumbh: string[];
    kushavartaSnanTimings: string;
    brahmagiriParikramaRules: string;
  };
  familySafetyChecklist: {
    intro: string;
    checklist: KumbhSafetyItem[];
    emergencyProtocol: string;
  };
  comparisonMatrix: {
    intro: string;
    parameters: KumbhComparisonRow[];
  };
  faqs: FAQItem[];
}

export const KUMBH_DATA: KumbhData = {
  title: 'Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027: The Ultimate Official Guide',
  seoTitle: 'Simhastha Kumbh Mela 2027 Nashik: Dates, Ghats & Shahi Snan Guide',
  description:
    'Complete verified guide to Nashik-Trimbakeshwar Simhastha Kumbh Mela 2027. Shahi Snan dates, Ramkund & Kushavarta bathing rules, akhada processions, train routes, tent cities & safety tips.',
  canonical: 'https://nashik.sooubh.in/kumbh',
  heroImage: '/images/destinations/ramkund-godavari-aarti.webp',
  heroImageAlt: 'Sacred Ramkund Ghats on the banks of Godavari River in Nashik prepared for Simhastha Kumbh Mela',
  publishedDate: '2026-11-24',
  lastVerified: '2026-11-24',
  author: 'Trivio Heritage & Cultural Research Desk',
  directAnswer:
    'The Nashik-Trimbakeshwar Simhastha Kumbh Mela occurs every 12 years when Jupiter enters the zodiac sign of Leo (Simha Rashi) and the Sun aligns in Leo or Cancer. The 2027 cycle features grand Shahi Snan royal baths at Ramkund (Nashik) for Vaishnava Akhadas and at Kushavarta Kund (Trimbakeshwar) for Shaiva Akhadas during the sacred months of Shravan and Bhadrapada.',
  quickStats: {
    cycleYears: 12,
    expectedPilgrims: '3.5 to 4.0 Crore',
    sacredRivers: 'River Godavari (Dakshin Ganga)',
    twinHubs: 'Nashik City (Ramkund) & Trimbakeshwar (Kushavarta)',
    akhadasCount: 13,
    budgetAllocation: '₹15,000+ Crore Infrastructure Masterplan',
  },
  sources: [
    {
      title: 'Nashik District Administration & Collectorate Official Portal',
      url: 'https://nashik.gov.in',
      type: 'government',
      verifiedDate: '2026-11-24',
    },
    {
      title: 'Shri Trimbakeshwar Shiva Temple Devasthan Trust',
      url: 'https://trimbakeshwartrust.com',
      type: 'official',
      verifiedDate: '2026-11-24',
    },
    {
      title: 'Nashik Municipal Corporation (NMC) Simhastha Planning Cell',
      url: 'https://nmc.gov.in',
      type: 'government',
      verifiedDate: '2026-11-24',
    },
    {
      title: 'Central Railway (CR) Bhusawal & Mumbai Special Train Operations',
      url: 'https://cr.indianrailways.gov.in',
      type: 'government',
      verifiedDate: '2026-11-24',
    },
    {
      title: 'Maharashtra State Road Transport Corporation (MSRTC) Festival Transit',
      url: 'https://msrtc.maharashtra.gov.in',
      type: 'government',
      verifiedDate: '2026-11-24',
    },
    {
      title: 'Maharashtra Tourism Development Corporation (MTDC) Simhastha Portal',
      url: 'https://maharashtratourism.gov.in',
      type: 'government',
      verifiedDate: '2026-11-24',
    },
    {
      title: 'Maharashtra State Disaster Management Authority (SDMA) Safety Advisory',
      url: 'https://sdma.maharashtra.gov.in',
      type: 'government',
      verifiedDate: '2026-11-24',
    },
  ],
  significance: {
    astrologicalAlignment:
      'The Simhastha Kumbh Mela derives its name from "Simha" (Leo). Unlike Prayagraj, Haridwar, and Ujjain, which depend on Jupiter entering Aries, Taurus, or Aquarius, Nashik’s festival is triggered solely when Brihaspati (Jupiter) enters Simha Rashi (the zodiac sign of Leo) while the Sun also traverses Simha or Cancer. This rare celestial configuration occurs once every 12 years. According to Vedic astrology (Jyotisha Shastra), during this alignment, cosmic magnetic currents converge upon the waters of River Godavari, transmuting them into spiritual nectar with profound rejuvenating and karmic cleansing properties.',
    mythologicalOrigin:
      'In Vedic lore, during the monumental Samudra Manthan (Churning of the Cosmic Ocean), the Devas and Asuras battled over the Kumbha (urn) containing Amrita (the nectar of eternal life). As the divine bird Garuda flew across the mortal realm bearing the urn, twelve divine drops of Amrita splashed down over twelve cosmic days—four fell upon Earth at Nashik (Godavari), Haridwar (Ganga), Prayagraj (Triveni Sangam), and Ujjain (Shipra). Taking a sacred holy dip (snan) in the sanctified Godavari at this hour is believed to liberate the soul from cycles of rebirth (Samsara).',
    dualTownTradition:
      'A hallmark unique to this Kumbh is its dual geographic epicenter separated by 28 kilometers. Nashik city is the holy ground for Vaishnava Bairagi Akhadas worshipping Lord Vishnu and Lord Rama at Ramkund. Simultaneously, Trimbakeshwar, resting at the foothills of Brahmagiri Mountain, is the abode of Lord Shiva’s Trimbakeshwar Jyotirlinga, where Shaiva Sanyasi Akhadas conduct their sacred ceremonies at Kushavarta Kund. This bifurcation unites both paramount streams of Sanatana Dharma under one grand umbrella.',
    spiritualMerits:
      'Scriptures including the Skanda Purana and Padma Purana assert that bathing in the Godavari when Jupiter enters Leo confers spiritual merit equal to performing sixty thousand ashwamedha yajnas. Millions of sadhus, householders, yogis, and scholars converge to discourse, chant, and celebrate this supreme congregation of Sanatana faith.',
  },
  datesAndSchedule: {
    intro:
      'The Simhastha Kumbh Mela 2027 operates on strict astronomical panchang tithis determined by the Akhil Bharatiya Akhada Parishad in concurrence with the Nashik District Administration and Trimbakeshwar Devasthan. Below is the verified schedule of ceremonial flag-hoisting and royal bathing days (Shahi Snan).',
    calendar: [
      {
        title: 'Dhwajarohan (Ceremonial Flag Hoisting - Inauguration)',
        tithi: 'Ashadha / Shravan Shukla Tithi',
        gregorianDate: 'July - August 2027 (Official Panchang Confirmation)',
        significance:
          'Formal raising of the sacred religious flags at Ramkund (Nashik) by Vaishnava Akhadas and at Kushavarta (Trimbakeshwar) by Shaiva Akhadas, officially commencing the 12-month Simhastha festival.',
        location: 'Ramkund (Nashik) & Kushavarta (Trimbakeshwar)',
        participatingAkhadas: 'All 13 Recognized Akhadas with Mahants & State Dignitaries',
        crowdExpectation: '5,00,000+ pilgrims across twin centers',
        keyInstructions:
          'Processions begin at 6:00 AM. General bathing is restricted near the main flagstaff during the Vedic consecration rituals.',
      },
      {
        title: 'Pratham Shahi Snan (First Royal Bathing Day)',
        tithi: 'Shravan Shukla Purnima (Raksha Bandhan / Shravani Purnima)',
        gregorianDate: 'August 2027 (Panchang / Government Notification)',
        significance:
          'The opening Shahi Snan marked by the triumphant ceremonial march (Peshwai) of Naga Sadhus and Akhada Mahants into the sanctified waters.',
        location: 'Ramkund Ghats (Nashik) & Kushavarta Kund (Trimbakeshwar)',
        participatingAkhadas:
          'Juna, Niranjani, Mahanirvani, Atal at Trimbakeshwar; Nirmohi, Digambar, Nirvani at Ramkund',
        crowdExpectation: '75 Lakh to 1 Crore pilgrims',
        keyInstructions:
          'Akhada royal bathing takes precedence from 2:00 AM to 12:00 PM. General public bathing permitted strictly from 1:00 PM onwards.',
      },
      {
        title: 'Dwitiya Shahi Snan / Rajyog Snan (Second & Peak Royal Bath)',
        tithi: 'Bhadrapada Krishna Amavasya (Somvati / Sarva Pitru Amavasya)',
        gregorianDate: 'September 2027 (Peak Astrological Conjunction)',
        significance:
          'The supreme spiritual apex of the entire Simhastha Kumbh. Pitru Shraddha and Tarpan performed on this tithi are held to liberate three generations of ancestors.',
        location: 'Ramkund, Lakshman Kund, Sita Kund (Nashik) & Kushavarta Kund (Trimbak)',
        participatingAkhadas: 'All Vaishnava & Shaiva Akhadas in full ceremonial regalia',
        crowdExpectation: '1.5 to 2.0 Crore pilgrims in 24 hours',
        keyInstructions:
          'Total pedestrian circular one-way system active. No vehicular transit within 5 km of Godavari. Pre-plan travel 48 hours in advance.',
      },
      {
        title: 'Tritiya Shahi Snan (Third Royal Bathing Day)',
        tithi: 'Bhadrapada Shukla Dwadashi (Vamana Jayanti / Parivartini Ekadashi window)',
        gregorianDate: 'September - October 2027',
        significance:
          'The concluding royal bath commemorating Lord Vishnu’s Vamana avatar, followed by grand valedictory aartis on River Godavari.',
        location: 'Ramkund (Nashik) & Kushavarta (Trimbakeshwar)',
        participatingAkhadas: 'All Akhadas concluding ceremonial encampments',
        crowdExpectation: '80 Lakh to 1.2 Crore pilgrims',
        keyInstructions:
          'Special return train services commence from satellite stations (Odha, Devlali, Kherwadi) to evacuate returning devotees.',
      },
      {
        title: 'Dhwajavatarana (Flag Lowering Ceremony - Valedictory)',
        tithi: 'Shravan / Bhadrapada 2028 (Concluding 12-month astrological cycle)',
        gregorianDate: 'July - August 2028',
        significance:
          'Ritual lowering of the sacred Simhastha flags upon Jupiter completing its transit of Leo, formally concluding the festival cycle.',
        location: 'Ramkund & Kushavarta Kund',
        participatingAkhadas: 'Akhada Parishad Leadership & District Collectorate',
        crowdExpectation: '3,00,000+ pilgrims',
        keyInstructions:
          'Formal thanks and transition to standard year-round temple timings and darshan passes.',
      },
    ],
    governmentTimeline:
      'The Maharashtra State Cabinet under the High-Power Committee (Simhastha Apex Council) has sanctioned over ₹15,000 Crore for multi-phase urban modernization: 6-lane outer ring roads, Godavari riverbed desilting and water-pumping augmentation, permanent underground drainage networks, 10,000-bed satellite tent cities at Tapovan and Trimbak, and dedicated AI-powered CCTV surveillance.',
  },
  ghatsAndBathing: {
    intro:
      'Over 25 stone-paved ghats line the Godavari river in Nashik and surrounding areas. Understanding the distinction between priority akhada zones and public family bathing ghats is vital for safe and peaceful pilgrimage.',
    ramkundDetails:
      'Ramkund is the central epicenter in Panchavati, Nashik. Faith recounts that Lord Rama bathed here during his 14-year exile and immersed the funeral ashes of his father, King Dasharatha. The water here contains unique bone-dissolving biochemical properties known since antiquity. Measuring 40 by 40 meters, Ramkund is strictly reserved for Vaishnava Akhadas during Shahi Snan mornings before opening to the general public.',
    kushavartaDetails:
      'Kushavarta Kund in Trimbakeshwar is the consecrated pool where River Godavari, descending from Brahmagiri, emerges into daylight. Sage Gautama is revered to have arrested the divine river here with a ring of Kusha grass to absolve the sin of Go-hatya (accidental cow death). Enclosed by magnificent 18th-century stone arches built by Trimbak Rao Pethe, it is reserved exclusively for Shaiva Naga Sadhus on royal bath mornings.',
    ghatsList: [
      {
        name: 'Ramkund Ghat',
        localName: 'रामकुंड घाट',
        location: 'Nashik City (Godavari)',
        primaryAkhada: 'Vaishnava (Bairagi)',
        historicalSignificance:
          'The holiest bathing tank where Lord Rama performed ancestral rituals. Heart of the Simhastha Kumbh in Nashik city.',
        depthMeters: '1.2 m to 1.8 m (managed water level)',
        facilities: ['Safety railings', 'Underwater anti-slip mats', 'Women changing enclosures', 'PA system'],
        safetyAdvisory: 'Extremely dense crowds during Shahi Snan. Follow barricaded flow; do not stop on submerged steps.',
        entryRoute: 'Panchavati Karanja -> Malviya Chowk -> Ramkund Entry Gate A',
        exitRoute: 'Ramkund South Steps -> Talkuteshwar Bridge -> Tapovan Exit Channel',
      },
      {
        name: 'Lakshman Kund & Sita Kund',
        localName: 'लक्ष्मण कुंड आणि सीता कुंड',
        location: 'Nashik City (Godavari)',
        primaryAkhada: 'General Public',
        historicalSignificance:
          'Adjoining sacred tanks named after Lakshman and Sita Mata, used for individual tarpan and prayer rituals.',
        depthMeters: '1.0 m to 1.5 m',
        facilities: ['Dedicated priest pavilions', 'Tarpan platforms', 'Cloakroom kiosks'],
        safetyAdvisory: 'Purohit registration cards must be checked before engaging ritual priests.',
        entryRoute: 'Kalaram Mandir East Gate -> Sita Gufa lane -> Sita Kund descent',
        exitRoute: 'Downstream embankment pathway towards Victoria Bridge',
      },
      {
        name: 'Gandhi Smarak Ghat (Victoria Bridge Ghat)',
        localName: 'गांधी स्मारक घाट',
        location: 'Nashik City (Godavari)',
        primaryAkhada: 'General Public',
        historicalSignificance:
          'Wide concrete ghat constructed where Mahatma Gandhi’s sacred ashes were immersed in 1948. Ideal for families.',
        depthMeters: '0.8 m to 1.4 m with gentle gradient',
        facilities: ['Broad steps', 'Elderly wheelchair access ramp', 'First-aid station', 'Mobile drinking water'],
        safetyAdvisory: 'Recommended bathing spot for families with young children and elderly seniors.',
        entryRoute: 'Old CBS -> Ravivar Karanja -> Victoria Bridge approach',
        exitRoute: 'Ghat exit north gate towards Tilak Road',
      },
      {
        name: 'Talkuteshwar & Dasak Ghats',
        localName: 'टाळकुटेश्वर आणि दसक घाट',
        location: 'Nashik City (Godavari)',
        primaryAkhada: 'General Public',
        historicalSignificance:
          'Ancient Shiva shrine ghats situated 1.5 km downstream of Ramkund, providing clean running river current.',
        depthMeters: '1.0 m to 2.0 m (deep current warning)',
        facilities: ['Life buoys', 'NDRF water safety divers', 'Lighting towers'],
        safetyAdvisory: 'Stay within the buoy boundary line. Do not swim into deep midstream channels.',
        entryRoute: 'Panchavati Ring Road -> Talkuteshwar link road',
        exitRoute: 'Upstream connecting promenade to Tapovan bus bay',
      },
      {
        name: 'Kushavarta Kund',
        localName: 'कुशावर्त कुंड',
        location: 'Trimbakeshwar',
        primaryAkhada: 'Shaiva (Sanyasi)',
        historicalSignificance:
          'The sacred spring where Sage Gautama bound River Godavari. Epicenter of all Shaiva Akhada royal baths.',
        depthMeters: '2.5 m (deep spring; reinforced perimeter platforms)',
        facilities: ['Stone balustrades', 'Life guard station', 'VIP akhada corridors', 'Filtered fresh water intake'],
        safetyAdvisory:
          'Strictly no general public access between 2:00 AM and 1:00 PM on Shahi Snan days. No diving permitted.',
        entryRoute: 'Trimbakeshwar North Bazaar Gate -> Sanyasi Marg -> Kushavarta Entry Portal',
        exitRoute: 'South Kushavarta lane -> Shivaji Chowk -> Trimbak Ring Road',
      },
    ],
    bathingEtiquette: [
      'Strictly avoid soap, chemical shampoo, washing powders, or synthetic detergents in all sacred water bodies.',
      'Do not throw plastic bags, puja packets, flowers in plastic covers, or synthetic clothing into the river.',
      'Dress modestly: traditional dhotis, kurtas, or sarees/salwar suits are customary. Avoid western synthetic swimwear.',
      'Take a quick three-dip holy bath (Trisnana) and exit promptly to enable fellow pilgrims waiting in long queues behind you.',
      'Utilize the designated mobile bio-toilets located on the upper promenade before descending onto the ghat steps.',
      'Deposit shoes and bags only at the official Municipal Cloakrooms (Joota Stand) located at entry gates.',
      'Follow all directions issued over the multilingual Public Address (PA) system by Maharashtra Police and volunteers.',
    ],
  },
  akhadasAndProcessions: {
    history1813PeshwaTreaty:
      'In 1790 CE, during the reign of the Peshwas, a tragic clash erupted at Trimbakeshwar between Shaiva Gosawi Sanyasis and Vaishnava Bairagis over precedence of bathing in Kushavarta Kund. To restore lasting peace, Peshwa Bajirao II, with subsequent administrative mediation in 1813 CE, established an enduring territorial accord: Shaiva Akhadas were assigned Trimbakeshwar as their sacred domain with Kushavarta Kund as their Shahi Snan seat, while Vaishnava Akhadas were allotted Nashik city with Ramkund as their holy bathing sanctum. This 200-year-old accord remains the bedrock of harmony across the Simhastha.',
    peshwaiProcessions:
      'Before the Shahi Snan, each Akhada marks its formal arrival into the city with the "Peshwai"—a majestic royal procession that echoes the pageantry of medieval India. Leading the parade are saffron flags, caparisoned elephants, decorated warhorses, silver chariots (rath) carrying the revered Acharya Mahamandaleshwars, brass bugle orchestras, and thousands of ash-smeared Naga Sadhus wielding traditional tridents (trishuls), swords, and maces in synchronized martial displays. Residents and pilgrims line the balconies to shower marigold petals upon the ascetics.',
    shahiSnanSequence:
      'On royal bathing mornings, the sequence of dips is rigidly enforced by the Akhil Bharatiya Akhada Parishad and district magistrates. In Trimbakeshwar, the oldest and largest akhada—Shri Panchdashnam Juna Akhada—takes the inaugural dip at Kushavarta at precisely 3:00 AM, accompanied by the Kinnar Akhada and Avahan Akhada, followed by Niranjani, Mahanirvani, Atal, Anand, and Agni Akhadas. In Nashik, Shri Panch Digambar Ani Akhada, Nirmohi Ani, and Nirvani Ani march majestically towards Ramkund with their grand Dhwajas.',
    akhadasList: [
      {
        name: 'Shri Panchdashnam Juna Akhada',
        tradition: 'Shaiva (Sanyasi)',
        campLocation: 'Trimbakeshwar Sadhugram',
        bathingGhat: 'Kushavarta Kund (Trimbakeshwar)',
        historicalOrder: 1,
        distinctiveFeatures:
          'The largest and most ancient monastic order, founded by Adi Shankaracharya. Renowned for its vast battalion of Naga Sadhus and supreme asceticism.',
      },
      {
        name: 'Shri Panchayati Akhada Niranjani',
        tradition: 'Shaiva (Sanyasi)',
        campLocation: 'Trimbakeshwar Sadhugram',
        bathingGhat: 'Kushavarta Kund (Trimbakeshwar)',
        historicalOrder: 2,
        distinctiveFeatures:
          'Established in 904 CE in Mandapeshwar (Gujarat); deeply intellectual order of scholarly sanyasis and Mahamandaleshwars.',
      },
      {
        name: 'Shri Panchayati Akhada Mahanirvani',
        tradition: 'Shaiva (Sanyasi)',
        campLocation: 'Trimbakeshwar Sadhugram',
        bathingGhat: 'Kushavarta Kund (Trimbakeshwar)',
        historicalOrder: 3,
        distinctiveFeatures:
          'Custodians of Mahakaleshwar Jyotirlinga (Ujjain). Revered for strict ascetic disciplines and ornate silver rath processions.',
      },
      {
        name: 'Shri Panch Atal Akhada',
        tradition: 'Shaiva (Sanyasi)',
        campLocation: 'Trimbakeshwar Sadhugram',
        bathingGhat: 'Kushavarta Kund (Trimbakeshwar)',
        historicalOrder: 4,
        distinctiveFeatures:
          'One of the oldest documented Shaiva orders (circa 647 CE), known for steadfast austerity and devotional warrior heritage.',
      },
      {
        name: 'Shri Taponidhi Anand Akhada',
        tradition: 'Shaiva (Sanyasi)',
        campLocation: 'Trimbakeshwar Sadhugram',
        bathingGhat: 'Kushavarta Kund (Trimbakeshwar)',
        historicalOrder: 5,
        distinctiveFeatures:
          'Founded in 855 CE in Berar; associated with Surya devotion and internal yogic pranayama sadhana.',
      },
      {
        name: 'Shri Panchdashnam Avahan Akhada',
        tradition: 'Shaiva (Sanyasi)',
        campLocation: 'Trimbakeshwar Sadhugram',
        bathingGhat: 'Kushavarta Kund (Trimbakeshwar)',
        historicalOrder: 6,
        distinctiveFeatures:
          'Allied closely with Juna Akhada; sacred deity is Lord Ganesha (Siddhi Vinayaka) and Dattatreya.',
      },
      {
        name: 'Shri Panchdashnam Agni Akhada',
        tradition: 'Shaiva (Sanyasi)',
        campLocation: 'Trimbakeshwar Sadhugram',
        bathingGhat: 'Kushavarta Kund (Trimbakeshwar)',
        historicalOrder: 7,
        distinctiveFeatures:
          'Composed predominantly of Brahmachari sanyasis; reveres Lord Agni and the perpetual Vedic sacred flame (Dhuni).',
      },
      {
        name: 'Akhil Bharatiya Shri Panch Digambar Ani Akhada',
        tradition: 'Vaishnava (Bairagi)',
        campLocation: 'Tapovan Sadhugram (Nashik)',
        bathingGhat: 'Ramkund Ghats (Nashik)',
        historicalOrder: 8,
        distinctiveFeatures:
          'The largest Vaishnava Ani Akhada, comprising tens of thousands of Rama-bhakti sadhus and magnificent musical sankirtan groups.',
      },
      {
        name: 'Shri Panch Nirmohi Ani Akhada',
        tradition: 'Vaishnava (Bairagi)',
        campLocation: 'Tapovan Sadhugram (Nashik)',
        bathingGhat: 'Ramkund Ghats (Nashik)',
        historicalOrder: 9,
        distinctiveFeatures:
          'Historic guardians of Ayodhya Ramkot; renowned for rigorous physical wrestling gymnasiums (akharas) and Hanuman worship.',
      },
      {
        name: 'Shri Panch Nirvani Ani Akhada',
        tradition: 'Vaishnava (Bairagi)',
        campLocation: 'Tapovan Sadhugram (Nashik)',
        bathingGhat: 'Ramkund Ghats (Nashik)',
        historicalOrder: 10,
        distinctiveFeatures:
          'Spiritual warriors dedicated to Lord Hanuman; famous for their heroic standard-bearers carrying the 100-foot Hanuman Dhwaja.',
      },
      {
        name: 'Shri Panchayati Bada Udasin Akhada',
        tradition: 'Udasi',
        campLocation: 'Tapovan Sadhugram (Nashik)',
        bathingGhat: 'Ramkund Ghats (Nashik)',
        historicalOrder: 11,
        distinctiveFeatures:
          'Followers of Sri Chand (son of Guru Nanak Dev); blend Vedic Vedantic philosophy with deep yogic devotion and large-scale langars.',
      },
      {
        name: 'Shri Panchayati Naya Udasin Akhada',
        tradition: 'Udasi',
        campLocation: 'Tapovan Sadhugram (Nashik)',
        bathingGhat: 'Ramkund Ghats (Nashik)',
        historicalOrder: 12,
        distinctiveFeatures:
          'Founded in 1710 CE by Mahant Sudhir Das; active in philanthropic community food distribution and scriptural publication.',
      },
      {
        name: 'Shri Nirmal Panchayati Akhada',
        tradition: 'Nirmal',
        campLocation: 'Tapovan Sadhugram (Nashik)',
        bathingGhat: 'Ramkund Ghats (Nashik)',
        historicalOrder: 13,
        distinctiveFeatures:
          'Rooted in the teachings of Guru Gobind Singh and Sanskrit scriptures; monks clad in white robes dedicated to selfless service (sewa).',
      },
    ],
  },
  howToReach: {
    intro:
      'During Simhastha 2027, the transport infrastructure undergoes dramatic scaling with dedicated festival trains, satellite ring bus stations, and inner-city vehicular cordons.',
    transitOptions: [
      {
        title: 'Central Railway Special Kumbh Express Fleet',
        category: 'Rail',
        operator: 'Indian Railways (Central Railway - Bhusawal & Mumbai Divisions)',
        operationalHighlights: [
          '250+ Special Festival Trains connecting Mumbai CSMT, Pune, Bhusawal, Nagpur, Gorakhpur, Varanasi, Howrah, Delhi, and Surat.',
          'Upgradation of Nashik Road (NK) station with 6 additional platforms, 12 escalators, and 50,000-capacity holding bays.',
          'Activation of 3 satellite holding stations: Devlali (DVL), Odha (ODHA), and Kherwadi (KW) to segregate departing flows.',
          'Automated unreserved ticketing counters (UTS) and QR-code mobile ticketing kiosks installed across holding areas.',
        ],
        satelliteHubs: ['Nashik Road (NK)', 'Devlali (DVL)', 'Odha (ODHA)', 'Kherwadi (KW)'],
        bookingAdvisory:
          'Reserved train bookings open 120 days prior on IRCTC. Special trains are notified 30-45 days before the first Shahi Snan.',
        officialPortal: 'https://cr.indianrailways.gov.in',
      },
      {
        title: 'MSRTC Mega Bus Network & Satellite Bus Terminals',
        category: 'Bus',
        operator: 'Maharashtra State Road Transport Corporation (MSRTC)',
        operationalHighlights: [
          'Fleet of 4,000+ special festival buses running continuous point-to-point services from every district of Maharashtra.',
          'Establishment of 6 outer satellite temporary bus depots to halt intercity buses outside the city core.',
          'Free / subsidized Electric & CNG feeder shuttle buses operating 24/7 along dedicated inner ring road green corridors.',
          'Exclusive bus corridors from Nashik City Outer to Trimbakeshwar (28 km) carrying over 5,00,000 passengers daily.',
        ],
        satelliteHubs: [
          'Adgaon / Aurangabad Road Terminal',
          'Mumbai Naka Outer / Pathardi Terminal',
          'Sinnar Phata / Pune Road Terminal',
          'Dindori Naka Terminal',
          'Trimbak Road Ring Depot',
        ],
        bookingAdvisory:
          'Online seat reservation via the MSRTC portal / App opens 30 days before festival commencement.',
        officialPortal: 'https://msrtc.maharashtra.gov.in',
      },
      {
        title: 'Nashik Ozar Airport (ISK) Regional Flight Network',
        category: 'Air',
        operator: 'Airports Authority of India (AAI) / HAL Ozar',
        operationalHighlights: [
          'Direct scheduled and festival charter flights connecting Mumbai, New Delhi, Hyderabad, Bengaluru, Ahmedabad, and Indore.',
          'Airport located 20 km northeast of Nashik on NH-848 with dedicated airport shuttle coaches to city hubs.',
          'Prepaid taxi counters and dedicated security clearance lanes for VIPs and senior devotees.',
        ],
        satelliteHubs: ['Nashik Airport Terminal (Ozar)', 'Shirdi International Airport (SAG) - 85 km backup'],
        bookingAdvisory:
          'Book flights 60 to 90 days in advance; airfares surge sharply within 2 weeks of Shahi Snan dates.',
        officialPortal: 'https://aai.aero',
      },
      {
        title: 'Highway Corridors & Road Connectivity',
        category: 'Road',
        operator: 'MSRDC / NHAI',
        operationalHighlights: [
          'Samruddhi Mahamarg (Mumbai-Nagpur Super Expressway): Direct rapid connection with interchanges at Sinnar and Bharvir.',
          'NH-160 (Mumbai-Nashik Expressway): Upgraded 6-lane Kasara Ghat corridor with round-the-clock emergency recovery cranes.',
          'NH-60 (Pune-Nashik Highway): Upgraded corridor with high-frequency luxury bus services.',
          'NH-848 (Gujarat to Nashik via Saputara / Dharampur): Key route for northern pilgrims.',
        ],
        satelliteHubs: [
          'Outer Park-and-Ride Lot 1 (Adgaon - 15,000 cars)',
          'Outer Park-and-Ride Lot 2 (Vilholi - 20,000 cars)',
          'Outer Park-and-Ride Lot 3 (Sinnar Phata - 15,000 cars)',
        ],
        bookingAdvisory:
          'Private vehicles are strictly forbidden from entering the inner city 5-km radius around Ramkund and Trimbakeshwar.',
        officialPortal: 'https://maharashtratourism.gov.in',
      },
    ],
    privateVehiclePolicy:
      'IMPORTANT TRAFFIC MANDATE: On all three Shahi Snan days plus the preceding and succeeding 24 hours, the Nashik District Police enforces a strict "Zero Private Vehicle Zone" within a 5-kilometer radius of Godavari Ghats and Trimbakeshwar town. All private cars, SUVs, and private buses must park in designated satellite parking lots (Park-and-Ride) equipped with drinking water, toilets, and free battery-operated or CNG shuttle buses.',
  },
  whereToStay: {
    intro:
      'Accommodating over 3 crore pilgrims over several weeks requires a spectrum of lodging options ranging from free municipal tent cities to luxury vineyard resorts.',
    categories: [
      {
        category: 'Official Government Tent Cities (Sadhugram)',
        description:
          'Sprawling over 350+ acres in Tapovan (Nashik) and 150+ acres in Trimbakeshwar, these massive tent cities provide dormitory and family tents with basic amenities.',
        locationZones: ['Tapovan (Panchavati, Nashik)', 'Trimbakeshwar Outskirts Sadhugram'],
        priceRange: 'Free (General Dormitory) to ₹500 - ₹1,500/night (Deluxe Family Tents with cots)',
        amenities: [
          'Continuous filtered drinking water',
          'Modular bio-toilets & bathing cubicles',
          'Mobile charging stations',
          '24/7 Police outpost & medical dispensary',
          'Free communal langar food stalls',
        ],
        bookingWindow: 'Opens 60 days before festival via official Simhastha portal',
        officialWarning:
          'Beware of fraudulent third-party portals demanding advance payments. Only book through the verified government domain (nashik.gov.in).',
      },
      {
        category: 'Dharamsalas, Ashrams & Community Bhavans',
        description:
          'Over 120 registered charitable community guest houses run by trusts (Maheshwari, Jain, Gujarati, Marwari, Sindhi, and Akhada trusts).',
        locationZones: ['Panchavati', 'Old Nashik (Ravivar Karanja)', 'Trimbak Town (Devasthan Bhaktiniwas)'],
        priceRange: '₹300 - ₹1,200/night (donation-based / token maintenance fee)',
        amenities: ['Clean vegetarian meals (thali)', 'Hot water buckets', 'Traditional security locks', 'Quiet spiritual atmosphere'],
        bookingWindow: '3 to 6 months in advance through written application or direct trust office contact',
        officialWarning: 'Many dharamsalas reserve 50% capacity for walk-in elderly pilgrims with token queues.',
      },
      {
        category: 'Hotels, Budget Lodges & Serviced Apartments',
        description:
          'Over 400 commercial hotels ranging from economy rooms near CBS and Railway Station to business hotels on Mumbai-Agra Highway.',
        locationZones: ['Nashik Road', 'Mumbai Naka', 'Pathardi Phata', 'Gangapur Road'],
        priceRange: '₹2,500 - ₹8,000/night during regular weeks; ₹8,000 - ₹20,000/night during Shahi Snan weekends',
        amenities: ['Air conditioning', 'Wi-Fi', 'En-suite bathrooms', 'Restaurant / room service', 'Pre-arranged taxi tie-ups'],
        bookingWindow: '6 to 9 months in advance for Shahi Snan dates',
        officialWarning:
          'District Collectorate imposes dynamic price caps on hotel tariffs during Simhastha to prevent price gouging. Report excess billing to 1077.',
      },
      {
        category: 'MTDC Resorts & Vineyard Agrotourism Stays',
        description:
          'Premium eco-resorts including MTDC Grape Park Resort (Gangapur Dam), MTDC Trimbakeshwar, and surrounding vineyard retreats.',
        locationZones: ['Gangapur Dam backwaters', 'Govardhan Village', 'Sanveri / Dindori Wine Trail'],
        priceRange: '₹6,000 - ₹25,000/night',
        amenities: ['Lakeside cottages', 'Scenic vineyards', 'Multicuisine dining', 'Private concierge for temple visits'],
        bookingWindow: '6 to 12 months in advance via MTDC official portal',
        officialWarning: 'Expect 45-60 minute travel times to ghats on peak days due to outer perimeter vehicle diversions.',
      },
    ],
    antiFraudWarning:
      'CYBER FRAUD ADVISORY: During the 2015 Kumbh, numerous unverified social media handles and dummy websites accepted advance deposits for non-existent hotel bookings. Never transfer money via UPI to personal phone numbers for "VIP Kumbh Passes" or "Guaranteed Riverside Tents". All legitimate government bookings are processed solely on official .gov.in URLs.',
  },
  crowdAndSecurity: {
    securityArchitecture:
      'The security and crowd control apparatus for Simhastha 2027 is orchestrated by the Maharashtra State Police, State Reserve Police Force (SRPF), Rapid Action Force (RAF), CISF, and specialized water rescue battalions of the National Disaster Response Force (NDRF). Over 25,000 uniformed personnel, 5,000 trained volunteers, and 1,200 high-resolution AI-powered CCTV cameras with automatic density detection and facial recognition monitor every choke point.',
    pedestrianCirculationSystem:
      'To avert stampedes and bottleneck pressures, the municipal administration implements a strict "Circular One-Way Ring Corridor" around the Godavari: pilgrims enter through designated northern avenues, descend to Ramkund, complete their holy dip, and must exit via southern footbridges (such as Talkuteshwar and Holkar Bridges) that lead out toward Tapovan. Crossing backwards against the incoming tide of devotees is physically prevented by iron barricades and police cordons.',
    medicalInfrastructure:
      'A comprehensive 3-tier healthcare grid is established across Nashik and Trimbakeshwar: a 100-bed makeshift multi-specialty field hospital at Tapovan Sadhugram; 50-bed emergency trauma centers at Ramkund and Kushavarta; 50+ Mobile Medical Units (MMUs) patrolling ghat perimeters; and 100+ 108 Advanced Cardiac Life Support (ACLS) ambulances strategically positioned along emergency green corridors.',
    helplines: [
      {
        service: 'Unified Emergency Police Response',
        department: 'Maharashtra State Police',
        contactNumber: '112',
        operationalHours: '24 Hours / 7 Days (Multilingual)',
        locationCoverage: 'All Nashik City & Trimbakeshwar Rural',
      },
      {
        service: 'Kumbh Mela Central Disaster Control Room',
        department: 'Nashik District Collectorate',
        contactNumber: '0253-2578500',
        tollFree: '1077',
        operationalHours: '24 Hours / 7 Days (Hindi, Marathi, English)',
        locationCoverage: 'Unified Simhastha Festival Zone',
      },
      {
        service: 'Emergency Medical & Cardiac Ambulance',
        department: 'Maharashtra Emergency Medical Services (MEMS)',
        contactNumber: '108',
        operationalHours: '24 Hours / 7 Days',
        locationCoverage: 'All Ghats, Sadhugram & Highways',
      },
      {
        service: 'Fire Brigade & Hazard Rescue',
        department: 'Nashik Municipal Corporation Fire Dept',
        contactNumber: '101',
        operationalHours: '24 Hours / 7 Days',
        locationCoverage: 'All Nashik City, Tapovan & Trimbak',
      },
      {
        service: 'Trimbakeshwar Police Station & Control',
        department: 'Nashik Rural Police',
        contactNumber: '02594-222233',
        operationalHours: '24 Hours / 7 Days',
        locationCoverage: 'Trimbakeshwar Town & Kushavarta Kund',
      },
      {
        service: 'Lost & Found (Khoya-Paya) Child Rescue Booth',
        department: 'Simhastha Social Welfare Wing',
        contactNumber: '1098 / 0253-2578502',
        tollFree: '1098',
        operationalHours: '24 Hours / 7 Days',
        locationCoverage: '15 Dedicated Booths across Ramkund & Tapovan',
      },
      {
        service: 'Railway Helpline & GRP Control',
        department: 'Central Railway Police (GRP)',
        contactNumber: '139 / 1512',
        tollFree: '139',
        operationalHours: '24 Hours / 7 Days',
        locationCoverage: 'Nashik Road, Devlali, Odha Stations',
      },
    ],
  },
  trimbakeshwarProtocol: {
    jyotirlingaOverview:
      'Shri Trimbakeshwar Shiva Temple is the tenth of the 12 sacred Jyotirlingas of Lord Shiva. Unique among all Jyotirlingas, the lingam here features three faces (Trimurti) embodying Lord Brahma, Lord Vishnu, and Lord Rudra. It stands at the base of Brahmagiri Mountain, the birthplace of the holy River Godavari.',
    darshanRulesDuringKumbh: [
      'PAID VIP PASS SUSPENSION: On all three Shahi Snan dates and prominent festival weekends, the standard ₹200 paid VIP entry passes and special express queues are completely suspended to ensure equitable and rapid crowd clearance.',
      'CONTINUOUS MUKH DARSHAN: The temple operates 24 hours non-stop in "Mukh Darshan" mode (viewing from the Sabha Mandapam barricade). Entry into the inner sanctum (Garbhagriha) and physical touching (Sparsh Darshan) of the Jyotirlinga are strictly prohibited to maintain safety.',
      'QUEUE HOLDING BAYS: Devotees must pass through 12 covered holding bays equipped with industrial mist fans, drinking water nozzles, and CCTV monitors before reaching the temple threshold. Expect queue wait times of 4 to 8 hours on peak days.',
      'DRESS CODE: Strict traditional attire is required for temple entry. Men must wear dhotis or pyjamas with kurtas; women must wear sarees or traditional salwar kameez. Western casuals (shorts, ripped jeans, sleeveless tops) are strictly disallowed.',
      'ELECTRONICS BAN: Mobile phones, smart watches, power banks, and leather belts/wallets are strictly prohibited inside the temple premises. Deposit them in advance at electronic lockers outside.',
    ],
    kushavartaSnanTimings:
      'On Shahi Snan days, Kushavarta Kund is exclusively reserved for the 7 Shaiva Akhadas from 2:00 AM until 12:00 PM. Naga Sadhus, Mahants, and Sanyasis perform their elaborate rituals and royal dips during this window. Following the departure of the Akhadas, municipal engineers drain, sanitize, and refill the pool with fresh running spring water from Brahmagiri. The general public is permitted to enter for snan strictly from 1:00 PM onwards under tight queue monitoring.',
    brahmagiriParikramaRules:
      'The 10-kilometer circumambulation (Parikrama) around sacred Brahmagiri Mountain is a cherished vow for devotees during Simhastha. Due to rugged terrain, steep forest slopes, and wildlife safety (including leopards inhabiting the Sahyadri reserve), night parikrama is strictly prohibited. Pilgrims may embark only between 5:30 AM and 4:00 PM along designated, illuminated forest trails monitored by the Maharashtra Forest Department.',
  },
  familySafetyChecklist: {
    intro:
      'Navigating a gathering of over 3 crore devotees requires proactive preparation. Keep this verified safety checklist saved offline on your phone or print a physical copy before departing for Nashik.',
    checklist: [
      {
        id: 'safety-1',
        title: 'Waterproof Identification Tags for Elders & Children',
        category: 'Children & Elders',
        instructions: [
          'Affix a laminated ID card or silicone wristband around your child’s and senior relative’s neck or wrist before entering the ghat areas.',
          'Clearly write: Full Name, Guardian’s Name, 2 Alternate Working Mobile Numbers, Native City & State, and Blood Group.',
          'Do NOT rely solely on smartphone contacts; phone batteries frequently exhaust in dense crowds.',
        ],
        printableTip: 'Prepare 3 laminated ID cards per person: keep one around the neck, one in the pocket, and one in luggage.',
      },
      {
        id: 'safety-2',
        title: 'Pre-Designated Physical Rendezvous Points',
        category: 'Crowd & Transit',
        instructions: [
          'Before stepping onto the ghats or entering Sadhugram, establish an unmistakable fixed physical meeting point outside the inner rush zone (e.g., Kalika Mata Temple Main Arch or Golf Club Ground Gate 2).',
          'Instruct every family member: If separated and mobile networks fail, do not wander or panic. Walk directly to the agreed rendezvous landmark and wait there.',
        ],
        printableTip: 'Choose a meeting point at least 1.5 km away from the riverbank where crowds thin out.',
      },
      {
        id: 'safety-3',
        title: '15-Day Personal Medical & First-Aid Supply Kit',
        category: 'Health & Medication',
        instructions: [
          'Carry at least 15 days of essential chronic medications (blood pressure, diabetes, thyroid, heart medication, asthma inhalers) in original prescription bottles.',
          'Include 10 packets of Oral Rehydration Salts (ORS), antiseptic ointments, anti-diarrheal tablets, blister bandages, and water-purification tablets.',
          'Wear moisture-wicking cotton socks and well-broken-in walking sandals with sturdy rubber grips to prevent foot abrasions during long treks.',
        ],
        printableTip: 'Keep a photocopy of your medical prescription and doctor’s contact in your waist pouch.',
      },
      {
        id: 'safety-4',
        title: 'Cash Reserves & Waterproof Pouches',
        category: 'Cash & Connectivity',
        instructions: [
          'Carry sufficient physical cash in denominations of ₹100, ₹200, and ₹500 kept in sealed waterproof ziplock bags.',
          'Due to intense mobile tower congestion, digital UPI payments (Google Pay, PhonePe, Paytm) and local ATMs often fail or run out of cash on Shahi Snan days.',
          'Keep your phone in a transparent touch-compatible waterproof pouch around your neck to prevent water damage during river dips.',
        ],
        printableTip: 'Carry a heavy-duty 20,000 mAh power bank with you at all times.',
      },
      {
        id: 'safety-5',
        title: 'Lost & Found (Khoya-Paya) Station Protocol',
        category: 'Children & Elders',
        instructions: [
          'If a family member goes missing, immediately report to the nearest police constable or "Khoya-Paya" (Lost & Found) booth located at every ghat.',
          'The municipal control room will broadcast multilingual announcements in Hindi, Marathi, Gujarati, and English across 500+ synchronized PA speakers.',
          'Keep a clear, recent portrait photo of every traveling companion on your phone to show officials instantly.',
        ],
        printableTip: 'Take a fresh selfie of each family member every morning showing the clothes they are wearing that day.',
      },
      {
        id: 'safety-6',
        title: 'Monsoon & Weather Protection Gear',
        category: 'Crowd & Transit',
        instructions: [
          'The Simhastha Shahi Snans occur during the Bhadrapada monsoon season. Heavy Sahyadri downpours are common.',
          'Carry lightweight rain ponchos rather than bulky metal-spoke umbrellas (umbrellas are hazardous in packed crowds and frequently confiscated at security gates).',
          'Carry quick-dry microfiber towels and a spare set of dry clothes in sealed plastic bags within your daypack.',
        ],
        printableTip: 'Rain ponchos keep hands free to hold children and guide elderly relatives.',
      },
    ],
    emergencyProtocol:
      'IN CASE OF CROWD SURGE OR PANIC: Do not push against the crowd. Move diagonally towards the perimeter walls or open shop verandas. Keep your arms folded across your chest with elbows tucked in to preserve breathing space. If you drop an item, never bend down to pick it up in a moving crowd.',
  },
  comparisonMatrix: {
    intro:
      'Kumbh Mela is celebrated across four sacred Indian pilgrimage sites. Understanding the distinct geographical, mythological, and astrological attributes of Nashik-Trimbakeshwar relative to Prayagraj, Haridwar, and Ujjain reveals the unique character of the Simhastha.',
    parameters: [
      {
        parameter: 'Sacred River & Confluence',
        nashikTrimbak: 'River Godavari (Dakshin Ganga)',
        prayagraj: 'Triveni Sangam (Ganga, Yamuna, mythical Saraswati)',
        haridwar: 'River Ganga (at the foothills of Himalayas)',
        ujjain: 'River Shipra (Malwa plateau)',
      },
      {
        parameter: 'Astrological Trigger (Planetary Alignment)',
        nashikTrimbak: 'Jupiter (Guru) in Leo (Simha Rashi) & Sun in Leo or Cancer',
        prayagraj: 'Jupiter in Taurus/Aries & Sun and Moon in Capricorn (Makara)',
        haridwar: 'Jupiter in Aquarius (Kumbha) & Sun in Aries (Mesha)',
        ujjain: 'Jupiter in Leo (Simha) & Sun in Aries (Mesha)',
      },
      {
        parameter: 'Name of Kumbh Cycle',
        nashikTrimbak: 'Simhastha Kumbh Mela',
        prayagraj: 'Maha Kumbh / Purna Kumbh Mela',
        haridwar: 'Maha Kumbh Mela',
        ujjain: 'Simhastha Kumbh Mela',
      },
      {
        parameter: 'Dual Epicenter Structure',
        nashikTrimbak: 'Yes: Nashik (Ramkund) & Trimbakeshwar (Kushavarta) 28 km apart',
        prayagraj: 'No: Single massive riverbed camp at Sangam',
        haridwar: 'No: Linear ghats along Har Ki Pauri and Ganga canals',
        ujjain: 'No: Central ghats along River Shipra (Ram Ghat)',
      },
      {
        parameter: 'Akhada Allocation & Geography',
        nashikTrimbak: 'Strictly separated: Vaishnava in Nashik, Shaiva in Trimbak',
        prayagraj: 'Unified: All 13 Akhadas camp in neighboring Sangam sectors',
        haridwar: 'Unified: All Akhadas camp across Haridwar city banks',
        ujjain: 'Unified: All Akhadas camp along Shipra banks (Ujjain Sadhugram)',
      },
      {
        parameter: 'Primary Deity & Spiritual Focus',
        nashikTrimbak: 'Lord Shiva (Trimbakeshwar Jyotirlinga) & Lord Rama (Panchavati)',
        prayagraj: 'Triveni Sangam Madhav & Prayag Raj (Tirtharaj)',
        haridwar: 'Maa Ganga & Lord Shiva (Gangadwaranatha)',
        ujjain: 'Lord Mahakaleshwar Jyotirlinga & Kal Bhairav',
      },
      {
        parameter: 'Bathing Infrastructure & Layout',
        nashikTrimbak: 'Stone masonry kunds & stepped river ghats flanked by city',
        prayagraj: 'Immense temporary sandbank island city with pontoon bridges',
        haridwar: 'Stone ghat steps along swift Himalayan canal currents',
        ujjain: 'Broad stepped ghats on both banks of Shipra',
      },
      {
        parameter: 'Prevailing Weather & Season',
        nashikTrimbak: 'Monsoon / Post-Monsoon (August - October; lush Sahyadri green)',
        prayagraj: 'Mid-Winter (January - February; cold morning fog)',
        haridwar: 'Spring (March - April; temperate to warm)',
        ujjain: 'Summer / Chaitra-Vaishakha (April - May; hot dry climate)',
      },
    ],
  },
  faqs: [
    {
      question: 'When is the next Simhastha Kumbh Mela in Nashik-Trimbakeshwar?',
      answer:
        'The next Simhastha Kumbh Mela in Nashik and Trimbakeshwar will be held in 2027-2028 when the planet Jupiter (Guru) enters the zodiac sign of Leo (Simha Rashi). Major Shahi Snan (royal bathing days) take place during the sacred months of Shravan and Bhadrapada in mid-2027.',
    },
    {
      question: 'Why is it called "Simhastha" Kumbh Mela?',
      answer:
        'It is called "Simhastha" because it is astronomically dictated by Jupiter’s entry into "Simha" (the Sanskrit name for the astrological sign of Leo). The celestial confluence of Jupiter in Leo with the Sun consecrates the River Godavari once every 12 years.',
    },
    {
      question: 'What is the difference between Ramkund and Kushavarta Kund?',
      answer:
        'Ramkund is in Nashik city on River Godavari, where Vaishnava Bairagi Akhadas take their Shahi Snan, and where Lord Rama performed Pitru Shraddha. Kushavarta Kund is 28 km away in Trimbakeshwar at the source of Godavari, where Shaiva Sanyasi Akhadas conduct their royal holy dips.',
    },
    {
      question: 'Are there any entry fees or tickets to attend the Kumbh Mela?',
      answer:
        'No. Attending the Simhastha Kumbh Mela and bathing in River Godavari at public ghats is 100% free for all pilgrims. There are no mandatory entry fees or tickets. Anyone claiming to sell "river bathing passes" or "Kumbh entry tickets" is running an illegal scam.',
    },
    {
      question: 'What is a "Shahi Snan" and can the general public bathe during it?',
      answer:
        'Shahi Snan (Royal Bath) is the sacred dip taken by Akhada Mahants and Naga Sadhus in ceremonial procession. During the morning hours (typically 2:00 AM to 12:00 PM), Ramkund and Kushavarta are reserved exclusively for the Akhadas. The general public can bathe safely after 1:00 PM or at adjoining public ghats like Gandhi Ghat.',
    },
    {
      question: 'What are the three main Shahi Snan dates for 2027?',
      answer:
        'The three major royal bathing tithis are: (1) Pratham Shahi Snan on Shravan Shukla Purnima (Raksha Bandhan); (2) Dwitiya Shahi Snan / Rajyog Snan on Bhadrapada Krishna Amavasya (Somvati / Sarva Pitru Amavasya - the grandest peak); and (3) Tritiya Shahi Snan on Bhadrapada Shukla Dwadashi (Vamana Jayanti).',
    },
    {
      question: 'How do I reach Nashik for the Kumbh Mela by train?',
      answer:
        'Central Railway operates over 250 special Kumbh trains terminating at Nashik Road Station (NK). To ease congestion, three satellite holding stations—Devlali (DVL), Odha (ODHA), and Kherwadi (KW)—are activated with passenger amenities, ticketing booths, and direct bus shuttles to Sadhugram.',
    },
    {
      question: 'Can I drive my private car to Ramkund or Trimbakeshwar during Kumbh?',
      answer:
        'No. On all Shahi Snan days, the Nashik District Administration enforces a strict 5-km "Zero Private Vehicle Zone" around Ramkund and Trimbakeshwar. Private cars must be parked at outer satellite Park-and-Ride terminals (Adgaon, Vilholi, Sinnar Phata) and pilgrims must use official shuttle buses or walk.',
    },
    {
      question: 'Where can pilgrims stay during the Simhastha Kumbh?',
      answer:
        'Pilgrims can stay in the official 350-acre government tent cities (Sadhugram) in Tapovan and Trimbakeshwar, in traditional community dharamsalas in Panchavati, or in commercial hotels along Mumbai Naka and Pathardi Phata. Advanced booking 3 to 6 months prior is strongly advised.',
    },
    {
      question: 'Is VIP darshan available at Trimbakeshwar Temple during Shahi Snan?',
      answer:
        'No. Paid VIP passes (₹200) and special privilege queues at Shri Trimbakeshwar Shiva Temple are completely suspended on all major Shahi Snan dates. The temple operates in continuous 24-hour "Mukh Darshan" mode to allow equal and rapid flow for millions of queuing devotees.',
    },
    {
      question: 'What is the dress code for visiting temples and bathing in the Godavari?',
      answer:
        'Modest traditional Indian attire is mandatory. Men should wear dhotis, pyjamas, or kurtas; women should wear sarees or traditional salwar suits. Wet clothes should be changed immediately inside the covered municipal women’s changing enclosures located on every ghat.',
    },
    {
      question: 'How many Akhadas participate in the Nashik-Trimbakeshwar Kumbh?',
      answer:
        'All 13 traditional Akhadas recognized by the Akhil Bharatiya Akhada Parishad participate: 7 Shaiva Sanyasi Akhadas (Juna, Niranjani, Mahanirvani, Atal, Anand, Avahan, Agni) based in Trimbakeshwar, 3 Vaishnava Bairagi Ani Akhadas (Digambar, Nirmohi, Nirvani) based in Nashik, 2 Udasi Akhadas, and 1 Nirmal Akhada.',
    },
    {
      question: 'Why did Vaishnava and Shaiva Akhadas separate between Nashik and Trimbakeshwar?',
      answer:
        'Following a sectarian conflict over bathing rights in 1790 CE, Peshwa Bajirao II and British authorities formalized an 1813 CE accord allotting Trimbakeshwar to Shaiva Sanyasis and Nashik city to Vaishnava Bairagis, ensuring peaceful, harmonious celebrations that endure to this day.',
    },
    {
      question: 'What should I do if a family member gets lost in the crowd?',
      answer:
        'Immediately report to the nearest "Khoya-Paya" (Lost & Found) booth or call the unified police emergency helpline 112 / toll-free disaster line 1077. Multilingual public address announcements are broadcasted across the entire 500-speaker network spanning Ramkund and Sadhugram.',
    },
    {
      question: 'Are free meals (langar / bhandara) available for pilgrims?',
      answer:
        'Yes. Thousands of community bhandaras and langars operated by Akhadas, charitable trusts, and NGOs serve hot, wholesome vegetarian meals (khichdi, puri-bhaji, dal-rice) free of cost 24/7 across Sadhugram in Tapovan and Trimbakeshwar.',
    },
    {
      question: 'Can senior citizens and disabled pilgrims get wheelchair assistance?',
      answer:
        'Yes. Dedicated elderly assistance desks and wheelchair ramps are installed at Gandhi Smarak Ghat and outer satellite bus terminals. However, due to enormous crowd volumes on Shahi Snan dates, families are advised to bring senior citizens on non-Shahi Snan weekdays for a peaceful holy bath.',
    },
    {
      question: 'Is it safe to drink the tap water provided at Kumbh Mela grounds?',
      answer:
        'The Nashik Municipal Corporation supplies chlorinated, tested drinking water via thousands of public water taps and water ATM booths across the festival zones. For added precaution, carrying a refillable personal bottle with water purification tablets or ORS is recommended.',
    },
    {
      question: 'What emergency medical facilities exist if someone falls sick?',
      answer:
        'The state government operates a 100-bed makeshift multi-specialty field hospital at Tapovan Sadhugram, 50-bed emergency centers at Ramkund and Trimbakeshwar, 50+ Mobile Medical Units, and over 100 108-ambulance units on dedicated green corridors.',
    },
    {
      question: 'Can I take photographs or fly drones at Ramkund during Kumbh?',
      answer:
        'Handheld mobile photography for personal use is permitted on general ghats, but strictly forbidden inside sanctum sanctorum temple areas and women changing enclosures. Flying private drones without written clearance from the Nashik Police Commissionerate is strictly illegal under the Indian Penal Code.',
    },
    {
      question: 'What is the weather like during the Simhastha Kumbh in Nashik?',
      answer:
        'The primary Shahi Snan months (August - September) coincide with the monsoon in the Western Ghats. Expect moderate to heavy rain showers, cool pleasant temperatures (22°C to 28°C), high humidity, and lush green Sahyadri landscapes. Carrying a rain poncho is essential.',
    },
    {
      question: 'What is the Brahmagiri Mountain Parikrama and is it allowed at night?',
      answer:
        'The Brahmagiri Parikrama is a sacred 10-km circumambulation around the mountain where River Godavari originates. Night trekking is strictly banned during Kumbh for wildlife and terrain safety; pilgrims may only trek between 5:30 AM and 4:00 PM under forest ranger surveillance.',
    },
    {
      question: 'Are cloakrooms and lockers available to store mobile phones and bags?',
      answer:
        'Yes. Municipal cloakrooms (Joota Stand & Amanat Kaksha) are available at the outer entrances of Ramkund, Panchavati Karanja, and Trimbakeshwar Temple. Nominal token fees (₹10 - ₹20) apply. Do not leave expensive gold jewelry or massive cash in cloakrooms.',
    },
    {
      question: 'How do I travel between Nashik City and Trimbakeshwar during the festival?',
      answer:
        'MSRTC operates a continuous fleet of non-stop shuttle buses on a dedicated 28-km green transit corridor between Nashik Outer Bus Depots and Trimbakeshwar. Travel time is approximately 45-60 minutes depending on festival crowd density.',
    },
    {
      question: 'What are the top precautions against pickpocketing and theft?',
      answer:
        'Keep wallets and mobile phones in front pockets or zippered inner pouches. Never carry unnecessary gold ornaments onto bathing ghats. Beware of overcrowding near narrow staircases where pickpockets typically operate.',
    },
    {
      question: 'How does Trivio help pilgrims navigate the Simhastha Kumbh Mela?',
      answer:
        'The Trivio Android App offers offline interactive ghat maps, real-time crowd density alerts, official parking shuttle schedules, helpline speed-dials, and audio guides for Ramkund, Trimbakeshwar, and Panchavati without needing an internet connection.',
    },
  ],
};
