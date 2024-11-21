/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'negmshadow': '0px 0px 4px 0px rgba(255,255,255,1)',
      }
    },
  },
  plugins: [],
}
