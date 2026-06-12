'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      title: 'Authenticity',
      description: 'We believe in real experiences. Our tours take you beyond tourist spots to the heart of Northeast Indian culture.',
    },
    {
      title: 'Sustainability',
      description: 'We promote eco-friendly tourism that protects the environment and empowers local communities.',
    },
    {
      title: 'Expertise',
      description: 'Our guides are passionate locals who know every hidden trail, waterfall, and story that makes Northeast India magical.',
    },
    {
      title: 'Personalization',
      description: 'Every journey is crafted to match your interests, pace, and budget. No cookie-cutter itineraries here.',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-travel-blue overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
            alt="Northeast India"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs text-travel-cyan uppercase tracking-[0.25em] mb-3 block">About Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Bridging You to the Soul<br />of <span className="text-travel-cyan">Northeast India</span>
            </h1>
            <p className="text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
              More than a travel agency, we are passionate storytellers, local guides, and guardians of the Northeast's untamed beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Northeast Nature"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs text-travel-cyan uppercase tracking-[0.25em] mb-2 block">Our Story</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-travel-blue mb-6">Born in the Heart of Assam</h2>
              <p className="text-xs text-travel-text-secondary leading-relaxed mb-4">
                Go Explore was founded with a simple yet powerful vision: to share the breathtaking beauty and rich cultural tapestry of Northeast India with travelers from around the world. What began as a small local initiative has grown into a trusted name in experiential travel.
              </p>
              <p className="text-xs text-travel-text-secondary leading-relaxed mb-4">
                Based in Assam, we have spent over a decade exploring every corner of the Northeast—from the misty hills of Meghalaya to the serene monasteries of Arunachal Pradesh, from the wildlife corridors of Kaziranga to the living root bridges of Cherrapunji.
              </p>
              <p className="text-xs text-travel-text-secondary leading-relaxed">
                Our team consists of passionate local guides, travel enthusiasts, and hospitality experts who understand that every journey should be as unique as the traveler embarking on it. We don't just show you places—we connect you with stories, people, and experiences that stay with you forever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subtitle text-xs tracking-[0.25em] mb-3">What We Stand For</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-travel-blue">
              Our <span className="text-travel-cyan">Core Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-[0_2px_12px_rgba(0,75,141,0.06)] hover:shadow-[0_4px_20px_rgba(0,75,141,0.12)] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 bg-travel-blue rounded-xl flex items-center justify-center text-white text-sm font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-sm font-bold text-travel-blue mb-2">{value.title}</h3>
                <p className="text-xs text-travel-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs text-travel-cyan uppercase tracking-[0.25em] mb-2 block">Why Us</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-travel-blue mb-6">Experience Northeast Like a Local</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Local Expertise',
                    desc: 'Our guides grew up in these lands. They know the hidden trails, the best seasons, and the most authentic experiences.',
                  },
                  {
                    title: 'Tailored Itineraries',
                    desc: 'Whether you want adventure, culture, or relaxation, we craft trips that match your unique travel style.',
                  },
                  {
                    title: 'Responsible Tourism',
                    desc: 'We partner with local communities, use sustainable practices, and ensure your travels leave a positive impact.',
                  },
                  {
                    title: '24/7 Support',
                    desc: 'From planning to your last day, our team is always just a call away at +91 91056 83331.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-travel-cyan/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-travel-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-travel-blue mb-1">{item.title}</h4>
                      <p className="text-xs text-travel-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/booking/"
                  className="inline-block px-8 py-3 bg-travel-blue text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-travel-blue-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Start Your Journey
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-first"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Travel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Adventure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Nature"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Culture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-travel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Happy Travelers' },
              { value: '50+', label: 'Destinations' },
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
                <div className="text-3xl sm:text-4xl font-bold text-travel-cyan mb-1">{stat.value}</div>
                <div className="text-xs text-white/60 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
