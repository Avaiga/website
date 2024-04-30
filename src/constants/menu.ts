import DiscordLogo from '@/svgs/icons/logo-discord.inline.svg';
import GithubLogo from '@/svgs/icons/logo-github.inline.svg';
import LinkedinLogo from '@/svgs/icons/logo-linkedin.inline.svg';
import TwitterLogo from '@/svgs/icons/logo-x.inline.svg';
import YoutubeLogo from '@/svgs/icons/logo-youtube.inline.svg';

// @TODO: should be plural
import { ROUTE } from './routes';

export const MENU = {
  header: [
    { label: 'Blog', href: ROUTE.BLOG },
    { label: 'About', href: ROUTE.ABOUT_US },
    { label: 'Pricing', href: ROUTE.PRICING },
    { label: 'Docs', href: ROUTE.DOCUMENTATION },
  ],
  footer: {
    main: [
      {
        title: 'Taipy',
        items: [
          { label: 'Home', href: ROUTE.INDEX },
          { label: 'About us', href: ROUTE.ABOUT_US },
          { label: 'Enterprise', href: ROUTE.ENTERPRISE },
          { label: 'Pricing', href: ROUTE.PRICING },
          { label: 'Contact us', href: ROUTE.CONTACT_US },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Blog', href: ROUTE.BLOG },
          { label: 'Documentation', href: ROUTE.DOCUMENTATION },
          { label: 'Free mentorship', href: ROUTE.MENTORSHIP },
          { label: 'Community', href: ROUTE.COMMUNITY },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Terms of service', href: ROUTE.TERMS },
          { label: 'Privacy policy', href: ROUTE.PRIVACY },
        ],
      },
    ],
    social: [
      { label: 'Twitter', href: ROUTE.TWITTER, icon: TwitterLogo },
      { label: 'LinkedIn', href: ROUTE.LINKEDIN, icon: LinkedinLogo },
      { label: 'GitHub', href: ROUTE.GITHUB, icon: GithubLogo },
      { label: 'YouTube', href: ROUTE.YOUTUBE, icon: YoutubeLogo },
      { label: 'Discord', href: ROUTE.DISCORD, icon: DiscordLogo },
    ],
  },
};
