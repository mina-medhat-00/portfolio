/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      colors: {
        apple: {
          nav: "#161617",
          card: "#1d1d1f",
          text: "#f5f5f7",
          body: "#e8e8ed",
          muted: "#86868b",
          blue: "#2997ff",
        },
      },
    },
  },
  plugins: [],
};
