import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Pro & Team | 프로앤팀 특허법률사무소",
  description: "국제 IP 분쟁 전문 | International IP Dispute Specialists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-white">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
