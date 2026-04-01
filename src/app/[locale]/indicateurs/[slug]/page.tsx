"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import { notFound } from "next/navigation";
import { use } from "react";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

const validSlugs = ["ari", "cri", "cori", "bri", "wari"] as const;
type Slug = (typeof validSlugs)[number];

const colorMap: Record<Slug, { badge: string; bg: string }> = {
  ari: { badge: "bg-red-100 text-red-700", bg: "bg-red-600" },
  cri: { badge: "bg-blue-100 text-blue-700", bg: "bg-agri-blue-600" },
  cori: { badge: "bg-amber-100 text-amber-700", bg: "bg-amber-600" },
  bri: { badge: "bg-emerald-100 text-emerald-700", bg: "bg-emerald-600" },
  wari: { badge: "bg-sky-100 text-sky-700", bg: "bg-sky-600" },
};

export default function IndicatorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const t = useTranslations(`Indicator_${slug}`);

  if (!validSlugs.includes(slug as Slug)) {
    notFound();
  }

  const colors = colorMap[slug as Slug];
  const componentCount = Number(t("component_count"));

  return (
    <main className="bg-surface text-text-primary">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* HERO */}
        <ScrollReveal>
          <section className="text-center space-y-8 py-8">
            <div className={`inline-flex items-center justify-center rounded-full ${colors.badge} text-sm font-semibold px-4 py-2`}>
              {slug.toUpperCase()}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {t("full_name")}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact?subject=indicateurs">
                  {t("cta")}
                </Link>
              </Button>
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* MÉTHODOLOGIE */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("methodology_title")}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("methodology_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: componentCount }, (_, i) => i + 1).map((num) => (
                <div key={num} className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                  <div className={`inline-flex items-center justify-center rounded-full ${colors.badge} text-xs font-semibold px-3 py-1`}>
                    {t(`component_${num}_badge`)}
                  </div>
                  <h3 className="text-base font-semibold">{t(`component_${num}_title`)}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{t(`component_${num}_desc`)}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* PONDÉRATION */}
        <ScrollReveal>
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("weighting_title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                <h3 className="text-base font-semibold">{t("weighting_active_title")}</h3>
                <p className="text-sm text-text-secondary">{t("weighting_active_desc")}</p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                <h3 className="text-base font-semibold">{t("weighting_metabolites_title")}</h3>
                <p className="text-sm text-text-secondary">{t("weighting_metabolites_desc")}</p>
              </div>
            </div>
            <p className="text-sm text-text-muted italic">
              {t("pfas_warning")}
            </p>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* SOURCES */}
        <ScrollReveal>
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("sources_title")}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t("sources_desc")}
            </p>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* CTA */}
        <ScrollReveal>
          <section className="space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("cta_final_title")}
            </h2>
            <p className="max-w-3xl mx-auto text-text-secondary">
              {t("cta_final_desc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact?subject=indicateurs">{t("cta")}</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/indicateurs">{t("back_to_indicators")}</Link>
              </Button>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
