"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import Section from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

const stats = [
  { value: "5", label: "Indicateurs scientifiques", color: "text-agri-green-600" },
  { value: "1000+", label: "Programmes de traitement analysés", color: "text-agri-blue-500" },
  { value: "🌍", label: "Couverture mondiale", color: "text-agri-green-600" },
] as const;

export default function SolutionSection() {
  const t = useTranslations("Landing");

  return (
    <Section background="white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left column */}
        <ScrollReveal className="lg:w-7/12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            {t("solution_headline")}
          </h2>

          <p className="text-lg text-text-secondary">
            {t("solution_description_1")}
          </p>

          <blockquote className="bg-agri-green-50 p-6 rounded-xl border-l-4 border-agri-green-600">
            <p className="italic font-semibold text-text-primary">
              {t("solution_description_2")}
            </p>
          </blockquote>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-text-muted uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right column */}
        <ScrollReveal delay={0.2} className="lg:w-5/12">
          <Card variant="elevated" className="bg-agri-green-600 text-white">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-bold">{t("mission_title")}</h3>
              <p className="text-agri-green-100">{t("mission_text")}</p>
              <Link
                href="/mission"
                className="inline-block text-white/80 underline underline-offset-4 hover:text-white transition-colors"
              >
                {t("mission_learn_more")}
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </Section>
  );
}
