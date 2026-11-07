import { ArrowLeft } from 'lucide-react';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { categories, moreCategory } from '@/config/categories';
import { CategoryCard } from './CategoryCard';

export function CategoryGrid() {
  return (
    <section aria-labelledby="categories-title" className="mx-auto max-w-[90rem] px-5 md:px-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 id="categories-title" className="text-2xl font-bold text-burgundy-900 md:text-4xl">
            تسوّق حسب الفئة
          </h2>
          <span className="hidden h-0.5 w-12 bg-gold-500 sm:block" aria-hidden="true" />
        </div>
        <TransitionLink
          href="/categories"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-burgundy-700 md:text-base"
        >
          عرض كل الأقسام
          <ArrowLeft
            className="size-4 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </TransitionLink>
      </div>
      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4 lg:grid-cols-7">
        {categories.map((category) => (
          <li key={category.slug}>
            <CategoryCard category={category} href={`/categories/${category.slug}`} />
          </li>
        ))}
        <li>
          <CategoryCard category={moreCategory} href="/categories" />
        </li>
      </ul>
    </section>
  );
}
