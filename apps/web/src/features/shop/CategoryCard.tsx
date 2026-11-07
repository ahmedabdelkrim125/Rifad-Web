import { useTranslations } from 'next-intl';
import { cn } from '@rifad/ui';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import type { Category } from '@/config/categories';
import { CategoryIcon } from './CategoryIcon';
import styles from './CategoryGrid.module.css';

type CategoryCardProps = {
  category: Category;
  href: string;
};

export function CategoryCard({ category, href }: CategoryCardProps) {
  const t = useTranslations('categories.names');

  return (
    <TransitionLink href={href} className={cn(styles.card)}>
      <CategoryIcon name={category.icon} className={cn(styles.icon, 'size-14 text-burgundy-700')} />
      <span className="text-base font-semibold leading-snug text-burgundy-900">
        {t(category.nameKey)}
      </span>
    </TransitionLink>
  );
}
