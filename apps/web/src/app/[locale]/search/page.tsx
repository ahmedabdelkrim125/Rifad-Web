import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/motion/PageTransition';
import { ShopSearch } from '@/features/shop/ShopSearch';
import { toLocale } from '@/i18n/routing';

type SearchPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string | string[] }>;
};

export async function generateMetadata({ params }: SearchPageProps): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: 'search' });
  return { title: t('metaTitle'), robots: { index: false, follow: false } };
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const { locale } = await params;
  setRequestLocale(toLocale(locale));
  const t = await getTranslations('search');
  const { q } = await searchParams;
  const raw = Array.isArray(q) ? q[0] : q;
  const query = (raw ?? '').trim().slice(0, 100);

  return (
    <PageTransition>
      <section className="mx-auto grid max-w-3xl grid-cols-1 gap-8 px-5 py-14 md:py-20">
        <ShopSearch />
        <div className="text-center">
          <h1 className="text-3xl font-bold text-burgundy-900 md:text-4xl">
            {query ? t('resultsFor', { query }) : t('searchSite')}
          </h1>
          <p className="mt-3 text-lg text-ink-700">{t('empty')}</p>
        </div>
      </section>
    </PageTransition>
  );
}
