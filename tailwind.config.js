/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: "#070514", // Near-black navy/purple
          card: "#0d0a21", // Card background
          border: "#1e1b4b", // Deep indigo border
        },
        sunset: {
          purple: "#6366f1", // purple/indigo
          coral: "#f43f5e",  // coral/pink
          gold: "#eab308",   // gold/yellow
        }
      },
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        superwide: "0.25em",
        extrawide: "0.15em",
      },
    },
  },
  plugins: [],
}
