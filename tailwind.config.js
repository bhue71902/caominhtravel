/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(232, 201, 137, 1)",
        secondary: "#b232b0ff",
        accent: "#29af29ff",
      },
    },
  },
  plugins: [],
};
