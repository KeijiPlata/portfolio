/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubiks: ["Rubik Vinyl", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBlue: "#96B9D0",
        customlightBlue: "#BFD4DB",
        customYellow: "#FDFD96",
        customlightViolet: "#7F6F9E",
        customViolet: "#9D85B9",
        customBgblack: "#252526",
        customFrblack: "#2d2d30",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
