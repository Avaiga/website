import { SEO_DATA } from '@/constants/seo';

import Hero from '@/components/pages/contact-us/hero';
import Locations from '@/components/pages/contact-us/locations';
import Subscribe from '@/components/shared/subscribe';

import { getMetadata } from '@/lib/get-metadata';

function ContactUs() {
  return (
    <>
      <Hero />
      <Locations />
      <Subscribe
        tagline="Newsletter"
        title="Stay ahead with our newsletter"
        text="Join Taipy’s mailing list and stay informed of the latest news! We send four mails per year plus a few more for very special announcements."
        className="mb-[122px] mt-[173px] lg:mb-36 lg:mt-[132px] md:mb-[93px] md:mt-[115px] sm:mb-[66px] sm:mt-[73px]"
      />
    </>
  );
}

export default ContactUs;

export async function generateMetadata() {
  return getMetadata(SEO_DATA.CONTACT_US);
}
