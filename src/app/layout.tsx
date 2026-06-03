import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chatbot/ChatBot";
import JsonLd from "@/components/seo/JsonLd";

const BASE_URL = "https://www.knexvora.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "KNEXVORA | Institutional Excellence Reimagined",
    template: "%s | KNEXVORA",
  },
  description:
    "KNEXVORA unifies every dimension of your institution — admissions, academics, finance, HR, and compliance — into one platform built exclusively for higher education.",
  keywords: [
    "university management system",
    "higher education ERP",
    "KNEXVORA",
    "institutional software",
    "university ERP platform",
    "college management software",
    "academic ERP",
    "higher education technology",
  ],
  authors: [{ name: "KNEXVORA" }],
  creator: "KNEXVORA",
  publisher: "KNEXVORA",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "KNEXVORA",
    title: "KNEXVORA | Institutional Excellence Reimagined",
    description:
      "KNEXVORA unifies every dimension of your institution — admissions, academics, finance, HR, and compliance — into one platform built exclusively for higher education.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "KNEXVORA — Institutional Excellence Reimagined",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KNEXVORA | Institutional Excellence Reimagined",
    description:
      "KNEXVORA unifies every dimension of your institution — admissions, academics, finance, HR, and compliance — into one platform built exclusively for higher education.",
    images: ["/images/og-image.png"],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KNEXVORA",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.webp`,
  description:
    "KNEXVORA unifies every dimension of your institution — admissions, academics, finance, HR, and compliance — into one platform built exclusively for higher education.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: `${BASE_URL}/contact`,
  },
  sameAs: [
    // Add your social profile URLs here when available
    // "https://www.linkedin.com/company/knexvora",
    // "https://twitter.com/knexvora",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300..700;1,8..60,300..700&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="bg-background text-on-background overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}