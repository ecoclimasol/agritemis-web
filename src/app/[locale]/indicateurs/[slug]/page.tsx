"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import { notFound } from "next/navigation";
import { use } from "react";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const validSlugs = ["ari", "cri", "cori", "bri", "wari"] as const;
type Slug = (typeof validSlugs)[number];

const colorMap: Record<Slug, { header: string; headerDark: string; accent: string; badge: string }> = {
  ari: { header: "bg-red-600", headerDark: "bg-red-800", accent: "text-red-600", badge: "bg-red-100 text-red-700" },
  cri: { header: "bg-orange-600", headerDark: "bg-orange-800", accent: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  cori: { header: "bg-amber-600", headerDark: "bg-amber-800", accent: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
  bri: { header: "bg-emerald-600", headerDark: "bg-emerald-800", accent: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
  wari: { header: "bg-sky-600", headerDark: "bg-sky-800", accent: "text-sky-600", badge: "bg-sky-100 text-sky-700" },
};

export default function IndicatorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const t = useTranslations(`Indicator_${slug}`);

  if (!validSlugs.includes(slug as Slug)) {
    notFound();
  }

  const colors = colorMap[slug as Slug];
  const leftSectionCount = Number(t("left_section_count"));
  const rightSectionCount = Number(t("right_section_count"));

  return (
    <main className="bg-surface text-text-primary">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* INDICATOR CARD */}
        <ScrollReveal>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className={`${colors.header} px-6 py-5 flex items-center gap-4`}>
              <span className="text-3xl md:text-4xl font-black text-white">
                {slug.toUpperCase()}
              </span>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-white">
                  {t("card_title")}
                </h1>
                <p className="text-sm text-white/85 mt-1">
                  {t("card_subtitle")}
                </p>
              </div>
            </div>

            {/* Two-column body */}
            <div className="grid md:grid-cols-2">
              {/* Left: Substance active */}
              <div className="bg-gray-50 p-5 border-r border-gray-200">
                <div className={`${colors.header} text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4 flex justify-between`}>
                  <span>{t("col_left_title")}</span>
                  <span className="font-normal opacity-75">75 %</span>
                </div>

                {Array.from({ length: leftSectionCount }, (_, i) => i + 1).map((num) => (
                  <div key={num} className="mb-4">
                    <h3 className={`text-xs font-bold uppercase tracking-wide ${colors.accent} mb-2`}>
                      {t(`left_section_${num}_label`)}
                    </h3>
                    <ul className="space-y-1">
                      {t(`left_section_${num}_items`).split("|").map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className={`${colors.accent} font-bold mt-0.5`}>›</span>
                          {item.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Right: Métabolites */}
              <div className="bg-gray-50 p-5">
                <div className={`${colors.headerDark} text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4 flex justify-between`}>
                  <span>{t("col_right_title")}</span>
                  <span className="font-normal opacity-75">25 %</span>
                </div>

                {Array.from({ length: rightSectionCount }, (_, i) => i + 1).map((num) => (
                  <div key={num} className="mb-4">
                    <h3 className={`text-xs font-bold uppercase tracking-wide ${colors.accent} mb-2`}>
                      {t(`right_section_${num}_label`)}
                    </h3>
                    <ul className="space-y-1">
                      {t(`right_section_${num}_items`).split("|").map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className={`${colors.accent} font-bold mt-0.5`}>›</span>
                          {item.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Formula */}
                <div className="bg-gray-200/60 rounded-lg p-3 mt-4">
                  <p className="text-sm text-gray-600">
                    {t("formula")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* DESCRIPTION */}
        <ScrollReveal>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-text-secondary text-lg leading-relaxed">
              {t("description")}
            </p>
            <p className="text-sm text-text-muted italic">
              {t("pfas_warning")}
            </p>
          </div>
        </ScrollReveal>

        {/* SOURCES */}
        <ScrollReveal>
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold">{t("sources_title")}</h2>
            <p className="text-text-secondary leading-relaxed">
              {t("sources_desc")}
            </p>
          </div>
        </ScrollReveal>

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
