/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        'solwr-yellow': '#EBFF00'
      }
    },
  },
  plugins: [],
}
