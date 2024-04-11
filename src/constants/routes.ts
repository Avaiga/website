import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  INDEX: '/',
  BLOG: '/blog',
  BLOG_CATEGORY: '/blog/category',
  PRIVACY: '/',
  BANNER: '/',
  PRICING: '/pricing',
  ABOUT_US: '/about-us',
  DOCUMENTATION: '/',
  ENTERPRISE: '/enterprise',
  REQUEST_DEMO_LINK: '/',
  CUSTOMER_STORIES: '/',
  COMMUNITY: '/',
  TERMS: '/',
  COMPANY: '/',
  TWITTER: new URL('https://twitter.com/Taipy_io'),
  LINKEDIN: new URL('https://www.linkedin.com/company/taipy-io/'),
  GITHUB: new URL('https://github.com/Avaiga/taipy'),
  YOUTUBE: new URL('https://www.youtube.com/channel/UCYZyGVj-fPgUSITZnsOQoDg'),
};
