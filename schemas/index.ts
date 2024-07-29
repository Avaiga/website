import { author } from './author';
import { banner } from './banner';
import { category } from './category';
import { customBlockquote, customNotice, customTable, customYoutube } from './content';
import { customerStory } from './customer-story';
import { legal } from './legal';
import { benefits } from './objects/content-blocks/benefits/benefits';
import { benefitsCard } from './objects/content-blocks/benefits/benefits-card';
import { cols } from './objects/content-blocks/compairing-table/cols';
import { compairingTable } from './objects/content-blocks/compairing-table/compairing-table';
import { valueOrBoolean } from './objects/content-blocks/compairing-table/value-or-boolean-field';
import { cta } from './objects/content-blocks/cta/cta';
import { ctaCards } from './objects/content-blocks/cta/cta-card';
import { faq } from './objects/content-blocks/faq/faq';
import { faqAnswerWithList } from './objects/content-blocks/faq/faq-answer-with-list';
import { faqItem } from './objects/content-blocks/faq/faq-item';
import { faqItemWithList } from './objects/content-blocks/faq/faq-item-with-list';
import { features } from './objects/content-blocks/features/features';
import { featuresItem } from './objects/content-blocks/features/features-item';
import { hero } from './objects/content-blocks/hero';
import { plans } from './objects/content-blocks/plans/plans';
import { plansCard } from './objects/content-blocks/plans/plans-card';
import { plansCardWithBtn } from './objects/content-blocks/plans/plans-card-with-btn';
import { tools } from './objects/content-blocks/tools/tools';
import { toolsCard } from './objects/content-blocks/tools/tools-card';
import { toolsCardWithLink } from './objects/content-blocks/tools/tools-card-with-link';
import { page } from './page';
import { post } from './post';
import { seo } from './seo';
import { testimonialsItem } from './testimonial-item';
import { testimonials } from './testimonials';

export const schemaTypes = [
  author,
  category,
  seo,
  customTable,
  customBlockquote,
  customNotice,
  customYoutube,
  customerStory,
  post,
  legal,
  banner,
  page,
  hero,
  tools,
  toolsCard,
  toolsCardWithLink,
  plans,
  plansCard,
  plansCardWithBtn,
  benefits,
  benefitsCard,
  features,
  featuresItem,
  faq,
  faqItem,
  faqItemWithList,
  faqAnswerWithList,
  testimonials,
  testimonialsItem,
  cols,
  compairingTable,
  valueOrBoolean,
  cta,
  ctaCards,
];
