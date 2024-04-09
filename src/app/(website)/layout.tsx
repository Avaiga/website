import type { Viewport } from 'next';

import Banner from '@/components/shared/banner';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header/header';

import '@/styles/globals.css';

import { ibmPlexMono, inter, jetBrainsMono } from './fonts';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${jetBrainsMono.variable} ${inter.variable}`}
    >
      <body>
        <Banner />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
