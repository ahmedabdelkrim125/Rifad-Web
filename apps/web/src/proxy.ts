import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // كل المسارات ما عدا الملفات الثابتة و _next و api
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
