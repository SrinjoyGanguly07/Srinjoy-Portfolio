import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://srinjoyganguly.dev"),
  title: {
    default: "Srinjoy Ganguly — Developer & Creator",
    template: "%s | Srinjoy Ganguly",
  },
  description:
    "Srinjoy Ganguly is a full-stack developer who builds fast, accessible, and beautifully crafted digital experiences. Specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Srinjoy Ganguly",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Srinjoy Ganguly", url: "https://srinjoyganguly.dev" }],
  creator: "Srinjoy Ganguly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srinjoyganguly.dev",
    title: "Srinjoy Ganguly — Developer & Creator",
    description:
      "Full-stack developer building fast, accessible, and beautiful digital experiences.",
    siteName: "Srinjoy Ganguly",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srinjoy Ganguly Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinjoy Ganguly — Developer & Creator",
    description:
      "Full-stack developer building fast, accessible, and beautiful digital experiences.",
    images: ["/og-image.png"],
    creator: "@srinjoyganguly",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
