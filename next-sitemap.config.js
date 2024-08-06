module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: ['/redirect', '/redirect/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/redirect', '/redirect/*'],
      },
    ],
  },
};
