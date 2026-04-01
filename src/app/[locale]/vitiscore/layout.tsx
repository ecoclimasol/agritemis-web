import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Vitiscore" });

  return {
    title: "VitiScore",
    description: t("hero_title_desc"),
    openGraph: {
      title: `VitiScore — AGRITEMIS`,
      description: t("hero_title_desc"),
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
