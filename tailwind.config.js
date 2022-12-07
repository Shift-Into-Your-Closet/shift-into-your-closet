/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
      fadeInUp: {
        "0%": {
          opacity: 0,
          transform: "translate3d(0, 30%, 0)",
        },
        "100%": {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
