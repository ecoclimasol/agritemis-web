"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const indicatorStyles = [
  { acronym: "ARI", key: "ari", fullName: "Acute Risk Index", bg: "bg-orange-600", border: "border-orange-600", tagColor: "bg-orange-100 text-orange-800", hasNote: false },
  { acronym: "CRI", key: "cri", fullName: "Chronic Risk Index", bg: "bg-red-600", border: "border-red-600", tagColor: "bg-red-100 text-red-800", hasNote: false },
  { acronym: "BRI", key: "bri", fullName: "Biodiversity Risk Index", bg: "bg-teal-800", border: "border-teal-800", tagColor: "bg-teal-100 text-teal-800", hasNote: false },
  { acronym: "CORI", key: "cori", fullName: "Consumer Risk Index", bg: "bg-purple-800", border: "border-purple-800", tagColor: "bg-purple-100 text-purple-800", hasNote: false },
  { acronym: "WARI", key: "wari", fullName: "Water Risk Indicator", bg: "bg-blue-700", border: "border-blue-700", tagColor: "bg-blue-100 text-blue-800", hasNote: true },
];

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

      {/* Indicator Grid */}
      <Section background="white" className="pt-0 pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {indicatorStyles.map((ind, index) => {
            const desc = t(`${ind.key}_desc`);
            const sectionLabel = t(`${ind.key}_section_label`);
            const tags = t(`${ind.key}_tags`).split("|");
            const criteria = t(`${ind.key}_criteria`);
            const note = ind.hasNote ? t(`${ind.key}_note`) : null;
            return (
              <ScrollReveal key={ind.acronym} delay={index * 0.08}>
                <div className="flex flex-col h-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                  <div className={`${ind.bg} px-4 py-3 text-center`}>
                    <div className="text-2xl font-black text-white tracking-tight">{ind.acronym}</div>
                    <div className="text-[10px] font-semibold text-white/80 mt-0.5">{ind.fullName}</div>
                  </div>
                  <div className="flex flex-col flex-1 px-3 py-3 space-y-3">
                    <p className={`text-xs italic text-gray-600 border-l-2 ${ind.border} pl-2 leading-relaxed`}>
                      {desc}
                    </p>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">{sectionLabel}</p>
                      <div className="flex flex-wrap gap-1">
                        {tags.map((tag) => (
                          <span key={tag} className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${ind.tagColor}`}>{tag}</span>
                        ))}
                      </div>
                      {note && <p className="text-[9px] text-gray-400 italic mt-1">{note}</p>}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">{t("key_criteria_label")}</p>
                      <p className="text-[10px] text-gray-500">› {criteria}</p>
                    </div>
                    <div className="mt-auto pt-2">
                      <Link
                        href={`/indicateurs/${ind.key}`}
                        className="text-xs font-semibold text-agri-green-600 hover:text-agri-green-700 transition-colors"
                      >
                        {tLanding("indicator_learn_more")} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* DE LA MOLÉCULE AU CALENDRIER */}
      <Section background="surface">
        <ScrollReveal>
          <div className="space-y-8">
            <SectionHeader
              title={t("molecule_title")}
              subtitle={t("molecule_subtitle")}
              align="left"
            />

            {/* Sources de données */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-text-primary uppercase tracking-wide">{t("sources_title")}</p>
              <ul className="space-y-2">
                {[t("source_1"), t("source_2"), t("source_3")].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-agri-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schéma 3 niveaux */}
            <div className="flex flex-col md:flex-row items-stretch gap-0">

              {/* Niveau 1 — Substance active */}
              <div className="flex-1 rounded-xl md:rounded-r-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border" style={{background:"#455a64"}}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("level_label")} 1</div>
                  <div className="text-xs font-bold text-white">{t("level_1_title")}</div>
                  <div className="text-[10px] text-white/80 italic">lambda-cyhalothrine</div>
                </div>
                <div className="px-4 py-4">
                  <div className="flex justify-between gap-2">
                    {[
                      { key: "CRI",  val: 77,  c: "bg-lime-500 text-white" },
                      { key: "ARI",  val: 200, c: "bg-red-600 text-white" },
                      { key: "BRI",  val: 196, c: "bg-red-600 text-white" },
                      { key: "CORI", val: 48,  c: "bg-yellow-400 text-gray-800" },
                      { key: "WARI", val: 129, c: "bg-red-600 text-white" },
                    ].map((ind) => (
                      <div key={ind.key} className="flex flex-col items-center gap-1">
                        <span className="text-[10px] font-black text-gray-500">{ind.key}</span>
                        <span className={`text-xs font-bold rounded px-1.5 py-0.5 w-full text-center ${ind.c}`}>{ind.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center py-2 md:py-0 md:px-2 text-gray-400 text-xl">→</div>

              {/* Niveau 2 — Produit */}
              <div className="flex-1 rounded-xl md:rounded-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border" style={{background:"#546e7a"}}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("level_label")} 2</div>
                  <div className="text-xs font-bold text-white">{t("level_2_title")}</div>
                  <div className="text-[10px] text-white/80 italic">Lambdastar — 0,2 l/ha</div>
                </div>
                <div className="px-4 py-4">
                  <div className="flex justify-between gap-2">
                    {[
                      { key: "CRI",  val: 85,  c: "bg-red-500 text-white" },
                      { key: "ARI",  val: 215, c: "bg-red-600 text-white" },
                      { key: "BRI",  val: 205, c: "bg-red-600 text-white" },
                      { key: "CORI", val: 53,  c: "bg-orange-400 text-white" },
                      { key: "WARI", val: 138, c: "bg-red-600 text-white" },
                    ].map((ind) => (
                      <div key={ind.key} className="flex flex-col items-center gap-1">
                        <span className="text-[10px] font-black text-gray-500">{ind.key}</span>
                        <span className={`text-xs font-bold rounded px-1.5 py-0.5 w-full text-center ${ind.c}`}>{ind.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center py-2 md:py-0 md:px-2 text-gray-400 text-xl">→</div>

              {/* Niveau 3 — Calendrier */}
              <div className="flex-[1.8] rounded-xl md:rounded-l-none bg-white shadow-sm border border-border overflow-hidden">
                <div className="px-4 py-2 border-b border-border" style={{background:"#607d8b"}}>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white/70">{t("level_label")} 3</div>
                  <div className="text-xs font-bold text-white">{t("level_3_title")}</div>
                  <div className="text-[10px] text-white/80">{t("level_3_subtitle")}</div>
                </div>
                <div className="px-4 py-3 overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="border-b-2 border-gray-200 text-gray-400 uppercase tracking-wide">
                        <th className="pb-1 pr-2 font-bold text-left">{t("table_product")}</th>
                        <th className="pb-1 pr-2 font-bold text-left">{t("table_dose")}</th>
                        <th className="pb-1 pr-1 font-bold text-right">CRI</th>
                        <th className="pb-1 pr-1 font-bold text-right">ARI</th>
                        <th className="pb-1 pr-1 font-bold text-right">BRI</th>
                        <th className="pb-1 pr-1 font-bold text-right">CORI</th>
                        <th className="pb-1 font-bold text-right">WARI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-gray-600">
                      {[
                        { name: "Lambdastar", dose: "0,2 l/ha", cri: ["bg-red-500","85"],    ari: ["bg-red-600","215"],   bri: ["bg-red-600","205"],   cori: ["bg-orange-400","53"],   wari: ["bg-red-600","138"] },
                        { name: "Produit B",  dose: "0,8 l/ha", cri: ["bg-orange-400","64"], ari: ["bg-yellow-400","42"], bri: ["bg-orange-400","71"], cori: ["bg-lime-500","38"],     wari: ["bg-yellow-400","47"] },
                        { name: "Produit C",  dose: "1,5 kg/ha",cri: ["bg-lime-500","29"],   ari: ["bg-lime-500","31"],   bri: ["bg-yellow-400","44"], cori: ["bg-lime-500","22"],     wari: ["bg-lime-500","28"] },
                        { name: "Produit D",  dose: "0,3 l/ha", cri: ["bg-yellow-400","41"], ari: ["bg-lime-500","24"],   bri: ["bg-lime-500","33"],   cori: ["bg-lime-500","18"],     wari: ["bg-lime-500","25"] },
                      ].map((row) => (
                        <tr key={row.name}>
                          <td className="py-1 pr-2 font-semibold">{row.name}</td>
                          <td className="py-1 pr-2 text-gray-400 text-[10px]">{row.dose}</td>
                          {[row.cri, row.ari, row.bri, row.cori, row.wari].map(([bg, val], i) => (
                            <td key={i} className="py-1 pr-1 text-right">
                              <span className={`inline-block rounded px-1.5 py-0.5 font-bold text-[10px] text-white ${bg === "bg-yellow-400" || bg === "bg-orange-400" ? bg + " !text-gray-800" : bg}`}>{val}</span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Échelle de risque */}
            <div className="rounded-xl bg-white border border-border px-5 py-4 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t("risk_scale_label")}</p>
              <div className="flex rounded-lg overflow-hidden h-7">
                {[
                  { label: "0–20",    bg: "bg-green-800",  text: "text-white" },
                  { label: "20–40",   bg: "bg-lime-500",   text: "text-white" },
                  { label: "40–60",   bg: "bg-yellow-400", text: "text-gray-800" },
                  { label: "60–80",   bg: "bg-orange-500", text: "text-white" },
                  { label: "80–110",  bg: "bg-red-500",    text: "text-white" },
                  { label: "> 110",   bg: "bg-red-600",    text: "text-white" },
                ].map((band) => (
                  <div key={band.label} className={`flex-1 flex items-center justify-center text-[10px] font-bold ${band.bg} ${band.text}`}>
                    {band.label}
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 italic text-center">{t("risk_scale_legend")}</p>
            </div>

          </div>
        </ScrollReveal>
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
            <p className="text-text-secondary text-lg leading-relaxed">
              {t("eiq_paragraph_3")}
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
