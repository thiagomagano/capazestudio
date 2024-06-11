/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: "#fe5f2d",
      secondary: "#e8efce",
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      gray: {
        50: "#f5f5f6",
        100: "#e6e6e7",
        200: "#d0cfd2",
        300: "#afaeb2",
        400: "#86868a",
        500: "#6f6e73",
        600: "#5c5b5f",
        700: "#4e4d51",
        800: "#444446",
        900: "#3c3c3d",
        950: "#262527",
      },
    },
    extend: {},
  },
  plugins: [],
};
