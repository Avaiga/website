// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      // FIXME: Add the real project font families, which are imported in the "fonts.css" file,
      // and give them the human-readable names
      sans: ['', ...defaultTheme.fontFamily.sans],
      // FIXME: Remove the "mono" font family, if it is not used in the project
      mono: ['', ...defaultTheme.fontFamily.mono],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      // FIXME: Add colors which are used in the project. Make sure that they are prepared
      // in the Figma and followed the naming "primary/secondary/gray-${number}"
      // Example of correctly prepared colors in Figma — https://user-images.githubusercontent.com/20713191/143586876-5e834233-9639-4166-9811-b00e63820d98.png
      black: '',
      white: '',
      primary: {
        1: '',
      },
      secondary: {
        1: '',
      },
      gray: {
        1: '',
      },
    }),
    // FIXME: Check if the breakpoints ("screens") are correct for the project
    screens: {
      xl: { max: '1439px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '639px' },
      '2xs': { max: '413px' },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('tailwindcss-safe-area'),
  ],
};
