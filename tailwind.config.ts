import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#DFEA96",
        secondary: "#ED1C24",
        tertiary:'#EFF9A9',
        cream: "#FDFFF0",
        darkgreen: '#474C26'
      },
      width: {
        '4/14': '23.25%', // Add custom fractional width
        '3/7': '45.25%', // Add custom fractional width
      },
      fontFamily: {
        sans: ['Airbnb Cereal', 'ui-sans-serif', 'system-ui'], // Set Airbnb Cereal as default sans-serif
      },
      fontWeight: {
        light: '300',  // Use a string instead of a number
        normal: '400',
        bold: '600',
        xtrabold: '700',
        black: '900',
      },
      
    },
    
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
