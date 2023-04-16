/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        blackHanSans:['var(--blackHanSans)'],
        notoSans: ['var(--notoSansKr)'],
      },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      backgroundColor: {},
      transitionProperty: {
        all: "all",
      },
      transitionTimingFunction: {
        navMenuTF: "cubic-bezier(0.16, 1, 0.3,1)",
        nav: "cubic-bezier(.075,.82,.165,1)", 
      },
      transitionDuration: {
        navMenuDuration: "800ms",
      },
    },
    plugins: [],
  },
};
