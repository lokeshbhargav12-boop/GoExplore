'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', destination: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const destinations = ['Shillong & Meghalaya', 'Kaziranga Wildlife Safari', 'Arunachal Pradesh', 'Sikkim & Gangtok', 'Majuli Island', 'Dzukou Valley Trek', 'Northeast Complete Circuit', 'Other/Custom Package'];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">📞 Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Have questions? We are here to help! Call, WhatsApp, or fill the form below.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '📞', title: 'Call Us', info: '+91 91056 83331', sub: 'Available 24/7', color: 'from-travel-blue to-blue-600', href: 'tel:+91910568331' },
              { icon: '💬', title: 'WhatsApp', info: '+91 91056 83331', sub: 'Quick Response', color: 'from-green-500 to-green-600', href: 'https://wa.me/91910568331' },
              { icon: '✉️', title: 'Email', info: 'info@goexplore.in', sub: 'We reply within 2 hours', color: 'from-orange-500 to-red-500', href: 'mailto:info@goexplore.in' },
            ].map((card, i) => (
              <motion.a 
                key={i} 
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} text-3xl shadow-lg mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-travel-green font-bold text-lg mb-1">{card.info}</p>
                <p className="text-gray-500 text-sm">{card.sub}</p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">📋 Send us a Message</h2>
              <p className="text-gray-600 mb-6">Fill this form and we will call you back within 30 minutes!</p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-5xl mb-3">🎉</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for contacting us. Our team will call you within 30 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interested Destination *</label>
                    <select required value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all">
                      <option value="">Select a destination</option>
                      {destinations.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all resize-none" placeholder="Tell us about your travel plans, dates, number of people, etc." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-travel-green to-travel-teal text-white font-bold rounded-xl hover:shadow-lg transition-all">
                    <span>📤</span> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Address Card */}
              <div className="bg-gradient-to-br from-travel-green/10 to-travel-teal/10 rounded-2xl p-6 border border-travel-green/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🏢</span> Our Office
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-2">
                    <span className="text-travel-green">📍</span>
                    <span>Go Explore Travels<br />House No. 123, Near Guwahati Airport<br />Guwahati, Assam - 781015</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-travel-green">📋</span>
                    <span>GSTIN: 18BDJPS2506K1ZY</span>
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>⏰</span> Working Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between"><span>Monday - Saturday:</span> <span className="font-medium">9:00 AM - 8:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday:</span> <span className="font-medium">10:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between text-travel-green font-medium"><span>Emergency Support:</span> <span>24/7 🆘</span></p>
                </div>
              </div>

              {/* Promise */}
              <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-orange-800 mb-2 flex items-center gap-2">
                  <span>🎁</span> Our Promise
                </h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-center gap-2">✅ Response within 30 minutes</li>
                  <li className="flex items-center gap-2">✅ Best price guarantee</li>
                  <li className="flex items-center gap-2">✅ No hidden charges</li>
                  <li className="flex items-center gap-2">✅ Free itinerary customization</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
