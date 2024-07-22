// src/middleware.ts
import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', 'https://tanstack.vercel.app/');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204 });
  }

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
