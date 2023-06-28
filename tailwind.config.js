/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      smTab: "38.75em",
      tab: "45em",
    },
    colors: {
      red: "#FF5252",
      purple: "#A445ED",
      black: "#050505",
      lightBlack: "#1F1F1F",
      darkGray: "#2D2D2D",
      gray: "#3A3A3A",
      lightGray: "#757575",
      veryLightGray: "#E9E9E9",
      offWhite: "#F4F4F4",
      white: "#ffffff",
    },
    fontFamily: {
      inter: "'Inter', sans-serif",
      lora: "'Lora', serif",
      inconsolata: "'Inconsolata', monospace",
    },
    gridTemplateColumns:{
      mob: "24px repeat(10,1fr) 24px",
      tab: "40px repeat(10,1fr) 40px",
    },
    extend: {},
  },
  plugins: [],
};

