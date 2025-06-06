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
        sans: ['var(--font-inter)'],
      },
      colors: {
        // Updated v33 colors
        primary: "#E6D9F5",           // Soft lilac (for hero background)
        secondary: "#F2D680",         // Pastel Gold (keep same)
        accent: "#F4A7B9",            // Pastel Pink (keep same)
        light: "#F8F8F8",             // Light Gray (keep same)
        dark: "#606060",              // Charcoal Gray (keep same)
        
        // New v33 background system
        background: "#F0EBFA",        // Light lilac page background
        surface: "#FEFCFF",           // Off-white content areas
        
        // Content area utilities
        'content-bg': "#FEFCFF",      // Off-white for cards/hero
        'page-bg': "#F0EBFA",         // Light lilac for page background
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glass': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'hover': '0 15px 40px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};

export default config;