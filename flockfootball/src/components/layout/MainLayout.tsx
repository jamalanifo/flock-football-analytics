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
    <div className="min-h-screen bg-background">
      {/* Main content area with padding for the floating nav */}
      <div className="pt-24 pb-8 px-4">
        
        {/* Floating Navigation Bar - positioned fixed at top */}
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
          <div className="glass-nav rounded-[50px] px-8 py-4 flex justify-between items-center shadow-glass">
            
            {/* Logo Section - Fixed to remove giant logo issue */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FF</span>
              </div>
              <span className="text-xl font-bold text-dark">Flock Football</span>
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.slice(0, 3).map((link) => (
                <Link 
                  key={link.path}
                  href={link.path}
                  className="text-dark hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/login"
              className="hidden md:inline-block px-6 py-3 rounded-[25px] border-2 border-dark text-dark font-bold hover:bg-dark hover:text-white transition-all duration-300"
            >
              Login
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-dark focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 glass-nav rounded-2xl p-6 shadow-glass">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    href={link.path}
                    className="text-dark hover:text-primary transition-colors duration-300 font-medium py-2"
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
        <main className="container mx-auto max-w-6xl">
          {children}
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Flock Football Analytics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}