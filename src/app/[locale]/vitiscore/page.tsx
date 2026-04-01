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

export default function VitiScorePage() {
  const t = useTranslations("Vitiscore");
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
                <Link href="/contact?subject=vitiscore">
                  {t("hero_cta_analyze")}
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

        {/* ACCOMPAGNEMENT */}
        <ScrollReveal>
          <section className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("coaching_title")}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("coaching_intro")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center">
                  <span className="text-agri-green-600 text-xl font-bold">1</span>
                </div>
                <h3 className="text-base font-semibold">{t("coaching_step1_title")}</h3>
                <p className="text-sm text-text-secondary">{t("coaching_step1_desc")}</p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center">
                  <span className="text-agri-green-600 text-xl font-bold">2</span>
                </div>
                <h3 className="text-base font-semibold">{t("coaching_step2_title")}</h3>
                <p className="text-sm text-text-secondary">{t("coaching_step2_desc")}</p>
              </div>
              <div className="rounded-2xl bg-white shadow-sm border border-border p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center">
                  <span className="text-agri-green-600 text-xl font-bold">3</span>
                </div>
                <h3 className="text-base font-semibold">{t("coaching_step3_title")}</h3>
                <p className="text-sm text-text-secondary">{t("coaching_step3_desc")}</p>
              </div>
            </div>

            <p className="text-sm text-text-muted italic">
              {t("coaching_conclusion")}
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

            {[
              [
                { id: "CRI", key: "cri", image: "/indicators/cri.png" },
                { id: "BRI", key: "bri", image: "/indicators/bri.png" },
              ],
              [
                { id: "ARI", key: "ari", image: "/indicators/ari.png" },
                { id: "CORI", key: "cori", image: "/indicators/cori.png" },
              ],
            ].map((row, rowIndex) => (
              <div key={rowIndex} className="grid md:grid-cols-2 gap-6 mt-6 first:mt-0">
                {row.map((indicator) => (
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
            ))}
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
