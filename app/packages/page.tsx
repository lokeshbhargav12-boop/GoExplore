'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import tours from '../../data/tours.json';

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categories = ['All', 'Weekend Getaway', 'Wildlife Safari', 'Adventure', 'Cultural Tour', 'Hill Station', 'Complete Experience'];

  const filteredTours = selectedCategory === 'All' 
    ? tours 
    : tours.filter(t => t.category === selectedCategory);

  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortBy === 'price-low') return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
    if (sortBy === 'price-high') return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
    if (sortBy === 'rating') return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">🎒 Tour Packages</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Explore Our Packages</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Handpicked Northeast India tour packages starting from just ₹6,999. Best prices guaranteed!</p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="py-6 bg-white border-b sticky top-[72px] sm:top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button 
                  key={c} 
                  onClick={() => setSelectedCategory(c)} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === c 
                      ? 'bg-gradient-to-r from-travel-green to-travel-teal text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-travel-green focus:border-transparent"
            >
              <option value="popular">🔥 Most Popular</option>
              <option value="rating">⭐ Highest Rated</option>
              <option value="price-low">💰 Price: Low to High</option>
              <option value="price-high">💰 Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTours.map((tour, i) => (
              <motion.div 
                key={tour.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative">
                  <img src={tour.image} alt={tour.name} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold rounded-full">
                      {tour.category}
                    </span>
                    {tour.rating >= 4.8 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-bold rounded-full">
                        ⭐ Top Rated
                      </span>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-4 py-2 bg-white text-travel-green font-bold rounded-full shadow-lg">
                      {tour.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{tour.name}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">📅 {tour.duration}</span>
                    <span className="flex items-center gap-1 text-yellow-600">
                      ⭐ {tour.rating} ({tour.reviews})
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 3).map((h, idx) => (
                      <span key={idx} className="px-2 py-1 bg-travel-green/10 text-travel-green text-xs rounded-full">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link 
                    href={`/booking/?package=${tour.id}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-travel-blue to-travel-blue-light text-white font-bold rounded-xl hover:shadow-lg transition-all"
                  >
                    <span>🎒</span> Book This Package
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {sortedTours.length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No packages found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-travel-orange to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need a Custom Package? 🤔</h2>
          <p className="text-white/90 mb-6">Tell us your requirements and we will create a personalized itinerary just for you!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+91910568331" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-travel-orange font-bold rounded-full hover:shadow-xl transition-all">
              <span>📞</span> Call Now
            </a>
            <a href="https://wa.me/91910568331" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:shadow-xl transition-all">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
