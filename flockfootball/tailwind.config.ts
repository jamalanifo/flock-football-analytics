import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Updated Flock Football Brand Colors - Softer Pastels
        "flock-purple": "#B19CD9",      // Pastel Purple - main brand color
        "flock-gold": "#F2D680",        // Pastel Gold - accent color  
        "flock-pink": "#F4A7B9",        // Pastel Pink - highlight color
        "flock-light": "#F8F8F8",       // Light Gray - subtle backgrounds
        "flock-dark": "#000000",        // Charcoal Gray - text color
        "flock-background": "#f0f0f0",  // Page background - soft gray
        "flock-surface": "#ffffff",     // Card/component background
        
        // New card-specific colors from HTML preview
        "flock-card-bg": "rgba(254, 252, 255, 0.95)", // Very light off-white with subtle purple hint
        "flock-card-hover": "rgba(254, 252, 255, 1)",  // Solid version for hover
        
        // Gradient colors for dashboard previews
        "gradient-soft-lilac": "#E6D9F5", // Soft lilac for gradients
        
        // Modern design system colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#B19CD9",
        secondary: "#F2D680", 
        accent: "#F4A7B9",
        light: "#F8F8F8",
        dark: "#000000",
        surface: "#ffffff",
      },
      borderRadius: {
        'card': '16px',
        'button': '25px',
        'hero': '30px',
        'screenshot': '10px',
        'type-badge': '12px',
      },
      boxShadow: {
        'card': '0 8px 25px rgba(0,0,0,0.1)',
        'card-hover': '0 12px 35px rgba(0,0,0,0.15)',
        'hero': '0 15px 40px rgba(0,0,0,0.15)',
        'hero-hover': '0 20px 50px rgba(0,0,0,0.2)',
        'glass': '0 4px 12px rgba(0,0,0,0.1)',
      },
      backdropBlur: {
        'glass': '10px',
      },
      spacing: {
        'hero-padding': '3.75rem', // 60px
        'card-padding': '1.25rem', // 20px
        'section-gap': '3.75rem',  // 60px
      },
      fontSize: {
        'hero-title': ['3.5rem', { lineHeight: '1.2', fontWeight: '300' }],
        'hero-subtitle': ['1.2rem', { lineHeight: '1.5' }],
        'dashboard-name': ['1.1rem', { fontWeight: '600' }],
        'dashboard-desc': ['0.85rem', { lineHeight: '1.4' }],
        'type-badge': ['0.75rem', { fontWeight: '500' }],
      },
      animation: {
        'hover-lift': 'hover-lift 0.3s ease',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'hover-lift': {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-4px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      gridTemplateColumns: {
        'dashboard-responsive': 'repeat(auto-fit, minmax(280px, 1fr))',
        'dashboard-large': 'repeat(3, 1fr)',
      },
    },
  },
  plugins: [],
  // Add safelist for dynamic classes
  safelist: [
    'text-flock-purple',
    'text-flock-gold', 
    'text-flock-pink',
    'text-flock-dark',
    'bg-flock-purple',
    'bg-flock-gold',
    'bg-flock-pink',
    'bg-flock-light',
    'bg-flock-surface',
    'bg-flock-background',
    'border-flock-purple',
    'border-flock-gold',
    'border-flock-pink',
    'hover:bg-flock-purple',
    'hover:bg-flock-gold',
    'hover:bg-flock-pink',
    'gradient-1',
    'gradient-2', 
    'gradient-3',
  ],
};

export default config;