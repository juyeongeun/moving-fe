import type { Metadata } from "next";
import GNB from "@/components/layout/GNB";
import localFont from "next/font/local";
import "./globals.css";
import QuoteGNB from "@/components/layout/QuoteGNB";
import cn from "@/config/cn";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const globalStyles = "text-black-400";

export const metadata: Metadata = {
  title: "무빙",
  description: "이사 소비자와 이사 전문가 매칭 서비스",
  icons: {
    icon: "/public/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          `${pretendard.variable} font-pretendard antialiased`,
          globalStyles
        )}
      >
        {/* GNB는 max-width 컨테이너 안에 들어가도록 수정 */}
        <div className="max-w-[1400px] px-5 mx-auto">
          <GNB />
        </div>
        {/* children은 max-width 제한 없이 전체 너비 사용 가능하도록 */}
        {children}
      </body>
    </html>
  );
}
