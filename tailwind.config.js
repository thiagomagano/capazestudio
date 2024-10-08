/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    // fontSize: {
    //   sm: "0.8rem",
    //   base: "1rem",
    //   xl: "1.25rem",
    //   "2xl": "1.563rem",
    //   "3xl": "1.953rem",
    //   "4xl": "2.441rem",
    //   "5xl": "3.052rem",
    // },
    extend: {
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
        esperanca: "#DB3228",
        latina: "#003B51",
      },
      fontFamily: {
        display: ["Overused Grotesk"],
        body: ['"Overused Grotesks"'],
        long: ["Erode", "Erode Italic"],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
