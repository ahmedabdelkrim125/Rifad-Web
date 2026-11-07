import { toLocale } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { PageTransition } from '@/components/motion/PageTransition';
import { Hero } from '@/features/home/hero';
import { TrustBar } from '@/features/home/trust/TrustBar';

type PageProps = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(toLocale(locale));

  return (
    <PageTransition>
      <Hero />
      <TrustBar />
    </PageTransition>
  );
}
