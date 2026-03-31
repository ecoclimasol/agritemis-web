import type { Metadata } from "next";
import { Link } from "@/i18n/navigation.client";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Notre Mission",
    description:
      "Agritemis est une Société à Mission qui mesure scientifiquement le risque pesticide pour les filières agricoles.",
  };
}

const values = [
  {
    title: "Rigueur Scientifique",
    description:
      "Des algorithmes validés par la recherche et une méthodologie reproductible, garantissant des résultats fiables et comparables.",
  },
  {
    title: "Impact Environnemental",
    description:
      "Une réduction mesurable du risque pesticide grâce à des indicateurs concrets et actionnables pour chaque filière.",
  },
  {
    title: "Leadership Réglementaire",
    description:
      "Anticiper les exigences réglementaires européennes et accompagner les filières vers une conformité proactive.",
  },
];

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <Section background="green">
        <ScrollReveal>
          <div className="text-center space-y-6 py-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Notre Mission
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
              Fournir aux filières agricoles les outils scientifiques nécessaires
              pour mesurer, comprendre et réduire leur impact pesticide sur la
              santé et l&apos;environnement.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Story */}
      <Section background="white">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-8">
            <SectionHeader
              eyebrow="Notre histoire"
              title="Réconcilier pratique agricole et mesure scientifique"
              align="left"
              className="mb-4"
            />
            <p className="text-text-secondary text-lg leading-relaxed">
              Agritemis est née d&apos;un constat simple : les filières agricoles
              manquent d&apos;outils fiables pour évaluer objectivement le risque
              lié à l&apos;usage des pesticides. Notre équipe de scientifiques et
              d&apos;agronomes a développé une suite d&apos;indicateurs capables
              de transformer des données de terrain en mesures précises et
              comparables.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              En tant que <strong>Société à Mission</strong>, notre raison
              d&apos;être est inscrite dans nos statuts : accélérer la transition
              vers une agriculture à faible impact pesticide en fournissant des
              outils de mesure scientifiquement robustes et accessibles à tous
              les acteurs de la chaîne de valeur.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Values */}
      <Section background="surface">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Nos valeurs"
            title="Ce qui guide nos actions"
            subtitle="Trois piliers fondamentaux au service d'une agriculture plus responsable."
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.15}>
              <Card variant="feature" className="h-full">
                <CardContent className="pt-6 space-y-3">
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <ScrollReveal>
          <div className="text-center space-y-6">
            <SectionHeader
              title="Rejoignez notre mission"
              subtitle="Vous partagez notre vision d'une agriculture plus responsable ? Travaillons ensemble."
            />
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
