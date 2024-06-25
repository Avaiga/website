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
      'Explore our premium offer and take your business to the next level with Taipy Enterprise edition!',
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
  REQUEST_A_DESIGNER_DEMO: {
    title: 'What is Taipy Designer? Ask our team',
    description:
      'Want to create a user-friendly web interface effortlessly for your Python projects? Look no further, Taipy Designer is crafted for you. Our team will show you how it works',
    pathname: ROUTES.REQUEST_A_DESIGNER_DEMO as string, // /request-a-designer-demo
  },
  REQUEST_A_QUOTE: {
    title: 'Put your project into production with security, simplicity, and efficiency',
    description: 'Leverage a huge variety of Taipy’s features to level up your data and AI project',
    pathname: ROUTES.REQUEST_A_QUOTE as string, // /request-a-quote
  },
  MENTORSHIP: {
    title: 'Mentorship Program | Taipy',
    description:
      'If you are new to open source and Taipy, our informal mentoring program will help you become more familiar with Taipy and the open source environment',
    pathname: ROUTES.MENTORSHIP as string, // /book-a-call
  },
  COMMUNITY: {
    title: 'Community | Taipy',
    description: "Be part of Taipy's adventure!",
    pathname: ROUTES.COMMUNITY as string, // /community
  },
  CONTACT_US: {
    title: 'Contact Taipy',
    description: `Have a question, seek for support? Just send us an email, and we'll be sure to respond promptly.`,
    pathname: ROUTES.CONTACT_US as string, // /contact-us
  },
  DESIGNER: {
    title: 'Low code Drag-and-Drop Python app builder',
    description: `Explore Taipy Designer, the cutting-edge drag-and-drop GUI builder designed for Python developers. Create dynamic GUIs effortlessly with a WYSIWYG environment. Connect widgets to your Python variables, style graphics with ease, and focus on results with our sophisticated yet convenient editor. Request a demo and watch the video now!`,
    pathname: ROUTES.DESIGNER as string, // /designer
  },
};
