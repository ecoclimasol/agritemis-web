"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function WaterScorePage() {
  const t = useTranslations("Waterscore");
  const tLanding = useTranslations("Landing");

  return (
    <main className="bg-surface text-text-primary">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* HERO */}
        <ScrollReveal>
          <section className="text-center space-y-8 py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("hero_title_name")}
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">{t("hero_title_desc")}</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary">
              {t("hero_subtitle")}
            </p>

            <p className="text-sm md:text-base text-text-muted">
              {t("hero_context")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact?subject=waterscore">
                  {t("hero_cta")}
                </Link>
              </Button>
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* QU'EST-CE QUE WATERSCORE ? */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("what_title")}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("what_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-2">
                <h3 className="text-lg font-semibold">{t("what_wari_title")}</h3>
                <p className="text-sm text-text-secondary">{t("what_wari_desc")}</p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-2">
                <h3 className="text-lg font-semibold">{t("what_cumul_title")}</h3>
                <p className="text-sm text-text-secondary">{t("what_cumul_desc")}</p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-2">
                <h3 className="text-lg font-semibold">{t("what_score_title")}</h3>
                <p className="text-sm text-text-secondary">{t("what_score_desc")}</p>
              </div>
            </div>

            <p className="text-sm md:text-base text-text-secondary">
              {t("what_conclusion")}
            </p>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* ARCHITECTURE BOTTOM-UP */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("architecture_title")}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("architecture_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-xl font-bold">{num}</span>
                  </div>
                  <h3 className="text-base font-semibold">{t(`architecture_level${num}_title`)}</h3>
                  <p className="text-sm text-text-secondary">{t(`architecture_level${num}_desc`)}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-text-muted italic">
              {t("architecture_conclusion")}
            </p>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* INDICATEUR WARI */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("wari_title")}
              </h2>
              <p className="text-text-secondary">
                {t("wari_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                <div className="inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1">
                  {t("wari_toxicity_badge")}
                </div>
                <h3 className="text-base font-semibold">{t("wari_toxicity_title")}</h3>
                <p className="text-sm text-text-secondary">{t("wari_toxicity_desc")}</p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                <div className="inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1">
                  {t("wari_exposure_badge")}
                </div>
                <h3 className="text-base font-semibold">{t("wari_exposure_title")}</h3>
                <p className="text-sm text-text-secondary">{t("wari_exposure_desc")}</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* INDICATEURS COMPLÉMENTAIRES */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("indicators_title")}
              </h2>
              <p className="text-text-secondary">
                {t("indicators_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { id: "CRI", key: "cri", image: "/indicators/cri.png" },
                { id: "BRI", key: "bri", image: "/indicators/bri.png" },
                { id: "ARI", key: "ari", image: "/indicators/ari.png" },
                { id: "CORI", key: "cori", image: "/indicators/cori.png" },
              ].map((indicator) => (
                <Card key={indicator.id} variant="indicator" className="flex flex-col h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full bg-surface rounded-t-xl overflow-hidden">
                      <Image
                        src={indicator.image}
                        alt={tLanding(`indicator_${indicator.key}_title`)}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 gap-3 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-text-muted text-center">
                      {indicator.id}
                    </p>
                    <CardTitle className="text-lg font-bold">
                      {tLanding(`indicator_${indicator.key}_title`)}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {tLanding(`indicator_${indicator.key}_short_desc`)}
                    </CardDescription>
                    <Link
                      href={`/indicateurs/${indicator.key}`}
                      className="mt-auto pt-3 text-agri-green-600 hover:underline font-semibold text-sm inline-flex items-center gap-1"
                    >
                      {tLanding("indicator_learn_more")}
                      <ArrowRight size={16} />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* CONTEXTE RÉGLEMENTAIRE */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("regulatory_title")}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("regulatory_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                title={t("regulatory_csrd_title")}
                description={t("regulatory_csrd_desc")}
              />
              <FeatureCard
                title={t("regulatory_traceability_title")}
                description={t("regulatory_traceability_desc")}
              />
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* USAGES CLÉS */}
        <ScrollReveal>
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("uses_title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard
                title={t("uses_benchmark_title")}
                description={t("uses_benchmark_desc")}
              />
              <FeatureCard
                title={t("uses_optimize_title")}
                description={t("uses_optimize_desc")}
              />
              <FeatureCard
                title={t("uses_report_title")}
                description={t("uses_report_desc")}
              />
              <FeatureCard
                title={t("uses_anticipate_title")}
                description={t("uses_anticipate_desc")}
              />
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* POUR QUI ? */}
        <ScrollReveal>
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("audience_title")}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                title={t("audience_groups_title")}
                description={t("audience_groups_desc")}
              />
              <FeatureCard
                title={t("audience_water_title")}
                description={t("audience_water_desc")}
              />
              <FeatureCard
                title={t("audience_coops_title")}
                description={t("audience_coops_desc")}
              />
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* CTA FINAL */}
        <ScrollReveal>
          <section className="space-y-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("cta_title")}
            </h2>
            <p className="max-w-3xl mx-auto text-text-secondary">
              {t("cta_text")}
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact?subject=waterscore">
                {t("cta_button")}
              </Link>
            </Button>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-border p-5 space-y-2">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}
