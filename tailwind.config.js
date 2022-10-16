/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#009444",
      secondary: "#F38105",
      primaryAcent: "#F1FFF0",
      secondaryAcent: "#FFD600",
      lightGray: "#747474",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
