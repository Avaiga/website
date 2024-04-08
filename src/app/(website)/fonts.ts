import { IBM_Plex_Mono, Inter, JetBrains_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
});

export const jetBrainsMono = JetBrains_Mono({
  weight: ['300'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});
