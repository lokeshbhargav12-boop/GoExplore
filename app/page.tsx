'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import tours from '../data/tours.json';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const slides = [
    { img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1800', title: 'Discover the Unexplored', sub: 'Northeast India Awaits You!', color: 'from-green-600/90 to-teal-600/90' },
    { img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1800', title: 'Kaziranga Safari Special', sub: 'Meet the One-Horned Rhino!', color: 'from-orange-600/90 to-red-600/90' },
    { img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1800', title: 'Himalayan Beauty', sub: 'Experience Sikkim & Tawang', color: 'from-blue-600/90 to-indigo-600/90' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    { icon: '🎯', title: 'Best Prices', desc: 'Guaranteed lowest prices for Northeast tours' },
    { icon: '👨‍💼', title: 'Expert Guides', desc: 'Local experts who know every hidden gem' },
    { icon: '📞', title: '24/7 Support', desc: 'Always available to help you anytime' },
    { icon: '⭐', title: 'Top Rated', desc: '500+ happy customers love us!' },
  ];

  const categories = ['All', 'Weekend Getaway', 'Wildlife Safari', 'Adventure', 'Cultural Tour', 'Hill Station'];

  const filteredTours = tours.slice(0, 6);

  const destinations = [
    { name: 'Shillong', tag: 'Most Popular', img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=400', price: 'From ₹6,999' },
    { name: 'Kaziranga', tag: 'Wildlife', img: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400', price: 'From ₹8,499' },
    { name: 'Tawang', tag: 'Spiritual', img: 'https://images.unsplash.com/photo-1620127037925-2f2c4f4db8dd?w=400', price: 'From ₹15,999' },
    { name: 'Sikkim', tag: 'Himalayan', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400', price: 'From ₹12,499' },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
        {slides.map((slide, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
          </div>
        ))}
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div key={currentSlide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur text-white rounded-full text-sm font-medium mb-4">🎉 20% OFF - Limited Time Offer!</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">{slides[currentSlide].title}</h1>
              <p className="text-xl sm:text-2xl text-white/90 mb-6">{slides[currentSlide].sub}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/packages/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">
                  <span>🎒</span> View Packages
                </Link>
                <a href="tel:+91910568331" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-xl transition-all">
                  <span>📞</span> Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-6">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-all ${i === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`} />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-4">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-sm">{f.title}</h3>
                  <p className="text-white/70 text-xs">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-travel-green/10 text-travel-green rounded-full text-sm font-medium mb-3">🗺️ Popular Destinations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Explore Northeast India</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From misty mountains to wildlife sanctuaries, discover the beauty of Seven Sisters</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group relative rounded-2xl overflow-hidden shadow-lg">
                <img src={d.img} alt={d.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full">{d.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-1">{d.name}</h3>
                  <p className="text-white/80 text-sm mb-3">{d.price}</p>
                  <Link href="/packages/" className="inline-flex items-center gap-1 text-yellow-400 font-medium text-sm hover:text-yellow-300">
                    Explore <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 bg-travel-blue/10 text-travel-blue rounded-full text-sm font-medium mb-3">🎒 Tour Packages</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Most Popular Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">Handpicked packages loved by our travelers</p>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setSelectedCategory(c)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === c ? 'bg-gradient-to-r from-travel-green to-travel-teal text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour, i) => (
              <motion.div key={tour.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group">
                <div className="relative">
                  <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold rounded-full">{tour.category}</span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-bold">{tour.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tour.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">📅 {tour.duration}</span>
                    <span className="flex items-center gap-1">💬 {tour.reviews} reviews</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    {tour.highlights.slice(0, 2).map((h, idx) => (
                      <span key={idx} className="px-2 py-1 bg-travel-green/10 text-travel-green text-xs rounded-full">{h}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400">Starting from</span>
                      <p className="text-xl font-bold text-travel-green">{tour.price}</p>
                    </div>
                    <Link href={`/booking/?package=${tour.id}`} className="px-4 py-2 bg-gradient-to-r from-travel-blue to-travel-blue-light text-white font-medium rounded-full hover:shadow-lg transition-all">
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/packages/" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-travel-green to-travel-teal text-white font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">
              <span>🎒</span> View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-travel-green/5 via-travel-teal/5 to-travel-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-travel-orange/10 text-travel-orange rounded-full text-sm font-medium mb-3">⭐ Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Trust the Local Experts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: '10+ Years Experience', desc: 'Serving travelers since 2014 with love and expertise' },
              { icon: '💰', title: 'Best Price Guarantee', desc: 'Lowest prices or we match it + 10% extra discount' },
              { icon: '🤝', title: 'Local Connections', desc: 'Direct partnerships with hotels and local guides' },
              { icon: '🎁', title: 'Free Airport Pickup', desc: 'Complimentary pickup from Guwahati Airport' },
              { icon: '🛡️', title: 'Safe & Secure', desc: 'Licensed travel agency with full insurance coverage' },
              { icon: '❤️', title: '500+ Happy Travelers', desc: 'Join our family of satisfied customers' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">🎉 Special Festival Offer</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ready for Your Northeast Adventure?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Book now and get 20% OFF + FREE airport pickup! Limited seats available for this season.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/91910568331" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-travel-green font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <span>💬</span> WhatsApp Now
              </a>
              <a href="tel:+91910568331" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-travel-yellow text-gray-900 font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <span>📞</span> Call: +91 91056 83331
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
