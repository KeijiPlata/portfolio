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
        customlightViolet: "#9D85B9",
        customViolet: "#7F6F9E",
        customBgblack: "#1F1F21",
        customFrblack: "#212123",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
