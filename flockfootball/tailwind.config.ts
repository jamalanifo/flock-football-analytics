import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'text-[#B19CD9]',
    'bg-[#B19CD9]',
    'text-[#F2D680]',
    'bg-[#F2D680]',
    'text-[#F4A7B9]',
    'bg-[#F4A7B9]',
    'text-[#F8F8F8]',
    'bg-[#F8F8F8]',
    'text-[#606060]',
    'bg-[#606060]',
  ],
  theme: {
    extend: {
      colors: {
        "flock-purple": "#B19CD9",
        "flock-gold": "#F2D680",
        "flock-pink": "#F4A7B9",
        "flock-light": "#F8F8F8",
        "flock-dark": "#606060",
      },
    },
  },
  plugins: [],
};

export default config;