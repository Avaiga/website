import GithubLogo from '@/svgs/icons/logo-github.inline.svg';
import LinkedinLogo from '@/svgs/icons/logo-linkedin.inline.svg';
import TwitterLogo from '@/svgs/icons/logo-x.inline.svg';
import YoutubeLogo from '@/svgs/icons/logo-youtube.inline.svg';

import { ROUTE } from './routes';

export const MENU = {
  header: [
    { label: 'Blog', href: ROUTE.INDEX },
    { label: 'Company', href: ROUTE.INDEX },
    { label: 'Pricing', href: ROUTE.INDEX },
    { label: 'Docs', href: ROUTE.INDEX },
  ],
  sidebar: [
    { label: 'All Posts', href: ROUTE.INDEX },
    { label: 'Engineering', href: ROUTE.INDEX },
    { label: 'Company', href: ROUTE.INDEX },
    { label: 'Release notes', href: ROUTE.INDEX },
    { label: 'Community', href: ROUTE.INDEX },
    { label: 'Video', href: ROUTE.INDEX },
    { label: 'Appearances', href: ROUTE.INDEX },
  ],
  footer: {
    main: [
      {
        title: 'Taipy',
        items: [
          { label: 'Resources', href: ROUTE.INDEX },
          { label: 'Developers', href: ROUTE.INDEX },
          { label: 'Pricing', href: ROUTE.INDEX },
        ],
      },
      {
        title: 'Links',
        items: [
          { label: 'Marketplace', href: ROUTE.INDEX },
          { label: 'Dashboard', href: ROUTE.INDEX },
          { label: 'Blog', href: ROUTE.INDEX },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Guides', href: ROUTE.INDEX },
          { label: 'Support center', href: ROUTE.INDEX },
        ],
      },
      {
        title: 'Developers',
        items: [
          { label: 'Guides', href: ROUTE.INDEX },
          {
            label: 'API reference',
            href: ROUTE.INDEX,
          },
        ],
      },
    ],
    social: [
      { label: 'Twitter', href: ROUTE.INDEX, icon: TwitterLogo },
      { label: 'LinkedIn', href: ROUTE.INDEX, icon: LinkedinLogo },
      { label: 'GitHub', href: ROUTE.INDEX, icon: GithubLogo },
      { label: 'YouTube', href: ROUTE.INDEX, icon: YoutubeLogo },
    ],
  },
};
