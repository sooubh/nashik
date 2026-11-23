import { Category, CategoryMetadata } from '@/types/content';

export const CATEGORIES_DATA: Record<Category, CategoryMetadata> = {
  spiritual: {
    id: 'spiritual',
    title: {
      en: 'Spiritual & Heritage Temples',
      mr: 'धार्मिक व ऐतिहासिक मंदिरे',
      hi: 'धार्मिक और ऐतिहासिक मंदिर',
    },
    tagline: {
      en: 'Sacred Jyotirlinga, ancient Ramayana trails & centuries of devotion',
      mr: 'पवित्र ज्योतिर्लिंग, प्राचीन रामायण पदचिन्हे आणि भक्ती परंपरा',
      hi: 'पवित्र ज्योतिर्लिंग, प्राचीन रामायण पदचिह्न और भक्ति परंपरा',
    },
    description: {
      en: 'Explore Trimbakeshwar Jyotirlinga, the sacred banks of Godavari Ramkund, black-basalt Kalaram temple, and hill-crest shrines with verified darshan timings, dress codes, and trust procedures.',
      mr: 'त्र्यंबकेश्वर ज्योतिर्लिंग, गोदावरी रामकुंड, काळाराम मंदिर आणि डोंगराळ मंदिरांचे दर्शन वेळा, नियम आणि थेट माहिती जाणून घ्या.',
      hi: 'त्र्यंबकेश्वर ज्योतिर्लिंग, पवित्र गोदावरी रामकुंड, कालाराम मंदिर और सप्तश्रृंगी देवी के दर्शन समय, नियम और यात्रा गाइड।',
    },
    heroImage: '/images/destinations/trimbakeshwar-temple.webp',
    iconName: 'temple',
  },
  vineyards: {
    id: 'vineyards',
    title: {
      en: 'Wine Country & Vineyard Trails',
      mr: 'द्राक्ष मळे व वाईन टूर्स',
      hi: 'वाइनरी और वाइनयार्ड टूर',
    },
    tagline: {
      en: 'Rolling Sahyadri vineyards, barrel tasting rooms & lakefront estates',
      mr: 'सह्याद्रीच्या कुशीतील विस्तीर्ण मळे, बॅरल टेस्टिंग आणि लेक व्ह्यू रिसॉर्ट्स',
      hi: 'सह्याद्रि की गोद में फैले वाइनयार्ड, टेस्टिंग रूम और लेकसाइड रिसॉर्ट',
    },
    description: {
      en: 'Nashik produces over 80% of India’s premium wine. Tour pioneer cellars like Sula, boutique estates like York and Vallonné, and luxury stays with verified 2026 entry passes and tasting tariffs.',
      mr: 'भारताची वाईन राजधानी नाशिक! सुला, यॉर्क, सोमा आणि वल्लोने वाईनयार्ड्सच्या अधिकृत प्रवेश शुल्क, चव चाखणी पॅकेजेस आणि बुकिंग टिप्स.',
      hi: 'भारत की वाइन राजधानी नासिक! सुला, यॉर्क और सोमा वाइनयार्ड के टिकट शुल्क, वाइन टेस्टिंग समय और संपूर्ण यात्रा गाइड।',
    },
    heroImage: '/images/destinations/sula-vineyards.webp',
    iconName: 'wine',
  },
  treks: {
    id: 'treks',
    title: {
      en: 'Sahyadri Forts & Mountain Treks',
      mr: 'सह्याद्री गडकिल्ले व ट्रेक्स',
      hi: 'सह्याद्रि किले और ट्रेक',
    },
    tagline: {
      en: 'Vertical rock-cut stairways, misty ridges & Maratha bastion history',
      mr: '८० अंशांच्या कातळात कोरलेल्या पायऱ्या, धुक्यातील सुळके आणि शिवकालीन इतिहास',
      hi: '८० डिग्री की चट्टानी सीढ़ियां, धुंध भरी चोटियां और मराठा इतिहास',
    },
    description: {
      en: 'Ascend Harihar Fort’s thrilling 80-degree stone staircase, conquer Anjaneri Hill (birthplace of Lord Hanuman), and scale Salher (Maharashtra’s highest fort) with accurate trail ratings, base village guides, and monsoon safety alerts.',
      mr: 'हरीहरचा ८० अंश कातळकडा, हनुमानाचे जन्मस्थान अंजनेरी आणि महाराष्ट्रातील सर्वोच्च साल्हेर किल्ला - बेस व्हिलेज आणि ट्रेक मार्गदर्शक.',
      hi: 'हरिहर का मशहूर ८० डिग्री रॉक-कट ट्रेक, अंजनेरी और साल्हेर किला ट्रेक के रास्ते, सुरक्षा सुझाव और बेस विलेज जानकारी।',
    },
    heroImage: '/images/destinations/harihar-fort.webp',
    iconName: 'mountain',
  },
  waterfalls: {
    id: 'waterfalls',
    title: {
      en: 'Waterfalls & Monsoon Escapes',
      mr: 'धबधबे व निसर्ग पर्यटन',
      hi: 'झरने और मानसून प्रकृति',
    },
    tagline: {
      en: 'Cascading Sahyadri torrents, emerald valleys & serene backwaters',
      mr: 'फेसाळणारे जलप्रपात, हिरवेगार निसर्गसौंदर्य आणि शांत जलाशय',
      hi: 'मनमोहक झरने, हरी-भरी वादियां और शांत झीलें',
    },
    description: {
      en: 'Experience Dugarwadi’s deep forest gorge, Someshwar Dudhsagar’s city-edge picnic cascade, and Bhandardara’s roaring Randha Falls with verified monsoon flow advisory and family safety tips.',
      mr: 'डुगरवाडी, सोमेश्वर दूधसागर आणि भंडारदरा रंधा धबधब्यांचे पाणी वाहण्याचा हंगाम, रस्ते आणि कौटुंबिक सुरक्षितता मार्गदर्शक.',
      hi: 'डुगरवाडी, सोमेश्वर दूधसागर और विहीगांव झरने की सटीक जानकारी, मानसून सुरक्षा निर्देश और रास्ते।',
    },
    heroImage: '/images/destinations/someshwar-waterfall.webp',
    iconName: 'droplet',
  },
  food: {
    id: 'food',
    title: {
      en: 'Culinary Walks & Misal Pav Trail',
      mr: 'खाद्यसंस्कृती व नाशिकची प्रसिद्ध मिसळ',
      hi: 'खानपान और नासिक की प्रसिद्ध मिसल पाव',
    },
    tagline: {
      en: 'Smoky chulha gravies, spicy Kala Rassa & legendary century-old sweets',
      mr: 'चुलीवरची झणझणीत मिसळ, काळा मसाला तर्री आणि प्रसिद्ध मिठाई',
      hi: 'चूल्हे पर बनी तीखी मिसल, काला मसाला रस्सा और स्वादिष्ट मिठाई',
    },
    description: {
      en: 'Embark on the definitive Nashik Misal trail: compare wood-fired Sadhana, industrial legend Shamsundar, and Panchavati’s black-gravy Ambika, alongside Kondaji Chivda and Budha Halwai jalebi.',
      mr: 'साधना चुलीवरची, MIDC मधील शामसुंदर आणि पंचवटीची अंबिका मिसळ - अस्सल नाशिककरांची चव आणि ठिकाणे.',
      hi: 'साधना, श्यामसुंदर और अंबिका की मशहूर मिसल पाव, कोंडाजी चिवड़ा और नासिक की प्रसिद्ध स्ट्रीट फूड गाइड।',
    },
    heroImage: '/images/destinations/nashik-misal-food.webp',
    iconName: 'utensils',
  },
  itineraries: {
    id: 'itineraries',
    title: {
      en: 'Curated Road Trips & Itineraries',
      mr: 'नियोजित टूर आणि सहली',
      hi: 'सप्ताहांत यात्रा और टूर प्लान',
    },
    tagline: {
      en: 'Optimized hour-by-hour day plans from Mumbai, Pune & Thane',
      mr: 'मुंबई व पुण्याहून १ ते ३ दिवसांच्या परिपूर्ण कौटुंबिक व मित्रांच्या सहली',
      hi: 'मुंबई और पुणे से १ से ३ दिनों के सुनियोजित यात्रा प्लान',
    },
    description: {
      en: 'Detailed 1-day express circuits, 2-day Samruddhi Expressway weekend plans, and 3-day deep-dive temple and wine itineraries with realistic drive durations and zero backtracking.',
      mr: 'समृद्धी महामार्गावरून २ दिवसांची नाशिक ट्रिप, वाईन आणि मंदिर दर्शन एकाच फेरीत करण्याचे संपूर्ण नियोजन.',
      hi: 'समृद्धि एक्सप्रेसवे से नासिक २ दिन का वीकेंड प्लान, वाइनरी और ज्योतिर्लिंग दर्शन का संतुलित शेड्यूल।',
    },
    heroImage: '/images/destinations/sahyadri-sunrise.webp',
    iconName: 'map',
  },
  logistics: {
    id: 'logistics',
    title: {
      en: 'Practical Logistics, Transit & Budgets',
      mr: 'प्रवास वाहतूक, बजेट व सुविधा',
      hi: 'यात्रा साधन, बजट और परिवहन',
    },
    tagline: {
      en: 'Samruddhi expressway interchanges, Vande Bharat & local bus navigation',
      mr: 'समृद्धी महामार्ग, वंदे भारत एक्सप्रेस आणि सिटीलिंक बसचे मार्ग',
      hi: 'समृद्धि हाईवे टोल, वंदे भारत ट्रेन और नासिक लोकल बस गाइड',
    },
    description: {
      en: 'Master transit to and inside Nashik: Mumbai-Nashik Samruddhi Expressway interchanges (Amane), CSMT Vande Bharat train fares, Citilinc city buses, and FASTag toll breakdowns.',
      mr: 'नाशिक रोड रेल्वे स्थानक, सिटीलिंक बस मार्ग, रिक्षाचे दर आणि समृद्धी महामार्गाचे टोल तपशील.',
      hi: 'नासिक कैसे पहुंचे: वंदे भारत ट्रेन, लोकल बस रूट्स, टैक्सी और बजट होटल की सटीक जानकारी।',
    },
    heroImage: '/images/destinations/gangapur-lake-sunset.webp',
    iconName: 'bus',
  },
  festivals: {
    id: 'festivals',
    title: {
      en: 'Cultural Chronicles & Festivals',
      mr: 'संस्कृती, सण व महाकुंभमेळा',
      hi: 'संस्कृति, पर्व और महाकुंभ',
    },
    tagline: {
      en: 'The sacred 12-year Simhastha Kumbh Mela, Godavari Aarti & harvest fests',
      mr: '१२ वर्षांचा सिंहस्थ कुंभमेळा, सायंकालीन गोदावरी महाआरती आणि द्राक्ष महोत्सव',
      hi: '१२ वर्षों का सिंहस्थ कुंभ मेला, गोदावरी महाआरती और नासिक उत्सव',
    },
    description: {
      en: 'Immerse in Nashik’s rich socio-cultural fabric: Ramkund evening Godavari Aarti, the monumental Simhastha Kumbh Mela traditions, and seasonal agricultural harvest celebrations.',
      mr: 'रामकुंडावर होणारी नयनरम्य गोदावरी महाआरती, सिंहस्थ कुंभमेळ्याचा इतिहास आणि नाशिकचा सांस्कृतिक वारसा.',
      hi: 'रामकुंड की गोदावरी महाआरती, सिंहस्थ कुंभमेले का इतिहास और नासिक की आध्यात्मिक परंपराएं।',
    },
    heroImage: '/images/destinations/ramkund-godavari-aarti.webp',
    iconName: 'sparkles',
  },
};

export const ALL_CATEGORIES: Category[] = [
  'spiritual',
  'vineyards',
  'treks',
  'waterfalls',
  'food',
  'itineraries',
  'logistics',
  'festivals',
];
