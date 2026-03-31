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
    name: "Indice de Risque de Toxicité Aiguë",
    color: "bg-agri-green-600",
    description:
      "Évalue le risque immédiat que présente un pesticide pour les applicateurs, les travailleurs et les riverains, en fonction de sa toxicité et de l'exposition à court terme.",
  },
  {
    acronym: "CRI",
    name: "Indice de Risque de Toxicité Chronique",
    color: "bg-agri-blue-600",
    description:
      "Mesure le risque à long terme pour les travailleurs et les riverains, incluant les effets cancérogènes, endocriniens, neurologiques et systémiques liés à une exposition répétée.",
  },
  {
    acronym: "CORI",
    name: "Indice de Risque pour les Consommateurs",
    color: "bg-amber-600",
    description:
      "Quantifie le risque que représente un pesticide (et ses métabolites) pour la population via la consommation de denrées agricoles et d'eau potable.",
  },
  {
    acronym: "BRI",
    name: "Indice de Risque pour la Biodiversité",
    color: "bg-emerald-600",
    description:
      "Évalue l'impact d'un pesticide sur les abeilles, oiseaux, vers de terre, organismes aquatiques et écosystèmes, à court et long terme.",
  },
  {
    acronym: "WARI",
    name: "Indice de Risque pour l'Eau",
    color: "bg-sky-600",
    description:
      "Synthétise le risque de contamination des nappes et des eaux de surface, ainsi que les effets potentiels sur les consommateurs et la faune aquatique.",
  },
];

function IndicatorItem({ indicator }: { indicator: typeof indicators[number] }) {
  return (
    <Card variant="indicator" className="h-full">
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full ${indicator.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}
          >
            {indicator.acronym.charAt(0)}
          </div>
          <div>
            <CardTitle>{indicator.acronym}</CardTitle>
            <p className="text-xs text-text-muted">{indicator.name}</p>
          </div>
        </div>
        <CardDescription className="leading-relaxed">{indicator.description}</CardDescription>
        <Link
          href="/indicator-request"
          className="inline-block text-sm font-medium text-agri-green-600 hover:text-agri-green-700 transition-colors"
        >
          En savoir plus &rarr;
        </Link>
      </CardContent>
    </Card>
  );
}

export default function IndicateursPage() {
  return (
    <>
      {/* Hero */}
      <Section background="white" className="pb-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Mesure scientifique"
            title="Nos Indicateurs"
            subtitle="Cinq indicateurs complémentaires pour une évaluation complète du risque pesticide à chaque étape de la chaîne agricole."
          />
        </ScrollReveal>
      </Section>

      {/* Indicator Grid — Row 1: first 3 */}
      <Section background="white" className="pt-0 pb-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.slice(0, 3).map((indicator, index) => (
            <ScrollReveal key={indicator.acronym} delay={index * 0.1}>
              <IndicatorItem indicator={indicator} />
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: last 2, centered */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {indicators.slice(3).map((indicator, index) => (
            <ScrollReveal key={indicator.acronym} delay={(index + 3) * 0.1}>
              <IndicatorItem indicator={indicator} />
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
