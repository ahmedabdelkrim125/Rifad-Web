export type Offer = {
  id: string;
  title: string;
  ctaLabel: string;
  href: string;
};

export const activeOffer: Offer | null = {
  id: 'special-offers',
  title: 'عروض خاصة وتخفيضات مميزة',
  ctaLabel: 'تسوق العروض',
  href: '/offers',
};
