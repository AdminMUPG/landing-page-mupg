/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f1fb',
          100: '#e1def7',
          200: '#c4bff0',
          300: '#a19ae6',
          400: '#827bdb',
          500: '#6A63B6', // Primary purple
          600: '#574f96',
          700: '#443c75',
          800: '#302954',
          900: '#1d1734',
        },
        tealAccent: '#18B7A5',
      },
    },
  },
  plugins: [],
}
