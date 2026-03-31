"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Link } from "@/i18n/navigation.client";

const indicators = [
  { id: "ARI", key: "ari", image: "/indicators/ari.png" },
  { id: "CRI", key: "cri", image: "/indicators/cri.png" },
  { id: "CORI", key: "cori", image: "/indicators/cori.png" },
  { id: "BRI", key: "bri", image: "/indicators/bri.png" },
  { id: "WARI", key: "wari", image: "/indicators/wari.png" },
] as const;

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {indicators.map((indicator, index) => (
          <ScrollReveal key={indicator.id} delay={index * 0.1}>
            <Card variant="indicator" className="flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full bg-surface rounded-t-xl overflow-hidden">
                  <Image
                    src={indicator.image}
                    alt={t(`indicator_${indicator.key}_title`)}
                    fill
                    className="object-contain"
                  />
                </div>
              </CardHeader>

              <CardContent className="flex flex-col flex-1 gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted text-center">
                  {indicator.id}
                </p>
                <CardTitle className="text-lg font-bold">
                  {t(`indicator_${indicator.key}_title`)}
                </CardTitle>
                <CardDescription className="text-sm">
                  {t(`indicator_${indicator.key}_short_desc`)}
                </CardDescription>

                <Link
                  href="/indicator-request"
                  className="mt-auto pt-2 text-agri-green-600 hover:underline font-semibold text-sm inline-flex items-center gap-1"
                >
                  {t("indicator_learn_more")}
                  <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
