/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#faeed1",
        parchment: "#f5e7c7",
        gold: "#d8b46a",
        bronze: "#9b6f38",
        ruby: "#a12230",
        garnet: "#7d1f2d",
        ink: "#14110f",
        soot: "#2b211d",
        olive: "#465532",
        mist: "#f7f0dd",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Manrope"', "sans-serif"],
        signature: ['"Halimum"', '"Snell Roundhand"', '"Segoe Script"', "cursive"],
      },
      boxShadow: {
        luxury: "0 30px 80px rgba(34, 20, 15, 0.22)",
        velvet: "0 18px 60px rgba(96, 24, 34, 0.18)",
      },
    },
  },
  plugins: [],
};
