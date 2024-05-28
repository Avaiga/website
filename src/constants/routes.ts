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
  CONTACT_US: '/contact-us',
  DOCUMENTATION: 'https://docs.taipy.io/en/latest/',
  DOCUMENTATION_APPS_EXAMPLES: 'https://docs.taipy.io/en/latest/gallery/',
  DOCUMENTATION_CONTRIBUTING: 'https://docs.taipy.io/en/latest/contributing/contributing/',
  DOCUMENTATION_GETTING_STARTED: 'https://docs.taipy.io/en/latest/getting_started/',
  DOCUMENTATION_TUTORIALS: 'https://docs.taipy.io/en/latest/tutorials/',
  DOCUMENTATION_MANUALS: 'https://docs.taipy.io/en/latest/manuals/',
  DOCUMENTATION_RELNOTES: 'https://docs.taipy.io/en/latest/relnotes/',
  REQUEST_A_DEMO: '/book-a-call',
  REQUEST_A_QUOTE: '/request-a-quote',
  REQUEST_A_DESIGNER_DEMO: '/request-a-designer-demo',
  MENTORSHIP: '/mentorship',
  ENTERPRISE: '/enterprise',
  COMMUNITY: '/community',
  TERMS: '/terms-of-use', // https://www.taipy.io/legal/terms-of-use
  COMPANY: '/',
  TWITTER: new URL('https://twitter.com/Taipy_io'),
  LINKEDIN: new URL('https://www.linkedin.com/company/taipy-io/'),
  GITHUB: new URL('https://github.com/Avaiga/taipy'),
  YOUTUBE: new URL('https://www.youtube.com/channel/UCYZyGVj-fPgUSITZnsOQoDg'),
  DISCORD: new URL('https://discord.gg/hS95mtBnrj'),
};
