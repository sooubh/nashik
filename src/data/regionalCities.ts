import { LocalizedString } from '@/types/content';

export interface RegionalCity {
  id: string;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  heroImage: string;
  placeSlugs: string[];
}

export const REGIONAL_CITIES: Record<string, RegionalCity> = {
  nashik: {
    id: 'nashik',
    title: {
      en: 'Nashik Central & Godavari Precinct',
      mr: 'नाशिक शहर व गोदावरी परिसर',
      hi: 'नासिक शहर एवं गोदावरी परिक्षेत्र',
    },
    tagline: {
      en: 'Historic Sacred Heart',
      mr: 'ऐतिहासिक व धार्मिक केंद्र',
      hi: 'ऐतिहासिक एवं धार्मिक केंद्र',
    },
    description: {
      en: 'Explore ancient Panchavati, holy Ramkund ghats, 1788 CE Kalaram Mandir, 2nd-century BCE Pandavleni Caves, and authentic Maharashtrian misal joints.',
      mr: 'पंचवटी, पवित्र रामकुंड, १७८८ चे काळाराम मंदिर, पांडवलेणी आणि नाशिकची प्रसिद्ध मिसळ ठिकाणे.',
      hi: 'प्राचीन पंचवटी, पवित्र रामकुंड, १७८८ का काळाराम मंदिर, दूसरी सदी ईसा पूर्व की पांडवलेणी गुफाएं और प्रसिद्ध नासिक मिसल केंद्र.',
    },
    heroImage: '/images/destinations/sahyadri-sunrise.jpg',
    placeSlugs: [
      'panchavati-kalaram',
      'pandavleni-caves',
      'someshwar-waterfall',
      'kapaleshwar-temple',
      'muktidham-temple',
      'sadhana-misal',
      'shamsundar-misal',
      'ambika-misal',
    ],
  },
  trimbakeshwar: {
    id: 'trimbakeshwar',
    title: {
      en: 'Trimbakeshwar & Brahmagiri Circuit',
      mr: 'त्र्यंबकेश्वर व ब्रह्मगिरी परिसर',
      hi: 'त्र्यंबकेश्वर एवं ब्रह्मगिरी परिक्षेत्र',
    },
    tagline: {
      en: 'Jyotirlinga & Sacred Mountain',
      mr: 'ज्योतिर्लिंग व पवित्र पर्वत',
      hi: 'ज्योतिर्लिंग एवं पवित्र पर्वत',
    },
    description: {
      en: 'Revered 12th Jyotirlinga shrine of Lord Shiva, sacred Brahmagiri hill (origin of river Godavari), Anjaneri mountain (birthplace of Lord Hanuman), and cascading Dugarwadi falls.',
      mr: '१२ वे पवित्र ज्योतिर्लिंग मंदिर, गोदावरी उगमस्थान ब्रह्मगिरी, हनुमान जन्मस्थान अंजनेरी टेकडी आणि निसर्गरम्य दुगारवाडी धबधबा.',
      hi: '१२वां पवित्र ज्योतिर्लिंग मंदिर, गोदावरी उद्गम स्थल ब्रह्मगिरी, हनुमान जन्मस्थल अंजनेरी पहाड़ी और मनोरम दुगारवाडी जलप्रपात.',
    },
    heroImage: '/images/destinations/trimbakeshwar-temple.jpg',
    placeSlugs: [
      'trimbakeshwar',
      'brahmagiri-hill',
      'anjaneri-hills',
      'dugarwadi-waterfall',
    ],
  },
  igatpuri: {
    id: 'igatpuri',
    title: {
      en: 'Igatpuri & Kasara Ghat Highlands',
      mr: 'इगतपुरी व सह्याद्री घाटमाथा',
      hi: 'इगतपुरी एवं कसारा घाट क्षेत्र',
    },
    tagline: {
      en: 'Misty Sahyadri Peaks & Waterfalls',
      mr: 'धुक्याची शिखरे व धबधबे',
      hi: 'धुंधले पर्वत एवं जलप्रपात',
    },
    description: {
      en: 'Sahyadri adventure and trekking paradise featuring the thrilling 80-degree vertical steps of Harihar Fort, Vihigaon Ashoka waterfall rappelling, and Arthur Lake at Bhandardara.',
      mr: 'साहसी पर्यटकांचे नंदनवन: हरीहर किल्ल्याच्या ८० अंशांच्या खडक पायऱ्या, विहिगाव अशोक धबधबा आणि भंडारदरा जलाशय.',
      hi: 'साहसिक पर्यटकों का स्वर्ग: हरीहर किले की ८० अंश खड़ी चट्टान सीढ़ियां, विहिगांव जलप्रपात और भंडारदरा झील.',
    },
    heroImage: '/images/destinations/harihar-fort.jpg',
    placeSlugs: [
      'harihar-fort',
      'vihigaon-waterfall',
      'bhandardara-falls',
    ],
  },
  dindori: {
    id: 'dindori',
    title: {
      en: 'Dindori & Gangapur Wine Country',
      mr: 'दिंडोरी व गंगापूर वाईन व्हॅली',
      hi: 'दिंडोरी एवं गंगापुर वाइन वैली',
    },
    tagline: {
      en: 'Rolling Vineyards & Lake Sunsets',
      mr: 'द्राक्ष मळे व निसर्गरम्य परिसर',
      hi: 'अंगूर के बाग एवं झील सूर्यास्त',
    },
    description: {
      en: 'Premier wine tourism region spanning Sula Vineyards, York Winery, Soma Vine Village, Chandon sparkling wine cellar, and the holy cliff of Saptashrungi Devi.',
      mr: 'सुला वाईनयार्ड्स, यॉर्क, सोमा, शँडॉन वाईनरी आणि वणी येथील पवित्र सप्तशृंगी देवी गड परिसर.',
      hi: 'सुला वाइनयार्ड्स, यॉर्क, सोमा, शैंडॉन वाइनरी और वणी का पवित्र सप्तशृंगी देवी शक्तिपीठ.',
    },
    heroImage: '/images/destinations/sula-vineyards.jpg',
    placeSlugs: [
      'sula-vineyards',
      'york-winery',
      'soma-vine-village',
      'chandon-india',
      'vallonne-vineyards',
      'saptashrungi-devi',
      'salher-fort',
      'ramshej-fort',
    ],
  },
};

export const ALL_REGIONAL_CITIES = Object.keys(REGIONAL_CITIES);
