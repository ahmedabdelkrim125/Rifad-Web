import type { MetadataRoute } from 'next';
import { categories } from '@/config/categories';
import { siteConfig } from '@/config/site';

const routes = [
  '',
  '/shop',
  '/categories',
  ...categories.map((category) => `/categories/${category.slug}`),
  '/offers',
  '/about',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
