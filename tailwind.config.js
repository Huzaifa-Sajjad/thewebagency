module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,scss}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#111111",
      black: "#111111",
      white: "#fff",
      purple: "#543162",
      grayBg: "#F7F7F7",
      gray: "#707070",
      lightGray: "#c4c4c4",
    },
    fontSize: {
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      52: "52px",
      56: "56px",
    },
    maxWidth: {
      25: "25ch",
      28: "28ch",
      35: "35ch",
      45: "45ch",
      55: "55ch",
      65: "65ch",
      75: "75ch",
      85: "85ch",
      "1/2": "50%",
      "3/4": "75%",
      "4/4": "85%",
    },
    maxHeight: {
      100: "20rem",
      120: "25rem",
    },
    screens: {
      xs: "250px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1336px",
    },
    container: {
      padding: {
        xs: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    cursor: {
      none: "none",
    },
  },
  variants: {},
  plugins: [],
};
