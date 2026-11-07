import { useTranslations } from 'next-intl';
import { catalogItems } from '@/config/categories';
import { CategoryTile } from './CategoryTile';

export function CategoriesGrid() {
  const t = useTranslations('categories');

  return (
    <section aria-labelledby="all-categories-title" className="mx-auto max-w-[90rem] px-5 md:px-10">
      <h2 id="all-categories-title" className="sr-only">
        {t('allTitle')}
      </h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
        {catalogItems.map((item) => (
          <li key={item.href}>
            <CategoryTile item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
