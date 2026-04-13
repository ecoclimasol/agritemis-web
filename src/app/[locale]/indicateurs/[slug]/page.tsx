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
                  <p className="text-sm text-white/85 mt-1">Risque de toxicité aiguë pour l'applicateur, les travailleurs agricoles, le voisinage et le personnel retournant au champ</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                {/* Col 1 */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-red-800 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4">Applicateur &amp; travailleurs &amp; voisinage</div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-red-800 mb-1">Toxicité aiguë</p>
                  <ul className="space-y-1 mb-1">
                    {["Toxicité cutanée","Toxicité par inhalation","Irritation oculaire","Allergie"].map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-red-700 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[10px] italic text-gray-500 mb-3">Valeur max retenue</p>
                </div>
                {/* Col 2 */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-red-950 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4">Personnel re-entry</div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-red-800 mb-1">Toxicité aiguë</p>
                  <ul className="space-y-1">
                    <li className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-red-700 font-bold">›</span>Toxicité cutanée</li>
                  </ul>
                </div>
              </div>
              {/* Bande exposition */}
              <div className="bg-gray-100 border-t border-gray-200 px-5 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-1">Exposition — selon la population</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  {["Volatilité","Persistance dans la culture","Formulation solide ou liquide du produit"].map(item => (
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
                  <p className="text-sm text-white/85 mt-1">Risque de toxicité chronique pour l'applicateur, les travailleurs agricoles et le voisinage</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                {/* Col 1 — Substance active */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-orange-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4 flex justify-between">
                    <span>Substance active</span><span className="font-normal opacity-75">75 %</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-orange-700 mb-1">Toxicité chronique (C)</p>
                  <ul className="space-y-1 mb-3">
                    {["Cancérogénicité","Perturbation endocrinienne","Reprotoxicité","Atteinte mitochondriale","Neurotoxicité","Génotoxicité","Atteintes chroniques aux organes","Mentions CLP du pesticide"].map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-1">Exposition — selon la population</p>
                  <ul className="space-y-1">
                    {["Persistance environnementale (sol, plante, tissus vivants)","Volatilité de la molécule","PFA (polluant éternel)"].map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                </div>
                {/* Col 2 — Métabolites */}
                <div className="bg-gray-50 p-5">
                  <div className="bg-orange-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-2 -mx-5 -mt-5 mb-4 flex justify-between">
                    <span>Métabolites secondaires</span><span className="font-normal opacity-75">25 %</span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-orange-700 mb-1">Toxicité chronique (C)</p>
                  <ul className="space-y-1 mb-3">
                    <li className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>Mêmes critères que la substance active</li>
                  </ul>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500 mb-1">Exposition</p>
                  <ul className="space-y-1 mb-4">
                    {["Persistance environnementale (sol, plante, tissus vivants)","PFA (polluant éternel)"].map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5"><span className="text-orange-500 font-bold">›</span>{item}</li>
                    ))}
                  </ul>
                  <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">
                    Score = <strong>max</strong> parmi les métabolites secondaires référencés dans PPDB / BPDB
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
                  <p className="text-sm text-white/85 mt-1">Synthèse du risque lié aux pesticides pour la biodiversité : abeilles, oiseaux, vers de terre, poissons</p>
                </div>
              </div>
              {/* Grille organismes */}
              <div className="overflow-x-auto">
                <div className="grid gap-px bg-gray-200" style={{gridTemplateColumns:"140px 1fr 1fr 1fr 1fr", minWidth:"640px"}}>
                  {/* En-têtes */}
                  <div className="bg-teal-950" />
                  {["🐝 Abeilles","🐦 Oiseaux","🪱 Vers de terre","🐟 Poissons"].map(org => (
                    <div key={org} className="bg-teal-900 text-white text-center px-2 py-2 text-xs font-bold">{org}</div>
                  ))}
                  {/* Ligne SA */}
                  <div className="bg-teal-700 text-white flex items-center justify-center text-center px-2 py-3 text-[11px] font-bold uppercase leading-tight">
                    Substance active<br/><span className="font-normal opacity-70">75 %</span>
                  </div>
                  {/* Abeilles SA */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">Toxicité aiguë</p>
                    <ul className="space-y-0.5 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>Toxicité aiguë orale et de contact</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition</p>
                    <ul className="space-y-0.5">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>Persistance dans culture</li>
                    </ul>
                  </div>
                  {/* Oiseaux SA */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">Toxicité aiguë &amp; chronique</p>
                    <ul className="space-y-0.5 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>Toxicité aiguë orale et chronique</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition</p>
                    <ul className="space-y-0.5">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>Persistance dans le sol et sur la plante</li>
                    </ul>
                  </div>
                  {/* Vers SA */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">Toxicité aiguë &amp; chronique</p>
                    <ul className="space-y-0.5 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>Toxicité aiguë et chronique (reproduction)</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition (sol)</p>
                    <ul className="space-y-0.5">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>Persistance dans sol</li>
                    </ul>
                  </div>
                  {/* Poissons SA */}
                  <div className="bg-gray-50 p-3">
                    <p className="text-[10px] font-bold uppercase text-teal-700 mb-1">Toxicité aiguë, chronique &amp; CLP</p>
                    <ul className="space-y-0.5 mb-2">
                      {["Toxicité aiguë et chronique","Mentions CLP H400–H413"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition</p>
                    <ul className="space-y-0.5">
                      {["Lessivage (Mobilité, Persistance dans sol)","Ruissellement (Mobilité, Persistance dans sol)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-teal-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Bande PFA */}
                  <div className="col-span-5 bg-teal-50 border-t border-gray-200 px-4 py-2 text-xs text-teal-900">
                    <strong>PFA (polluant éternel)</strong> — si la substance active ou un métabolite est un PFAS, l'exposition est automatiquement portée à son maximum pour tous les organismes
                  </div>
                  {/* Ligne Métabolites */}
                  <div className="bg-teal-900 text-white flex items-center justify-center text-center px-2 py-3 text-[11px] font-bold uppercase leading-tight">
                    Métabolites secondaires<br/><span className="font-normal opacity-70">25 %</span>
                  </div>
                  <div className="col-span-4 bg-gray-100 p-3 flex items-center">
                    <p className="text-xs text-gray-500 italic">Mêmes critères que la substance active — Max parmi les organismes cibles et les métabolites secondaires référencés dans PPDB / BPDB</p>
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
                  <p className="text-sm text-white/85 mt-1">Risque pour les consommateurs par contamination de la culture et de l'eau potable</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="grid gap-px bg-gray-200" style={{gridTemplateColumns:"3fr 2fr 3fr 2fr", minWidth:"600px"}}>
                  {/* Group headers */}
                  <div className="col-span-2 bg-purple-800 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">CORIcrop — Contamination de la culture</div>
                  <div className="col-span-2 bg-purple-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">CORIwater — Contamination de la nappe</div>
                  {/* CORIcrop SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-800 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Substance active</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-purple-800 mb-1">Toxicité chronique (C)</p>
                    <ul className="space-y-1 mb-3">
                      {["Cancérogénicité","Perturbation endocrinienne","Reprotoxicité","Atteinte mitochondriale","Neurotoxicité","Génotoxicité","Atteintes chroniques aux organes","Mentions CLP du pesticide"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition — culture</p>
                    <ul className="space-y-1">
                      {["Persistance dans culture","Persistance dans sol","Systémicité du pesticide","PFA (polluant éternel)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CORIcrop Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Métabolites</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">
                      Mêmes critères de toxicité et d'exposition<br/><br/>Score = <strong>max</strong> parmi les métabolites (PPDB / BPDB)
                    </div>
                  </div>
                  {/* CORIwater SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-800 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Substance active</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-purple-800 mb-1">Toxicité chronique (C)</p>
                    <ul className="space-y-1 mb-3">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>Mêmes critères que CORIcrop</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition — Lessivage</p>
                    <ul className="space-y-1">
                      {["Mobilité","Persistance dans sol","PFA (polluant éternel)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-purple-600 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CORIwater Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-purple-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Métabolites</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">
                      Mêmes critères de toxicité et d'exposition<br/><br/>Score = <strong>max</strong> parmi les métabolites (PPDB / BPDB)
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
                  <p className="text-sm text-white/85 mt-1">Synthèse du risque lié aux pesticides pour le milieu aquatique et les consommateurs d'eau</p>
                </div>
              </div>
              <div className="overflow-x-auto">
                <div className="grid gap-px bg-gray-200" style={{gridTemplateColumns:"3fr 2fr 3fr 2fr", minWidth:"600px"}}>
                  {/* Group headers */}
                  <div className="col-span-2 bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">CORIwater — Consommateurs d'eau potable</div>
                  <div className="col-span-2 bg-blue-900 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">FISH — Milieu aquatique</div>
                  {/* CORIwater SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Substance active</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">Toxicité chronique (C)</p>
                    <ul className="space-y-1 mb-3">
                      {["Cancérogénicité","Perturbation endocrinienne","Reprotoxicité","Neurotoxicité","Génotoxicité","Atteinte mitochondriale","Atteintes chroniques aux organes","Mentions CLP du pesticide"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition — Lessivage</p>
                    <ul className="space-y-1">
                      {["Mobilité","Persistance dans sol","PFA (polluant éternel)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* CORIwater Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Métabolites</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">Toxicité chronique (C)</p>
                    <ul className="space-y-1 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>Mêmes critères que la substance active</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition</p>
                    <ul className="space-y-1 mb-3">
                      {["Mobilité","Persistance dans sol","PFA (polluant éternel)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">Score = <strong>max</strong> parmi les métabolites (PPDB / BPDB)</div>
                  </div>
                  {/* FISH SA */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-700 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Substance active</span><span className="font-normal opacity-75">75 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">Toxicité aiguë &amp; chronique</p>
                    <ul className="space-y-1 mb-3">
                      {["LC50 96h","NOEC 21 jours","Classification CLP (H400–H413)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition</p>
                    <ul className="space-y-1">
                      {["Ruissellement (Mobilité, Persistance dans sol)","Lessivage (Mobilité, Persistance dans sol)","PFA (polluant éternel)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {/* FISH Met */}
                  <div className="bg-gray-50 p-4">
                    <div className="bg-blue-900 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 -mx-4 -mt-4 mb-3 flex justify-between">
                      <span>Métabolites</span><span className="font-normal opacity-75">25 %</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-blue-700 mb-1">Toxicité aiguë &amp; chronique</p>
                    <ul className="space-y-1 mb-2">
                      <li className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>Mêmes critères que la substance active</li>
                    </ul>
                    <p className="text-[10px] font-bold uppercase text-gray-500 mb-1">Exposition</p>
                    <ul className="space-y-1 mb-3">
                      {["Ruissellement","Lessivage","PFA (polluant éternel)"].map(item=>(
                        <li key={item} className="text-xs text-gray-600 flex gap-1.5"><span className="text-blue-500 font-bold">›</span>{item}</li>
                      ))}
                    </ul>
                    <div className="bg-gray-200/60 rounded-lg px-3 py-2 text-xs text-gray-600">Score = <strong>max</strong> parmi les métabolites (PPDB / BPDB)</div>
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
