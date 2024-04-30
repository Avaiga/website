import { countPosts, getCategories } from '@/lib/sanity/client';

export async function generateStaticParams() {
  const categories = await getCategories();

  const postCounts = await Promise.all(
    categories.map((category) => countPosts({ categoryID: category._id })),
  );

  return categories
    .map((category, idx) => (postCounts[idx] > 0 ? { category: category.slug.current } : null))
    .filter(Boolean);
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
