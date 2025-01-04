/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          400: '#2A2A2A',
          500: '#1A1A1A',
          600: '#141414',
        },
        'light': {
          400: '#F5F5F5',
          500: '#FFFFFF',
          600: '#E5E5E5',
        },
        'teacch': {
          green: '#00A651',
          orange: '#F15A29',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)'],
        body: ['var(--font-space-grotesk)'],
      },
    },
  },
  plugins: [],
} 