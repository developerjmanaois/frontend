/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        themify: ["Themify", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        nanum: ["Nanum Myeongjo", "serif"],
        nanumBold: ["Nanum", "sans-serif"],
      },
    },
    colors: {
      pink: "#FF817E",
      overlay: "#F27E79",
      white: "#FFFFFF",
      beige: "#FCF5EE",
      gray: "#8C8C8C",
    }
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

