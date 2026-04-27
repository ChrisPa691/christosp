import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/index";
import { Footer } from "@/components/Footer/index";
import { Analytics } from "@vercel/analytics/react";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christos Portfolio — Full-Stack Developer | Next.js, TypeScript, FastAPI",
  description: "Computer science student and full-stack developer building scalable web applications with Next.js, TypeScript, and clean architecture principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${displayFont.variable} ${bodyFont.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col items-center">
          <div className="page-wrapper w-full max-w-6xl px-4 sm:px-6 lg:px-10 flex flex-col flex-1">
            <Navbar />
            <div className="flex-1 w-full">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
