/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        o: ["Open Sans", ...defaultTheme.fontFamily.sans],
        p: ["Poppins", ...defaultTheme.fontFamily.sans],
        s: ["Source Sans 3", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      navy: "#0E2368",
      peach: "#E23744",
    },
  },
  plugins: [],
};
