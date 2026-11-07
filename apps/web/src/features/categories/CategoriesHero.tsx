import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Sparkle } from '@/components/motion/Sparkle';
import styles from './CategoriesHero.module.css';

const sparkles = [
  { left: 28, top: 21, size: 2.2, delay: 2.6 },
  { left: 86, top: 21, size: 2, delay: 4 },
  { left: 44, top: 63, size: 1.8, delay: 5.2 },
  { left: 68, top: 59, size: 2, delay: 3.4 },
  { left: 19, top: 45, size: 2.2, delay: 4.6 },
];

export function CategoriesHero() {
  const t = useTranslations('categories.hero');

  return (
    <section className={styles.section} aria-labelledby="categories-title">
      <HeroWaves />
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 id="categories-title" className={styles.title}>
            <span className="sr-only">{t('title')}</span>
            <span className={styles.mask} aria-hidden="true">
              <span className={styles.word}>{t('titleDisplay')}</span>
            </span>
          </h1>
          <p className={styles.kicker}>{t('kicker')}</p>
          <p className={styles.lead}>{t('lead')}</p>
        </div>
        <span className={styles.visual} aria-hidden="true">
          <span className={styles.enter}>
            <span className={styles.stage}>
              <Image
                src="/categories/hero.webp"
                alt=""
                width={1600}
                height={554}
                priority
                unoptimized
                className={styles.image}
              />
              <span className={styles.glint} />
              {sparkles.map((sparkle) => (
                <Sparkle key={`${sparkle.left}-${sparkle.top}`} {...sparkle} />
              ))}
            </span>
          </span>
        </span>
      </div>
    </section>
  );
}

function HeroWaves() {
  return (
    <svg
      className={styles.waves}
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 70C110 120 220 196 360 220H0Z" fill="var(--color-burgundy-700)" />
      <path
        d="M0 70C110 120 220 196 360 220"
        fill="none"
        stroke="var(--color-gold-500)"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M1440 120V220H1150C1270 205 1370 170 1440 120Z" fill="var(--color-burgundy-700)" />
    </svg>
  );
}
