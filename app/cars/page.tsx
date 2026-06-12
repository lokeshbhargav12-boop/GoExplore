'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import cars from '../../data/cars.json';

export default function CarsPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSeats, setSelectedSeats] = useState('All');

  const carTypes = ['All', 'SUV', 'Hatchback', 'MPV', 'Minibus', 'Luxury Van'];
  const seatOptions = ['All', '5 Seats', '7 Seats', '12+ Seats'];

  const filteredCars = cars.filter(car => {
    const typeMatch = selectedType === 'All' || car.type === selectedType;
    let seatsMatch = true;
    if (selectedSeats === '5 Seats') seatsMatch = car.seats === 5;
    else if (selectedSeats === '7 Seats') seatsMatch = car.seats === 7;
    else if (selectedSeats === '12+ Seats') seatsMatch = car.seats >= 12;
    return typeMatch && seatsMatch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">🚗 Car Rentals</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Rent a Car for Your Trip!</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Clean, comfortable cars with experienced drivers. Perfect for exploring Northeast India! 🌿
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Rent With Us */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🚗', title: 'Clean Cars', desc: 'Well maintained' },
              { icon: '👨‍✈️', title: 'Expert Drivers', desc: 'Local knowledge' },
              { icon: '💰', title: 'Best Prices', desc: 'No hidden charges' },
              { icon: '📞', title: '24/7 Support', desc: 'Always available' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 bg-gradient-to-br from-travel-green/5 to-travel-teal/5 rounded-2xl border border-travel-green/10"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b sticky top-[72px] sm:top-[88px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Car Type Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {carTypes.map((type) => (
                <button 
                  key={type} 
                  onClick={() => setSelectedType(type)} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedType === type 
                      ? 'bg-gradient-to-r from-travel-green to-travel-teal text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Seats Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {seatOptions.map((seats) => (
                <button 
                  key={seats} 
                  onClick={() => setSelectedSeats(seats)} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedSeats === seats 
                      ? 'bg-gradient-to-r from-travel-blue to-travel-blue-light text-white shadow-md' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {seats}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, i) => (
              <motion.div 
                key={car.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs font-bold rounded-full">
                      {car.type}
                    </span>
                    {car.rating >= 4.8 && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 text-xs font-bold rounded-full">
                        ⭐ Top Rated
                      </span>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-4 py-2 bg-white text-travel-green font-bold rounded-full shadow-lg">
                      {car.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{car.name}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">👥 {car.seats} Seats</span>
                    <span className="flex items-center gap-1 text-yellow-600">
                      ⭐ {car.rating} ({car.reviews})
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{car.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="px-2 py-1 bg-travel-green/10 text-travel-green text-xs rounded-full">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link 
                    href={`/booking/?car=${car.id}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-travel-blue to-travel-blue-light text-white font-bold rounded-xl hover:shadow-lg transition-all"
                  >
                    <span>🚗</span> Book This Car
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredCars.length === 0 && (
            <div className="text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No cars found</h3>
              <p className="text-gray-600">Try selecting different filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-12 bg-gradient-to-br from-travel-green/5 via-travel-teal/5 to-travel-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-travel-orange/10 text-travel-orange rounded-full text-sm font-medium mb-3">💰 Pricing Info</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What's Included?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Transparent pricing with no hidden charges!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '✅', title: 'Driver Charges', desc: 'Experienced local driver included' },
              { icon: '✅', title: 'Fuel', desc: 'All fuel costs covered' },
              { icon: '✅', title: 'Toll & Parking', desc: 'Highway tolls and parking fees included' },
              { icon: '✅', title: 'AC', desc: 'Air conditioning in all vehicles' },
              { icon: '✅', title: 'Insurance', desc: 'Vehicle insurance covered' },
              { icon: '✅', title: '24/7 Support', desc: 'Emergency assistance anytime' },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex items-start gap-4"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-travel-orange to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Need a Car for Your Trip? 🚗</h2>
          <p className="text-white/90 mb-6">Call us now and get your car booked within minutes! Free cancellation available.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+917002915151" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-travel-orange font-bold rounded-full hover:shadow-xl transition-all">
              <span>📞</span> Call Now
            </a>
            <a href="https://wa.me/917002915151" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:shadow-xl transition-all">
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
