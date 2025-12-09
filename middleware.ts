import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Check if Clerk is configured
const isClerkConfigured = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
                          process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your-clerk-publishable-key';

let clerkMiddleware: any;
let createRouteMatcher: any;

// Only import Clerk if it's configured
if (isClerkConfigured) {
  try {
    const clerkModule = require('@clerk/nextjs/server');
    clerkMiddleware = clerkModule.clerkMiddleware;
    createRouteMatcher = clerkModule.createRouteMatcher;
  } catch (error) {
    console.warn('Clerk middleware not available:', error);
  }
}

// Define public routes that don't require authentication
const publicRoutes = [
  '/',
  '/sign-in',
  '/sign-up',
  '/registrations',
  '/compliance',
  '/ipr',
  '/taxation',
  '/ca-services',
  '/environmental',
  '/agreements',
  '/regulatory',
  '/tools',
  '/about',
  '/contact',
  '/api/consultation',
  '/api/contact',
  '/api/reviews',
  '/api/services',
  '/api/service-inquiry',
  '/api/upload',
  '/api/auth/(.*)',
  '/dashboard/(.*)',
  '/admin/(.*)'
];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  const isPublicRoute = publicRoutes.some(route =>
    pathname === route || pathname.startsWith(route + '/')
  );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // If Clerk is configured, use Clerk middleware
  if (isClerkConfigured && clerkMiddleware) {
    const isPublicRouteMatcher = createRouteMatcher(publicRoutes);
    return clerkMiddleware(async (auth: any, req: NextRequest) => {
      if (!isPublicRouteMatcher(req)) {
        await auth.protect();
      }
      return NextResponse.next();
    })(request);
  }

  // For protected routes without Clerk, check JWT token
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      // Redirect to login for admin routes
      if (pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
      // Return 401 for API routes
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
