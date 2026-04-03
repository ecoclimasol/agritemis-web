import { getTranslations } from "next-intl/server";

const validSlugs = ["ari", "cri", "cori", "bri", "wari"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;

  if (!validSlugs.includes(slug)) return {};

  const t = await getTranslations({ locale, namespace: `Indicator_${slug}` });

  return {
    title: `${slug.toUpperCase()} — ${t("full_name")}`,
    description: t("description"),
    openGraph: {
      title: `${slug.toUpperCase()} — ${t("full_name")} | AGRITEMIS`,
      description: t("description"),
    },
  };
}

export function generateStaticParams() {
  const locales = ["fr", "en", "es", "pt"];
  return locales.flatMap((locale) =>
    validSlugs.map((slug) => ({ locale, slug }))
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
