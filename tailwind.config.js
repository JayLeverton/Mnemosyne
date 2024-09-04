/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/*.{js,jsx}",
    "./src/Components/*.{js,jsx}",
    "./src/Pages/*.{js,jsx}"],
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-pink-500',
    'bg-purple-500',
    'bg-green-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-amber-500',
    'bg-emerald-500',
    'bg-teal-500',
    'bg-lightBlue-500',
    'bg-cyan-500',
    'bg-brown-500',
    // All possible statColor values
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

