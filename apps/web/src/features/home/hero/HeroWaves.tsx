import styles from './Hero.module.css';

export function HeroWaves() {
  return (
    <svg
      className={styles.waves}
      viewBox="0 0 1440 220"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 220V52C150 92 330 190 560 220H0Z" fill="var(--color-burgundy-700)" />
      <path
        d="M0 52C150 92 330 190 560 220"
        fill="none"
        stroke="var(--color-gold-500)"
        strokeWidth="3"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M1440 220V150C1380 190 1300 212 1210 220H1440Z" fill="var(--color-burgundy-700)" />
    </svg>
  );
}
