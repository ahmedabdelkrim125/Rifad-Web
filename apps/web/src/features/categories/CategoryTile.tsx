import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import type { CatalogItem } from '@/config/categories';
import { CategoryIcon } from '@/features/shop/CategoryIcon';
import styles from './CategoryTile.module.css';

type CategoryTileProps = {
  item: CatalogItem;
};

export function CategoryTile({ item }: CategoryTileProps) {
  const t = useTranslations('categories');

  return (
    <TransitionLink href={item.href} className={styles.tile}>
      <span className={styles.media} aria-hidden="true">
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={400}
            height={300}
            sizes="(min-width: 1280px) 12rem, (min-width: 640px) 30vw, 45vw"
            className={styles.photo}
          />
        ) : (
          <CategoryIcon name={item.icon} className={styles.icon} />
        )}
      </span>
      <span className={styles.name}>{t(`names.${item.nameKey}`)}</span>
      <span className={styles.meta}>
        {item.count ? (
          <span className={styles.count}>
            <bdi dir="ltr">+{item.count.toLocaleString('en-US')}</bdi> {t('products')}
          </span>
        ) : (
          <span />
        )}
        <span className={styles.go} aria-hidden="true">
          <ChevronLeft className="size-4 ltr:rotate-180" strokeWidth={2.2} />
        </span>
      </span>
    </TransitionLink>
  );
}
