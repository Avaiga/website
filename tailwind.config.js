// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px',
      56: '56px',
      64: '64px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#070709',
      white: '#ffffff',
      primary: {
        red: '#ff371a',
      },
      secondary: {
        blue: '#72bff1',
      },
      orange: {
        1: '#ff462b',
        70: '#eca979',
      },
      grey: {
        10: '#16161d',
        15: '#21212c',
        20: '#2f2e38',
        30: '#474653',
        40: '#62616b',
        50: '#7a7986',
        60: '#95949e',
        70: '#afafb6',
        80: '#c8c7d1',
        90: '#e2e2e9',
        94: '#eeedf2',
        98: '#f9f9fb',
      },
      code: {
        blue: '#5199f7',
        green: '#8cd8d0',
        purple: '#a57ccd',
        orange: '#e2aa80',
      },
      semitones: {
        red: '#ec6856',
        purple: '#b6c6fa',
      },
    }),
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
