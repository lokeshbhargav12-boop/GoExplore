'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../lib/auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isGuest, logout } = useAuth();
  const isAuthenticated = !!user;
  const isGuestUser = isGuest && !user;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About Us' },
    { href: '/booking/', label: 'Booking' },
    { href: '/contact/', label: 'Contact' },
  ];

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header className="bg-white relative z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-travel-blue flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-travel-blue leading-tight tracking-tight">GO</span>
                <span className="text-[10px] font-semibold text-travel-cyan tracking-widest uppercase leading-tight">Explore</span>
              </div>
            </Link>

            {/* GSTIN */}
            <div className="hidden md:flex items-center text-[10px] text-travel-text-secondary tracking-wide">
              GSTIN: 18BDJPS2506K1ZY
            </div>

            {/* Search + Phone */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-48 h-9 pl-4 pr-9 text-xs bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-travel-blue focus:ring-1 focus:ring-travel-blue/20 transition-all"
                />
                <svg className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 text-travel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Phone */}
              <a href="tel:+91910568331" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-full border-2 border-travel-blue flex items-center justify-center group-hover:bg-travel-blue transition-colors">
                  <svg className="w-4 h-4 text-travel-blue group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-travel-blue">+91910568331</span>
                  <span className="text-[9px] text-travel-text-secondary -mt-0.5">24/7 Help Support</span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-travel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-travel-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center h-12">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 h-full flex items-center text-xs font-semibold uppercase tracking-wider transition-all relative ${
                  index === 0
                    ? 'bg-travel-cyan text-white'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute left-0 right-0 top-20 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-10 pl-4 pr-10 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-travel-blue"
              />
              <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-travel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-travel-cyan text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Phone */}
            <a href="tel:+91910568331" className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full border-2 border-travel-blue flex items-center justify-center">
                <svg className="w-5 h-5 text-travel-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold text-travel-blue">+91910568331</span>
                <span className="text-xs text-travel-text-secondary">24/7 Help Support</span>
              </div>
            </a>

            {/* Auth buttons in mobile */}
            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
              {isGuestUser ? (
                <>
                  <Link href="/admin/login" className="flex-1 text-center py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Sign In
                  </Link>
                  <Link href="/admin/register" className="flex-1 text-center py-3 bg-travel-cyan text-white rounded-lg text-sm font-medium">
                    Complete Registration
                  </Link>
                </>
              ) : isAuthenticated ? (
                <div className="flex flex-col w-full gap-2">
                  <span className="text-sm text-gray-500">Welcome, {user.email?.split('@')[0] || 'User'}</span>
                  <button onClick={() => { logout(); setIsMenuOpen(false); }} className="w-full py-3 text-red-600 border border-red-200 rounded-lg text-sm font-medium">
                    Log Out
                  </button>
                </div>
              ) : (
                <>
                  <Link href="/admin/login" className="flex-1 text-center py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Sign In
                  </Link>
                  <Link href="/admin/register" className="flex-1 text-center py-3 bg-travel-blue text-white rounded-lg text-sm font-medium">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
