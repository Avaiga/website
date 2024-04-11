import type { Viewport } from 'next';
import Script from 'next/script';

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
      <head>
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              strategy="afterInteractive"
              src="https://plausible.io/js/script.tagged-events.js"
              data-domain="taipy.io"
            />
            <Script
              strategy="afterInteractive"
              src="https://tag.clearbitscripts.com/v1/pk_1733d1e9903ce4818fec6c5fdd8118cf/tags.js"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </>
        )}
      </head>
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
