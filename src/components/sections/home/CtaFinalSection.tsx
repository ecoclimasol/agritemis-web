"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/layout/Section";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation.client";

export default function CtaFinalSection() {
  const t = useTranslations("Landing");

  return (
    <Section background="surface" id="cta-final">
      <ScrollReveal>
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Decorative green gradient blob */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-agri-green-50 opacity-50 blur-3xl"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary text-balance">
            {t("cta_final_title")}
          </h2>

          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
            {t("cta_final_paragraph")}
          </p>

          <div className="mt-10">
            <Button variant="cta" size="xl" asChild>
              <Link href="/contact">{t("cta_final_button")}</Link>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
