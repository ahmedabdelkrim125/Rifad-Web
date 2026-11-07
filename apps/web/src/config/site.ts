export const siteConfig = {
  name: 'رِفاد',
  nameEn: 'Rifad',
  tagline: 'كل احتياجاتك في مكان واحد',
  description:
    'رِفاد متجر إلكتروني يجمع لك اختيارات مميزة ليومك من إلكترونيات وأزياء ومنتجات للمنزل، مع توصيل سريع ودفع آمن لجميع مناطق المملكة العربية السعودية.',
  locale: 'ar_SA',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  nav: [
    { label: 'الرئيسية', href: '/' },
    { label: 'تسوق الآن', href: '/shop' },
    { label: 'الأقسام', href: '/categories' },
    { label: 'من نحن', href: '/about' },
    { label: 'تواصل معنا', href: '/contact' },
  ],
  trust: [
    { id: 'shipping', title: 'توصيل سريع', detail: 'لكل مناطق المملكة' },
    { id: 'payment', title: 'دفع آمن', detail: 'وخيارات متعددة' },
    { id: 'support', title: 'دعم متواصل', detail: 'خدمة عملاء على مدار الساعة' },
    { id: 'returns', title: 'إرجاع سهل', detail: 'خلال 7 أيام' },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
