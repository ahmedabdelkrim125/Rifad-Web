import localFont from 'next/font/local';

export const plexArabic = localFont({
  src: [
    { path: '../assets/fonts/arabic-400.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/arabic-500.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/arabic-600.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/arabic-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-plex-ar',
  display: 'swap',
});

export const plexLatin = localFont({
  src: [
    { path: '../assets/fonts/latin-400.woff2', weight: '400', style: 'normal' },
    { path: '../assets/fonts/latin-500.woff2', weight: '500', style: 'normal' },
    { path: '../assets/fonts/latin-600.woff2', weight: '600', style: 'normal' },
    { path: '../assets/fonts/latin-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-plex-lat',
  display: 'swap',
});
