import { SEO_DATA } from '@/constants/seo';
import connectImage from '@/images/pages/designer/connect.png';
import styleImage from '@/images/pages/designer/style.png';
import widgetsImage from '@/images/pages/designer/widgets.png';

import Hero from '@/components/pages/designer/hero';
import CTA from '@/components/shared/CTA';
import CTAButton from '@/components/shared/cta-button';
import Features from '@/components/shared/features';

import { getMetadata } from '@/lib/get-metadata';

const items = [
  {
    title: 'Drag and drop widgets on the canvas',
    text: 'Instead of traditional insertion methods or programming, users can simply drag and drop widgets from the toolbar on the canvas.',
    image: widgetsImage,
  },
  {
    title: 'Connect widgets to your Python variables',
    text: 'Connect widgets to your Python variables for instant data visuals and rendering.',
    image: connectImage,
  },
  {
    title: 'Style your graphics in a click',
    text: 'Define your own look and feel with a few clicks, no CSS needed.',
    image: styleImage,
  },
];

function Designer() {
  return (
    <>
      <Hero />
      <Features
        className="mt-[79px]"
        rowsGap="gap-y-11"
        heading="Your business advantage"
        subheading="Focus on results with all the sophistication hidden behind a convenient drag-and-drop editor."
        imageProps={{
          width: 384,
          height: 228,
          quality: 95,
        }}
        items={items}
      />
      <CTAButton className="mt-2 md:hidden" />
      <CTA
        className="mb-[184px] mt-[183px] lg:mb-[151px] lg:mt-[184px] md:my-[110px] sm:mb-[84px] sm:mt-[79px]"
        isDesigner
      />
    </>
  );
}

export default Designer;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.DESIGNER);
}
