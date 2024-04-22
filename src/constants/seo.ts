import { ROUTES } from './routes';

export const SEO_DATA = {
  INDEX: {
    title: 'Taipy — Build Python Data & AI web applications',
    description:
      'From simple pilots to production-ready web applications in no times. No more compromise on performance, customization, and scalability.',
    pathname: ROUTES.INDEX as string, // /
  },
  ENTERPRISE: {
    title: 'Enterprise | Taipy',
    description:
      'Explore our premium offer and take your business to the next level with Taipy Enterprise Edition!',
    pathname: ROUTES.ENTERPRISE as string, // /enterprise
  },
  PRICING: {
    title: 'License Fees | Taipy',
    description: 'Compare Taipy editions and license fees, or ask for a custom quote!',
    pathname: ROUTES.PRICING as string, // /pricing
  },
  ABOUT_US: {
    title: 'About Us | Taipy',
    description:
      'Join us on our journey and meet the team behind Taipy, an open-source Data and AI app builder!',
    pathname: ROUTES.ABOUT_US as string, // /about-us
  },
  BLOG: {
    title: 'Our Blog | Taipy',
    description:
      'Explore all the tutorials, articles, videos, and experiments made by Taipy team or Taipy community',
    pathname: ROUTES.BLOG as string, // /blog
  },
  CUSTOMER_STORIES: {
    title: 'Customer stories | Taipy',
    description: 'See how Taipy help companies working efficiently with large data',
    pathname: ROUTES.CUSTOMER_STORIES as string, // /testimonials
  },
  BOOK_A_CALL: {
    title: 'Book a Call | Taipy',
    description: 'Check out for our availability and book a call with us!',
    pathname: ROUTES.REQUEST_A_DEMO as string, // /book-a-call
  },
  MENTORSHIP: {
    title: 'Mentorship Program | Taipy',
    description:
      'If you are new to open source and Taipy, our informal mentoring program will help you become more familiar with Taipy and the open source environment',
    pathname: ROUTES.MENTORSHIP as string, // /book-a-call
  },
};
