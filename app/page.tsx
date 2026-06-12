'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      title: 'DISCOVER',
      highlight: 'THE WORLD',
      subtitle: 'WITH US',
      cta: 'DISCOVER',
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      title: 'ADVENTURE',
      highlight: 'AWAITS YOU',
      subtitle: 'EXPLORE MORE',
      cta: 'EXPLORE',
    },
  ];

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <circle cx="16" cy="40" r="8" stroke="#1E7FC9" strokeWidth="1.5" />
          <circle cx="16" cy="40" r="3" fill="#1E7FC9" />
          <path d="M24 40h4l4-8 8-4 4 12h8" stroke="#1E7FC9" strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
          <circle cx="52" cy="40" r="8" stroke="#1E7FC9" strokeWidth="1.5" />
          <path d="M16 28v-8M20 24l-4-4-4 4" stroke="#1E7FC9" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Multi Destinations',
      description: "We're rooted in the Northeast – our guides, routes, and stories come straight from the source.",
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="20" stroke="#1E7FC9" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="12" stroke="#1E7FC9" strokeWidth="1.5" />
          <path d="M32 16v4M32 44v4M16 32h4M44 32h4" stroke="#1E7FC9" strokeWidth="1.5" />
          <path d="M22 22l3 3M39 39l3 3M39 22l3-3M22 39l3 3" stroke="#1E7FC9" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Best Packages',
      description: 'We tailor each trip to your pace, preferences, and budget. You dream it, we plan it.',
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <path d="M12 52V16l20-8 20 8v36" stroke="#1E7FC9" strokeWidth="1.5" />
          <path d="M12 16l20 8 20-8" stroke="#1E7FC9" strokeWidth="1.5" />
          <path d="M32 24v28M20 20l4 4M44 20l-4 4M24 52l2-4 6 4 6-4 2 4" stroke="#1E7FC9" strokeWidth="1.5" />
          <circle cx="22" cy="34" r="2" fill="#1E7FC9" />
          <circle cx="42" cy="34" r="2" fill="#1E7FC9" />
        </svg>
      ),
      title: 'Best Tour Guides',
      description: 'We promote eco-friendly practices and support local communities – travel that gives back.',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ==================== HERO SECTION ==================== */}
      <section ref={heroRef} className="relative h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
            </div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={currentSlide}
            className="max-w-xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.span variants={fadeInUp} className="block text-white/90 text-lg sm:text-xl font-light tracking-[0.2em] mb-1">
              {slides[currentSlide].title}
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-1">
              {slides[currentSlide].highlight}
            </motion.h1>
            <motion.span variants={fadeInUp} className="block text-white/90 text-lg sm:text-xl font-light tracking-[0.2em] mb-6">
              {slides[currentSlide].subtitle}
            </motion.span>
            <motion.div variants={fadeInUp}>
              <Link
                href="/about/"
                className="inline-block px-8 py-3 bg-travel-blue text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-travel-blue-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {slides[currentSlide].cta}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Slider Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="slider-arrow left-4"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="slider-arrow right-4"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Wave Divider */}
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path
              fill="#FFFFFF"
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,30 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle text-xs tracking-[0.25em] mb-3">
              We are the best
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-travel-blue">
              Why <span className="text-travel-cyan">Go</span> Explore?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-lg shadow-[0_2px_16px_rgba(0,75,141,0.08)] hover:shadow-[0_4px_24px_rgba(0,75,141,0.15)] transition-all duration-300 p-8 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold text-travel-blue mb-3 uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs text-travel-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== START YOUR JOURNEY ==================== */}
      <section className="py-20 bg-travel-blue relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              {/* SVG Dotted Line */}
              <svg className="w-6 h-32 hidden sm:block" viewBox="0 0 24 120" fill="none">
                <path d="M12 0 Q2 30 12 60 Q22 90 12 120" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-white/60 uppercase tracking-widest mb-1">Discover</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  Start<br />Your<br />Journey
                </h2>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                Go Explore is more than a travel agency, it's a bridge between you and the soul of Northeast India. Based in the heart of Assam, we curate immersive journeys across Shillong, Arunachal Pradesh, and beyond. Whether you're chasing waterfalls, sipping local tea, or exploring tribal heritage, our tours are designed to connect you with the land, its people, and its stories.
              </p>
              <p className="text-xs text-white/80 leading-relaxed mb-8">
                Every itinerary is handcrafted by passionate local guides who know these regions inside out. We believe in responsible tourism that empowers communities and protects the environment while delivering unforgettable memories.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '500+', label: 'Happy Travelers' },
                  { value: '50+', label: 'Destinations' },
                  { value: '10+', label: 'Years Experience' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-travel-cyan">{stat.value}</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wide mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/booking/"
                className="inline-block px-7 py-3 bg-white text-travel-blue text-xs font-bold uppercase tracking-widest rounded-full hover:bg-travel-cyan-light transition-all hover:shadow-lg"
              >
                Plan Your Trip
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== POPULAR DESTINATIONS ==================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle text-xs tracking-[0.25em] mb-3">
              Explore with us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-travel-blue">
              Popular <span className="text-travel-cyan">Destinations</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Shillong',
                image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: 'Scotland of the East – rolling hills, waterfalls, and vibrant culture.',
              },
              {
                name: 'Arunachal Pradesh',
                image: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: 'Land of the Dawn-Lit Mountains with pristine valleys and monasteries.',
              },
              {
                name: 'Kaziranga',
                image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: 'Home to the one-horned rhinoceros and incredible wildlife safaris.',
              },
              {
                name: 'Majuli Island',
                image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: "The world's largest river island with serene Brahmaputra vistas.",
              },
              {
                name: 'Cherrapunji',
                image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: 'Living root bridges and some of the wettest landscapes on Earth.',
              },
              {
                name: 'Tawang',
                image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                desc: 'A spiritual haven with the massive Tawang Monastery and snow-capped peaks.',
              },
            ].map((dest, index) => (
              <motion.div
                key={dest.name}
                className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,75,141,0.15)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-travel-blue mb-2">{dest.name}</h3>
                  <p className="text-xs text-travel-text-secondary leading-relaxed">{dest.desc}</p>
                  <Link
                    href="/booking/"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-travel-cyan hover:text-travel-blue transition-colors group/link"
                  >
                    Book Now
                    <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BEST VACATION EVER ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-travel-gray rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 sm:h-80 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Best Vacation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-l" />
              </div>

              {/* Content Side */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.25em] text-travel-cyan font-semibold mb-2">
                  Best Vacation Ever
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-travel-blue mb-4 leading-tight">
                  Let Us Plan Your<br />Perfect Escape
                </h2>
                <p className="text-xs text-travel-text-secondary leading-relaxed mb-6">
                  From the misty hills of Meghalaya to the serene monasteries of Arunachal, we craft personalized itineraries that match your travel style. Whether you seek adventure, culture, or relaxation, our expert team ensures every moment is memorable.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Personalized itinerary planning',
                    'Local guides & authentic experiences',
                    '24/7 travel support during your journey',
                    'Eco-friendly & community-focused tours',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-xs text-travel-text-secondary">
                      <span className="w-5 h-5 rounded-full bg-travel-cyan/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-travel-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <Link
                    href="/booking/"
                    className="inline-block px-8 py-3 bg-travel-blue text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-travel-blue-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Book Your Trip
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CTA / CONTACT BANNER ==================== */}
      <section className="py-16 bg-travel-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Explore Northeast India?
            </h2>
            <p className="text-sm text-white/70 max-w-xl mx-auto mb-8">
              Get in touch with us today and let's plan your next adventure together. We're just a call away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+91910568331"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-travel-blue text-xs font-bold uppercase tracking-widest rounded-full hover:bg-travel-cyan-light transition-all hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
