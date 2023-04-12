/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        correct: "#12e62b",
        misplaced: "#e6e612",
        incorrect: "#e61212",
      },
      backgroundColors: {
        correct: "#12e62b",
        misplaced: "#e6e612",
        incorrect: "#e61212",
      },
    },
  },
  plugins: [],
};
