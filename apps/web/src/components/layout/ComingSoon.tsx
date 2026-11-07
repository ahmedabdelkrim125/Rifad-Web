import { buttonVariants } from '@rifad/ui';
import { useTranslations } from 'next-intl';
import { PageTransition } from '@/components/motion/PageTransition';
import { TransitionLink } from '@/components/navigation/TransitionLink';

type ComingSoonProps = {
  title: string;
};

export function ComingSoon({ title }: ComingSoonProps) {
  const t = useTranslations('comingSoon');

  return (
    <PageTransition>
      <section className="grid min-h-[55vh] place-items-center px-5 py-20 text-center">
        <div>
          <h1 className="text-4xl font-bold text-burgundy-900 md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-ink-700">{t('text')}</p>
          <TransitionLink
            href="/"
            direction="back"
            className={buttonVariants({ variant: 'outline', className: 'mt-8' })}
          >
            {t('back')}
          </TransitionLink>
        </div>
      </section>
    </PageTransition>
  );
}
