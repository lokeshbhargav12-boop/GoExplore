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
    { href: '/cars/', label: 'Cars' },
    { href: '/booking/', label: 'Booking' },
    { href: '/about/', label: 'About' },
    { href: '/contact/', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-sm">GE</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">Go Explore</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {isGuestUser ? (
              <>
                <Link href="/admin/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                  Sign In
                </Link>
                <Link href="/admin/register" className="px-5 py-2.5 text-sm font-medium bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Complete Registration
                </Link>
              </>
            ) : isAuthenticated ? (
              <>
                <span className="text-sm text-gray-500">Welcome, {user.email?.split('@')[0] || 'User'}</span>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link href="/admin/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors">
                  Sign In
                </Link>
                <Link href="/admin/register" className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
                {isGuestUser ? (
                  <>
                    <Link href="/admin/login" className="flex-1 px-4 py-3 text-sm font-medium border border-gray-200 rounded-lg text-center">
                      Sign In
                    </Link>
                    <Link href="/admin/register" className="flex-1 px-4 py-3 text-sm font-medium bg-amber-500 text-white rounded-lg text-center">
                      Complete Registration
                    </Link>
                  </>
                ) : isAuthenticated ? (
                  <div className="flex flex-col w-full gap-2">
                    <span className="px-4 py-2 text-sm text-gray-500">Welcome, {user.email?.split('@')[0] || 'User'}</span>
                    <button
                      onClick={() => { logout(); setIsMenuOpen(false); }}
                      className="w-full px-4 py-3 text-sm font-medium text-red-600 border border-red-200 rounded-lg"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <>
                    <Link href="/admin/login" className="flex-1 px-4 py-3 text-sm font-medium border border-gray-200 rounded-lg text-center">
                      Sign In
                    </Link>
                    <Link href="/admin/register" className="flex-1 px-4 py-3 text-sm font-medium bg-black text-white rounded-lg text-center">
                      Register
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
