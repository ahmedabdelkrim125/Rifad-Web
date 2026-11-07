import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ComingSoon } from '@/components/layout/ComingSoon';
import { toLocale } from '@/i18n/routing';
import { buildAlternates } from '@/lib/seo';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const t = await getTranslations({ locale, namespace: 'pages' });
  return {
    title: t('cart'),
    alternates: buildAlternates(locale, '/cart'),
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(toLocale(locale));
  const t = await getTranslations('pages');
  return <ComingSoon title={t('cart')} />;
}
