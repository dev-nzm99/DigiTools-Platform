/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(79, 70, 229, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(99,102,241,0.14), transparent 28%), linear-gradient(to bottom, #f8fafc, #eef2ff)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
