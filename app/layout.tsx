import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "./json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glintara Digital | Software Development Agency - Web, Mobile & Desktop",
  description: "Glintara Digital is a premier software development agency specializing in custom web applications, mobile apps, and desktop software. Expert engineering for your digital products.",
  keywords: "software development agency, web development, mobile app development, desktop app development, custom software, tech solutions, Jakarta",
  authors: [{ name: "Glintara Digital" }],
  creator: "Glintara Digital",
  publisher: "Glintara Digital",
  icons: {
    icon: "/assets/images/logo.png",
    shortcut: "/assets/images/logo.png",
    apple: "/assets/images/logo.png",
  },
  openGraph: {
    type: "website",
    url: "https://glintaradigital.com",
    title: "Glintara Digital | Software Development Agency",
    description: "Premier software development agency specializing in custom web applications, mobile apps, and desktop solutions.",
    siteName: "Glintara Digital",
    locale: "en_US",
    images: [
      {
        url: "/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Glintara Digital Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glintara Digital | Software Development Agency",
    description: "Premier software development agency specializing in custom web applications, mobile apps, and digital solutions.",
    images: ["/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-black text-white">
        {children}
      </body>
    </html>
  );
}
