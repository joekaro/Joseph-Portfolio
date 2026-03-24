import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Obanovwe — Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer based in Lagos, Nigeria. I build production-ready web applications, ecommerce platforms, and scalable backend APIs.",
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "Lagos Nigeria",
    "Next.js",
    "React",
    "Node.js",
    "Laravel",
  ],
  authors: [{ name: "Joseph Obanovwe" }],
  openGraph: {
    title: "Joseph Obanovwe — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building production-ready web applications and ecommerce platforms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Obanovwe — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building production-ready web applications and ecommerce platforms.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-ink-50 text-ink-900 font-body antialiased">
        {children}
      </body>
    </html>
  );
}
