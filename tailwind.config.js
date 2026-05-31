/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#1E40AF",
        brandGreen: "#10B981",
        brandCyan: "#06B6D4",
        brandYellow: "#F97316",
        brandOrange: "#F97316",
        ink: "#111827",
        muted: "#64748B",
        line: "#E2E8F0",
        soft: "#F8FAFC"
      },
      borderRadius: {
        brand: "14px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(15,23,42,0.07)",
        color: "0 18px 44px rgba(30,64,175,0.18)"
      }
    }
  },
  plugins: []
};
