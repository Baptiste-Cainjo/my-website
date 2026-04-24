import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales • Baptiste Cainjo",
  description:
    "Mentions légales du site web personnel de Baptiste Cainjo, développeur Front-end. Retrouvez les informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la gestion des données personnelles.",
  openGraph: {
    title: "Mentions légales • Baptiste Cainjo",
    description:
      "Mentions légales du site web personnel de Baptiste Cainjo, développeur Front-end. Retrouvez les informations sur l'éditeur, l'hébergement, la propriété intellectuelle et la gestion des données personnelles.",
    url: "https://www.baptistecainjo.fr/legales",
    siteName: "Baptiste Cainjo",
    locale: "fr_FR",
    type: "website",
  },
};

export default function LegalesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
