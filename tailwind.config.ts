import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        royal: {
          maroon: "#72152b",
          crimson: "#8b1834",
          burgundy: "#540d1e",
          gold: "#d4af37",
          goldLight: "#f4dc86",
          goldDark: "#aa820a",
          dark: "#141416",
          charcoal: "#1f1f23",
          cream: "#fbf8f2",
          ivory: "#f5eee2",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        goldGlow: "0 0 25px -5px rgba(212, 175, 55, 0.35)",
        cardSoft: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
        cardHover: "0 20px 40px -15px rgba(114, 21, 43, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
