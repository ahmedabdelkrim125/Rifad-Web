import type { CSSProperties } from 'react';
import styles from './Sparkle.module.css';

type SparkleProps = {
  left: number;
  top: number;
  size: number;
  delay: number;
};

export function Sparkle({ left, top, size, delay }: SparkleProps) {
  const style = {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}%`,
    '--delay': `${delay}s`,
  } as CSSProperties;

  return (
    <span className={styles.sparkle} style={style} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c.6 6.2 2.8 9.4 12 12-9.2 2.6-11.4 5.8-12 12-.6-6.2-2.8-9.4-12-12C9.2 9.4 11.4 6.2 12 0z" />
      </svg>
    </span>
  );
}
