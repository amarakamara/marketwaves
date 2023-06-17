/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      gold: "#d8ba75",
      greenColor: "#019267",
      green: "#c1d8c8",
      black: "#000000",
      lightB: "#171717",
      white: "#ffffff",
    },
    screens: {
      mobile: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      cs: "1024px",
      sc:"1372px"
    },
    extend: {
      spacing: {
        120: "7.5rem",
        200: "12.5rem",
        300: "18.75rem",
      },
    },
  },
  plugins: [],
};
