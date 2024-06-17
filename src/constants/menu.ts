import BlocksIcon from '@/svgs/icons/header/blocks.inline.svg';
import DocsIcon from '@/svgs/icons/header/docs.inline.svg';
import FolderIcon from '@/svgs/icons/header/folder.inline.svg';
import ImportantIcon from '@/svgs/icons/header/important.inline.svg';
import LaunchIcon from '@/svgs/icons/header/launch.inline.svg';
import StarIcon from '@/svgs/icons/header/star.inline.svg';
import DiscordLogo from '@/svgs/icons/logo-discord.inline.svg';
import GithubLogo from '@/svgs/icons/logo-github.inline.svg';
import LinkedinLogo from '@/svgs/icons/logo-linkedin.inline.svg';
import TwitterLogo from '@/svgs/icons/logo-x.inline.svg';
import YoutubeLogo from '@/svgs/icons/logo-youtube.inline.svg';

import { ROUTES } from './routes';

export const MENU = {
  header: [
    { label: 'Blog', href: ROUTES.BLOG },
    { label: 'About', href: ROUTES.ABOUT_US },
    { label: 'Pricing', href: ROUTES.PRICING },
    {
      label: 'Docs',
      href: ROUTES.DOCUMENTATION,
      items: [
        {
          label: 'Getting Started',
          href: ROUTES.DOCUMENTATION_GETTING_STARTED,
          icon: LaunchIcon,
        },
        {
          label: 'Tutorials',
          href: ROUTES.DOCUMENTATION_TUTORIALS,
          icon: DocsIcon,
        },
        {
          label: 'Manuals',
          href: ROUTES.DOCUMENTATION_MANUALS,
          icon: FolderIcon,
        },
        {
          label: 'Apps Examples',
          href: ROUTES.DOCUMENTATION_APPS_EXAMPLES,
          icon: BlocksIcon,
        },
        {
          label: 'Release Notes',
          href: ROUTES.DOCUMENTATION_RELNOTES,
          icon: ImportantIcon,
        },
        {
          label: 'Contributing',
          href: ROUTES.DOCUMENTATION_CONTRIBUTING,
          icon: StarIcon,
        },
      ],
    },
    { label: 'Apps Examples', href: ROUTES.DOCUMENTATION_APPS_EXAMPLES },
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
          { label: 'Customer Stories', href: ROUTES.CUSTOMER_STORIES },
          { label: 'Contact us', href: ROUTES.CONTACT_US },
        ],
      },
      {
        title: 'Resources',
        items: [
          { label: 'Blog', href: ROUTES.BLOG },
          { label: 'Documentation', href: ROUTES.DOCUMENTATION },
          { label: 'Free mentorship', href: ROUTES.MENTORSHIP },
          { label: 'Community', href: ROUTES.COMMUNITY },
          { label: 'Designer', href: ROUTES.DESIGNER },
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
