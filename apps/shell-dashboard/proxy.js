import { NextResponse } from "next/server";

export default function proxy(req) {
  const session = req.cookies.get("session");
  const pathname = req.nextUrl.pathname;

  const isAuthPage =
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup");

  const isProtectedPage =
    pathname.startsWith("/dashboard");

  // Not authenticated → trying to access protected page
  if (!session && isProtectedPage) {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  // Authenticated → trying to access login/signup
  if (session && isAuthPage) {
    return NextResponse.redirect(
      new URL("/dashboard", req.url)
    );
  }

  return NextResponse.next();
}
