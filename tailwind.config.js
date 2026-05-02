/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#49D879",
        brandGreen: "#49D879",
        brandCyan: "#2EC7D9",
        brandYellow: "#FFC62E",
        brandOrange: "#FF7417",
        ink: "#26333D",
        muted: "#65717A",
        line: "#E8E8E5",
        soft: "#F7F8F6"
      },
      borderRadius: {
        brand: "5px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(38,51,61,0.08)",
        color: "0 18px 44px rgba(46,199,217,0.16)"
      }
    }
  },
  plugins: []
};
