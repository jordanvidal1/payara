/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: ({ theme }) => ({
        light: `0px 4px 24px 0px ${theme("colors.violet.400")}`,
        "light-sm": `0px 4px 14px 0px ${theme("colors.violet.400")}`,
        "light-md": `0px 4px 34px 0px ${theme("colors.violet.400")}`,
        "light-l": `0px 4px 44px 0px ${theme("colors.violet.400")}`,
        "light-xl": `0px 4px 54px 0px ${theme("colors.violet.400")}`,
        "light-2xl": `0px 4px 74px 0px ${theme("colors.violet.400")}`,
        dark: `0px 4px 24px 0px ${theme("colors.gray.950")}`,
        "dark-sm": `0px 4px 14px 0px ${theme("colors.gray.950")}`,
        "dark-md": `0px 4px 34px 0px ${theme("colors.gray.950")}`,
        "dark-l": `0px 4px 44px 0px ${theme("colors.gray.950")}`,
        "dark-xl": `0px 4px 54px 0px ${theme("colors.gray.950")}`,
        "dark-2xl": `0px 4px 74px 0px ${theme("colors.gray.950")}`,
      }),
      colors: {
        gray: {
          50: "#ffffff",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        orange: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
