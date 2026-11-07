import { getTranslations } from 'next-intl/server';
import { buttonVariants } from '@rifad/ui';
import { Link } from '@/i18n/navigation';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <section className="grid min-h-[60vh] place-items-center px-5 py-20 text-center">
      <div>
        <p className="text-7xl font-bold text-burgundy-700">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-burgundy-900">{t('title')}</h1>
        <p className="mt-2 text-ink-700">{t('text')}</p>
        <Link href="/" className={buttonVariants({ className: 'mt-8' })}>
          {t('back')}
        </Link>
      </div>
    </section>
  );
}
