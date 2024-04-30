export const BLOG_POST_PER_PAGE = 15;

type DataWithSlug = { slug: { current: string } };

export function flattenSlug<T extends DataWithSlug>(data: T): Omit<T, 'slug'> & { slug: string } {
  return { ...data, slug: data.slug.current };
}
