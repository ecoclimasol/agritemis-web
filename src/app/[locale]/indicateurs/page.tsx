import type { Metadata } from "next";
import { Link } from "@/i18n/navigation.client";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Nos Indicateurs",
    description:
      "Découvrez les 5 indicateurs scientifiques Agritemis : ARI, CRI, CORI, BRI et WARI pour mesurer le risque pesticide.",
  };
}

const indicators = [
  {
    acronym: "ARI",
    name: "Applicator Risk Indicator",
    color: "bg-agri-green-600",
    description:
      "Mesure le risque d'exposition aux pesticides pour les applicateurs lors des traitements agricoles.",
  },
  {
    acronym: "CRI",
    name: "Consumer Risk Indicator",
    color: "bg-agri-blue-600",
    description:
      "Évalue le risque résiduel pour les consommateurs à travers l'analyse des résidus dans les produits récoltés.",
  },
  {
    acronym: "CORI",
    name: "Community Risk Indicator",
    color: "bg-amber-600",
    description:
      "Quantifie le risque pour les riverains et les communautés à proximité des zones de traitement.",
  },
  {
    acronym: "BRI",
    name: "Biodiversity Risk Indicator",
    color: "bg-emerald-600",
    description:
      "Évalue l'impact des pesticides sur la biodiversité locale, incluant les pollinisateurs et les organismes aquatiques.",
  },
  {
    acronym: "WARI",
    name: "Water Risk Indicator",
    color: "bg-sky-600",
    description:
      "Mesure le risque de contamination des eaux souterraines et de surface par les substances actives.",
  },
];

export default function IndicateursPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Mesure scientifique"
            title="Nos Indicateurs"
            subtitle="Cinq indicateurs complémentaires pour une évaluation complète du risque pesticide à chaque étape de la chaîne agricole."
          />
        </ScrollReveal>
      </Section>

      {/* Indicator Grid */}
      <Section background="white" className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.map((indicator, index) => (
            <ScrollReveal key={indicator.acronym} delay={index * 0.1}>
              <Card variant="indicator" className="h-full">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${indicator.color} text-white flex items-center justify-center font-bold text-sm`}
                    >
                      {indicator.acronym.charAt(0)}
                    </div>
                    <div>
                      <CardTitle>{indicator.acronym}</CardTitle>
                      <p className="text-xs text-text-muted">
                        {indicator.name}
                      </p>
                    </div>
                  </div>
                  <CardDescription>{indicator.description}</CardDescription>
                  <Link
                    href="/indicator-request"
                    className="inline-block text-sm font-medium text-agri-green-600 hover:text-agri-green-700 transition-colors"
                  >
                    En savoir plus &rarr;
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* EIQ Comparison */}
      <Section background="surface">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            <SectionHeader
              eyebrow="Avancée scientifique"
              title="De l'EIQ à AGRITEMIS"
              subtitle="Une nouvelle génération d'indicateurs plus précis et plus pertinents."
              align="left"
            />
            <p className="text-text-secondary text-lg leading-relaxed">
              L&apos;Environmental Impact Quotient (EIQ), développé dans les
              années 1990, a été un premier pas vers la quantification du
              risque pesticide. Cependant, ses limites sont aujourd&apos;hui
              bien documentées : absence de pondération par la dose réelle,
              manque de granularité par compartiment environnemental, et
              données toxicologiques obsolètes.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Les indicateurs AGRITEMIS corrigent ces lacunes en intégrant les
              données réglementaires européennes les plus récentes, en
              distinguant cinq compartiments de risque indépendants, et en
              prenant en compte les conditions réelles d&apos;application pour
              chaque parcelle.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <Section background="white">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <SectionHeader
              title="Découvrez nos indicateurs en détail"
              subtitle="Recevez la documentation complète de notre méthodologie scientifique."
            />
            <Button variant="primary" size="lg" asChild>
              <Link href="/indicator-request">Recevoir la documentation</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
