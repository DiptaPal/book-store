/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#ED553B",
        secondary: "#393280",
        accent: "#268dd6"
      },
      screens: {
        'sx': '540px',
      },
    },
  },
  plugins: [],
}