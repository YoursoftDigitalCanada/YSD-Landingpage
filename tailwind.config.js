/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#10B981",
        brandGreen: "#10B981",
        brandCyan: "#06B6D4",
        brandYellow: "#F59E0B",
        brandOrange: "#F97316",
        ink: "#18181B",
        muted: "#52525B",
        line: "#E4E4E7",
        soft: "#FCFCFA"
      },
      borderRadius: {
        brand: "5px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(24,24,27,0.07)",
        color: "0 18px 44px rgba(6,182,212,0.18)"
      }
    }
  },
  plugins: []
};
