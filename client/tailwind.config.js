/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  safelist: [
    'text-red-500',
    'bg-blue-500',
    'hidden',
    'block',
    // add more as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}