import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          default: "#FFB400",
          100: "#FEF8D4",
          200: "#FEEFAB",
          300: "#FCE280",
          400: "#FAD660",
          500: "#FFB400",
          600: "#D5A020",
          700: "#B28016",
          800: "#8F620E",
          900: "#774D08",
        },
        dark: {
          default: "#121213",
          100: "#F0F0F3",
          200: "#E2E2E7",
          300: "#B2B2B8",
          400: "#656565",
          500:"#111111"
        },
      },
    },
  },
  plugins: [],
};
export default config;
