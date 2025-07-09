import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "과일게임 - 중독성 강한 숫자 퍼즐 게임",
  description:
    "과일게임은 숫자를 더해 10을 만드는 간단하지만 중독성 강한 퍼즐 게임입니다. 설치 없이 바로 플레이!",
  keywords:
    "과일게임, 숫자 퍼즐, 10 만들기 게임, 무료 퍼즐 게임, 웹 퍼즐 게임, 브라우저 게임, 캐주얼 게임, 두뇌 게임",
  openGraph: {
    title: "과일게임 - 중독성 강한 숫자 퍼즐 게임",
    description:
      "숫자를 골라 10을 만들고 퍼즐을 풀어보세요! 설치 없이 바로 플레이 가능한 재미있는 숫자 퍼즐 게임, 과일게임을 지금 시작해보세요.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "과일게임 - 중독성 강한 숫자 퍼즐 게임",
    description:
      "숫자를 더해 10을 맞추는 간단하고 재미있는 퍼즐 게임! 설치 없이 지금 바로 브라우저에서 플레이하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="theme-color" content="#f97316" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
