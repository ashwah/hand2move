/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        800: '#0E5758',
        600: '#127475',
        300: '#0E9594',
      },
      'neutral': '#D6D2D2',
      'secondary': {
        600: '#562C2C',
        300: '#F2542D',
      },
      'gray': {
        800: '#273444',
        600: '#8492A6',
        400: '#D3DCE6',
        200: '#F5F4F4',
      },
    },
    extend: {},
  },
  plugins: [],
}