/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubiks: ['Rubik Vinyl', 'cursive'],
      },
      colors: {
        customBlue: "#96B9D0",
      },
    },
  },
  plugins: [],
}
