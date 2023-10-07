/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "background-color": "#fffaeb",
          "text-color": "#130e01",
          primary: "#ff8400",
          secondary: "#fff5d6",
          accent: "#cf4307",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "background-color": "#140f00",
          "text-color": "#fef9ec",
          primary: "#ff8400",
          secondary: "#291f00",
          accent: "#f86c30",
        },
      },
    ],
  },
};
