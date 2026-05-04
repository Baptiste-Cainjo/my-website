import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Linkedin • Baptiste Cainjo",
  description:
    "Tous mes posts linkedIn en un seul endroit. Découvrez mes réflexions, conseils et partages d'expérience sur le développement web, la technologie et plus encore.",
  openGraph: {
    title: "Blog Linkedin • Baptiste Cainjo",
    description:
      "Tous mes posts linkedIn en un seul endroit. Découvrez mes réflexions, conseils et partages d'expérience sur le développement web, la technologie et plus encore.",
    url: "https://www.baptistecainjo.fr/blog/linkedin",
    siteName: "Baptiste Cainjo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.baptistecainjo.fr/images/og-linkedin.jpg",
        width: 1200,
        height: 630,
        alt: "Blog Linkedin • Baptiste Cainjo",
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
