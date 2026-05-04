import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import BtnUp from "@/components/BtnUp/BtnUp";
import Cursor from "@/components/Cursor/Cursor";
import Footer from "@/components/Footer/Footer";
import "../scss/globals.scss";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.baptistecainjo.fr"),
  title: "Baptiste Cainjo • Développeur Front-end",
  description:
    "Site web personnel de Baptiste CAINJO, développeur Front-end depuis septembre 2022. Ce portfolio contient mes projets, mon parcours ou encore un formulaire de contact.",
  icons: {
    icon: "./images/favicon.ico",
  },
  openGraph: {
    title: "Baptiste Cainjo • Développeur Front-end",
    description:
      "Site web personnel de Baptiste CAINJO, développeur Front-end depuis septembre 2022. Ce portfolio contient mes projets, mon parcours ou encore un formulaire de contact.",
    url: "https://www.baptistecainjo.fr",
    siteName: "Baptiste Cainjo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.baptistecainjo.fr/images/documentation.webp",
        width: 1200,
        height: 630,
        alt: "Baptiste Cainjo • Développeur Front-end",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Baptiste Cainjo",
  url: "https://www.baptistecainjo.fr",
  jobTitle: "Développeur Front-end",
  description:
    "Développeur Front-end depuis septembre 2022. Portfolio contenant mes projets, mon parcours et un formulaire de contact.",
  image: "https://www.baptistecainjo.fr/images/og-home.jpg",
  sameAs: ["https://www.linkedin.com/in/baptistecainjo", "https://github.com/BaptisteCainjo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={outfit.className}>
        <Cursor />
        <main>{children}</main>
        <BtnUp />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
