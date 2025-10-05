/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e0f2e9",
          200: "#c1e5d3",
          300: "#a3d8bd",
          400: "#84cba7",
          500: "#65be91",
          600: "#519874",
          700: "#3d7257",
          800: "#284c3a",
          900: "#14261d",
        },
        secondary: "#b232b0ff",
        accent: "#29af29ff",
      },
    },
  },
  plugins: [],
};
