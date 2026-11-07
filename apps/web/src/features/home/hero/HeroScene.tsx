import type { CSSProperties } from 'react';
import { cn } from '@rifad/ui';
import { heroCanvas, heroLayers, heroSparkles, lamp } from './hero-layers';
import { HeroSparkle } from './HeroSparkle';
import styles from './Hero.module.css';

const glowSize = 1.9;

export function HeroScene() {
  const lampLeft = parseFloat(lamp.left);
  const lampTop = parseFloat(lamp.top);
  const lampWidth = parseFloat(lamp.boxWidth);
  const lampHeight = parseFloat(lamp.boxHeight);
  const glowWidth = lampWidth * glowSize;
  const glowHeight = glowWidth * heroCanvas.ratio;

  const glowStyle: CSSProperties = {
    left: `${lampLeft + lampWidth / 2 - glowWidth / 2}%`,
    top: `${lampTop + lampHeight * 0.3 - glowHeight / 2}%`,
    width: `${glowWidth}%`,
    height: `${glowHeight}%`,
  };

  return (
    <span className={styles.scene} aria-hidden="true">
      <span className={styles.parallax}>
        <span
          className={styles.stage}
          style={{ aspectRatio: `${heroCanvas.width} / ${heroCanvas.height}` }}
        >
          <span className={styles.glow} style={glowStyle} />
          {heroLayers.map((layer) => {
            const style = {
              left: layer.left,
              top: layer.top,
              width: layer.boxWidth,
              height: layer.boxHeight,
              zIndex: layer.z,
              '--delay': `${layer.delay}s`,
              '--dur': `${layer.duration}s`,
            } as CSSProperties;

            return (
              <span key={layer.id} className={cn(styles.layer, styles[layer.motion])} style={style}>
                <img
                  src={layer.src}
                  width={layer.width}
                  height={layer.height}
                  alt=""
                  decoding="async"
                  fetchPriority="high"
                  draggable={false}
                />
              </span>
            );
          })}
          <span className={styles.glint} />
          {heroSparkles.map((sparkle) => (
            <HeroSparkle key={`${sparkle.left}-${sparkle.top}`} {...sparkle} />
          ))}
        </span>
      </span>
    </span>
  );
}
