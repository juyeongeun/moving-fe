import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 로그인된 사용자가 접근하면 안 되는 페이지
const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/mover/auth/login",
  "/mover/auth/register",
  "/me/profile",
  "/mover/profile",
];

// 보호된 라우트 (로그인 필요)
const protectedRoutes = [
  "/mover/info-edit",
  "/mover/my-page",
  "/mover/my-quote",
  "/mover/profile-edit",
  "/mover/request",
  "/request",
  "/me/info-edit",
  "/me/mover",
  "/me/profile-edit",
  "/me/review",
  "/my-quote",
];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const cookieHeader = request.headers.get("cookie");

  const cookies = Object.fromEntries(
    cookieHeader?.split("; ").map((cookie) => {
      const [key, ...values] = cookie.split("=");
      return [key, values.join("=")];
    }) || []
  );

  // 보호된 라우트 체크
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!cookies.accessToken && !cookies.refreshToken) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // 이미 로그인된 사용자의 인증 페이지 접근 체크
  if (authRoutes.some((route) => pathname === route)) {
    if (cookies.accessToken) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
