import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
