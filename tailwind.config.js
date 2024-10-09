/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2F4DBE",
          600: "#140E3B",
        },
        light: {
          100: "#F1F5FB",
          200: "#E9F0FB",
        },
        grey: {
          100: "#EDEDED",
          200: "#D4D4D4",
          300: "#97A4B2",
        },
      },
    },
  },
  plugins: [],
};
