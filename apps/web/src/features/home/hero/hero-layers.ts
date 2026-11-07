import manifest from './hero-manifest.json';

type Motion = 'rise' | 'drop' | 'arc' | 'unfurlStart' | 'unfurlEnd';

type LayerPlan = {
  z: number;
  motion: Motion;
  delay: number;
  duration: number;
};

const plan: Record<string, LayerPlan> = {
  base: { z: 2, motion: 'rise', delay: 0.2, duration: 1.0 },
  arc_left: { z: 1, motion: 'arc', delay: 0.55, duration: 1.3 },
  arc_right: { z: 1, motion: 'arc', delay: 0.8, duration: 1.1 },
  ribbon_left: { z: 3, motion: 'unfurlStart', delay: 0.5, duration: 1.1 },
  ribbon_right: { z: 3, motion: 'unfurlEnd', delay: 0.6, duration: 1.1 },
  lamp: { z: 4, motion: 'drop', delay: 0.75, duration: 1.2 },
  sneaker: { z: 4, motion: 'drop', delay: 0.9, duration: 1.2 },
  headphones: { z: 5, motion: 'drop', delay: 1.0, duration: 1.2 },
  bottle: { z: 6, motion: 'drop', delay: 1.15, duration: 1.2 },
  watch: { z: 7, motion: 'drop', delay: 1.3, duration: 1.2 },
  airpods: { z: 8, motion: 'drop', delay: 1.45, duration: 1.2 },
};

export const heroCanvas = {
  width: manifest.width,
  height: manifest.height,
  ratio: manifest.width / manifest.height,
};

export const heroLayers = manifest.layers.map((layer) => {
  const config = plan[layer.id];
  if (!config) {
    throw new Error(`Missing hero layer plan: ${layer.id}`);
  }
  return {
    id: layer.id,
    src: `/hero/${layer.file}`,
    width: layer.w,
    height: layer.h,
    left: `${layer.left}%`,
    top: `${layer.top}%`,
    boxWidth: `${layer.width}%`,
    boxHeight: `${layer.height}%`,
    ...config,
  };
});

export const heroSparkles = [
  { left: 36.5, top: 61, size: 2.4, delay: 2.4 },
  { left: 62.3, top: 15.5, size: 2.1, delay: 3.6 },
  { left: 28.2, top: 62, size: 1.8, delay: 4.7 },
  { left: 38.6, top: 38, size: 1.9, delay: 5.5 },
  { left: 97, top: 17, size: 2.2, delay: 3.1 },
] as const;

export const lamp = (() => {
  const layer = heroLayers.find((item) => item.id === 'lamp');
  if (!layer) {
    throw new Error('Missing lamp layer');
  }
  return layer;
})();
