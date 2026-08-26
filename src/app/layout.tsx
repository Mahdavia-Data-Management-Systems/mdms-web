"use client";

import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import AuthProvider from "@/components/auth-provider";
import "./globals.css";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${sourceSans.variable}`}>
      <head>
        <title>MDMS - Mahdavia Data Management System</title>
        <meta
          name="description"
          content="Digital platforms preserving sacred knowledge, advancing education, and strengthening the Mahdavia community worldwide."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MDMS - Mahdavia Data Management System"
        />
        <meta
          property="og:description"
          content="Digital platforms preserving sacred knowledge, advancing education, and strengthening the Mahdavia community worldwide."
        />
        <meta property="og:site_name" content="MDMS" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="MDMS - Mahdavia Data Management System"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MDMS - Mahdavia Data Management System"
        />
        <meta
          name="twitter:description"
          content="Digital platforms preserving sacred knowledge, advancing education, and strengthening the Mahdavia community worldwide."
        />
        <meta name="twitter:image" content="/og-image.png" />
        <meta
          name="twitter:image:alt"
          content="MDMS - Mahdavia Data Management System"
        />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
