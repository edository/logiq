const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js",
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
  plugins: [
    require('flowbite/plugin')
  ],
}