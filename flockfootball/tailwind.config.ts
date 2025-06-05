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
        // Your brand colors
        primary: "#B19CD9",      // Pastel Purple
        secondary: "#F2D680",    // Pastel Gold
        accent: "#F4A7B9",       // Pastel Pink
        light: "#F8F8F8",        // Light Gray
        dark: "#606060",         // Charcoal Gray
        background: "#B19CD9",   // Changed to match your purple background
        surface: "#ffffff",      // Card/component background
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