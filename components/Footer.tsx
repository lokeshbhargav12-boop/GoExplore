'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const quickLinks = [
    { label: '🏠 Home', href: '/' },
    { label: '👥 About Us', href: '/about/' },
    { label: '🎒 Tour Packages', href: '/packages/' },
    { label: '📅 Book Now', href: '/booking/' },
    { label: '📞 Contact', href: '/contact/' },
  ];

  const destinations = [
    { name: '🏔️ Shillong', desc: 'Scotland of the East' },
    { name: '🦏 Kaziranga', desc: 'Rhino Safari' },
    { name: '🏛️ Tawang', desc: 'Monastery Trail' },
    { name: '🌿 Majuli', desc: 'River Island' },
    { name: '🗻 Sikkim', desc: 'Himalayan Views' },
    { name: '🎵 Ziro', desc: 'Music Festival' },
  ];

  const whyChooseUs = [
    { icon: '✅', text: 'Best Price Guarantee' },
    { icon: '✅', text: 'Experienced Local Guides' },
    { icon: '✅', text: '24/7 Customer Support' },
    { icon: '✅', text: 'Customizable Packages' },
    { icon: '✅', text: 'No Hidden Charges' },
    { icon: '✅', text: 'Free Airport Pickup' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-travel-green via-travel-teal to-travel-blue" />
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-travel-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-travel-blue/10 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Top Section - Brand & CTA */}
        <div className="text-center mb-12 pb-12 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-travel-green via-travel-teal to-travel-blue flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-2xl font-bold">
                  <span className="text-travel-green">Go</span>{' '}
                  <span className="text-white">Explore</span>
                </span>
                <p className="text-xs text-gray-400">Northeast India Tours</p>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              Ready to Explore Northeast India? 🌄
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Let us plan your perfect Northeast adventure! Call or WhatsApp us now for exclusive deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="tel:+917002915151"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-travel-blue to-travel-blue-light text-white rounded-full font-medium shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: +91 70029 15151
              </motion.a>
              
              <motion.a
                href="https://wa.me/917002915151"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                </svg>
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Why Choose Us */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-travel-green flex items-center gap-2">
              <span>⭐</span> Why Choose Us
            </h4>
            <ul className="space-y-2">
              {whyChooseUs.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <span className="text-travel-green">{item.icon}</span>
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-travel-teal flex items-center gap-2">
              <span>🔗</span> Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-travel-green transition-colors flex items-center gap-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-travel-blue flex items-center gap-2">
              <span>🗺️</span> Top Destinations
            </h4>
            <ul className="space-y-2">
              {destinations.map((dest, index) => (
                <li key={index} className="text-sm text-gray-400">
                  <span className="text-white font-medium">{dest.name}</span>
                  <span className="text-gray-500 ml-2 text-xs">- {dest.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-travel-orange flex items-center gap-2">
              <span>📍</span> Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-travel-green text-lg">📞</span>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+917002915151" className="hover:text-travel-green transition-colors">
                    +91 70029 15151
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-travel-green text-lg">✉️</span>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@goexplore.in" className="hover:text-travel-green transition-colors">
                    info@goexplore.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-travel-green text-lg">🏢</span>
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p>Guwahati, Assam, India</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-travel-green text-lg">📋</span>
                <div>
                  <p className="text-white font-medium">GSTIN</p>
                  <p>18BDJPS2506K1ZY</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { icon: '📸', label: 'Instagram', color: 'from-purple-500 to-pink-500' },
            { icon: '👍', label: 'Facebook', color: 'from-blue-500 to-blue-600' },
            { icon: '🎬', label: 'YouTube', color: 'from-red-500 to-red-600' },
            { icon: '💬', label: 'WhatsApp', color: 'from-green-500 to-green-600' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href="#"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${social.color} text-white rounded-full text-sm font-medium shadow-lg`}
            >
              <span>{social.icon}</span>
              {social.label}
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} Go Explore. All rights reserved.</p>
              <p className="mt-1">Making Northeast India travel easy and memorable! 🌿</p>
            </div>
            <div className="flex gap-6 text-xs">
              <Link href="#" className="text-gray-500 hover:text-travel-green transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-travel-green transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-travel-green transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
