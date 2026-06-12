'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const heroRef = useRef(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: '$450/day',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Ultimate luxury sedan with handcrafted interior',
      tag: 'Most Popular',
    },
    {
      id: 2,
      name: 'BMW M8 Competition',
      price: '$550/day',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-performance grand tourer with V8 power',
      tag: 'New Arrival',
    },
    {
      id: 3,
      name: 'Audi R8 Spyder',
      price: '$650/day',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Supercar with stunning V10 engine and open top',
      tag: 'Limited',
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Fully Insured',
      description: 'Every vehicle comes with comprehensive insurance coverage for your peace of mind.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Concierge',
      description: 'Round-the-clock dedicated support team to assist you anytime, anywhere.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Door Delivery',
      description: 'We deliver your chosen vehicle directly to your location, wherever you are.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Flex Booking',
      description: 'No hidden fees. Free cancellation up to 24 hours before pickup.',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white pt-20">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-1.5 text-sm font-medium bg-black text-white rounded-full">
                Luxury Car Rental
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-[1.1] mb-6"
            >
              Drive the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">Exceptional</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Experience the finest collection of luxury and exotic vehicles. 
              Premium service, unforgettable moments.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link
                href="/cars/"
                className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:shadow-2xl hover:-translate-y-1"
              >
                Explore Fleet
              </Link>
              <Link
                href="/booking/"
                className="px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-medium text-lg hover:bg-gray-50 transition-all"
              >
                Book Now
              </Link>
            </motion.div>

            {/* Hero Car Image */}
            <motion.div
              variants={fadeIn}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Car"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Why Choose LuxuryRent
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We provide a seamless luxury car rental experience that sets new standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 block">Our Fleet</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
              Featured Vehicles
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Handpicked luxury vehicles maintained to perfection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <motion.div
                key={car.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{car.name}</h3>
                    <span className="text-lg font-medium">{car.price}</span>
                  </div>
                  <p className="text-gray-500 mb-4">{car.description}</p>
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

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/cars/"
              className="inline-flex items-center gap-2 text-lg font-medium hover:gap-3 transition-all"
            >
              View All Vehicles
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Luxury Vehicles' },
              { value: '10K+', label: 'Happy Clients' },
              { value: '25+', label: 'Global Locations' },
              { value: '99%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-12 sm:p-16 lg:p-20 text-center overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                Ready for an Unforgettable Drive?
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                Join thousands of satisfied clients who trust us for their luxury car experience
              </p>
              <Link
                href="/booking/"
                className="inline-block px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:shadow-2xl"
              >
                Start Your Journey
              </Link>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
