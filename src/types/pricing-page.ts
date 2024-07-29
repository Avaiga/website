type BaseDocument = {
  _type: string;
  _id: string;
  title: string;
  _updatedAt: string;
};

export type HeroProps = {
  _key: string;
  _type: 'hero';
  title: string;
  btnText: string;
  heading: string;
  description: string;
  tag: string;
};

export type ToolsProps = {
  _key: string;
  _type: 'tools';
  title: string;
  cards: Array<{
    title: string;
    subtitle: string;
    linkText?: string;
  }>;
};

export type PlanCard = {
  features: string[];
  price: string;
  title: string;
};

export type PlanCardWithBtn = PlanCard & {
  btnText: string;
};

export type PlansProps = {
  _type: 'plans';
  title: string;
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
  title: string;
  heading: string;
  description: string;
  btnText: string;
  cards: BenefitsCardProps[];
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
  title: string;
  _type: 'faq';
  heading: string;
  items: (FaqItem | FaqItemWithList)[];
};

export type FeaturesItem = {
  title: string;
  subtitle: string;
};

export type FeaturesProps = {
  _type: 'features';
  title: string;
  heading: string;
  description: string;
  items: FeaturesItem[];
};

type Col = {
  features: string;
  isRowTitle: boolean;
  community: ValueOrBoolean;
  enterprise: ValueOrBoolean;
};

type ValueOrBoolean = {
  value: string | null;
  booleanValue: boolean | null;
};

export type CompairingTableProps = {
  _type: string;
  labels: string[];
  cols: Col[];
};

export type PricingPage = BaseDocument & {
  content: (HeroProps | ToolsProps | PlansProps | BenefitsProps | FeaturesProps | FaqProps)[];
};

export interface PricingPageQueryResult {
  allPage: PricingPage[];
}
