import NavBar from "@/components/NavBar/NavBar";
import postsJson from "@/utils/data/blogPosts.json";
import BlogPostStyle from "@/scss/pages/BlogPost.module.scss";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { Metadata } from "next";

export function generateStaticParams() {
  return postsJson.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = postsJson.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article introuvable • Baptiste Cainjo",
    };
  }

  return {
    title: `${post.title} • Baptiste Cainjo`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} • Baptiste Cainjo`,
      description: post.excerpt,
      url: `https://www.baptistecainjo.fr/blog/${post.slug}`,
      siteName: "Baptiste Cainjo",
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: `https://www.baptistecainjo.fr${post.featured_image_url}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postsJson.find((p) => p.slug === params.slug);

  const filePath = path.join(process.cwd(), "src", "content", `${post?.slug}.md`);

  if (!post) {
    return <p>Post not found</p>;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  if (!fileContent) {
    return <p>Content not found</p>;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.baptistecainjo.fr${post.featured_image_url}`,
    url: `https://www.baptistecainjo.fr/blog/${post.slug}`,
    datePublished: post.created_at.split("-").reverse().join("-"),
    dateModified: post.updated_at.split("-").reverse().join("-"),
    author: {
      "@type": "Person",
      name: "Baptiste Cainjo",
      url: "https://www.baptistecainjo.fr",
    },
    publisher: {
      "@type": "Person",
      name: "Baptiste Cainjo",
      url: "https://www.baptistecainjo.fr",
    },
    inLanguage: "fr-FR",
    keywords: [post.tags, ...post.sub_tags].join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavBar />
      <section className={BlogPostStyle.blogPost}>
        <BlogHeader type="post" post={post} />
        <div className={BlogPostStyle.contentWrapper}>
          <article className={BlogPostStyle.content}>
            <ReactMarkdown>{fileContent}</ReactMarkdown>
          </article>

          <aside className={BlogPostStyle.tocWrapper}>
            <TableOfContents content={fileContent} />
          </aside>
        </div>

        {postsJson.filter((p) => p.slug !== params.slug).length > 0 && (
          <aside className={BlogPostStyle.related}>
            <h2>Plus d&apos;articles que vous allez adorer</h2>
            <div className={BlogPostStyle.posts}>
              {postsJson
                .filter((p) => p.slug !== params.slug)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3)
                .map((post) => (
                  <ArticleCard key={post.id} {...post}></ArticleCard>
                ))}
            </div>
          </aside>
        )}
      </section>
    </>
  );
}
