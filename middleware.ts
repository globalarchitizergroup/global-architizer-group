import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const adminAuth = req.cookies.get("admin-auth");

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin/dashboard");

  if (isAdminRoute && !adminAuth) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
