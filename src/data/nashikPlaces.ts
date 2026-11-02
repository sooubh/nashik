export interface NashikPlace {
  id: string;
  name: string;
  marathiName: string;
  category: 'vineyard' | 'heritage' | 'trek' | 'nature';
  categoryLabel: string;
  distanceFromStation: string;
  locationArea: string;
  bestTime: string;
  highlight: string;
  practicalTip: string;
  image: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  googleMapsUrl: string;
  tags: string[];
}

export const NASHIK_REAL_PLACES: NashikPlace[] = [
  {
    id: 'trimbakeshwar',
    name: 'Trimbakeshwar Shiva Temple',
    marathiName: 'त्र्यंबकेश्वर ज्योतिर्लिंग',
    category: 'heritage',
    categoryLabel: 'Heritage & Temple',
    distanceFromStation: '36 km west',
    locationArea: 'Foothills of Brahmagiri, Trimbak',
    bestTime: 'Early morning (6:00 AM – 9:00 AM)',
    highlight: 'One of the 12 sacred Jyotirlingas in India, featuring a unique three-faced lingam representing Brahma, Vishnu, and Shiva, and source of the holy Godavari river.',
    practicalTip: 'Expect weekend queues; traditional dhoti/kurta attire is required for inner sanctum (Gabhara) entry during specific puja slots.',
    image: '/images/destinations/trimbakeshwar-temple.jpg',
    coordinates: {
      latitude: 19.9324,
      longitude: 73.5309,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Trimbakeshwar+Shiva+Temple+Nashik',
    tags: ['Jyotirlinga', 'Black Basalt Architecture', 'Kushavarta Kund', 'Brahmagiri Base'],
  },
  {
    id: 'sula-vineyards',
    name: 'Sula Vineyards & Estate',
    marathiName: 'सुला वाईनयार्ड्स',
    category: 'vineyard',
    categoryLabel: 'Wine Country',
    distanceFromStation: '21 km northwest',
    locationArea: 'Gangapur Dam Basin, Govardhan',
    bestTime: 'Afternoon to sunset (2:00 PM – 7:30 PM)',
    highlight: 'Pioneer of India’s wine revolution spanning lush rolling vine estates, offering guided barrel-cellar tours, wine-tasting classes, and sunset deck dining overlooking Gangapur lake.',
    practicalTip: 'Grape harvest and stomping season runs from late January through March; advance weekend booking for tastings is recommended.',
    image: '/images/destinations/sula-vineyards.jpg',
    coordinates: {
      latitude: 19.9805,
      longitude: 73.6811,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Sula+Vineyards+Nashik',
    tags: ['Wine Tasting', 'Barrel Cellar', 'Harvest Season', 'Lake Sunset View'],
  },
  {
    id: 'harihar-fort',
    name: 'Harihar Fort (Harishgad)',
    marathiName: 'हरीहर किल्ला (हर्षगड)',
    category: 'trek',
    categoryLabel: 'Fort & Trek',
    distanceFromStation: '42 km southwest',
    locationArea: 'Harshewadi / Nirgudpada Base',
    bestTime: 'Winter & post-monsoon sunrise (6:30 AM start)',
    highlight: 'Sahyadri cliff fortress world-renowned for its nearly 80-degree vertical rock-cut stairway carved with distinct hand and foot grips directly into the mountain prism.',
    practicalTip: 'Wear high-traction hiking boots; avoid monsoon ascents during torrential squalls when the water cascading down the rock steps makes them slick.',
    image: '/images/destinations/harihar-fort.jpg',
    coordinates: {
      latitude: 19.9042,
      longitude: 73.4728,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Harihar+Fort+Nashik',
    tags: ['80° Rock Steps', 'Sahyadri Ridge', 'Panoramic Summit', 'Historic Bastion'],
  },
  {
    id: 'pandavleni-caves',
    name: 'Pandavleni Buddhist Caves',
    marathiName: 'पांडवलेणी गुंफा',
    category: 'heritage',
    categoryLabel: 'Heritage & Temple',
    distanceFromStation: '9 km west',
    locationArea: 'Trirashmi Hill, Mumbai-Agra Highway',
    bestTime: 'Morning or late afternoon',
    highlight: 'A cluster of 24 rock-cut Hinayana Buddhist caves dating from the 2nd century BCE to 2nd century CE, housing ancient stupas, water cisterns, and intricate Brahmi inscriptions.',
    practicalTip: 'Requires climbing approximately 300 well-maintained stone steps; morning visits provide cool breezes and sweeping panoramic views over Nashik city.',
    image: '/images/destinations/sahyadri-sunrise.jpg',
    coordinates: {
      latitude: 19.9616,
      longitude: 73.7483,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Pandavleni+Caves+Nashik',
    tags: ['2nd Century BCE', 'Rock-cut Architecture', 'Trirashmi Hill', 'Valley Viewpoint'],
  },
  {
    id: 'york-winery',
    name: 'York Winery & Tasting Room',
    marathiName: 'यॉर्क वाईनरी',
    category: 'vineyard',
    categoryLabel: 'Wine Country',
    distanceFromStation: '22 km northwest',
    locationArea: 'Gangapur Dam Backwaters',
    bestTime: 'Late afternoon (4:00 PM – 7:00 PM)',
    highlight: 'Boutique vineyard known for artisanal Reserve Shiraz and Chenin Blanc, set right on the serene water edge of Gangapur lake with stunning sunset balcony views.',
    practicalTip: 'A quieter, more intimate alternative to larger commercial estates, located just 2 km past Sula along the same lakefront route.',
    image: '/images/destinations/gangapur-lake-sunset.jpg',
    coordinates: {
      latitude: 19.9912,
      longitude: 73.6708,
    },
    googleMapsUrl: 'https://maps.google.com/?q=York+Winery+Nashik',
    tags: ['Boutique Tasting', 'Lakeside Balcony', 'Artisanal Blends', 'Sunset Terrace'],
  },
  {
    id: 'kalaram-temple',
    name: 'Shree Kalaram Mandir & Panchavati',
    marathiName: 'काळाराम मंदिर, पंचवटी',
    category: 'heritage',
    categoryLabel: 'Heritage & Temple',
    distanceFromStation: '8 km northwest',
    locationArea: 'Panchavati Old Precinct',
    bestTime: 'Morning aarti or evening twilight',
    highlight: 'Majestic 1788 CE black-stone temple dedicated to Lord Rama, surrounded by an 84-pillar cloister and rich with historical significance from the Ramayana epic.',
    practicalTip: 'Pair with a short walk to Ramkund ghats and Sita Gufa (ancient cave dwelling) located within 400 meters.',
    image: '/images/destinations/trimbakeshwar-temple.jpg',
    coordinates: {
      latitude: 20.0076,
      longitude: 73.7944,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Kalaram+Temple+Panchavati+Nashik',
    tags: ['Panchavati', '1788 CE Black Basalt', 'Ramkund Proximity', 'Sacred Heritage'],
  },
  {
    id: 'anjaneri-hills',
    name: 'Anjaneri Mountain & Reserve',
    marathiName: 'अंजनेरी टेकडी व अभयारण्य',
    category: 'trek',
    categoryLabel: 'Fort & Trek',
    distanceFromStation: '26 km west',
    locationArea: 'Near Trimbakeshwar Highway',
    bestTime: 'Morning (7:00 AM – 11:00 AM)',
    highlight: 'Revered mountain plateau traditionally identified as the birthplace of Lord Hanuman, surrounded by lush seasonal grasslands, rock pinnacles, and a serene mountaintop lake.',
    practicalTip: 'Moderately challenging 2 to 3 hour trail with stone steps and plateau sections; carry personal water as hilltop amenities are minimal.',
    image: '/images/destinations/sahyadri-sunrise.jpg',
    coordinates: {
      latitude: 19.9192,
      longitude: 73.5786,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Anjaneri+Hills+Nashik',
    tags: ['Mythological Landmark', 'Plateau Trek', 'Ceropegia Flora', 'Panoramic Plateau'],
  },
  {
    id: 'someshwar-waterfall',
    name: 'Someshwar Waterfall (Dudhsagar Falls)',
    marathiName: 'सोमेश्वर धबधबा (दूधसागर)',
    category: 'nature',
    categoryLabel: 'Nature & Waterfall',
    distanceFromStation: '14 km northwest',
    locationArea: 'Gangapur Road, Godavari Riverbank',
    bestTime: 'Monsoon & post-monsoon (August – November)',
    highlight: 'Gentle 10-meter cascading white falls on the upper course of the Godavari River, adjacent to the historic Someshwar Mahadev temple and children’s park.',
    practicalTip: 'Flow is most dramatic right after seasonal monsoon rains; great midday stop on the way to the Gangapur vineyards.',
    image: '/images/destinations/someshwar-waterfall.jpg',
    coordinates: {
      latitude: 20.0248,
      longitude: 73.7402,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Someshwar+Waterfall+Nashik',
    tags: ['Godavari River', 'Seasonal Cascade', 'Temple Setting', 'Family Friendly'],
  },
];
