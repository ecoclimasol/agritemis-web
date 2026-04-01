import { Link } from "@/i18n/navigation.client";
import { getTranslations } from "next-intl/server";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getAllPosts } from "@/lib/blog";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });
  const posts = getAllPosts(locale);

  return (
    <>
      <Section background="white">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </ScrollReveal>
      </Section>

      <Section background="surface">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary text-lg">{t("no_posts")}</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <Card variant="feature" className="h-full hover:shadow-md transition-shadow cursor-pointer">
                    {post.image && (
                      <div className="h-48 bg-agri-green-50 rounded-t-xl overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardContent className="pt-4 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-text-muted">
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
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.description}
                      </CardDescription>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
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
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
