/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#2563EB",
        brandGreen: "#2563EB",
        brandCyan: "#0EA5E9",
        brandYellow: "#38BDF8",
        brandOrange: "#4F46E5",
        ink: "#18181B",
        muted: "#52525B",
        line: "#E4E4E7",
        soft: "#F8FBFF"
      },
      borderRadius: {
        brand: "14px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(24,24,27,0.07)",
        color: "0 18px 44px rgba(37,99,235,0.18)"
      }
    }
  },
  plugins: []
};
