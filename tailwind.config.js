/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgLightColor: "#F6F6F8",
        bgDarkColor: "#313131",
        darkMain: "#262626",
      },
      backgroundImage: {
        bgLight: "url('/src/assets/images/bg7.jpg')",
        bgDark: "url('/src/assets/images/bg6.jpg')",
      },
      fontSize: {
        "10xl": "10rem",
      },
      boxShadow: {
        "box-red":
          "0 0 5px #c20000, 0 0 25px #c20000, 0 0 50px #c20000, 0 0 100px #c20000;",
        "box-blue":
          "0 0 5px #0013c2, 0 0 25px #0013c2, 0 0 50px #0013c2, 0 0 100px #0013c2;",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
