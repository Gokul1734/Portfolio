/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      Primary: "#C1B5A2",
      Secondary: "#B79061",
      Linearcolor: "#C1B5A2",
      skillset: "#373737",
    },
    fonts: {},
    borderRadius: {
      none: "0",
      xs: "0.3125rem",
      sm: "0.9375rem",
      default: "1rem",
      lg: "1.25rem",
      xl: "1.3125rem",
      "2xl": "2.8125rem",
      "3xl": "4.375rem",
    },
    extend: {
      scale: {
        65: "0.65",
      },
      invert: {
        90: ".90",
      },
    },
  },

  plugins: [],
};
