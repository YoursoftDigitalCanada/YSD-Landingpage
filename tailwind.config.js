/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#0F9F76",
        brandGreen: "#0F9F76",
        brandCyan: "#06B6D4",
        brandYellow: "#F59E0B",
        brandOrange: "#F59E0B",
        ink: "#0B1220",
        muted: "#52525B",
        line: "#E5E7EB",
        soft: "#FCFCFA"
      },
      borderRadius: {
        brand: "14px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(15,23,42,0.07)",
        color: "0 18px 44px rgba(6,182,212,0.18)"
      }
    }
  },
  plugins: []
};
