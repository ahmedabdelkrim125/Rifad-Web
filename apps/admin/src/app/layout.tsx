import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { plexArabic, plexLatin } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'لوحة تحكم رِفاد', template: '%s | لوحة تحكم رِفاد' },
  robots: { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4a0a1b',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${plexArabic.variable} ${plexLatin.variable}`}>
      <body>{children}</body>
    </html>
  );
}
