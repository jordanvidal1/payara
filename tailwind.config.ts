import type { Config } from "tailwindcss";
import { theme } from "./src/styles/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        sans: ["Satoshi", ...theme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
