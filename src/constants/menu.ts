import DiscordLogo from '@/svgs/icons/logo-discord.inline.svg';
import GithubLogo from '@/svgs/icons/logo-github.inline.svg';
import LinkedinLogo from '@/svgs/icons/logo-linkedin.inline.svg';
import TwitterLogo from '@/svgs/icons/logo-x.inline.svg';
import YoutubeLogo from '@/svgs/icons/logo-youtube.inline.svg';

// @TODO: should be plural
import { ROUTES } from './routes';

export const MENU = {
  header: [
    { label: 'Blog', href: ROUTES.BLOG },
    { label: 'About', href: ROUTES.ABOUT_US },
    { label: 'Pricing', href: ROUTES.PRICING },
    { label: 'Docs', href: ROUTES.DOCUMENTATION },
  ],
  footer: {
    main: [
      {
        title: 'Taipy',
        items: [
          { label: 'Home', href: ROUTES.INDEX },
          { label: 'About us', href: ROUTES.ABOUT_US },
          { label: 'Enterprise', href: ROUTES.ENTERPRISE },
          { label: 'Pricing', href: ROUTES.PRICING },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Blog', href: ROUTES.BLOG },
          { label: 'Documentation', href: ROUTES.DOCUMENTATION },
          { label: 'Free mentorship', href: ROUTES.MENTORSHIP },
        ],
      },
      {
        title: 'Legal',
        items: [
          { label: 'Terms of service', href: ROUTES.TERMS },
          { label: 'Privacy policy', href: ROUTES.PRIVACY },
        ],
      },
    ],
    social: [
      { label: 'Twitter', href: ROUTES.TWITTER, icon: TwitterLogo },
      { label: 'LinkedIn', href: ROUTES.LINKEDIN, icon: LinkedinLogo },
      { label: 'GitHub', href: ROUTES.GITHUB, icon: GithubLogo },
      { label: 'YouTube', href: ROUTES.YOUTUBE, icon: YoutubeLogo },
      { label: 'Discord', href: ROUTES.DISCORD, icon: DiscordLogo },
    ],
  },
};
