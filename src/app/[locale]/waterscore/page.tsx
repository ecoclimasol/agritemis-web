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
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* HERO */}
        <ScrollReveal>
          <section className="text-center space-y-6 py-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-blue-600">{t("hero_title_name")}</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">{t("hero_title_desc")}</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary">
              {t("hero_subtitle")}
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
              <p className="text-text-secondary">
                {t("what_wari_base")}{" "}
                <Link
                  href="/indicateurs/wari"
                  className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  {t("wari_link_text")}
                  <ArrowRight size={14} />
                </Link>
              </p>
            </div>

            {/* SCHEMA 3 ETAPES — layout horizontal sur desktop */}
            <div className="flex flex-col md:flex-row items-stretch gap-0">

              {/* Étape 1 */}
              <div className="flex-1 rounded-xl md:rounded-r-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border" style={{background:"#455a64"}}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("step1")}</div>
                  <div className="text-xs font-bold text-white">{t("cultural_calendar")}</div>
                  <div className="text-[10px] text-white/80">{t("wari_season_cumul")}</div>
                </div>
                <div className="px-4 py-3 overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200 text-gray-400 uppercase tracking-wide">
                        <th className="pb-1 pr-3 font-bold text-left">{t("col_product")}</th>
                        <th className="pb-1 pr-3 font-bold text-right">{t("col_dose")}</th>
                        <th className="pb-1 font-bold text-right">WARI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-600">
                      {[
                        { name: "Produit A", dose: "0,2 l/ha",  wari: 48,  color: "bg-yellow-400 text-gray-800" },
                        { name: "Produit B", dose: "1,5 kg/ha", wari: 12,  color: "bg-green-800 text-white" },
                        { name: "Produit C", dose: "0,8 l/ha",  wari: 74,  color: "bg-orange-400 text-white" },
                        { name: "Produit D", dose: "0,3 l/ha",  wari: 31,  color: "bg-lime-500 text-white" },
                        { name: "Produit E", dose: "2,0 l/ha",  wari: 95,  color: "bg-red-500 text-white" },
                      ].map((row) => (
                        <tr key={row.name}>
                          <td className="py-1 pr-3 font-semibold">{row.name}</td>
                          <td className="py-1 pr-3 text-right text-gray-400">{row.dose}</td>
                          <td className="py-1 text-right">
                            <span className={`inline-block rounded px-2 py-0.5 font-bold text-xs ${row.color}`}>{row.wari}</span>
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-gray-300">
                        <td className="pt-2 font-bold text-blue-800">Σ Total</td>
                        <td></td>
                        <td className="pt-2 text-right font-bold text-blue-800 text-sm">260</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Flèche */}
              <div className="flex items-center justify-center py-2 md:py-0 md:px-2 text-gray-400 text-xl">→</div>

              {/* Étape 2 */}
              <div className="flex-1 rounded-xl md:rounded-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border" style={{background:"#607d8b"}}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("step2")}</div>
                  <div className="text-xs font-bold text-white">{t("risk_to_score")}</div>
                  <div className="text-[10px] text-white/80">{t("wari_calendar_cumul")}</div>
                </div>
                <div className="px-4 py-3 space-y-2">
                  <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{t("wari_cumul_label")}</div>
                  <div className="flex items-center gap-2 bg-white rounded border border-gray-100 px-2 py-1">
                    <span className="text-[10px] font-black rounded-full px-2 py-0.5 text-white flex-shrink-0 bg-sky-600">WARI</span>
                    <span className="text-[10px] text-gray-500 flex-1 leading-tight">{t("water_risk_label")}</span>
                    <span className="text-sm font-black text-gray-700 flex-shrink-0">260</span>
                    <span className="text-xs flex-shrink-0 font-bold text-red-600">↑↑</span>
                  </div>
                  <div className="h-px bg-gray-200" />
                  <div className="rounded bg-red-50 border border-red-200 px-3 py-1.5 text-[10px] text-red-800 font-semibold text-center">
                    {t("inverse_relation")}
                  </div>
                </div>
              </div>

              {/* Flèche */}
              <div className="flex items-center justify-center py-2 md:py-0 md:px-2 text-gray-400 text-xl">→</div>

              {/* Résultat */}
              <div className="flex-1 rounded-xl md:rounded-l-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border bg-blue-800">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("result_label")}</div>
                  <div className="text-xs font-bold text-white">{t("score_name")}</div>
                  <div className="text-[10px] text-white/80">{t("score_subtitle")}</div>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {[
                    { label: "80–100", desc: t("risk_vl"), color: "bg-green-800 text-white" },
                    { label: "60–80",  desc: t("risk_l"),  color: "bg-lime-500 text-white" },
                    { label: "40–60",  desc: t("risk_m"),  color: "bg-yellow-400 text-gray-800" },
                    { label: "20–40",  desc: t("risk_h"),  color: "bg-orange-500 text-white" },
                    { label: "0–20",   desc: t("risk_vh"), color: "bg-red-600 text-white" },
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
