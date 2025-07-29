// client/tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",     // ✅ your components
    "./index.html",                        // ✅ Vite entry point
  ],
  theme: {
    extend: {},
  },
  safelist: [                              // ✅ Force Tailwind to keep these
    'mandala-bg',
    'sacred-gradient',
    'divine-border',
    'floating-petals',
    'text-red-500',
    'bg-yellow-100',
    'border-image',
    'bg-gradient-to-r',
    'from-purple-500',
    'via-pink-500',
    'to-yellow-500',
  ],
  plugins: [],
}