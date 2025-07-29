// tailwind.config.js
module.exports = {
  content: [
    "./client/src/**/*.{html,js,ts,tsx}",
    "./index.html",
  ],
  safelist: [
    'text-red-500', 'bg-yellow-100', 'mandala-bg', 'sacred-gradient',
    // Add any dynamic or custom classes here
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}