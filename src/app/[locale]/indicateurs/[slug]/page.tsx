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


export default function IndicatorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const t = useTranslations(`Indicator_${slug}`);
  const tD = useTranslations("IndicatorDetail");

  if (!validSlugs.includes(slug as Slug)) {
    notFound();
  }

  return (
    <main className="bg-surface text-text-primary">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* INDICATOR CARD */}
        <ScrollReveal>

          {/* ── ARI ── */}
          {slug === "ari" && (
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-red-800 px-6 py-5 flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-white">ARI</span>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-white">Acute Risk Index</h1>
                  <p className="text-sm text-white/85 mt-1">{tD("ari_subtitle")}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                {/* Col 1 */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-red-800 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4">{tD("ari_col1")}</div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-red-800 mb-1">{tD("tox_acute")}</p>
                  <ul className="space-y-1 mb-1">
                    {tD("ari_tox_items").split("|").map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-red-700 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[10px] italic text-gray-500 mb-3">{tD("max_note")}</p>
                </div>
                {/* Col 2 */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-red-950 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4">{tD("ari_col2")}</div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-red-800 mb-1">{tD("tox_acute")}</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-red-700 font-bold">›</span>{tD("ari_col2_tox")}</li>
                  </ul>
                </div>
              </div>
              {/* Exposure band */}
              <div className="bg-gray-100 border-t border-gray-200 px-5 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-1">{tD("exposure_pop")}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  {tD("ari_exp_items").split("|").map(item => (
                    <span key={item} className="text-xs text-gray-600 flex items-center gap-1.5"><span className="text-gray-400 font-bold">›</span>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── CRI ── */}
          {slug === "cri" && (
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-orange-600 px-6 py-5 flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-white">CRI</span>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-white">Chronic Risk Index</h1>
                  <p className="text-sm text-white/85 mt-1">{tD("cri_subtitle")}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                {/* Col 1 — Active substance */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-orange-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4 flex justify-between">
                    <span>{tD("sa_75")}</span><span className="font-normal opacity-75">75 %</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-orange-700 mb-1">{tD("tox_chronic")}</p>
                  <ul className="space-y-1 mb-3">
                    {tD("cri_chronic_items").split("|").map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-1">{tD("exposure_pop")}</p>
                  <ul className="space-y-1">
                    {tD("cri_exp_sa_items").split("|").map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* Col 2 — Metabolites */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-orange-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4 flex justify-between">
                    <span>{tD("met_25")}</span><span className="font-normal opacity-75">25 %</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-orange-700 mb-1">{tD("tox_chronic")}</p>
                  <ul className="space-y-1 mb-3">
                    <li className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>{tD("same_as_sa")}</li>
                  </ul>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-1">{tD("exposure")}</p>
                  <ul className="space-y-1 mb-4">
                    {tD("cri_exp_met_items").split("|").map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                  <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">
                    {tD("cri_score_formula")}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── BRI ── */}
          {slug === "bri" && (
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-teal-700 px-6 py-5 flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-white">BRI</span>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-white">Biodiversity Risk Index</h1>
                  <p className="text-sm text-white/85 mt-1">{tD("bri_subtitle")}</p>
                </div>
              </div>
              {/* Organism grid */}
              <div className="overflow-x-auto">
                <div className="grid gap-px bg-gray-200" style={{gridTemplateColumns:"140px 1fr 1fr 1fr 1fr", minWidth:"640px"}}>
                  {/* Headers */}
                  <div className="bg-teal-950" />
                  {[tD("bri_bees"), tD("bri_birds"), tD("bri_worms"), tD("bri_fish")].map(org => (
                    <div key={org} className="bg-teal-900 text-white text-center px-2 py-2 text-xs font-bold">{org}</div>
                  ))}
                  {/* Active substance row */}
                  <div className="bg-teal-700 text-white flex items-center justify-center text-center px-2 py-3 text-[11px] font-bold uppercase leading-tight">
                    {tD("sa_75")}<br/><span className="font-normal opacity-70">75 %</span>
                  </div>
                  {/* Bees */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">{tD("tox_acute")}</p>
                    <ul className="space-y-0.5 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{tD("bri_bees_tox")}</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure")}</p>
                    <ul className="space-y-0.5">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{tD("persistence_crop")}</li>
                    </ul>
                  </div>
                  {/* Birds */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">{tD("tox_acute_chronic")}</p>
                    <ul className="space-y-0.5 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{tD("bri_birds_tox")}</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure")}</p>
                    <ul className="space-y-0.5">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{tD("persistence_crop_plant")}</li>
                    </ul>
                  </div>
                  {/* Earthworms */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">{tD("tox_acute_chronic")}</p>
                    <ul className="space-y-0.5 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{tD("bri_worms_tox")}</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure_soil")}</p>
                    <ul className="space-y-0.5">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{tD("persistence_soil")}</li>
                    </ul>
                  </div>
                  {/* Fish */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">{tD("tox_acute_chronic_clp")}</p>
                    <ul className="space-y-0.5 mb-2">
                      {[tD("bri_fish_tox1"), tD("bri_fish_tox2")].map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure")}</p>
                    <ul className="space-y-0.5">
                      {[tD("leaching_full"), tD("runoff_full")].map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* PFAS banner */}
                  <div className="col-span-5 bg-teal-50 border-t border-gray-200 px-4 py-2 text-xs text-teal-900">
                    <strong>{tD("pfas")}</strong> — {tD("bri_pfas_desc")}
                  </div>
                  {/* Metabolites row */}
                  <div className="bg-teal-900 text-white flex items-center justify-center text-center px-2 py-3 text-[11px] font-bold uppercase leading-tight">
                    {tD("met_25")}<br/><span className="font-normal opacity-70">25 %</span>
                  </div>
                  <div className="col-span-4 bg-gray-100 p-3 flex items-center">
                    <p className="text-xs text-gray-500 italic">{tD("bri_met_same")}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── CORI ── */}
          {slug === "cori" && (
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-purple-800 px-6 py-5 flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-white">CORI</span>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-white">Consumer Risk Index</h1>
                  <p className="text-sm text-white/85 mt-1">{tD("cori_subtitle")}</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="grid gap-px bg-gray-200" style={{gridTemplateColumns:"3fr 2fr 3fr 2fr", minWidth:"600px"}}>
                  {/* Group headers */}
                  <div className="col-span-2 bg-purple-800 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">{tD("cori_group1")}</div>
                  <div className="col-span-2 bg-purple-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">{tD("cori_group2")}</div>
                  {/* CORIcrop SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-800 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("sa_75")}</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-purple-800 mb-1">{tD("tox_chronic")}</p>
                    <ul className="space-y-1 mb-3">
                      {tD("cori_chronic_items").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure_crop")}</p>
                    <ul className="space-y-1">
                      {tD("cori_crop_exp").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CORIcrop Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("met_short")}</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">
                      {tD("same_tox_exp")}<br/><br/>Score = <strong>max</strong> {tD("score_max").replace("Score = max ", "")}
                    </div>
                  </div>
                  {/* CORIwater SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-800 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("sa_75")}</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-purple-800 mb-1">{tD("tox_chronic")}</p>
                    <ul className="space-y-1 mb-3">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>{tD("cori_same_criteria")}</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure_leaching")}</p>
                    <ul className="space-y-1">
                      {tD("cori_water_exp").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CORIwater Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("met_short")}</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">
                      {tD("same_tox_exp")}<br/><br/>Score = <strong>max</strong> {tD("score_max").replace("Score = max ", "")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── WARI ── */}
          {slug === "wari" && (
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-blue-700 px-6 py-5 flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-black text-white">WARI</span>
                <div>
                  <h1 className="text-lg md:text-xl font-bold text-white">Water Risk Indicator</h1>
                  <p className="text-sm text-white/85 mt-1">{tD("wari_subtitle")}</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="grid gap-px bg-gray-200" style={{gridTemplateColumns:"3fr 2fr 3fr 2fr", minWidth:"600px"}}>
                  {/* Group headers */}
                  <div className="col-span-2 bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">{tD("wari_group1")}</div>
                  <div className="col-span-2 bg-blue-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">{tD("wari_group2")}</div>
                  {/* CORIwater SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("sa_75")}</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">{tD("tox_chronic")}</p>
                    <ul className="space-y-1 mb-3">
                      {tD("wari_chronic_items").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure_leaching")}</p>
                    <ul className="space-y-1">
                      {tD("wari_exp_items").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CORIwater Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("met_short")}</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">{tD("tox_chronic")}</p>
                    <ul className="space-y-1 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{tD("same_as_sa")}</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure")}</p>
                    <ul className="space-y-1 mb-3">
                      {tD("wari_exp_items").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">{tD("score_max")}</div>
                  </div>
                  {/* FISH SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("sa_75")}</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">{tD("tox_acute_chronic")}</p>
                    <ul className="space-y-1 mb-3">
                      {tD("wari_fish_tox_items").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure")}</p>
                    <ul className="space-y-1">
                      {tD("wari_fish_exp_items").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* FISH Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>{tD("met_short")}</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">{tD("tox_acute_chronic")}</p>
                    <ul className="space-y-1 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{tD("same_as_sa")}</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">{tD("exposure")}</p>
                    <ul className="space-y-1 mb-3">
                      {tD("wari_fish_met_exp").split("|").map(item => (
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">{tD("score_max")}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

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
