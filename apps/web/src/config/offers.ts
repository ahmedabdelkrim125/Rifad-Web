export type Offer = {
  id: string;
  href: string;
};

export const activeOffer: Offer | null = {
  id: 'special-offers',
  href: '/offers',
};
