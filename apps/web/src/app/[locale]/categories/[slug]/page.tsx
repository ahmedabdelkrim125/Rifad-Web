import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ComingSoon } from '@/components/layout/ComingSoon';
import { categories, getCategory } from '@/config/categories';
import { toLocale } from '@/i18n/routing';
import { buildAlternates } from '@/lib/seo';

type CategoryPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = toLocale(rawLocale);
  const category = getCategory(slug);
  if (!category) return {};
  const t = await getTranslations({ locale, namespace: 'categories.names' });
  return {
    title: t(category.nameKey),
    alternates: buildAlternates(locale, `/categories/${category.slug}`),
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(toLocale(locale));
  const category = getCategory(slug);
  if (!category) notFound();
  const t = await getTranslations('categories.names');
  return <ComingSoon title={t(category.nameKey)} />;
}
