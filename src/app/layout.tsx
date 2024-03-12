import type { Viewport } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header/header';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
