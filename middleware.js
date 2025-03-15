import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const protectedPaths = ["/innovation-hub", "/events/create", "/admin", "/admin/events", "/admin/users"];
  const isProtectedRoute = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedRoute) {
    // If user is not authenticated, redirect to login page
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url)); // Redirect to login
    }
  }

  return NextResponse.next();
}

// ✅ Apply middleware only to protected routes
export const config = {
  matcher: ["/innovation-hub", "/events/create","/admin", "/admin/events", "/admin/users"],
};
