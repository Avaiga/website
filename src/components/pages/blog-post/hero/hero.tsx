import { ROUTE } from '@/constants/routes';

import Breadcrumbs from '@/components/shared/breadcrumbs';
import CategoryLabel from '@/components/shared/category-label';

import { SinglePost } from '@/types/blog';

type HeroProps = Pick<SinglePost, 'title' | 'cover' | 'author' | 'publishedAt' | 'category'>;

function Hero({ title, cover, author, publishedAt, category }: HeroProps) {
  return (
    <>
      <Breadcrumbs items={[{ title: 'Blog', url: ROUTE.BLOG }, { title }]} />

      <header>
        <CategoryLabel
          className="hero__category"
          url={`${ROUTE.BLOG}/category/${category.slug.current}`}
        >
          {category.title}
        </CategoryLabel>
        <h1 className="hero__title">Blog</h1>
      </header>
    </>
  );
}

export default Hero;
