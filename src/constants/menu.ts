import GithubLogo from '@/svgs/icons/logo-github.inline.svg';
import LinkedinLogo from '@/svgs/icons/logo-linkedin.inline.svg';
import TwitterLogo from '@/svgs/icons/logo-x.inline.svg';
import YoutubeLogo from '@/svgs/icons/logo-youtube.inline.svg';

import { ROUTE } from './routes';

export const MENU = {
  header: [
    { label: 'Blog', href: ROUTE.BLOG },
    { label: 'Company', href: ROUTE.INDEX },
    { label: 'Pricing', href: ROUTE.PRICING },
    { label: 'Docs', href: ROUTE.INDEX },
  ],
  footer: {
    main: [
      {
        title: 'Taipy',
        items: [
          { label: 'Home', href: ROUTE.INDEX },
          { label: 'About us', href: ROUTE.ABOUT_US },
          { label: 'Enterprise', href: ROUTE.INDEX },
          { label: 'Pricing', href: ROUTE.INDEX },
          { label: 'Customer Stories', href: ROUTE.INDEX },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Blog', href: ROUTE.INDEX },
          { label: 'Documentation', href: ROUTE.INDEX },
          { label: 'Community', href: ROUTE.INDEX },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Terms of service', href: ROUTE.INDEX },
          { label: 'Privacy policy', href: ROUTE.INDEX },
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
