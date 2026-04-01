import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("eyebrow"),
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} — AGRITEMIS`,
      description: t("subtitle"),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
