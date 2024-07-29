import { defineType } from 'sanity';

import { buttonLink, buttonText } from '../constants';
import { plansCard } from './plans-card';

export const plansCardWithBtn = defineType({
  ...plansCard,
  name: 'plansCardWithBtn',
  fields: [...plansCard.fields, { ...buttonText }, { ...buttonLink }],
});
