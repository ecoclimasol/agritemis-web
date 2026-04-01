"use client";

import { useTranslations } from "next-intl";

import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

const stats = [
  { value: "5", label: "Indicateurs Scientifiques", color: "text-agri-green-600" },
  { value: "1000+", label: "Programmes de Traitement Analysés", color: "text-agri-blue-500" },
  { value: "🌍", label: "Couverture Mondiale", color: "text-agri-green-600" },
] as const;

export default function ProblemStatementSection() {
  const t = useTranslations("Landing");

  return (
    <Section background="surface" id="problem">
      <ScrollReveal>
        <SectionHeader
          title={t("problem_title")}
          className="[&_h2]:text-agri-green-700 mb-6"
        />

        <p className="text-lg text-text-secondary max-w-3xl mx-auto text-center leading-relaxed">
          {t("problem_dilemma")}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {stats.map((stat, index) => (
          <ScrollReveal key={stat.label} delay={index * 0.15}>
            <div className="text-center">
              <p className={`text-4xl md:text-5xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-sm text-text-muted uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
