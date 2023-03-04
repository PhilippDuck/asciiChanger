/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPurple: "#541ad9",
        myBlue: "#00b7ef",
      },
    },
  },
  plugins: [],
}