/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gamingOrange: '#FF7900'
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(255,121,0,0.5), 0 8px 24px rgba(255,121,0,0.15)'
      }
    }
  },
  plugins: []
};
