"use client";

import { useTranslations } from "next-intl";
import { Check } from "lucide-react";

import Section from "@/components/layout/Section";
import ScrollReveal from "@/components/shared/ScrollReveal";

const benefitKeys = [1, 2, 3, 4, 5] as const;

export default function BenefitsSection() {
  const t = useTranslations("Landing");

  return (
    <Section background="green" id="benefits">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-center mb-10">
          {t("benefits_title")}
        </h2>
      </ScrollReveal>

      <ul className="space-y-4 max-w-3xl mx-auto">
        {benefitKeys.map((num, index) => (
          <ScrollReveal key={num} delay={index * 0.1}>
            <li className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-xl">
              <Check className="w-6 h-6 text-agri-green-300 mt-0.5 shrink-0" />
              <p className="text-lg font-medium">{t(`benefit_${num}`)}</p>
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
