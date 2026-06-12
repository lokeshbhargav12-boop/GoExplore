'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      title: 'Excellence',
      description: 'We never compromise on quality. Every vehicle in our fleet meets the highest standards of luxury and performance.',
    },
    {
      title: 'Trust',
      description: 'Transparency is at the core of our business. No hidden fees, no surprises, just premium service.',
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our offerings to provide the latest and greatest in luxury automotive experiences.',
    },
    {
      title: 'Service',
      description: 'Our dedicated concierge team ensures every client receives personalized, white-glove treatment.',
    },
  ];

  const team = [
    {
      name: 'Alexander Mitchell',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sophia Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'James Williams',
      role: 'Fleet Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Olivia Martinez',
      role: 'Client Relations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2 block">About Us</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6">
              Redefining Luxury
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-black">Car Rental</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Since 2010, LuxuryRent has been the premier destination for discerning clients seeking the finest automotive experiences. We believe that driving should be more than transportation, it should be an unforgettable experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003dccd935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Fleet"
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
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Our Story</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-4">
                What started as a passion for exceptional automobiles has evolved into the world\u0027s most trusted luxury car rental service. Founded in the heart of London, LuxuryRent began with a simple mission: to make the world\u0027s finest vehicles accessible to those who appreciate excellence.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-4">
                Today, we operate in over 25 major cities worldwide, maintaining a fleet of more than 500 meticulously maintained luxury and exotic vehicles. From the latest supercars to timeless classics, every car in our collection represents the pinnacle of automotive engineering.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our commitment goes beyond providing beautiful cars. We curate complete experiences, ensuring every moment with LuxuryRent becomes a cherished memory.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Our Values</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Leadership Team</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              The passionate individuals behind LuxuryRent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-square rounded-3xl overflow-hidden mb-4 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
