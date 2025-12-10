import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

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
  '/api/auth/(.*)'
];

// Create public route matcher
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, req) => {
  // Protect all routes except public ones
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
  
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
