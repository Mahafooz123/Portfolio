/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Look for all component files in src
  ],
  theme: {
    // Custom theme for a luxury, modern feel
    extend: {
      colors: {
        'dark-primary': '#1A1A1A', // Deep charcoal/black - Main background
        'dark-secondary': '#333333', // Slightly lighter dark - Component backgrounds/dividers
        'accent-gold': '#C8A858', // Sophisticated gold/brass accent - Primary highlight color
        'light-text': '#F5F5F5', // Off-white text - Main text color
      },
      fontFamily: {
        'sans': ['Playfair Display', 'serif'], // A classy serif for a luxury feel
        'mono': ['Source Code Pro', 'monospace'], // A clean mono for code/tech
      },
      // Ensure all shadows are crisp and not rounded/soft
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}