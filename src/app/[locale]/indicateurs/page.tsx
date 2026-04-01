"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

const indicators = [
  { acronym: "ARI", key: "ari", color: "bg-agri-green-600" },
  { acronym: "CRI", key: "cri", color: "bg-agri-blue-600" },
  { acronym: "CORI", key: "cori", color: "bg-amber-600" },
  { acronym: "BRI", key: "bri", color: "bg-emerald-600" },
  { acronym: "WARI", key: "wari", color: "bg-sky-600" },
] as const;

export default function IndicateursPage() {
  const t = useTranslations("Indicators");
  const tLanding = useTranslations("Landing");

  return (
    <>
      {/* Hero */}
      <Section background="white" className="!pb-0">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </ScrollReveal>
      </Section>

      {/* Indicator Grid — Row 1: first 3 */}
      <Section background="white" className="pt-0 pb-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.slice(0, 3).map((indicator, index) => (
            <ScrollReveal key={indicator.acronym} delay={index * 0.1}>
              <Card variant="indicator" className="h-full">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${indicator.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}
                    >
                      {indicator.acronym.charAt(0)}
                    </div>
                    <div>
                      <CardTitle>{indicator.acronym}</CardTitle>
                      <p className="text-xs text-text-muted">
                        {tLanding(`indicator_${indicator.key}_title`)}
                      </p>
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {tLanding(`indicator_${indicator.key}_short_desc`)}
                  </CardDescription>
                  <Link
                    href={`/indicateurs/${indicator.key}`}
                    className="inline-block text-sm font-medium text-agri-green-600 hover:text-agri-green-700 transition-colors"
                  >
                    {tLanding("indicator_learn_more")} &rarr;
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: last 2, centered */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {indicators.slice(3).map((indicator, index) => (
            <ScrollReveal key={indicator.acronym} delay={(index + 3) * 0.1}>
              <Card variant="indicator" className="h-full">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${indicator.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}
                    >
                      {indicator.acronym.charAt(0)}
                    </div>
                    <div>
                      <CardTitle>{indicator.acronym}</CardTitle>
                      <p className="text-xs text-text-muted">
                        {tLanding(`indicator_${indicator.key}_title`)}
                      </p>
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {tLanding(`indicator_${indicator.key}_short_desc`)}
                  </CardDescription>
                  <Link
                    href={`/indicateurs/${indicator.key}`}
                    className="inline-block text-sm font-medium text-agri-green-600 hover:text-agri-green-700 transition-colors"
                  >
                    {tLanding("indicator_learn_more")} &rarr;
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* EIQ Comparison */}
      <Section background="surface">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeader
              eyebrow={t("eiq_eyebrow")}
              title={t("eiq_title")}
              subtitle={t("eiq_subtitle")}
              align="left"
            />
            <p className="text-text-secondary text-lg leading-relaxed">
              {t("eiq_paragraph_1")}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              {t("eiq_paragraph_2")}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section background="white">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <SectionHeader
              title={t("cta_title")}
              subtitle={t("cta_subtitle")}
            />
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact?subject=indicateurs">{t("cta_button")}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
