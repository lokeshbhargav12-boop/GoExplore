'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Luxury', 'Sports', 'SUV', 'Exotic'];

  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: '$450/day',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Luxury',
      description: 'Ultimate luxury sedan with handcrafted interior',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      tag: 'Most Popular',
    },
    {
      id: 2,
      name: 'BMW M8 Competition',
      price: '$550/day',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Sports',
      description: 'High-performance grand tourer with V8 power',
      seats: 4,
      transmission: 'Automatic',
      fuel: 'Petrol',
      tag: 'New Arrival',
    },
    {
      id: 3,
      name: 'Audi R8 Spyder',
      price: '$650/day',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Exotic',
      description: 'Supercar with stunning V10 engine and open top',
      seats: 2,
      transmission: 'Automatic',
      fuel: 'Petrol',
      tag: 'Limited',
    },
    {
      id: 4,
      name: 'Porsche 911 GT3',
      price: '$750/day',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Sports',
      description: 'Iconic sports car with track-focused precision',
      seats: 2,
      transmission: 'PDK',
      fuel: 'Petrol',
      tag: 'Premium',
    },
    {
      id: 5,
      name: 'Range Rover Autobiography',
      price: '$500/day',
      image: 'https://images.unsplash.com/photo-1563720223185-11003dccd935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'SUV',
      description: 'Ultimate luxury SUV with commanding presence',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Hybrid',
      tag: 'Popular',
    },
    {
      id: 6,
      name: 'Lamborghini Huracan',
      price: '$1200/day',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Exotic',
      description: 'Italian supercar with aggressive styling',
      seats: 2,
      transmission: 'Automatic',
      fuel: 'Petrol',
      tag: 'Exclusive',
    },
    {
      id: 7,
      name: 'Ferrari Roma',
      price: '$1000/day',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Exotic',
      description: 'Elegant grand tourer with timeless design',
      seats: 4,
      transmission: 'Automatic',
      fuel: 'Petrol',
      tag: 'New',
    },
    {
      id: 8,
      name: 'Bentley Continental GT',
      price: '$700/day',
      image: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Luxury',
      description: 'British grand tourer with unmatched refinement',
      seats: 4,
      transmission: 'Automatic',
      fuel: 'Petrol',
      tag: 'Premium',
    },
    {
      id: 9,
      name: 'Rolls-Royce Ghost',
      price: '$1500/day',
      image: 'https://images.unsplash.com/photo-1566008885218-90f92069936d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Luxury',
      description: 'The pinnacle of automotive luxury and comfort',
      seats: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      tag: 'Flagship',
    },
  ];

  const filteredCars = cars.filter(car => {
    const matchesCategory = selectedCategory === 'All' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          car.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
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
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 block">Our Fleet</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
              Luxury Vehicle Collection
            </h1>
            <p className="text-gray-500 text-lg">
              Choose from our curated selection of premium automobiles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-full text-sm border-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Car Grid */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car, index) => (
              <motion.div
                key={car.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full">
                      {car.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-black/80 text-white text-xs font-medium rounded-full">
                      {car.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <span className="text-lg font-medium text-gray-900">{car.price}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{car.description}</p>

                  {/* Specs */}
                  <div className="flex gap-4 mb-5 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {car.seats} seats
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                      </svg>
                      {car.transmission}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {car.fuel}
                    </div>
                  </div>

                  <Link
                    href="/booking/"
                    className="block w-full text-center py-3 bg-gray-100 rounded-xl font-medium hover:bg-black hover:text-white transition-all"
                  >
                    Reserve Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No vehicles found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
