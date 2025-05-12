import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ scans all your React files
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}" // ✅ for HeroUI
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // ✅ optional but often used with HeroUI
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            primary: {
              50: "#e6f7ff",
              100: "#b3e0ff",
              200: "#80caff",
              300: "#4db3ff",
              400: "#1a9cff",
              500: "#0077e6",
              600: "#005cb3",
              700: "#004280",
              800: "#00294d",
              900: "#000f1a",
              DEFAULT: "#0077e6",
              foreground: "#FFFFFF"
            },
            secondary: {
              50: "#f0f9ff",
              100: "#e0f2fe",
              200: "#bae6fd",
              300: "#7dd3fc",
              400: "#38bdf8",
              500: "#0ea5e9",
              600: "#0284c7",
              700: "#0369a1",
              800: "#075985",
              900: "#0c4a6e",
              DEFAULT: "#0ea5e9",
              foreground: "#FFFFFF"
            },
            success: {
              50: "#f0fdf4",
              100: "#dcfce7",
              200: "#bbf7d0",
              300: "#86efac",
              400: "#4ade80",
              500: "#22c55e",
              600: "#16a34a",
              700: "#15803d",
              800: "#166534",
              900: "#14532d",
              DEFAULT: "#22c55e",
              foreground: "#FFFFFF"
            }
          }
        }
      }
    })
  ]
};
