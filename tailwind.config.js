/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      pink: "#FF817E",
      white: "#FFFFFF",
    }
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

