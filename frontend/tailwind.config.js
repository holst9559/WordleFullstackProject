/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Correct: "#12e62b",
        Misplaced: "#e6e612",
        Incorrect: "#e61212",
      },
      backgroundColors: {
        Correct: "#12e62b",
        Misplaced: "#e6e612",
        Incorrect: "#e61212",
      },
    },
  },
  plugins: [],
};
