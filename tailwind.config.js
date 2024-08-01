// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      code: ['var(--font-code)', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      10: '10px',
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      16: '16px',
      17: '17px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      34: '34px',
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
      normal: '0',
    },
    backgroundImage: {
      ...defaultTheme.backgroundImage,
      'gradient-border':
        'linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%), linear-gradient(182.49deg, rgba(255, 255, 255, 0.5) -7.22%, rgba(255, 255, 255, 0.0498282) 2.63%, rgba(255, 255, 255, 0) 4.07%)',
      'gradient-grey-border':
        'radial-gradient(circle, rgba(42,42,45,1) 0%, rgba(139,139,139,0.2) 30%)',
      'gradient-center-top-orange-border':
        'conic-gradient(from 270deg at 55% 53%, #71C4FF00 1%, rgba(255, 102, 26, 0.25) 22%, #71C4FF00 56%, #71C4FF00 62%), linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-left-bottom-orage-border':
        'conic-gradient(from 150deg at 50% 50%, #71C4FF00 4%, rgba(255, 102, 26, 0.25) 24%, #71C4FF00 34%, #71C4FF00 56%), linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-right-top-orage-border':
        'conic-gradient(from 330deg at 50% 50%, #71C4FF00 4%, rgba(255, 102, 26, 0.25) 24%, #71C4FF00 34%, #71C4FF00 56%), linear-gradient(0deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-right-top-orange-border':
        'conic-gradient(from -9deg at 50% 50%, #71C4FF00 4%, rgba(255, 102, 26, 0.15) 24%, #71C4FF00 34%, #71C4FF00 56%),  linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-left-top-orange-border':
        'conic-gradient(from 230deg at 50% 50%, #71C4FF00 4%, rgba(255, 102, 26, 0.15) 24%, #71C4FF00 34%, #71C4FF00 56%),  linear-gradient(180deg, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
      'gradient-center-top-orange':
        'linear-gradient(0deg, rgba(255, 102, 26, 0) 35%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-center-bottom-orange-pricing':
        'linear-gradient(180deg, rgba(255, 102, 26, 0) 35%, rgba(255, 55, 26, 0.1) 100%)',
      'gradient-right-top-orange':
        'linear-gradient(60deg, rgba(255, 102, 26, 0) 65%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-left-bottom-orange-pricing':
        'linear-gradient(221deg, rgba(255, 102, 26, 0) 69%, rgba(255, 55, 26, 0.1) 100%)',
      'gradient-right-bottom-orange':
        'linear-gradient(117.88deg, rgba(255, 102, 26, 0) 75%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-right-bottom-orange-pricing':
        'linear-gradient(142deg, rgba(255, 102, 26, 0) 69%, rgba(255, 55, 26, 0.1) 100%)',
      'gradient-left-top-orange':
        'linear-gradient(330deg, rgba(255, 102, 26, 0) 65%, rgba(255, 55, 26, 0.05) 100%)',
      'gradient-right-top-orange-hero':
        'linear-gradient(28deg, rgba(255, 102, 26, 0) 53%, rgba(255, 55, 26, 0.2) 100%)',
      'gradient-right-top-blue':
        'linear-gradient(28deg, rgba(255, 102, 26, 0) 53%, rgba(85, 193, 246, 0.2) 100%)',
      'gradient-right-top-orange-hero-border':
        'conic-gradient(transparent 270deg,rgba(255,70,43,0.3) 320deg,rgba(255,70,43,0.3) 360deg),conic-gradient(rgba(255,70,43,0.3) 35deg,rgba(255,102,26,0.3) 45deg,rgba(255,70,43,0.3) 55deg,rgba(139,139,139,0.2) 80deg)',
      'gradient-right-top-blue-border':
        'conic-gradient(transparent 270deg, rgba(85, 193, 246, 0.3) 320deg, rgba(85, 193, 246, 0.3) 360deg), conic-gradient(rgba(85, 193, 246, 0.3) 35deg, rgba(85, 193, 246, 0.3) 45deg, rgba(85, 193, 246, 0.3) 55deg, rgba(139, 139, 139, 0.2) 80deg)',
      'gradient-grey-10':
        'linear-gradient(0deg, #18181B, #18181B), radial-gradient(93.11% 55.91% at 100% 0%, rgba(148, 148, 148, 0.06) 0%, rgba(149, 149, 149, 0) 100%)',
      'gradient-grey':
        'linear-gradient(0deg, #1B1B1D, #1B1B1D), radial-gradient(93.11% 55.91% at 100% 0%, rgba(204, 204, 204, 0.09) 0%, rgba(204, 204, 204, 0) 100%)',
      'gradient-digit':
        'radial-gradient(96.53% 52.02% at 50% 37%, #FF5F47 0%, #FF3E22 30.13%, rgba(255, 70, 43, 0.3) 100%)',
      'gradient-about-digit':
        'radial-gradient(917.24% 246.32% at 47.18% 11.09%, #151518 0%, rgba(18, 18, 21, 0.72) 45.26%, rgba(17, 17, 19, 0.00) 59.74%)',
      'gradient-circle-enterprise':
        'linear-gradient(to bottom, #2A2A2D 0%, rgba(42, 42, 45, 0.5) 29.3761%, rgba(42, 42, 45, 0.4) 100%)',
      'gradient-hero-digit':
        'radial-gradient(95.97% 100% at 50% 0%, rgba(255, 92, 77, 0.00) 28.79%, #FF5C4D 100%)',
      'digit-gradient':
        'radial-gradient(95.66% 103.97% at 4.88% 100.06%, #BCBCC3 0%, #A2A2A9 91.59%)',
      'banner-gradient':
        'linear-gradient(to right, rgba(91, 192, 243, 0) 6%, rgba(91, 192, 243, 0) 16%, rgba(50, 171, 232, 0.5) 39%, rgba(50, 171, 232, 0.75) 49%, rgba(50, 171, 232, 0.5) 60%, rgba(91, 192, 243, 0) 85%)',
      'card-gradient':
        'linear-gradient(180deg, #2a2a2d 0%, rgba(42, 42, 45, 0.5) 4.86%, rgba(42, 42, 45, 0.4) 16.55%)',
    },

    boxShadow: {
      btn: '0 8px 20px 0 rgba(255, 70, 43, 0.32)',
      toggler: '0 6px 6px rgba(0, 0, 0, 0.23)',
      icon: '0px 0px 10px 4px rgba(255, 55, 26, 0.8)',
      submenu: '2px 33px 73px 1px rgba(24, 24, 27, 1);',
    },

    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0b0b0e',
      white: '#ffffff',
      primary: {
        red: '#ff371a',
        'dark-red': '#2C1D1A',
      },
      secondary: {
        blue: '#72bff1',
        'blue-65': '#55C1F6',
      },
      orange: {
        1: '#ff462b',
        5: 'rgba(255, 70, 43, 0.08)',
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
        85: '#2A2A2D',
        90: '#e2e2e9',
        94: '#ededf2',
        98: '#f9f9fb',
        99: '#131315',
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
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'input-grey': 'rgba(153, 153, 153, 0.10)',
      'hero-btn-enterprise': 'rgba(176, 60, 43, 0.80)',
      'shadow-red': '#EF270A',
      'watch-btn-hover': 'rgba(255, 70, 43, 0.16)',
    }),
    screens: {
      xxl: { max: '1919px' },
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
    require('@tailwindcss/typography'),
  ],
};
