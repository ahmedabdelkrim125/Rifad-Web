import type { CSSProperties } from 'react';
import { cn } from '@rifad/ui';
import styles from './Hero.module.css';

type HeroWordsProps = {
  text: string;
  position: 'top' | 'bottom';
};

export function HeroWords({ text, position }: HeroWordsProps) {
  const words = text.split(' ');

  return (
    <span className={cn(styles.line, position === 'top' ? styles.lineTop : styles.lineBottom)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className={styles.mask}>
          <span className={styles.word} style={{ '--i': index } as CSSProperties}>
            {word}
          </span>{' '}
        </span>
      ))}
    </span>
  );
}
