const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    colors: {
      teal: colors.teal,
      cyan: colors.cyan,
      gray: colors.gray,
      white: '#fff'
    },
    extend: {},
  },
  plugins: [],
}