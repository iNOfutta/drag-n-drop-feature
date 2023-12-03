/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work sans', 'sans-serif']
      }
    },
    color: {
      primary: "#E4EBF5",
      secondary: "#C3CAD9",
      tertiary: "#FFC107",
      textColor: "#8893A9",
      dark: "#42474B",
    },
  },
  plugins: [],
};
