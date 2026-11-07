import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from '@rifad/supabase/middleware';
import { isAdminRole } from '@rifad/validators';

export async function proxy(request: NextRequest) {
  const { response, user } = await updateSession(request);
  const isLogin = request.nextUrl.pathname === '/login';
  const allowed = Boolean(user) && isAdminRole(user?.app_metadata?.role);

  if (!allowed && !isLogin) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (allowed && isLogin) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|icon.png|brand/).*)'],
};
