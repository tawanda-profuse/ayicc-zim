import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const protectedPaths = [
    "/innovation-hub",
    "/innovation-hub/profiles",
    "/events/create",
    "/admin",
    "/admin/events",
    "/admin/users",
  ];

  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // 🔒 Redirect unauthenticated users trying to access protected routes
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🚫 Prevent authenticated users from accessing login or register
  const isAuthPage = pathname === "/login" || pathname === "/register";
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/innovation-hub", req.url));
  }

  return NextResponse.next();
}

// ✅ Apply middleware to both protected and auth routes
export const config = {
  matcher: [
    "/login",
    "/register",
    "/innovation-hub",
    "/innovation-hub/profiles",
    "/events/create",
    "/admin",
    "/admin/events",
    "/admin/users",
  ],
};
