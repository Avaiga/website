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
      44: '44px',
      48: '48px',
      56: '56px',
      64: '64px',
    },
    lineHeight: {
      ...defaultTheme.lineHeight,
      dense: '1.125',
      snugger: '1.4',
    },
    letterSpacing: {
      tighter: '-0.06em',
      tight: '-0.04em',
      snug: '-0.02em',
    },
    backgroundImage: {
      ...defaultTheme.backgroundImage,
      'large-video-border':
        'linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%), linear-gradient(182.49deg, rgba(255, 255, 255, 0.5) -7.22%, rgba(255, 255, 255, 0.0498282) 2.63%, rgba(255, 255, 255, 0) 4.07%)',
      'large-video-gradient':
        'linear-gradient(0deg, #1B1B1D, #1B1B1D), radial-gradient(93.11% 55.91% at 100% 0%, rgba(204, 204, 204, 0.09) 0%, rgba(204, 204, 204, 0) 100%)',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0b0b0e',
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
        10: '#18181b',
        15: '#22222a',
        20: '#2e2e38',
        30: '#454554',
        40: '#61616b',
        50: '#797986',
        60: '#94949e',
        70: '#afafb6',
        80: '#c7c7d1',
        90: '#e2e2e9',
        94: '#ededf2',
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
