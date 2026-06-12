'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    returnTime: '',
    car: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-black focus:border-transparent focus:bg-white transition-all outline-none";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  const carOptions = [
    { value: '', label: 'Select a vehicle' },
    { value: 'mercedes-s-class', label: 'Mercedes-Benz S-Class - $450/day' },
    { value: 'bmw-m8', label: 'BMW M8 Competition - $550/day' },
    { value: 'audi-r8', label: 'Audi R8 Spyder - $650/day' },
    { value: 'porsche-911', label: 'Porsche 911 GT3 - $750/day' },
    { value: 'range-rover', label: 'Range Rover Autobiography - $500/day' },
    { value: 'lamborghini', label: 'Lamborghini Huracan - $1200/day' },
    { value: 'ferrari-roma', label: 'Ferrari Roma - $1000/day' },
    { value: 'bentley-continental', label: 'Bentley Continental GT - $700/day' },
    { value: 'rolls-royce', label: 'Rolls-Royce Ghost - $1500/day' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="relative py-16 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 block">Reservation</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              Book Your Experience
            </h1>
            <p className="text-gray-500 text-lg">
              Complete the form below to reserve your luxury vehicle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="bg-white rounded-3xl p-12 text-center shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold mb-2">Booking Confirmed</h2>
                <p className="text-gray-500">
                  Thank you for choosing LuxuryRent. Our concierge team will contact you shortly to confirm your reservation details.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
                {/* Vehicle Selection */}
                <div className="mb-8">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-4">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a2 2 0 104 0H9h6m-1.25 3.25L13.25 15m-3.75 4.25L7.25 15m8-3.75L17 9.25" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-4">Select Vehicle</h2>
                  <select
                    name="car"
                    value={formData.car}
                    onChange={handleChange}
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    {carOptions.map((option) => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {/* Personal Information */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Personal Information</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className={inputClass} placeholder="John" />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className={inputClass} placeholder="Doe" />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className={labelClass}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+1 234 567 890" />
                    </div>
                  </div>
                </div>

                {/* Pickup Details */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Pickup Details</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Pickup Date</label>
                      <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Pickup Time</label>
                      <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Return Date</label>
                      <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Return Time</label>
                      <input type="time" name="returnTime" value={formData.returnTime} onChange={handleChange} required className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">Additional Notes</h2>
                    </div>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputClass + ' resize-none'}
                    placeholder="Any special requests or requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-8 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:shadow-2xl"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: 'check', title: 'Free Cancellation', desc: 'Up to 24 hours before pickup' },
              { icon: 'lock', title: 'Secure Payment', desc: 'Encrypted transactions' },
              { icon: 'phone', title: 'Instant Confirmation', desc: 'Receive details within minutes' },
            ].map((badge) => (
              <div key={badge.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="text-2xl mb-2">{badge.icon === 'check' && '✓'}{badge.icon === 'lock' && '🔒'}{badge.icon === 'phone' && '📞'}</div>
                <div className="font-medium">{badge.title}</div>
                <div className="text-sm text-gray-500">{badge.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
