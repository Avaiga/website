import { ROUTE } from './routes';

export const MENU = {
  header: [
    { label: 'Blog', href: ROUTE.INDEX },
    { label: 'Company', href: ROUTE.INDEX },
    { label: 'Pricing', href: ROUTE.INDEX },
    { label: 'Docs', href: ROUTE.INDEX },
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
      { label: 'Twitter', href: ROUTE.INDEX, icon: 'x-icon' },
      { label: 'LinkedIn', href: ROUTE.INDEX, icon: 'linkedin-icon' },
      { label: 'GitHub', href: ROUTE.INDEX, icon: 'github-icon' },
      { label: 'YouTube', href: ROUTE.INDEX, icon: 'youtube-icon' },
    ],
  },
};
