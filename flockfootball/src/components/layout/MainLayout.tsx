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
    <div className="min-h-screen bg-[rgba(254,252,255,0.95)]">
      {/* Main content area with padding for the floating nav */}
      <div className="pb-8 px-4">
        
        {/* Floating Navigation Bar - positioned fixed at top */}
        <nav className="w-full max-w-[95%] md:max-w-[1200px] lg:max-w-[1450px] mx-auto px-2 md:px-4 pt-4 md:pt-6 mb-40">
          <div className="glass-nav rounded-[25px] md:rounded-[40px] lg:rounded-[50px] px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 flex justify-between items-center shadow-glass">
            
            {/* Logo Section - Responsive sizes */}
            <Link href="/" className="flex items-center space-x-2 md:space-x-3">
              <img 
                src="/logo.png" 
                alt="Flock Football Logo" 
                className="h-8 w-8 md:h-24 md:w-24 lg:h-40 lg:w-40 object-contain"
              />
              <div className="flex flex-col text-center">
                <span className="text-sm md:text-2xl lg:text-3xl font-bold text-dark leading-tight">Flock Football</span>
                <span className="text-sm md:text-2xl lg:text-3xl font-bold text-dark leading-tight">Analytics</span>
              </div>
            </Link>
            
            {/* Desktop Navigation Links - Hidden on mobile/tablet, shown on large screens */}
            <div className="hidden lg:flex space-x-8 xl:space-x-12">
              {navLinks.slice(0, 3).map((link) => (
                <Link 
                  key={link.path}
                  href={link.path}
                  className="text-dark hover:text-primary transition-colors duration-300 font-medium text-xl xl:text-3xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* CTA Button - Responsive sizing */}
            <Link 
              href="/login"
              className="hidden md:inline-block px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-[20px] md:rounded-[25px] border-2 border-dark text-dark font-bold hover:bg-dark hover:text-white transition-all duration-300 text-sm md:text-base lg:text-lg"
            >
              Login
            </Link>
            
            {/* Mobile Menu Button - Shows on mobile/tablet */}
            <button 
              className="lg:hidden text-dark focus:outline-none p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Navigation Menu - Responsive design */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-2 md:mt-4 glass-nav rounded-xl md:rounded-2xl p-4 md:p-6 shadow-glass">
              <div className="flex flex-col space-y-3 md:space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    href={link.path}
                    className="text-dark hover:text-primary transition-colors duration-300 font-medium py-2 text-base md:text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
        
        {/* Main Content - This will be your page content */}
        <main className="container mx-auto max-w-[95%] md:max-w-[90%]">
          {children}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-6 md:py-8 mt-8 md:mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-sm opacity-80">© {new Date().getFullYear()} Flock Football Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}