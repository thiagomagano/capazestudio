/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: "#fe5f2d",
      "capaz-orange": {
        50: "#fff3ed",
        100: "#ffe4d4",
        200: "#ffc5a9",
        300: "#ff9c72",
        400: "#fe5f2d",
        500: "#fd4012",
        600: "#ee2608",
        700: "#c51809",
        800: "#9c1510",
        900: "#7e1510",
        950: "#440606",
      },
      secondary: "#f7f4e0",
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
    fontFamily: {
      display: ["Overused Grotesk"],
      body: ['"Overused Grotesks"'],
      long: ["Erode", "Erode Italic"],
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "135%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "primary",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20), blink .7s infinite",
      },
    },
  },
  plugins: [],
};
