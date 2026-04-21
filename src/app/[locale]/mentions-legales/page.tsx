"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function MentionsLegalesPage() {
  const t = useTranslations("LegalNotice");

  return (
    <Section background="white">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-12">
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
            align="left"
          />

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("editor_title")}</h2>
            <div className="text-text-secondary leading-relaxed space-y-1 text-sm">
              <p><strong>AGRITEMIS</strong></p>
              <p>{t("editor_legal_form")}</p>
              <p>{t("editor_capital")}</p>
              <p>{t("editor_address")}</p>
              <p>{t("editor_siret")}</p>
              <p>{t("editor_rcs")}</p>
              <p>{t("editor_vat")}</p>
              <p>{t("editor_email_label")}: contact@agritemis.com</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("director_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("director_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("host_title")}</h2>
            <div className="text-text-secondary leading-relaxed space-y-1 text-sm">
              <p><strong>Netlify, Inc.</strong></p>
              <p>44 Montgomery Street, Suite 300</p>
              <p>San Francisco, CA 94104, USA</p>
              <p>https://www.netlify.com</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("ip_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("ip_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("liability_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("liability_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("law_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("law_content")}
            </p>
          </section>

          <p className="text-xs text-text-muted italic pt-6 border-t border-border">
            {t("last_updated")}
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
