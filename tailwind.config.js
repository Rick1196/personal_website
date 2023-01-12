const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      card: "-5px 10px 19px -8px rgba(0,0,0,0.76);",
      darkCard: "-5px 10px 19px -8px rgba(240,234,234,0.46);",
      button: "-9px 5px 12px -1px rgba(0,0,0,0.46);",
      darkButton: "-9px 5px 12px -1px rgba(240,234,234,0.46);",
      bullet: "-9px 5px 20px -1px rgba(219,195,242,0.38);",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".safe-top": {
          paddingTop: "constant(safe-area-inset-top)",
          paddingTop: "env(safe-area-inset-top)",
        },
        ".safe-left": {
          paddingLeft: "constant(safe-area-inset-left)",
          paddingLeft: "env(safe-area-inset-left)",
        },
        ".safe-right": {
          paddingRight: "constant(safe-area-inset-right)",
          paddingRight: "env(safe-area-inset-right)",
        },
        ".safe-bottom": {
          paddingBottom: "constant(safe-area-inset-bottom)",
          paddingBottom: "env(safe-area-inset-bottom)",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
