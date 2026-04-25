import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog • Baptiste Cainjo",
  description: "Articles sur le développement, l'UX/UI, le développement personnel, le voyage et bien plus encore.",
  openGraph: {
    title: "Blog • Baptiste Cainjo",
    description: "Articles sur le développement, l'UX/UI, le développement personnel, le voyage et bien plus encore.",
    url: "https://www.baptistecainjo.fr/blog",
    siteName: "Baptiste Cainjo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.baptistecainjo.fr/images/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog • Baptiste Cainjo",
      },
    ],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
