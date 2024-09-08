import { colors, keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      orange: "#f26300",
      blue: "#2453d4",
      gray: {
        primary: "#676770",
        secondary: "#6d758d",
        light: "#acacac",
      },
    },
  },
};

export default keepTheme(config);
