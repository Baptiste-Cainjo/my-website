import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog • Baptiste Cainjo',
  description: "Articles sur le développement, l'UX/UI, le développement personnel, le voyage et bien plus encore.",
  openGraph: {
    title: 'Blog • Baptiste Cainjo',
    description: "Articles sur le développement, l'UX/UI, le développement personnel, le voyage et bien plus encore.",
    url: 'https://www.baptistecainjo.fr/blog',
    siteName: 'Baptiste Cainjo',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.baptistecainjo.fr/images/bilan-2025-developpeur-web-baptiste-cainjo.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog • Baptiste Cainjo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog • Baptiste Cainjo',
    description: "Articles sur le développement, l'UX/UI, le développement personnel, le voyage et bien plus encore.",
    images: ['https://www.baptistecainjo.fr/images/bilan-2025-developpeur-web-baptiste-cainjo.jpg'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
