import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xubo.id - Professional Web Development Services",
  description:
    "Layanan profesional untuk membangun website yang modern, responsif, dan sesuai dengan kebutuhan bisnis Anda.",
  metadataBase: new URL("https://xubo.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Xubo.id - Jasa Pembuatan Website Profesional",
    description:
      "Bangun website impian Anda bersama Xubo. Desain modern, responsif, dan SEO-friendly.",
    url: "https://xubo.my.id",
    siteName: "Xubo.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "Xubo.id Website Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xubo.id - Jasa Pembuatan Website Profesional",
    description:
      "Desain dan kembangkan website modern, cepat, dan SEO-friendly untuk bisnis Anda.",
    images: ["/images/og.png"],
    site: "@xuboid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://xubo.my.id/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xubo",
              url: "https://xubo.my.id",
              logo: "https://xubo.id/logo.png",
              sameAs: ["https://www.instagram.com/xubo.id"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
