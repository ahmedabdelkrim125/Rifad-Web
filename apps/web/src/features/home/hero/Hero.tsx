import { useTranslations } from 'next-intl';
import { TransitionLink } from '@/components/navigation/TransitionLink';
import { PointerParallax } from '@/components/motion/PointerParallax';
import { buttonVariants } from '@rifad/ui';
import { HeroScene } from './HeroScene';
import { HeroWaves } from './HeroWaves';
import { HeroWords } from './HeroWords';
import styles from './Hero.module.css';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <PointerParallax className={styles.inner}>
        <p className={styles.eyebrow}>{t('eyebrow')}</p>
        <h1 id="hero-title" className={styles.title}>
          <HeroWords text={t('line1')} position="top" />
          <HeroScene />
          <HeroWords text={t('line2')} position="bottom" />
        </h1>
        <p className={styles.subtitle}>{t('subtitle')}</p>
        <div className={styles.cta}>
          <TransitionLink href="/shop" className={buttonVariants({ size: 'lg' })}>
            {t('cta')}
          </TransitionLink>
        </div>
      </PointerParallax>
      <HeroWaves />
    </section>
  );
}
