import { ROUTE } from '@/constants/routes';

import Breadcrumbs from '@/components/shared/breadcrumbs';

import { SinglePost } from '@/types/post';

type HeroProps = Pick<SinglePost, 'title' | 'cover' | 'author' | 'publishedAt' | 'category'>;

function Hero({ title, cover, author, publishedAt, category }: HeroProps) {
  return (
    <>
      <Breadcrumbs className="container" items={[{ title: 'Blog', url: ROUTE.BLOG }, { title }]} />

      <header className="hero">
        <h1 className="hero__title">Blog</h1>
      </header>
    </>
  );
}

export default Hero;
