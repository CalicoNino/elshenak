/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#c72c41",
        secondary: "#801336",
        tertiary: "#510a32",
        highlight: "#F99E4c",
        redspace: "#2d142c",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [
    function ({ addBase, addUtilities }) {
      addBase({
        "@keyframes bounce-around": {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
          },
          "25%": {
            transform: "translate(50%, -50%) rotate(45deg)",
          },
          "50%": {
            transform: "translate(100%, 0) rotate(90deg)",
          },
          "75%": {
            transform: "translate(50%, 50%) rotate(135deg)",
          },
          "100%": {
            transform: "translate(0, 0) rotate(180deg)",
          },
        },
      });

      addUtilities(
        {
          ".animate-bounce-around": {
            animation: "bounce-around 3s ease-in-out infinite",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
