module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#111111",
      white: "#fff",
      purple: "#543162",
      grayBg: "#F7F7F7",
      gray: "#828282",
      lightGray: "#c4c4c4",
    },
    fontSize: {
      xxs: "10px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "22px",
      "2xl": "24px",
      "3xl": "28px",
      "4-xl": "32px",
      "4xl": "34px",
      "5xl": "36px",
      "6xl": "40px",
      "7-xl": "42px",
      "7xl": "44px",
      "8xl": "48pc",
      "9xl": "56px",
    },
    maxWidth: {
      35: "35ch",
      45: "45ch",
      55: "55ch",
      65: "65ch",
      75: "75ch",
      85: "85ch",
    },
    maxHeight: {
      100: "20em",
      120: "25rem",
    },
    screens: {
      xs: "250px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        8: "4px",
        16: "8px",
        32: "16px",
        64: "32px",
      },
      borderRadius: {
        sm: "10px",
        md: "20px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
