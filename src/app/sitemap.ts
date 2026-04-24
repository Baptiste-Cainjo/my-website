import { MetadataRoute } from "next";
import blogPosts from "@/utils/data/blogPosts.json";

const BASE_URL = "https://www.baptistecainjo.fr";

function parseDate(dateStr: string): string {
  const [day, month, year] = dateStr.split("-");
  return `${year}-${month}-${day}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/linkedin`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(parseDate(post.updated_at)),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPostPages];
}
