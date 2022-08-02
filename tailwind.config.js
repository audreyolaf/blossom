/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      babyPink: '#FFC2DA',
      babyBlue: '#8EB3E4',
      lightSal: '#FFE7DC',
      Salmon: '#FF6161',
      whitepink: "#FAEDF6"
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}