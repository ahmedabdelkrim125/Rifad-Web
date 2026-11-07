export const categoryIcons = [
  'headphones',
  'shirt',
  'sofa',
  'baby',
  'sparkles',
  'dumbbell',
  'ellipsis',
] as const;

export type CategoryIconKey = (typeof categoryIcons)[number];

export type Category = {
  slug: string;
  name: string;
  icon: CategoryIconKey;
};

export const categories: Category[] = [
  { slug: 'electronics', name: 'الإلكترونيات', icon: 'headphones' },
  { slug: 'fashion', name: 'الأزياء والإكسسوارات', icon: 'shirt' },
  { slug: 'home', name: 'المنزل والمعيشة', icon: 'sofa' },
  { slug: 'kids', name: 'الأطفال والألعاب', icon: 'baby' },
  { slug: 'beauty', name: 'الجمال والعناية', icon: 'sparkles' },
  { slug: 'sports', name: 'الرياضة واللياقة', icon: 'dumbbell' },
];

export const moreCategory: Category = { slug: '', name: 'أخرى', icon: 'ellipsis' };

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
