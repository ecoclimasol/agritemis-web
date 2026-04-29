import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation.client";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Callout, PopulationCard } from "@/components/blog/MDXComponents";

const mdxComponents = { Callout, PopulationCard };

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | AGRITEMIS`,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.image && { images: [post.image] }),
    },
  };
}

export async function generateStaticParams() {
  const locales = ["fr", "en", "es", "pt", "de", "it"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const posts = getAllPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);
  const t = await getTranslations({ locale, namespace: "Blog" });

  if (!post) notFound();

  return (
    <Section background="white">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="space-y-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(locale, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.author}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>

          <p className="text-lg text-text-secondary">
            {post.description}
          </p>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-agri-green-50 text-agri-green-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Hero image */}
        {post.image && (
          <div className="rounded-xl overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-agri max-w-none prose-headings:font-bold prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-agri-green-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-secondary prose-img:mx-auto prose-img:block">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        {/* Back */}
        <div className="mt-16 pt-8 border-t border-border">
          <Button variant="secondary" asChild>
            <Link href="/blog">{t("back_to_blog")}</Link>
          </Button>
        </div>
      </article>
    </Section>
  );
}
