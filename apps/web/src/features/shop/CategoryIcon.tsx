import {
  Baby,
  BookOpen,
  CarFront,
  Dumbbell,
  Ellipsis,
  Headphones,
  LayoutGrid,
  Luggage,
  PawPrint,
  Shirt,
  ShoppingBasket,
  Sofa,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import type { CategoryIconKey } from '@/config/categories';

const icons: Record<CategoryIconKey, LucideIcon> = {
  headphones: Headphones,
  shirt: Shirt,
  sofa: Sofa,
  baby: Baby,
  sparkles: Sparkles,
  dumbbell: Dumbbell,
  paw: PawPrint,
  basket: ShoppingBasket,
  luggage: Luggage,
  car: CarFront,
  book: BookOpen,
  grid: LayoutGrid,
  ellipsis: Ellipsis,
};

type CategoryIconProps = {
  name: CategoryIconKey;
  className?: string;
};

export function CategoryIcon({ name, className }: CategoryIconProps) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.4} aria-hidden="true" />;
}
