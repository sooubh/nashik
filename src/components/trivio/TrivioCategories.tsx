import React from 'react';

const CATEGORIES = [
  {
    tag: 'Spiritual Heritage',
    title: 'Sacred Temples & Jyotirlinga',
    desc: 'Home to Trimbakeshwar (one of the 12 sacred Jyotirlingas), the historic Kalaram Temple in Panchavati, and the holy resurgence of River Godavari at Kushavarta Kund.',
    places: ['Trimbakeshwar Shiva Temple', 'Kalaram Mandir', 'Kapaleshwar', 'Kushavarta Kund'],
  },
  {
    tag: 'Wine Country',
    title: 'Wineries & Grape Terroir',
    desc: 'Known as the Wine Capital of India, Nashik produces over 80% of Indian wine. Tour sunlit tasting rooms, barrel aging cellars, and vineyard villas against tranquil lake backdrops.',
    places: ['Sula Vineyards', 'York Winery', 'Soma Vine Village', 'Vallonné Vineyards'],
  },
  {
    tag: 'Sahyadri Peaks',
    title: 'Legendary Hill Forts & Treks',
    desc: 'Ascend breathtaking 80-degree rock-cut stairs, ancient stone ramparts, and high plateaus carved during the Maratha and Yadava eras. Experience unmatched panoramic valley views.',
    places: ['Harihar Fort', 'Anjaneri Peak', 'Brahmagiri', 'Ramshej Fort'],
  },
  {
    tag: 'Seasonal Wilderness',
    title: 'Monsoon Waterfalls & Lakes',
    desc: 'During the monsoon (June–September), the Sahyadri mountains roar to life with hundreds of cascading waterfalls, misty gorges, and serene lakeside camping spots.',
    places: ['Someshwar Waterfall', 'Dugarwadi Falls', 'Vaitarna Dam Backwaters', 'Gangapur Lake'],
  },
  {
    tag: 'Local Gastronomy',
    title: 'Culinary Heritage & Misal Trails',
    desc: 'Taste the fiery, authentic flavors of world-famous Nashik Misal, charcoal-cooked Maharashtrian bhakri, freshly crushed sugarcane juice, and gourmet vineyard bistro fare.',
    places: ['Sadhana Chulivarchi Misal', 'Shamsundar Misal', 'Sayantara Vada', 'Grape County Bistro'],
  },
  {
    tag: 'Ancient Architecture',
    title: 'Historic Ghats & Buddhist Caves',
    desc: 'Walk the sacred steps of Ramkund where Lord Rama spent his exile, witness the enchanting evening Godavari Ganga Aarti, and explore the 2,000-year-old rock-cut Pandavleni Caves.',
    places: ['Ramkund & Godavari Ghats', 'Sita Gumpha', 'Pandavleni Caves', 'Coin Museum'],
  },
];

export function TrivioCategories() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-16 lg:py-24 bg-paper" id="categories">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-deep-violet mb-2">
            <span className="w-2 h-2 rounded-full bg-signal-lime border border-deep-violet" />
            <span>Experience Nashik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-3">
            Six worlds in one historic valley.
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Nashik is a rare confluence of timeless mythology, Sahyadri wilderness, and India&apos;s finest winemaking terroir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#F4F1F8] rounded-card p-6 border border-[#ded9e8] hover:border-deep-violet/40 transition-[border-color,transform] hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs font-semibold text-deep-violet bg-deep-violet/10 px-2.5 py-1 rounded-full mb-3">
                  {cat.tag}
                </span>
                <h3 className="text-lg font-bold text-on-surface mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-5">
                  {cat.desc}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-deep-violet block mb-2">Key Landmarks</span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.places.map((place) => (
                    <span
                      key={place}
                      className="text-[11px] bg-white text-on-surface px-2.5 py-1 rounded-md border border-[#ded9e8]"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
