/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['"Poppins"', 'cursive'] 
      },
      backgroundImage: {
        "close-menu" : "url('../assets/ima/icon-close.svg')",
        "open-menu" : "url('../assets/ima/icon-hamburger.svg')"
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
  darkMode: "class"
}