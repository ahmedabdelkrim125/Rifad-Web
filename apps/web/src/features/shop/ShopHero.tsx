import Image from 'next/image';
import { Sparkle } from '@/components/motion/Sparkle';
import { ShopSearch } from './ShopSearch';
import styles from './ShopHero.module.css';

const sparkles = [
  { left: 15, top: 52, size: 2.6, delay: 2.6 },
  { left: 48, top: 52, size: 2.2, delay: 4 },
  { left: 59.5, top: 73, size: 2.2, delay: 5.2 },
  { left: 87, top: 62, size: 2, delay: 3.4 },
  { left: 17, top: 24, size: 2.4, delay: 4.6 },
];

export function ShopHero() {
  return (
    <section className={styles.section} aria-labelledby="shop-title">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 id="shop-title" className={styles.title}>
            <span className={styles.mask}>
              <span className={styles.word}>تسوّق الآن</span>
            </span>
          </h1>
          <p className={styles.lead}>اكتشف أفضل المنتجات من مختلف الفئات في مكان واحد</p>
          <div className={styles.search}>
            <ShopSearch />
          </div>
        </div>
        <span className={styles.visual} aria-hidden="true">
          <span className={styles.enter}>
            <span className={styles.stage}>
              <Image
                src="/shop/hero.webp"
                alt=""
                width={1400}
                height={595}
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