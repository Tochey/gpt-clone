/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        primary: "#202225",
        secondary: "#5865f2",
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          500: "#6e767d",
          400: "#8a8c90",
          300: "#b9bbbe",
          200: "#d4d7dc", 
          100: "#e3e5e8",
        }
      }
    },
  },
  plugins: [],
}

