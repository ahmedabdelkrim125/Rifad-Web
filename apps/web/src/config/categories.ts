export const categoryIcons = [
  'headphones',
  'shirt',
  'sofa',
  'baby',
  'sparkles',
  'dumbbell',
  'paw',
  'basket',
  'luggage',
  'car',
  'book',
  'grid',
  'ellipsis',
] as const;

export type CategoryIconKey = (typeof categoryIcons)[number];

export const categorySlugs = [
  'electronics',
  'fashion',
  'home',
  'kids',
  'beauty',
  'sports',
  'pets',
  'groceries',
  'travel',
  'cars',
  'books',
] as const;

export type CategorySlug = (typeof categorySlugs)[number];

/** مفتاح اسم القسم داخل ملفات الترجمة (categories.names.*). */
export type CategoryNameKey = CategorySlug | 'other' | 'otherSections';

export type Category = {
  slug: string;
  nameKey: CategoryNameKey;
  icon: CategoryIconKey;
  /** يظهر في الصفحة الرئيسية للمتجر (/shop). */
  featured?: boolean;
  /** عدد المنتجات. قيمة مبدئية الآن، وتُستبدل بعدد حقيقي من قاعدة البيانات. */
  count?: number;
  /** صورة القسم (شفافة) داخل public. لو غابت تظهر الأيقونة. */
  image?: string;
};

export const categories: Category[] = [
  { slug: 'electronics', nameKey: 'electronics', icon: 'headphones', featured: true, count: 6780 },
  { slug: 'fashion', nameKey: 'fashion', icon: 'shirt', featured: true, count: 5310 },
  { slug: 'home', nameKey: 'home', icon: 'sofa', featured: true, count: 4520 },
  { slug: 'kids', nameKey: 'kids', icon: 'baby', featured: true, count: 1890 },
  { slug: 'beauty', nameKey: 'beauty', icon: 'sparkles', featured: true, count: 2340 },
  { slug: 'sports', nameKey: 'sports', icon: 'dumbbell', featured: true, count: 1120 },
  { slug: 'pets', nameKey: 'pets', icon: 'paw', count: 640 },
  { slug: 'groceries', nameKey: 'groceries', icon: 'basket', count: 3410 },
  { slug: 'travel', nameKey: 'travel', icon: 'luggage', count: 1230 },
  { slug: 'cars', nameKey: 'cars', icon: 'car', count: 760 },
  { slug: 'books', nameKey: 'books', icon: 'book', count: 980 },
];

export const featuredCategories = categories.filter((category) => category.featured);

export const moreCategory: Category = { slug: '', nameKey: 'other', icon: 'ellipsis' };

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export type CatalogItem = Category & { href: string };

const catalogSlugs = [
  'kids',
  'fashion',
  'electronics',
  'home',
  'sports',
  'beauty',
  null,
  'pets',
  'groceries',
  'travel',
  'cars',
  'books',
] as const;

/** ترتيب بطاقات صفحة /categories كما في التصميم (null = بطاقة "أقسام أخرى"). */
export const catalogItems: CatalogItem[] = catalogSlugs.map((slug) => {
  if (slug === null) {
    return { slug: '', nameKey: 'otherSections', icon: 'grid', count: 1050, href: '/shop' };
  }
  const category = getCategory(slug);
  if (!category) throw new Error(`Unknown category slug: ${slug}`);
  return { ...category, href: `/categories/${category.slug}` };
});
