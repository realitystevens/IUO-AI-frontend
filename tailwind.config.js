/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        primary: 'var(--primary)',
        primary600: 'var(--primary-600)',
        light100: 'var(--light-100)',
        light200: 'var(--light-200)',
        grey100: 'var(--grey-100)',
        grey200: 'var(--grey-200)',
        grey300: 'var(--grey-300)',
      },
    },
  },
  plugins: [],
}
