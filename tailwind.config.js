import { heroui } from "@heroui/theme";
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
    fontSize: {
          base: "2rem", // 20px instead of 16px
          lg: "3rem",
          xl: "3rem",
        },
      colors: {
        // Default (light mode)

      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          foreground: "#111111", // light mode
          background: "#ffffff", // light mode
          primary: "#512477",
        },
      },
      dark: {
        colors: {
          foreground: "#ffffff",
           background: "#111111",
          primary: "#512477", // dark mode
        },
      },
    },
  }),
],
};

export default config;
