import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MissionPage" });

  return {
    title: t("hero_title"),
    description: t("hero_subtitle"),
    openGraph: {
      title: `${t("hero_title")} — AGRITEMIS`,
      description: t("hero_subtitle"),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
