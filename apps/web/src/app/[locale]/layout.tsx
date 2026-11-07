import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { localeMeta, routing } from '@/i18n/routing';
import { plexArabic, plexLatin } from '@/lib/fonts';
import { organizationJsonLd, serializeJsonLd, websiteJsonLd } from '@/lib/json-ld';
import { buildAlternates } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import '../globals.css';
import '../transitions.css';

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<LayoutProps, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: 'site' });
  const title = `${t('name')} | ${t('tagline')}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${t('name')}` },
    description: t('description'),
    applicationName: t('name'),
    alternates: buildAlternates(locale, '/'),
    openGraph: {
      type: 'website',
      locale: localeMeta[locale].ogLocale,
      siteName: t('name'),
      title,
      description: t('description'),
      url: locale === routing.defaultLocale ? '/' : `/${locale}`,
    },
    twitter: { card: 'summary_large_image', title, description: t('description') },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#701127',
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'site' });
  const a11y = await getTranslations({ locale, namespace: 'a11y' });
  const names = { name: t('name'), nameEn: 'Rifad' };

  return (
    <html
      lang={locale}
      dir={localeMeta[locale].dir}
      suppressHydrationWarning
      className={`${plexArabic.variable} ${plexLatin.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-burgundy-700 focus:px-5 focus:py-3 focus:text-cream-50"
          >
            {a11y('skipToContent')}
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd(names)) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd(locale, names)) }}
        />
      </body>
    </html>
  );
}
