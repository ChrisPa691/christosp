import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar/index";
import { Footer } from "@/components/Footer/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
            --text-muted: #6B7280;
            --text-inverted: #0B0F14;

            --accent: #3B82F6;
            --accent-hover: #2563EB;
            --accent-soft: #1E3A8A;
            --focus-ring: #60A5FA;

            --success: #14B8A6;
            --warning: #F59E0B;
            --error: #EF4444;
          }

          /* light mode */
          :root[data-theme="light"] {
            --bg: #F9FAFB;
            --surface: #FFFFFF;
            --surface-elevated: #F3F4F6;
            --border: #D1D5DB;

            --text-primary: #111827;
            --text-secondary: #4B5563;
            --text-muted: #6B7280;
            --text-inverted: #FFFFFF;

            --accent: #2563EB;
            --accent-hover: #1D4ED8;
            --accent-soft: #DBEAFE;
            --focus-ring: #93C5FD;

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
            font-family: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1 {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            line-height: 1.1;
            letter-spacing: -0.02em;
            color: var(--text-primary);
          }

          h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -0.01em;
            color: var(--text-primary);
          }

          h3 {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 600;
            line-height: 1.3;
            color: var(--text-primary);
          }

          p {
            font-size: 1rem;
            line-height: 1.7;
            color: var(--text-secondary);
          }

          .page-wrapper {
            padding-top: 64px;
          }
        `}} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="page-wrapper">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-10 mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
