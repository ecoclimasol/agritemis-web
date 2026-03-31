"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function VitiScorePage() {
  const t = useTranslations("Vitiscore");
  return (
    <main className="bg-surface text-text-primary">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* HERO */}
        <ScrollReveal>
          <section className="text-center space-y-8 py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              {t("hero_title")}
            </h1>

            <p className="text-lg md:text-xl text-text-secondary">
              {t("hero_subtitle")}
            </p>

            <p className="text-sm md:text-base text-text-muted">
              {t("hero_context")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact?subject=vitiscore">
                  {t("hero_cta_analyze")}
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact?subject=vitiscore">
                  {t("hero_cta_report")}
                </Link>
              </Button>
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* QU'EST-CE QUE VITISCORE ? */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("what_title")}
              </h2>
              <p className="text-text-secondary">
                {t("what_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-2">
                <h3 className="text-lg font-semibold">
                  {t("what_abs_title")}
                </h3>
                <p className="text-sm text-text-secondary">
                  {t("what_abs_desc")}
                </p>
              </div>

              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-2">
                <h3 className="text-lg font-semibold">
                  {t("what_avg_title")}
                </h3>
                <p className="text-sm text-text-secondary">
                  {t("what_avg_desc")}
                </p>
              </div>
            </div>

            <p className="text-sm md:text-base text-text-secondary">
              {t("what_conclusion")}
            </p>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* COMMENT VITISCORE EST-IL CALCULE ? */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("how_title")}
              </h2>
              <p className="text-text-secondary">
                {t("how_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <IndicatorCard
                title="ARI"
                subtitle={t("indicator_ari_subtitle")}
                description={t("indicator_ari_desc")}
              />
              <IndicatorCard
                title="CRI"
                subtitle={t("indicator_cri_subtitle")}
                description={t("indicator_cri_desc")}
              />
              <IndicatorCard
                title="CORI"
                subtitle={t("indicator_cori_subtitle")}
                description={t("indicator_cori_desc")}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-6">
              <IndicatorCard
                title="BRI"
                subtitle={t("indicator_bri_subtitle")}
                description={t("indicator_bri_desc")}
              />
              <IndicatorCard
                title="WARI"
                subtitle={t("indicator_wari_subtitle")}
                description={t("indicator_wari_desc")}
              />
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* CE QUE NOUS ANALYSONS */}
        <ScrollReveal>
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("analyze_title")}
            </h2>
            <ul className="space-y-3 text-text-secondary">
              <BulletItem>{t("analyze_item_1")}</BulletItem>
              <BulletItem>{t("analyze_item_2")}</BulletItem>
              <BulletItem>{t("analyze_item_3")}</BulletItem>
              <BulletItem>{t("analyze_item_4")}</BulletItem>
            </ul>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* USAGES CLES */}
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
                title={t("uses_strategy_title")}
                description={t("uses_strategy_desc")}
              />
              <FeatureCard
                title={t("uses_kpi_title")}
                description={t("uses_kpi_desc")}
              />
              <FeatureCard
                title={t("uses_hr_title")}
                description={t("uses_hr_desc")}
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
              <AudienceCard
                title={t("audience_groups_title")}
                description={t("audience_groups_desc")}
              />
              <AudienceCard
                title={t("audience_domains_title")}
                description={t("audience_domains_desc")}
              />
              <AudienceCard
                title={t("audience_interprof_title")}
                description={t("audience_interprof_desc")}
              />
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* CE QUE VOUS RECEVEZ */}
        <ScrollReveal>
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("deliverables_title")}
            </h2>
            <ul className="space-y-3 text-text-secondary">
              <BulletItem>{t("deliverables_item_1")}</BulletItem>
              <BulletItem>{t("deliverables_item_2")}</BulletItem>
              <BulletItem>{t("deliverables_item_3")}</BulletItem>
              <BulletItem>{t("deliverables_item_4")}</BulletItem>
            </ul>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* DONNEES & COUVERTURE */}
        <ScrollReveal>
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("data_title")}
            </h2>
            <p className="text-text-secondary">
              {t("data_text")}
            </p>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* INTEGRATIONS & LIVRABLES */}
        <ScrollReveal>
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("integrations_title")}
            </h2>
            <ul className="space-y-3 text-text-secondary">
              <BulletItem>{t("integrations_item_1")}</BulletItem>
              <BulletItem>{t("integrations_item_2")}</BulletItem>
            </ul>
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
              <Link href="/contact?subject=vitiscore">
                {t("cta_button")}
              </Link>
            </Button>
          </section>
        </ScrollReveal>

        {/* MENTION DE TRANSPARENCE */}
        <section className="border-t border-border pt-6">
          <p className="text-xs text-text-muted">
            {t("disclaimer_text")}
          </p>
        </section>
      </div>
    </main>
  );
}

/* Small presentational components */

type IndicatorCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

function IndicatorCard({ title, subtitle, description }: IndicatorCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-border p-5 space-y-2">
      <div className="inline-flex items-center justify-center rounded-full bg-agri-blue-50 text-agri-blue-600 text-xs font-semibold px-3 py-1">
        {title}
      </div>
      <h3 className="text-sm font-semibold">{subtitle}</h3>
      <p className="text-xs text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
};

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-border p-5 space-y-2">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}

type AudienceCardProps = {
  title: string;
  description: string;
};

function AudienceCard({ title, description }: AudienceCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-border p-5 space-y-2">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-sm text-text-secondary">{description}</p>
    </div>
  );
}

type BulletItemProps = {
  children: React.ReactNode;
};

function BulletItem({ children }: BulletItemProps) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 h-2 w-2 rounded-full bg-agri-blue-600" />
      <span className="text-sm md:text-base">{children}</span>
    </li>
  );
}
