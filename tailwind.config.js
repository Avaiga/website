// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = import("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: "#070709",
      white: "#ffffff",
      orange: {
        1: "#FF462B",
        70: "#ECA979",
      },
      gray: {
        5: "#0b0c0f",
        10: "#16181d",
        15: "#22242a",
        20: "#2e3038",
        30: "#454954",
        40: "#5e626e",
        50: "#787c87",
        60: "#9195a1",
        70: "#adb0b9",
        80: "#c8cad0",
        90: "#e4e5e8",
        94: "#efeff1",
      },
    }),
    screens: {
      xl: { max: "1439px" },
      lg: { max: "1279px" },
      md: { max: "1023px" },
      sm: { max: "767px" },
      xs: { max: "639px" },
      "2xs": { max: "413px" },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require("tailwindcss-safe-area"),
  ],
};
