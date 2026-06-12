'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tours from '../../data/tours.json';

export default function BookingPage() {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    travelDate: '',
    travelers: '2',
    package: '',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkgId = params.get('package');
    if (pkgId) {
      const tour = tours.find(t => t.id === parseInt(pkgId));
      if (tour) {
        setSelectedPackage(tour.id.toString());
        setFormData(prev => ({ ...prev, package: tour.id.toString() }));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const selectedTour = tours.find(t => t.id === parseInt(selectedPackage));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">📅 Book Your Trip</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Book Your Northeast Adventure</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Fill the form below and we will confirm your booking within 2 hours!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Request Received!</h2>
                    <p className="text-gray-600 mb-6">Thank you for choosing Go Explore. Our team will call you within 2 hours to confirm your booking.</p>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-green-800 font-medium">📞 We will call you at: {formData.phone}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Booking Details</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Select Package */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Package *</label>
                        <select 
                          required 
                          value={selectedPackage} 
                          onChange={(e) => {
                            setSelectedPackage(e.target.value);
                            setFormData({...formData, package: e.target.value});
                          }}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all"
                        >
                          <option value="">Choose a package</option>
                          {tours.map((tour) => (
                            <option key={tour.id} value={tour.id}>
                              {tour.name} - {tour.price}
                            </option>
                          ))}
                          <option value="custom">Custom Package (Tell us your requirements)</option>
                        </select>
                      </div>

                      {/* Package Preview */}
                      {selectedTour && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-gradient-to-r from-travel-green/10 to-travel-teal/10 rounded-xl p-4 border border-travel-green/20"
                        >
                          <div className="flex gap-4">
                            <img src={selectedTour.image} alt={selectedTour.name} className="w-24 h-24 rounded-lg object-cover" />
                            <div>
                              <h4 className="font-bold text-gray-900">{selectedTour.name}</h4>
                              <p className="text-travel-green font-bold">{selectedTour.price}</p>
                              <p className="text-sm text-gray-600">📅 {selectedTour.duration}</p>
                              <div className="flex gap-1 mt-1">
                                {selectedTour.highlights.slice(0, 2).map((h, i) => (
                                  <span key={i} className="text-xs bg-white px-2 py-0.5 rounded-full">{h}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Personal Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <input 
                            type="text" 
                            required 
                            value={formData.name} 
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                          <input 
                            type="tel" 
                            required 
                            value={formData.phone} 
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                        <input 
                          type="email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date *</label>
                          <input 
                            type="date" 
                            required 
                            value={formData.travelDate} 
                            onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers *</label>
                          <select 
                            required 
                            value={formData.travelers} 
                            onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all"
                          >
                            {[1,2,3,4,5,6,7,8,9,10].map(n => (
                              <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                            ))}
                            <option value="10+">10+ People (Group Booking)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                        <textarea 
                          rows={3} 
                          value={formData.specialRequests} 
                          onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-travel-green focus:border-transparent transition-all resize-none"
                          placeholder="Any special requirements, dietary preferences, pickup location, etc."
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-travel-green to-travel-teal text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg"
                      >
                        <span>🎒</span> Submit Booking Request
                      </button>

                      <p className="text-center text-sm text-gray-500">
                        By submitting, you agree to our terms. We will call you to confirm within 2 hours.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span>🛡️</span> Why Book With Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    { icon: '✅', text: 'Best Price Guarantee' },
                    { icon: '✅', text: 'Free Cancellation (24h before)' },
                    { icon: '✅', text: 'No Hidden Charges' },
                    { icon: '✅', text: 'Instant Confirmation' },
                    { icon: '✅', text: '24/7 Support' },
                    { icon: '✅', text: 'Free Airport Pickup' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-500">{item.icon}</span> {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Info */}
              <div className="bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
                <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <span>💳</span> Payment Options
                </h3>
                <ul className="space-y-2 text-orange-700">
                  <li className="flex items-center gap-2">💵 Cash on Arrival</li>
                  <li className="flex items-center gap-2">📱 UPI / Paytm / GPay</li>
                  <li className="flex items-center gap-2">💳 Credit/Debit Card</li>
                  <li className="flex items-center gap-2">🏦 Bank Transfer</li>
                </ul>
                <p className="text-sm text-orange-600 mt-4">Only 30% advance required to confirm booking!</p>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-r from-travel-green to-travel-teal rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <span>📞</span> Need Help?
                </h3>
                <p className="text-white/90 mb-4">Call us anytime for instant booking assistance</p>
                <a href="tel:+91910568331" className="flex items-center justify-center gap-2 w-full py-3 bg-white text-travel-green font-bold rounded-xl hover:shadow-lg transition-all">
                  <span>📞</span> +91 91056 83331
                </a>
              </div>

              {/* WhatsApp */}
              <a href="https://wa.me/91910568331" className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
