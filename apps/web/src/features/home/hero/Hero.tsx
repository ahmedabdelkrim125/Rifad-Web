import { TransitionLink } from '@/components/navigation/TransitionLink';
import { PointerParallax } from '@/components/motion/PointerParallax';
import { buttonVariants } from '@rifad/ui';
import { HeroScene } from './HeroScene';
import { HeroWaves } from './HeroWaves';
import { HeroWords } from './HeroWords';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <PointerParallax className={styles.inner}>
        <p className={styles.eyebrow}>اكتشف عالم رفاد</p>
        <h1 id="hero-title" className={styles.title}>
          <HeroWords text="كل ما تحتاجه" position="top" />
          <HeroScene />
          <HeroWords text="في مكان واحد" position="bottom" />
        </h1>
        <p className={styles.subtitle}>اختيارات مميزة ليومك، من مكان واحد</p>
        <div className={styles.cta}>
          <TransitionLink href="/shop" className={buttonVariants({ size: 'lg' })}>
            تسوق الآن
          </TransitionLink>
        </div>
      </PointerParallax>
      <HeroWaves />
    </section>
  );
}
