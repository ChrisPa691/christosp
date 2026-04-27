import type { Metadata } from "next";
import { Space_Grotesk, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/index";
import { Footer } from "@/components/Footer/index";

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
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          /* dark mode */
          :root[data-theme="dark"], :root {
            --bg: #0B0F14;
            --surface: #111827;
            --surface-elevated: #1F2933;
            --border: #2A3441;

            --text-primary: #E5E7EB;
            --text-secondary: #9CA3AF;
            --text-muted: #9CA3AF;
            --text-inverted: #0B0F14;

            --accent: #3B82F6;
            --accent-hover: #2563EB;
            --accent-soft: #1E3A8A;
            --focus-ring: #60A5FA;

            --success: #14B8A6;
            --warning: #F59E0B;
            --error: #EF4444;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html {
            height: 100%;
            scroll-behavior: smooth;
          }

          body {
            background: var(--bg);
            color: var(--text-primary);
            min-height: 100vh;
            font-family: var(--font-body), system-ui, -apple-system, sans-serif;
            line-height: 1.65;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1, h2, h3 {
            font-family: var(--font-display), system-ui, -apple-system, sans-serif;
            color: var(--text-primary);
          }

          h1 {
            font-size: clamp(2.7rem, 5vw, 4.4rem);
            font-weight: 800;
            line-height: 1.08;
            letter-spacing: -0.01em;
          }

          h2 {
            font-size: clamp(2.1rem, 3.8vw, 3.2rem);
            font-weight: 750;
            line-height: 1.14;
            letter-spacing: -0.008em;
          }

          p {
            font-size: 1rem;
            line-height: 1.65;
            color: var(--text-secondary);
          }

          .page-wrapper {
            padding-top: 0px;
          }
        `}} />
      </head>
      <body
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
      </body>
    </html>
  );
}
