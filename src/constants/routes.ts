import type { Route } from 'next';

export const ROUTE: Record<string, URL | Route<string>> = {
  INDEX: '/',
  BLOG: '/blog',
  PRIVACY: '/',
  BANNER: '/',
};
