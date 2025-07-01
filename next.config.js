/** @type {import('next').NextConfig} */

module.exports = {
  poweredByHeader: false,

  images: {
    formats: ['image/webp'],
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },

  async headers() {
    return [
      // Security headers for all routes
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Strict CSP: no unsafe-inline, no data:, upgrade enforced
            value:
              "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; upgrade-insecure-requests;",
          },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), fullscreen=(self)',
          },
        ],
      },

      // Long-term caching for fonts
      {
        source: '/:all*(woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // Long-term caching for images
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/events/taipy-tech-talk',
        // Rewrites to external Webflow event page
        destination: 'https://taipy-website.webflow.io/events/taipy-tech-talk',
      },
    ];
  },

  async redirects() {
    return [
      { source: '/legal/legal-notice', destination: '/privacy-policy', permanent: true },
      { source: '/legal/terms-of-use', destination: '/terms-of-use', permanent: true },
      { source: '/company/contact', destination: '/book-a-call', permanent: true },
      { source: '/community/subscribe-to-the-newsletter', destination: '/#subscribe-to-newsletter', permanent: true },
      { source: '/company/about-us', destination: '/about-us', permanent: true },
      { source: '/company/blog', destination: '/blog', permanent: true },
      { source: '/products/pricing', destination: '/pricing', permanent: true },
      { source: '/enterprise', destination: '/pricing', permanent: true },
      { source: '/posts/:path*', destination: '/blog/:path*', permanent: true },
      { source: '/community-contributions/:path*', destination: '/blog/:path*', permanent: true },
      { source: '/testimonials/success-story-sales-forecast', destination: '/customer-stories/knowledge-touch', permanent: true },
      { source: '/company/testimonials', destination: '/customer-stories', permanent: true },
      { source: '/about-taipy/:path*', destination: '/about-us', permanent: true },
    ];
  },

  webpack: (config) => {
    // SVG handling: inline vs external
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      {
        // External SVGs: exclude *.inline.svg (handled by SVGR below)
        test: /(?<!inline)\.svg$/i,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 512,
              publicPath: '/_next/static/media',
              outputPath: 'static/media',
              fallback: require.resolve('file-loader'),
            },
          },
          {
            loader: require.resolve('svgo-loader'),
          },
        ],
      },
      {
        // Inline SVGs: use SVGR for React components
        test: /\.inline\.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: { svgo: true },
          },
        ],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
