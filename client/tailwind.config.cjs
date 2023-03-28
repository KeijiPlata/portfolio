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
        Poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        customBlue: "#96B9D0",
        customlightBlue: "#BFD4DB",
        customYellow: "#FDFD96",
        customViolet: "#9696FD",
      },
    },
  },
  plugins: [],
}
