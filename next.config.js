/** @type {import('next').NextConfig} */

module.exports = {
  poweredByHeader: false,
  images: {
    formats: ['image/webp'],
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },
  async headers() {
    return [
      {
        source: '/:all*(woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/videos/:all*',
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
        destination: 'https://taipy-website.webflow.io/events/taipy-tech-talk',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/legal/legal-notice',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/legal/terms-of-use',
        destination: '/terms-of-use',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/book-a-call',
        permanent: false,
      },
      {
        source: '/company/contact',
        destination: '/book-a-call',
        permanent: false,
      },
      {
        source: '/community/subscribe-to-the-newsletter',
        destination: '/#subscribe-to-newsletter',
        permanent: false,
      },
      {
        source: '/company/about-us',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/company/blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/company/book-a-call',
        destination: '/book-a-call',
        permanent: true,
      },
      {
        source: '/products/pricing',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/posts/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/community-contributions/:path*',
        destination: '/blog/:path*',
        permanent: true,
      },
      {
        source: '/testimonials/success-story-sales-forecast',
        destination: '/customer-stories/knowledge-touch',
        permanent: true,
      },
      {
        source: '/company/testimonials',
        destination: '/customer-stories',
        permanent: true,},
      {
        source: '/about-taipy/:path*',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
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
        test: /\.inline.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
            },
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
