import type { Metadata } from "next";
import GNB from "@/components/layout/GNB";
import localFont from "next/font/local";
import "./globals.css";
import QuoteGNBWrapper from "@/components/layout/QuoteGNBWrapper";
import cn from "@/config/cn";
import { Toaster } from "react-hot-toast";
import TanstackQueryClientProvider from "@/contexts/queryClientProvider";

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
        <TanstackQueryClientProvider>
          <GNB userType={"MOVER"} />
          <QuoteGNBWrapper />
          {children}
          <Toaster />
        </TanstackQueryClientProvider>
      </body>
    </html>
  );
}
