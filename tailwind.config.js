/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#5ACF3F",
        brandGreen: "#5ACF3F",
        brandCyan: "#22C7F2",
        brandYellow: "#FFD93D",
        brandOrange: "#FF8A1F",
        ink: "#18181B",
        muted: "#52525B",
        line: "#E4E4E7",
        soft: "#FCFCFA"
      },
      borderRadius: {
        brand: "14px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(24,24,27,0.07)",
        color: "0 18px 44px rgba(34,199,242,0.18)"
      }
    }
  },
  plugins: []
};
