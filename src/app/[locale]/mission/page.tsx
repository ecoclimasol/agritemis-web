"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function MissionPage() {
  const t = useTranslations("MissionPage");

  return (
    <>
      {/* Hero */}
      <Section background="green">
        <ScrollReveal>
          <div className="text-center space-y-6 py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("hero_title")}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              {t("hero_subtitle")}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Story */}
      <Section background="white">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeader
              eyebrow={t("story_eyebrow")}
              title={t("story_title")}
              align="left"
              className="mb-4"
            />
            <p className="text-text-secondary text-lg leading-relaxed">
              {t("story_paragraph_1")}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              {t.rich("story_paragraph_2", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Values */}
      <Section background="surface">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t("values_eyebrow")}
            title={t("values_title")}
            subtitle={t("values_subtitle")}
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((num, index) => (
            <ScrollReveal key={num} delay={index * 0.15}>
              <Card variant="feature" className="h-full">
                <CardContent className="pt-6 space-y-3">
                  <CardTitle>{t(`value_${num}_title`)}</CardTitle>
                  <CardDescription>{t(`value_${num}_desc`)}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
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
              <Link href="/contact">{t("cta_button")}</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
