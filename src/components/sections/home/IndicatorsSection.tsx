"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Link } from "@/i18n/navigation.client";

const indicators = [
  {
    acronym: "ARI",
    key: "ari",
    fullName: "Acute Risk Index",
    bg: "bg-orange-600",
    border: "border-orange-600",
    desc: "Risque de toxicité aiguë pour les travailleurs agricoles.",
    sectionLabel: "POPULATIONS CONCERNÉES",
    tags: ["Applicateur", "Travailleurs", "Voisinage"],
    tagColor: "bg-orange-100 text-orange-800",
    criteria: "Toxicité aiguë × voie d'exposition",
  },
  {
    acronym: "CRI",
    key: "cri",
    fullName: "Chronic Risk Index",
    bg: "bg-red-600",
    border: "border-red-600",
    desc: "Risque de toxicité chronique pour les travailleurs agricoles.",
    sectionLabel: "POPULATIONS CONCERNÉES",
    tags: ["Applicateur", "Travailleurs", "Voisinage"],
    tagColor: "bg-red-100 text-red-800",
    criteria: "Toxicité chronique × persistance environnementale",
  },
  {
    acronym: "BRI",
    key: "bri",
    fullName: "Biodiversity Risk Index",
    bg: "bg-teal-800",
    border: "border-teal-800",
    desc: "Risque pour la biodiversité.",
    sectionLabel: "ORGANISMES CONCERNÉS",
    tags: ["Abeilles", "Oiseaux", "Vers de terre", "FISH — Poissons"],
    tagColor: "bg-teal-100 text-teal-800",
    criteria: "Toxicité par organisme × persistance & transfert vers l'eau",
  },
  {
    acronym: "CORI",
    key: "cori",
    fullName: "Consumer Risk Index",
    bg: "bg-purple-800",
    border: "border-purple-800",
    desc: "Risque pour les consommateurs via la contamination des cultures et des eaux souterraines.",
    sectionLabel: "DEUX SOUS-INDICATEURS",
    tags: ["CORIcrop", "CORIwater"],
    tagColor: "bg-purple-100 text-purple-800",
    criteria: "Toxicité chronique × contamination culture & nappe",
  },
  {
    acronym: "WARI",
    key: "wari",
    fullName: "Water Risk Indicator",
    bg: "bg-blue-700",
    border: "border-blue-700",
    desc: "Risque de pollution de l'eau pour les consommateurs d'eau et le milieu aquatique.",
    sectionLabel: "DEUX COMPOSANTES",
    tags: ["CORIwater", "FISH — Poissons"],
    tagColor: "bg-blue-100 text-blue-800",
    note: "FISH est le même sous-indicateur que dans le BRI",
    criteria: "Toxicité aquatique × lixiviation & ruissellement",
  },
];

export default function IndicatorsSection() {
  const t = useTranslations("Landing");

  return (
    <Section background="white" id="indicators">
      <SectionHeader
        eyebrow={t("indicators_title")}
        title={t("indicators_section_title")}
        subtitle={t("indicators_section_subtitle")}
        className="mb-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {indicators.map((ind, index) => (
          <ScrollReveal key={ind.acronym} delay={index * 0.08}>
            <div className="flex flex-col h-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              {/* Header coloré */}
              <div className={`${ind.bg} px-4 py-3 text-center`}>
                <div className="text-2xl font-black text-white tracking-tight">{ind.acronym}</div>
                <div className="text-[10px] font-semibold text-white/80 mt-0.5">{ind.fullName}</div>
              </div>

              {/* Corps */}
              <div className="flex flex-col flex-1 px-3 py-3 space-y-3">
                {/* Description */}
                <p className={`text-xs italic text-gray-600 border-l-2 ${ind.border} pl-2 leading-relaxed`}>
                  {ind.desc}
                </p>

                {/* Tags */}
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">{ind.sectionLabel}</p>
                  <div className="flex flex-wrap gap-1">
                    {ind.tags.map((tag) => (
                      <span key={tag} className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${ind.tagColor}`}>{tag}</span>
                    ))}
                  </div>
                  {"note" in ind && ind.note && (
                    <p className="text-[9px] text-gray-400 italic mt-1">{ind.note}</p>
                  )}
                </div>

                {/* Critères */}
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">CRITÈRES CLÉS</p>
                  <p className="text-[10px] text-gray-500">› {ind.criteria}</p>
                </div>

                {/* Lien */}
                <div className="mt-auto pt-2">
                  <Link
                    href={`/indicateurs/${ind.key}`}
                    className="text-xs font-semibold text-agri-green-600 hover:text-agri-green-700 transition-colors"
                  >
                    {t("indicator_learn_more")} &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
