/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "#1f2937", // custom class name
        background: "#f9fafb", // example bg-background fix
      },
    },
  },
  plugins: [],
}
