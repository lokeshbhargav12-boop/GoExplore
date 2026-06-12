'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { icon: '🏆', value: '10+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: '👥', value: '500+', label: 'Happy Travelers', color: 'from-green-500 to-teal-500' },
    { icon: '🗺️', value: '50+', label: 'Destinations', color: 'from-orange-500 to-red-500' },
    { icon: '⭐', value: '4.9', label: 'Average Rating', color: 'from-purple-500 to-pink-500' },
  ];

  const whyChooseUs = [
    { icon: '💰', title: 'Best Prices Guaranteed', desc: 'We promise the lowest prices. Found cheaper? We will match it plus give you 10% extra discount!' },
    { icon: '🤝', title: 'Local Experts', desc: 'Our guides are born and raised here. They know every hidden waterfall, best local food joints, and secret viewpoints!' },
    { icon: '📞', title: '24/7 Support', desc: 'Stuck somewhere at 2 AM? Call us anytime! We are always just a phone call away at +91 70029 15151' },
    { icon: '🎁', title: 'Free Extras', desc: 'FREE airport pickup, FREE travel insurance, and FREE itinerary customization on every booking!' },
    { icon: '🛡️', title: 'Safe & Reliable', desc: 'Licensed travel agency with verified hotels, trained drivers, and proper safety measures.' },
    { icon: '❤️', title: 'Love for Northeast', desc: 'We are not just a travel company, we are Northeast enthusiasts sharing our love for this beautiful region!' },
  ];

  const destinations = [
    { name: 'Shillong', emoji: '🏔️', desc: 'Scotland of the East' },
    { name: 'Kaziranga', emoji: '🦏', desc: 'Home of One-Horned Rhino' },
    { name: 'Tawang', emoji: '🏛️', desc: 'Land of Monasteries' },
    { name: 'Majuli', emoji: '🌿', desc: 'World\'s Largest River Island' },
    { name: 'Sikkim', emoji: '🗻', desc: 'Gateway to Himalayas' },
    { name: 'Cherrapunji', emoji: '💧', desc: 'Wettest Place on Earth' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-travel-green via-travel-teal to-travel-blue">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">👋 Namaste from Assam!</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              We are <span className="text-yellow-300">Go Explore</span>
            </h1>
            <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              Your friendly neighborhood travel experts from Assam, dedicated to showing you the breathtaking beauty of Northeast India! 🌿
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800" 
                  alt="Northeast India Beauty" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">Northeast India - Where Nature Meets Culture 🌿</p>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full font-bold shadow-xl">
                ⭐ Since 2014
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-travel-green/10 text-travel-green rounded-full text-sm font-medium mb-4">📖 Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Born in the Heart of Assam ❤️</h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Hello! 👋</strong> We are a small but passionate team of Northeast India enthusiasts based right here in Guwahati, Assam. Our journey started in 2014 when a group of college friends decided to show the world what makes our home so special.
                </p>
                <p>
                  We are not some big corporate travel company sitting in a fancy office. We are locals who grew up exploring these misty hills, ancient monasteries, and lush tea gardens. We know the best momo shops, the hidden waterfalls, and the friendliest homestay uncles and aunties!
                </p>
                <p>
                  <strong>Why "Go Explore"?</strong> Because that is exactly what we want you to do - go explore the unexplored, experience the extraordinary, and fall in love with Northeast India just like we did! 🎒
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/packages/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-travel-green to-travel-teal text-white font-bold rounded-full hover:shadow-lg transition-all">
                  <span>🎒</span> Explore Packages
                </Link>
                <a href="tel:+917002915151" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-all">
                  <span>📞</span> Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} text-3xl shadow-lg mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-travel-green/5 via-travel-teal/5 to-travel-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-travel-orange/10 text-travel-orange rounded-full text-sm font-medium mb-4">🌟 Why Choose Go Explore?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Makes Us Special? 🤔</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are not perfect, but we try our best to make your trip memorable!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations We Cover */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-travel-blue/10 text-travel-blue rounded-full text-sm font-medium mb-4">🗺️ Destinations</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Where Can We Take You? 🚗</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From misty mountains to river islands, we cover it all!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-travel-green/10 to-travel-teal/10 rounded-2xl p-6 text-center border border-travel-green/20 hover:border-travel-green/40 transition-all"
              >
                <div className="text-4xl mb-2">{dest.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{dest.name}</h3>
                <p className="text-xs text-gray-500">{dest.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">🎉 Ready to Explore?</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let Us Show You Our Home! 🏠</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              We promise to treat you like family and show you the Northeast like a local. No fancy words, just genuine experiences! ❤️
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/917002915151" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-travel-green font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <span>💬</span> Chat on WhatsApp
              </a>
              <a href="tel:+917002915151" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-travel-yellow text-gray-900 font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all">
                <span>📞</span> Call: +91 70029 15151
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
