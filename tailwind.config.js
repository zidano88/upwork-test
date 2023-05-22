/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkest: "#080f1e",
          dark: "#161729",
          DEFAULT: "#615d91",
          light: "#7484b1",
          lightest: "#9fa5ba",
        },
        secondary: {
          darkest: "#324054",
          dark: "#515861",
          DEFAULT: "#7484b1",
          light: "#9b9a9f",
          lightest: "#b4b3c3",
        },
      },
    },
  },
  plugins: [],
};
