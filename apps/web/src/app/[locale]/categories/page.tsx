import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/motion/PageTransition';
import { CategoriesGrid, CategoriesHero } from '@/features/categories';
import { ShopSearch } from '@/features/shop/ShopSearch';
import { toLocale } from '@/i18n/routing';
import { buildAlternates } from '@/lib/seo';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: 'categories' });
  const pages = await getTranslations({ locale, namespace: 'pages' });
  return {
    title: pages('categories'),
    description: t('metaDescription'),
    alternates: buildAlternates(locale, '/categories'),
  };
}

export default async function CategoriesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(toLocale(locale));
  const t = await getTranslations('categories');

  return (
    <PageTransition>
      <CategoriesHero />
      <div className="grid grid-cols-1 gap-8 pb-16 md:gap-10 md:pb-24">
        <div className="mx-auto w-full max-w-3xl px-5 pt-6 md:px-10 md:pt-8">
          <ShopSearch placeholder={t('searchPlaceholder')} />
        </div>
        <CategoriesGrid />
      </div>
    </PageTransition>
  );
}
