type BaseDocument = {
  title: string;
  _updatedAt: string;
};

export type HeroProps = {
  _type: 'hero';
  tag: string;
  heading: string;
  description: string;
  btnText: string;
};

export type ToolsCard = {
  title: string;
  subtitle: string;
};

export type ToolsCardWithLink = ToolsCard & {
  linkText: string;
  linkTo: string;
};

export type ToolsProps = {
  _type: 'tools';
  title: string;
  cards: Array<ToolsCard | ToolsCardWithLink>;
};

export type PlanCard = {
  title: string;
  price: string;
  features: string[];
};

export type PlanCardWithBtn = PlanCard & {
  buttonText: string;
  buttonLink: string;
};

export type PlansProps = {
  _type: 'plans';
  heading: string;
  card1: PlanCard;
  card2: PlanCardWithBtn;
  card3: PlanCardWithBtn;
};

type BenefitsCardProps = {
  title: string;
  description: string;
};

export type BenefitsProps = {
  _type: 'benefits';
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  cards: BenefitsCardProps[];
};

export type FeaturesItem = {
  title: string;
  subtitle: string;
};

export type FeaturesProps = {
  _type: 'features';
  heading: string;
  description: string;
  items: FeaturesItem[];
};

type ValueOrBoolean = {
  value: string | null;
  booleanValue: boolean | null;
};

type Col = {
  isRowTitle: boolean;
  features: string;
  community: ValueOrBoolean;
  enterprise: ValueOrBoolean;
};

export type CompairingTableProps = {
  _type: string;
  labels: string[];
  cols: Col[];
};

type FaqItem = {
  _type: 'faqItem';
  question: string;
  simpleAnswer: string;
};

type FaqItemWithList = {
  _type: 'faqItemWithList';
  question: string;
  detailedAnswer: {
    text: string;
    listOfItems: string[];
  };
};

export type FaqProps = {
  _type: 'faq';
  heading: string;
  items: (FaqItem | FaqItemWithList)[];
};

type Card = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export type CtaProps = {
  _type: 'cta';
  cards: [Card, Card];
};

export type PricingPage = BaseDocument & {
  content: (
    | HeroProps
    | ToolsProps
    | PlansProps
    | BenefitsProps
    | FeaturesProps
    | CompairingTableProps
    | FaqProps
    | CtaProps
  )[];
};

export type PricingPageQueryResult = {
  allPage: PricingPage[];
};
