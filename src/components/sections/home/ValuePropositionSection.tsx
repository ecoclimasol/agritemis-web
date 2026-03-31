"use client";

import { useTranslations } from "next-intl";
import { BarChart3, Scale, Zap } from "lucide-react";
import Section from "@/components/layout/Section";
import ScrollReveal from "@/components/shared/ScrollReveal";

const steps = [
  { icon: BarChart3, titleKey: "value_step_1_title", descKey: "value_step_1_desc" },
  { icon: Scale, titleKey: "value_step_2_title", descKey: "value_step_2_desc" },
  { icon: Zap, titleKey: "value_step_3_title", descKey: "value_step_3_desc" },
] as const;

export default function ValuePropositionSection() {
  const t = useTranslations("Landing");

  return (
    <Section background="green">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {steps.map(({ icon: Icon, titleKey, descKey }, index) => (
          <ScrollReveal key={titleKey} delay={index * 0.15} className="group">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
                <Icon size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">{t(titleKey)}</h3>
              <p className="text-agri-green-100 max-w-xs mx-auto">
                {t(descKey)}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
