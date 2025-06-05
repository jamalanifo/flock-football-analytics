"use client"
import React, { useState } from 'react';
import Link from 'next/link';

// Navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Dashboards', path: '/dashboards' },
  { name: 'About', path: '/about' },
  { name: 'Login', path: '/login' },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8]">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Site Name */}
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-[#B19CD9]">Flock Football</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path}
                      className="text-[#606060] hover:text-[#B19CD9] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#606060] focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4">
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path}
                      className="block text-[#606060] hover:text-[#B19CD9] transition-colors py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#606060] text-white py-4 md:py-6 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm md:text-base">© {new Date().getFullYear()} Flock Football Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}