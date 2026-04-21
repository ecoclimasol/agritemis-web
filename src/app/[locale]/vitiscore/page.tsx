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
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* HERO */}
        <ScrollReveal>
          <section className="text-center space-y-6 py-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-green-700">{t("hero_title_name")}</span>
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
              <p className="text-text-secondary">
                {t("indicators_base")}{" "}
                {[
                  { key: "cri",  label: "CRI",  color: "text-orange-600" },
                  { key: "bri",  label: "BRI",  color: "text-green-800" },
                  { key: "ari",  label: "ARI",  color: "text-red-900" },
                  { key: "cori", label: "CORI", color: "text-purple-800" },
                ].map((ind, i, arr) => (
                  <span key={ind.key}>
                    <Link href={`/indicateurs/${ind.key}`} className={`font-semibold hover:underline ${ind.color}`}>
                      {ind.label}
                    </Link>
                    {i < arr.length - 2 ? ", " : i === arr.length - 2 ? " et " : ""}
                  </span>
                ))}.
              </p>
            </div>

            {/* SCHEMA 3 ETAPES — layout horizontal sur desktop */}
            <div className="flex flex-col md:flex-row items-stretch gap-0">

              {/* Étape 1 */}
              <div className="flex-[1.1] rounded-xl md:rounded-r-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border" style={{background:"#455a64"}}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("step1")}</div>
                  <div className="text-xs font-bold text-white">{t("cultural_calendar")}</div>
                  <div className="text-[10px] text-white/80">{t("risk_per_product")}</div>
                </div>
                <div className="px-4 py-3 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200 text-gray-400 uppercase tracking-wide">
                        <th className="pb-1 pr-2 font-bold text-left">{t("col_product")}</th>
                        <th className="pb-1 pr-2 font-bold text-left">{t("col_dose")}</th>
                        <th className="pb-1 pr-1 font-bold text-right">CRI</th>
                        <th className="pb-1 pr-1 font-bold text-right">BRI</th>
                        <th className="pb-1 pr-1 font-bold text-right">ARI</th>
                        <th className="pb-1 font-bold text-right">CORI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-600">
                      {[
                        { name: "Produit A", bio: false, dose: "0,2 l/ha",
                          cri: { v: 45,  c: "bg-yellow-400 text-gray-800" },
                          bri: { v: 32,  c: "bg-lime-500 text-white" },
                          ari: { v: 18,  c: "bg-green-800 text-white" },
                          cori:{ v: 22,  c: "bg-green-800 text-white" } },
                        { name: "Produit B", bio: true,  dose: "1,5 kg/ha",
                          cri: { v: 12,  c: "bg-green-800 text-white" },
                          bri: { v: 8,   c: "bg-green-800 text-white" },
                          ari: { v: 5,   c: "bg-green-800 text-white" },
                          cori:{ v: 9,   c: "bg-green-800 text-white" } },
                        { name: "Produit C", bio: false, dose: "0,8 l/ha",
                          cri: { v: 74,  c: "bg-orange-400 text-white" },
                          bri: { v: 61,  c: "bg-orange-400 text-white" },
                          ari: { v: 40,  c: "bg-yellow-400 text-gray-800" },
                          cori:{ v: 38,  c: "bg-lime-500 text-white" } },
                        { name: "Produit D", bio: true,  dose: "0,3 l/ha",
                          cri: { v: 31,  c: "bg-lime-500 text-white" },
                          bri: { v: 25,  c: "bg-lime-500 text-white" },
                          ari: { v: 14,  c: "bg-green-800 text-white" },
                          cori:{ v: 20,  c: "bg-green-800 text-white" } },
                        { name: "Produit E", bio: false, dose: "2,0 l/ha",
                          cri: { v: 95,  c: "bg-red-500 text-white" },
                          bri: { v: 88,  c: "bg-red-500 text-white" },
                          ari: { v: 72,  c: "bg-orange-400 text-white" },
                          cori:{ v: 65,  c: "bg-orange-400 text-white" } },
                      ].map((row) => (
                        <tr key={row.name}>
                          <td className="py-1 pr-2 font-semibold whitespace-nowrap">
                            {row.name}
                            {row.bio && <span className="ml-1 text-[9px] font-bold bg-green-100 text-green-800 border border-green-300 rounded-full px-1.5 py-0.5">{t("biocontrol_badge")}</span>}
                          </td>
                          <td className="py-1 pr-2 text-gray-400 text-[10px]">{row.dose}</td>
                          <td className="py-1 pr-1 text-right"><span className={`inline-block rounded px-1.5 py-0.5 font-bold text-[10px] ${row.cri.c}`}>{row.cri.v}</span></td>
                          <td className="py-1 pr-1 text-right"><span className={`inline-block rounded px-1.5 py-0.5 font-bold text-[10px] ${row.bri.c}`}>{row.bri.v}</span></td>
                          <td className="py-1 pr-1 text-right"><span className={`inline-block rounded px-1.5 py-0.5 font-bold text-[10px] ${row.ari.c}`}>{row.ari.v}</span></td>
                          <td className="py-1 text-right"><span className={`inline-block rounded px-1.5 py-0.5 font-bold text-[10px] ${row.cori.c}`}>{row.cori.v}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Flèche cumul */}
              <div className="flex flex-col items-center justify-center py-2 md:py-0 md:px-2 text-gray-400">
                <span className="text-xl">→</span>
                <span className="text-[9px] italic">{t("cumul_label")}</span>
              </div>

              {/* Étape 2 */}
              <div className="flex-[1.6] rounded-xl md:rounded-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border" style={{background:"#558b2f"}}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("step2")}</div>
                  <div className="text-xs font-bold text-white">{t("risk_to_score")}</div>
                  <div className="text-[10px] text-white/80">{t("contribution_label")}</div>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{t("cumul_contribution")}</div>
                  {[
                    { key: "CRI",  bg: "bg-orange-600", desc: t("cri_risk_desc"), val: 257, dominant: true },
                    { key: "BRI",  bg: "bg-teal-800",   desc: t("bri_risk_desc"), val: 214, dominant: true },
                    { key: "ARI",  bg: "bg-red-800",    desc: t("ari_risk_desc"), val: 149, dominant: false },
                    { key: "CORI", bg: "bg-purple-800", desc: t("cori_risk_desc"),val: 154, dominant: false },
                  ].map((ind) => (
                    <div key={ind.key} className="flex items-center gap-2 bg-white rounded border border-gray-100 px-2 py-1">
                      <span className={`text-[10px] font-black rounded-full px-2 py-0.5 text-white flex-shrink-0 ${ind.bg}`}>{ind.key}</span>
                      <span className="text-[10px] text-gray-500 flex-1 leading-tight">
                        {ind.desc} — {ind.dominant ? <strong className="text-gray-700">{t("dominant")}</strong> : t("moindre")}
                      </span>
                      <span className="text-sm font-black text-gray-700 flex-shrink-0">{ind.val}</span>
                      <span className={`text-xs flex-shrink-0 font-bold ${ind.dominant ? "text-red-600" : "text-yellow-500"}`}>{ind.dominant ? "↑↑" : "↑"}</span>
                    </div>
                  ))}
                  <div className="h-px bg-gray-200" />
                  <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded px-2 py-1 text-[10px] text-orange-700">
                    <span className="flex-shrink-0">⚠</span>
                    <span>{t("modulation")}</span>
                  </div>
                  <div className="rounded bg-red-50 border border-red-200 px-3 py-1.5 text-[10px] text-red-800 font-semibold text-center">
                    {t("inverse_relation")}
                  </div>
                </div>
              </div>

              {/* Flèche résultat */}
              <div className="flex flex-col items-center justify-center py-2 md:py-0 md:px-2 text-gray-400">
                <span className="text-xl">→</span>
                <span className="text-[9px] italic">{t("result_arrow")}</span>
              </div>

              {/* Résultat */}
              <div className="flex-[0.8] rounded-xl md:rounded-l-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border bg-green-800">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("result_label")}</div>
                  <div className="text-xs font-bold text-white">{t("score_name")}</div>
                  <div className="text-[10px] text-white/80">{t("score_subtitle")}</div>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {[
                    { label: "≥ 90", desc: t("risk_vl"), color: "bg-green-800 text-white" },
                    { label: "≥ 60", desc: t("risk_l"),  color: "bg-lime-500 text-white" },
                    { label: "≥ 40", desc: t("risk_m"),  color: "bg-yellow-400 text-gray-800" },
                    { label: "≥ 20", desc: t("risk_h"),  color: "bg-orange-500 text-white" },
                    { label: "< 20", desc: t("risk_vh"), color: "bg-red-600 text-white" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold min-w-[44px] text-center ${item.color}`}>{item.label}</span>
                      <span className="text-xs text-gray-500">{item.desc}</span>
                    </div>
                  ))}
                </div>
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
          <section className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("coaching_title")}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("coaching_intro")}
              </p>
            </div>
            <ul className="space-y-2">
              {[
                { n: "1", title: t("coaching_step1_title"), desc: t("coaching_step1_desc") },
                { n: "2", title: t("coaching_step2_title"), desc: t("coaching_step2_desc") },
                { n: "3", title: t("coaching_step3_title"), desc: t("coaching_step3_desc") },
              ].map((s) => (
                <li key={s.n} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-agri-green-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{s.n}</span>
                  <span className="text-sm text-text-secondary"><span className="font-semibold text-text-primary">{s.title}</span> — {s.desc}</span>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* USAGES CLES */}
        <ScrollReveal>
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("uses_title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <FeatureCard title={t("uses_benchmark_title")} description={t("uses_benchmark_desc")} />
              <FeatureCard title={t("uses_strategy_title")} description={t("uses_strategy_desc")} />
              <FeatureCard title={t("uses_kpi_title")} description={t("uses_kpi_desc")} />
              <FeatureCard title={t("uses_hr_title")} description={t("uses_hr_desc")} />
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* POUR QUI ? */}
        <ScrollReveal>
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("audience_title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <AudienceCard title={t("audience_groups_title")} description={t("audience_groups_desc")} />
              <AudienceCard title={t("audience_domains_title")} description={t("audience_domains_desc")} />
              <AudienceCard title={t("audience_interprof_title")} description={t("audience_interprof_desc")} />
            </div>
          </section>
        </ScrollReveal>

        <div className="border-t border-border" />

        {/* CE QUE VOUS RECEVEZ + DONNÉES + INTÉGRATIONS */}
        <ScrollReveal>
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("deliverables_title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-2 text-text-secondary">
                <BulletItem>{t("deliverables_item_1")}</BulletItem>
                <BulletItem>{t("deliverables_item_2")}</BulletItem>
                <BulletItem>{t("deliverables_item_3")}</BulletItem>
                <BulletItem>{t("deliverables_item_4")}</BulletItem>
              </ul>
              <div className="space-y-3 text-sm text-text-secondary">
                <p>{t("data_text")}</p>
                <ul className="space-y-2">
                  <BulletItem>{t("integrations_item_1")}</BulletItem>
                  <BulletItem>{t("integrations_item_2")}</BulletItem>
                </ul>
              </div>
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
