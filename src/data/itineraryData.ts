export interface ItineraryStop {
  timeSlot: 'Morning' | 'Midday' | 'Afternoon' | 'Sunset & Evening';
  placeName: string;
  marathiName: string;
  category: string;
  duration: string;
  distanceFromPrev: string;
  highlight: string;
  travelerNote: string;
}

export interface ItineraryDay {
  dayNumber: number;
  theme: string;
  stops: ItineraryStop[];
}

export interface ItineraryPlan {
  id: string;
  hubId: 'station' | 'airport' | 'bus';
  hubName: string;
  styleId: 'heritage' | 'wine' | 'adventure';
  styleName: string;
  durationDays: 1 | 2 | 3;
  days: ItineraryDay[];
}

export const TRANSIT_HUBS = [
  { id: 'station', name: 'Nashik Road Railway Station', code: 'NK', note: 'Main rail junction with Mumbai/Pune trains' },
  { id: 'airport', name: 'Nashik Ozar Airport', code: 'ISK', note: 'Regional flight terminal north of the city' },
  { id: 'bus', name: 'Central Bus Stand (CBS)', code: 'CBS', note: 'Central city hub near Old Nashik & Panchavati' },
] as const;

export const TRAVEL_STYLES = [
  { id: 'heritage', label: 'Sacred Heritage & Temples', description: 'Trimbakeshwar Jyotirlinga, Panchavati Ramkund & ancient Buddhist caves' },
  { id: 'wine', label: 'Wine Country & Lakeside', description: 'Sula Vineyards, York Winery, Gangapur Dam & lakeside sunsets' },
  { id: 'adventure', label: 'Sahyadri Treks & Cascades', description: 'Harihar rock-cut fortress steps, Anjaneri plateau & Someshwar falls' },
] as const;

export const SAMPLE_ITINERARIES: Record<string, ItineraryDay[]> = {
  'station-heritage-2': [
    {
      dayNumber: 1,
      theme: 'Panchavati Sacred Precinct & Jyotirlinga Road',
      stops: [
        {
          timeSlot: 'Morning',
          placeName: 'Shree Kalaram Mandir & Ramkund',
          marathiName: 'काळाराम मंदिर व रामकुंड',
          category: 'Sacred Heritage',
          duration: '2 hours',
          distanceFromPrev: '8 km from Nashik Road Station',
          highlight: '1788 CE black-stone temple surrounded by an 84-pillar cloister in the heart of Panchavati.',
          travelerNote: 'Visit before 9:00 AM to witness the quiet Godavari river aarti at Ramkund.',
        },
        {
          timeSlot: 'Midday',
          placeName: 'Pandavleni Buddhist Caves',
          marathiName: 'पांडवलेणी गुंफा',
          category: 'Rock-Cut Architecture',
          duration: '2.5 hours',
          distanceFromPrev: '9 km southwest along highway',
          highlight: '24 Hinayana Buddhist rock caves carved into Trirashmi Hill between 2nd century BCE and 2nd century CE.',
          travelerNote: '300 stone steps ascent; wear comfortable walking shoes and carry drinking water.',
        },
        {
          timeSlot: 'Sunset & Evening',
          placeName: 'Godavari Ghats Evening Walk',
          marathiName: 'गोदावरी घाट परिसर',
          category: 'Cultural Atmosphere',
          duration: '1.5 hours',
          distanceFromPrev: '7 km back to central ghats',
          highlight: 'Atmospheric evening bells, traditional brass lamp rituals, and authentic local street delicacies.',
          travelerNote: 'Try local roasted poha or warm jalebi from traditional sweet shops on Main Road.',
        },
      ],
    },
    {
      dayNumber: 2,
      theme: 'Brahmagiri Foothills & Holy Trimbakeshwar',
      stops: [
        {
          timeSlot: 'Morning',
          placeName: 'Trimbakeshwar Shiva Temple',
          marathiName: 'त्र्यंबकेश्वर ज्योतिर्लिंग',
          category: 'Sacred Jyotirlinga',
          duration: '3 hours',
          distanceFromPrev: '36 km west via Trimbak Road',
          highlight: 'One of the 12 sacred Jyotirlingas of India, nestled against the sheer cliffs of Brahmagiri Mountain.',
          travelerNote: 'Traditional dhoti/kurta attire is required for Gabhara inner-sanctum entry slots.',
        },
        {
          timeSlot: 'Afternoon',
          placeName: 'Kushavarta Kund & Brahmagiri Base',
          marathiName: 'कुशावर्त तीर्थकुंड',
          category: 'Sacred Water Cistern',
          duration: '1.5 hours',
          distanceFromPrev: '500 meters walking distance',
          highlight: 'Historic stone-banked reservoir regarded as the symbolic re-emergence of the sacred Godavari River.',
          travelerNote: 'Quiet circumambulation path surrounded by 18th-century Maratha stone pavilions.',
        },
        {
          timeSlot: 'Sunset & Evening',
          placeName: 'Anjaneri Foothills Sunset Viewpoint',
          marathiName: 'अंजनेरी परिसर',
          category: 'Mountain Vista',
          duration: '1.5 hours',
          distanceFromPrev: '10 km east towards Nashik',
          highlight: 'Serene sunset light glowing against the dramatic vertical rock towers of Anjaneri Hill.',
          travelerNote: 'Convenient roadside halt along Trimbak Highway with fresh tender coconut stalls.',
        },
      ],
    },
  ],
  'station-wine-2': [
    {
      dayNumber: 1,
      theme: 'Gangapur Valley & Estate Tasting',
      stops: [
        {
          timeSlot: 'Morning',
          placeName: 'Someshwar Waterfall & Temple',
          marathiName: 'सोमेश्वर धबधबा व महादेव मंदिर',
          category: 'Nature & Riverbank',
          duration: '1.5 hours',
          distanceFromPrev: '14 km from Nashik Road Station',
          highlight: 'Cascading Godavari waterfall bordered by ancient banyan trees and the historic Someshwar shrine.',
          travelerNote: 'Pleasant morning breeze along Gangapur Road; flow is strongest from August through November.',
        },
        {
          timeSlot: 'Afternoon',
          placeName: 'Sula Vineyards & Barrel Cellar',
          marathiName: 'सुला वाईनयार्ड्स',
          category: 'Wine Country',
          duration: '3.5 hours',
          distanceFromPrev: '6 km west into wine country',
          highlight: 'Guided walk through oak barrel aging cellars, grape harvest presentation, and structured tasting flight.',
          travelerNote: 'Harvest crushing occurs January through March; book wine-tasting masterclasses in advance on weekends.',
        },
        {
          timeSlot: 'Sunset & Evening',
          placeName: 'The Tasting Room Amphitheatre',
          marathiName: 'द टेस्टिंग रूम अँफिथिएटर',
          category: 'Vineyard Dining',
          duration: '2 hours',
          distanceFromPrev: 'Located inside Sula estate',
          highlight: 'Open-air balcony dinner with artisanal cheeses, wood-fired bread, and sunset vineyard panoramas.',
          travelerNote: 'Cool evening breeze over the vine rows; light jacket recommended during winter months.',
        },
      ],
    },
    {
      dayNumber: 2,
      theme: 'Boutique Wineries & Gangapur Backwaters',
      stops: [
        {
          timeSlot: 'Morning',
          placeName: 'Gangapur Dam Promenade',
          marathiName: 'गंगापूर धरण परिसर',
          category: 'Lakeside Scenic',
          duration: '2 hours',
          distanceFromPrev: '18 km from city center',
          highlight: 'Expansive water reservoir against the backdrop of the Western Ghats mountain silhouette.',
          travelerNote: 'Excellent birdwatching spot for migratory waterfowl during winter mornings.',
        },
        {
          timeSlot: 'Afternoon',
          placeName: 'York Winery & Tasting Room',
          marathiName: 'यॉर्क वाईनरी',
          category: 'Boutique Terroir',
          duration: '2.5 hours',
          distanceFromPrev: '2.5 km from Gangapur Dam',
          highlight: 'Handcrafted Shiraz and Chenin Blanc tastings on a quiet balcony overlooking the lake shoreline.',
          travelerNote: 'More intimate, relaxed atmosphere than larger commercial estates; excellent pairings with Indian spices.',
        },
        {
          timeSlot: 'Sunset & Evening',
          placeName: 'Soma Vine Village Sunset Deck',
          marathiName: 'सोमा व्हाईन व्हिलेज',
          category: 'Wine Retreat',
          duration: '2 hours',
          distanceFromPrev: '3 km south along backwaters',
          highlight: 'Infinity-edge viewing terrace capturing the evening golden hour reflecting on Gangapur lake.',
          travelerNote: 'Finish your Nashik trip with vineyard-pressed grape juice and wood-fired flatbreads.',
        },
      ],
    },
  ],
  'station-adventure-2': [
    {
      dayNumber: 1,
      theme: 'Harihar Vertical Rock Climb & Sahyadri Ridge',
      stops: [
        {
          timeSlot: 'Morning',
          placeName: 'Harihar Fort (Harishgad) Base to Summit',
          marathiName: 'हरीहर किल्ला (हर्षगड)',
          category: 'Alpine Cliff Trek',
          duration: '5 hours',
          distanceFromPrev: '42 km southwest from station via Harshewadi',
          highlight: 'World-famous 80-degree vertical staircase cut directly into the sheer basalt prism with carved hand-holds.',
          travelerNote: 'Start before 7:00 AM to complete the steep rock ascent before peak heat; wear high-traction lugged boots.',
        },
        {
          timeSlot: 'Afternoon',
          placeName: 'Harihar Summit Plateau & Water Tanks',
          marathiName: 'किल्ल्याचा माथा व पाण्याची टाकी',
          category: 'Historic Fortress',
          duration: '1.5 hours',
          distanceFromPrev: 'At summit peak',
          highlight: 'Ancient rock-carved water cisterns, Hanuman shrine, and 360-degree vista of Vaitarna lake basin.',
          travelerNote: 'Descent requires full concentration; face the mountain rock face when stepping down the notch steps.',
        },
        {
          timeSlot: 'Sunset & Evening',
          placeName: 'Trimbak Valley Traditional Dinner',
          marathiName: 'त्र्यंबक परिसर',
          category: 'Local Flavors',
          duration: '2 hours',
          distanceFromPrev: '16 km from base village',
          highlight: 'Hearty rural Maharashtrian pitla-bhakri (spiced chickpea curry with wood-fired millet bread) and thecha.',
          travelerNote: 'Warm, filling local dinner after a demanding mountain trek.',
        },
      ],
    },
    {
      dayNumber: 2,
      theme: 'Anjaneri Cradle & Godavari Cascades',
      stops: [
        {
          timeSlot: 'Morning',
          placeName: 'Anjaneri Hill Trail',
          marathiName: 'अंजनेरी पर्वत ट्रेक',
          category: 'Plateau Hike',
          duration: '3.5 hours',
          distanceFromPrev: '26 km west from station',
          highlight: 'Trail climbing through rare seasonal biodiversity, rock pinnacles, and a serene mountaintop lake.',
          travelerNote: 'Pack 2 liters of water per hiker; trail is well-defined with stone steps leading to the upper plateau.',
        },
        {
          timeSlot: 'Afternoon',
          placeName: 'Someshwar Falls & Gangapur Riverside',
          marathiName: 'सोमेश्वर धबधबा',
          category: 'Riverbank Rest',
          duration: '2 hours',
          distanceFromPrev: '15 km from Anjaneri',
          highlight: 'Relaxing cool water spray and shaded banyan grove on the Godavari banks after the mountain descent.',
          travelerNote: 'Rest your feet by the river rapids before boarding evening trains at Nashik Road Station.',
        },
      ],
    },
  ],
};
