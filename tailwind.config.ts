import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          100: "rgba(26,26,26,0.12)",
          200: "#F2F5F5",
          300: "#7A8484",
          400: "rgba(26, 26, 26, 0.7)",
          500: "#B3BEBE",
          600: "#5F6969",
          700: "#1A1A1A",
          800: "#2E3333",
          900: "rgba(26, 26, 26, 0.08)",
          1000: "#F9FCFC",
          1100: "rgba(26, 26, 26, 0.48)",
          1200: "#F1F5F9",
        },
        red: {
          100: "#FF6565",
        },
        green: {
          100: "#02B9B0",
          200: "#E2FFFD",
        },
        purple: {
          100: "#8318E7",
          200: "#F2E5FF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

