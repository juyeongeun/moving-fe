import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// 로그인된 사용자가 접근하면 안 되는 페이지
const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/mover/auth/login",
  "/mover/auth/register",
  "/oauth/kakao",
  "/oauth/kakao/callback",
  "/oauth/google",
  "/oauth/google/callback",
  "/oauth/naver",
  "/oauth/naver/callback",
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
  const hasTokens =
    cookieHeader?.includes("accessToken") ||
    cookieHeader?.includes("refreshToken");

  // OAuth 콜백 처리 추가
  if (pathname.startsWith("/oauth") && pathname.includes("/callback")) {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${pathname}?code=${code}&state=${state}`,
        {
          credentials: "include",
          redirect: "manual",
        }
      );

      // 백엔드에서 보낸 쿠키 처리
      const cookies = response.headers.getSetCookie();

      // 응답 복제 (스트림은 한 번만 읽을 수 있으므로)
      const responseClone = response.clone();

      try {
        // 먼저 JSON 파싱 시도
        const responseData = await response.json();
        if (responseData.data?.redirect === true) {
          console.log("OAuth redirect:", responseData.data);
          const redirectUrl = new URL(
            responseData.data.redirectUrl,
            request.url
          );
          redirectUrl.searchParams.set("oauth", "true");
          const res = NextResponse.redirect(redirectUrl);
          cookies.forEach((cookie) => {
            res.headers.append("Set-Cookie", cookie);
          });
          return res;
        }
      } catch (jsonError) {
        // JSON 파싱 실패 시 일반 리다이렉트 처리
        if (responseClone.status === 302 || responseClone.status === 301) {
          console.log("Status redirect:", responseClone);
          const redirectUrl = responseClone.headers.get("location");
          const res = NextResponse.redirect(
            new URL(redirectUrl || "/", request.url)
          );
          cookies.forEach((cookie) => {
            res.headers.append("Set-Cookie", cookie);
          });
          return res;
        }
      }
    } catch (error) {
      console.error("Redirect handling error:", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Host", process.env.NEXT_PUBLIC_API_URL || "");

  // 이미 로그인된 사용자의 인증 페이지 접근 제한
  if (authRoutes.includes(pathname) && hasTokens) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // mover 페이지 접근 시 (register, profile, login 페이지는 제외)
  if (
    pathname.startsWith("/mover") &&
    !pathname.startsWith("/mover/auth/register") &&
    !pathname.startsWith("/mover/profile") &&
    !pathname.startsWith("/mover/auth/login")
  ) {
    if (!hasTokens) {
      return NextResponse.redirect(new URL("/mover/auth/login", request.url));
    }
  }

  // 일반 보호된 라우트
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!hasTokens) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
