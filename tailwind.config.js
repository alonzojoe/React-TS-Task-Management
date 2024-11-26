/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#5F33E1",
        primaryDark: "#2A098A",
        secondary: "#EDE8FF",
        textPrimary: "#24252C",
        textSecondary: "#6E6A7C",
        lightPink: "F478B8",
        darkPink: "#F478B8",
        bgMain: "#FBFCFC",
        cardBg: "#FFFFFF",
        darkBlue: "#0087FF",
        lightBlue: "#E7F3FF",
        darkOrange: "#FF7D53",
        lightOrange: "#FFE9E1",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
