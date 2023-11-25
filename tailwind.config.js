// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./Screen/**/*.{js,jsx,ts,tsx}",
    "./Components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F8F9FB",
        white50: "#E7ECF0",
        gray: "#C5CDD2",
        gray50: "#A9B4BC",
        gray100: "#606D76",
        gray200: "#354349",
        black: "#1B262E",
        blue: "#2A4BA0",
        indigo: "#153075",
        orange: "#F9B023",
        yellow: "#FFC83A",
      },
    },
  },
  plugins: [],
};
