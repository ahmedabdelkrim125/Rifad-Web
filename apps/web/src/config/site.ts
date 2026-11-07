export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  nav: [
    { key: 'home', href: '/' },
    { key: 'shop', href: '/shop' },
    { key: 'categories', href: '/categories' },
    { key: 'about', href: '/about' },
    { key: 'contact', href: '/contact' },
  ],
  trust: ['shipping', 'payment', 'support', 'returns'],
} as const;

export type NavKey = (typeof siteConfig.nav)[number]['key'];
export type TrustId = (typeof siteConfig.trust)[number];
