/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#838F61", // Verde Oliva CIES
          dark: "#363C27",    // Verde Bosque (Botones)
          light: "#E9EDDE"
        },
        "secondary": {
          DEFAULT: "#A7B287", // Verde Suave (Botones secundarios)
          dark: "#6D7556",
          light: "#F0F2E8"
        },
        "brand-green-light": "#99A27E",
        "brand-gray": "#54595F",
        "brand-gray-light": "#969595",
        "text-main": "#222222",
        "text-secondary": "#575760",
        "background-light": "#F7F8F9",
      },
      fontFamily: {
        "sans": ["Inter", "sans-serif"],
        "display": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
