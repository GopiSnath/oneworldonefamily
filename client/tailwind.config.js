/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // custom styles here
    },
  },
  safelist: [
    'text-white', 'text-black', 'text-orange-500', 'bg-white', 'bg-black',
    'font-bold', 'font-cinzel', 'text-xl', 'text-2xl', 'text-3xl',
    'mt-4', 'mb-4', 'p-4', 'pt-4', 'pb-4', 'rounded-xl', 'rounded-2xl',
    'uppercase', 'tracking-wide', 'text-center', 'animate-glow',
  ],
};

export default config;