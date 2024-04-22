import type { Route } from 'next';

export const ROUTES: Record<string, URL | Route<string>> = {
  INDEX: '/',
  BLOG: '/blog',
  CUSTOMER_STORIES: '/customer-stories',
  BLOG_CATEGORY: '/blog/category',
  PRIVACY: '/privacy-policy', // https://www.taipy.io/legal/privacy-policy
  BANNER: '/taipy-tech-talk', // https://www.taipy.io/events/taipy-tech-talk
  PRICING: '/pricing',
  ABOUT_US: '/about-us',
  DOCUMENTATION: 'https://docs.taipy.io/en/latest/',
  REQUEST_A_DEMO: '/book-a-call',
  MENTORSHIP: '/mentorship',
  ENTERPRISE: '/enterprise',
  TERMS: '/terms-of-use', // https://www.taipy.io/legal/terms-of-use
  COMPANY: '/',
  TWITTER: new URL('https://twitter.com/Taipy_io'),
  LINKEDIN: new URL('https://www.linkedin.com/company/taipy-io/'),
  GITHUB: new URL('https://github.com/Avaiga/taipy'),
  YOUTUBE: new URL('https://www.youtube.com/channel/UCYZyGVj-fPgUSITZnsOQoDg'),
};
