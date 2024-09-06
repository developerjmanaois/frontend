/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      screens: { 'xs': { 'max': '640px' } },
      fontFamily: {
        themify: ["Themify", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        nanum: ["Nanum Myeongjo", "serif"],
        nanumBold: ["Nanum", "sans-serif"],
      },
    },
    colors: {
      pink: "#FF817E",
      lightpink: "#FFE5E4",
      bgwhite: "#FFF9F8",
      overlay: "#F27E79",
      white: "#FFFFFF",
      beige: "#FCF5EE",
      gray: "#8C8C8C",
      darkGray: "#30383B",
      lightgray: "#E8E5E5",
      iconcolor: "#3A4454",
      dropdownbg: "#FBF5ED",
    }
  },
  plugins: [require("daisyui", "tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

