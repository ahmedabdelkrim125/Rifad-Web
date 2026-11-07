import { buttonVariants } from '@rifad/ui';
import { PageTransition } from '@/components/motion/PageTransition';
import { TransitionLink } from '@/components/navigation/TransitionLink';

type ComingSoonProps = {
  title: string;
};

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <PageTransition>
      <section className="grid min-h-[55vh] place-items-center px-5 py-20 text-center">
        <div>
          <h1 className="text-4xl font-bold text-burgundy-900 md:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-ink-700">هذه الصفحة قيد التجهيز وستكون متاحة قريبًا.</p>
          <TransitionLink
            href="/"
            direction="back"
            className={buttonVariants({ variant: 'outline', className: 'mt-8' })}
          >
            العودة للرئيسية
          </TransitionLink>
        </div>
      </section>
    </PageTransition>
  );
}
