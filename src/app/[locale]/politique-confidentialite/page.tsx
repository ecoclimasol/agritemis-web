"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function PolitiqueConfidentialitePage() {
  const t = useTranslations("PrivacyPolicy");

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
            <h2 className="text-xl font-bold">{t("controller_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("controller_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("data_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("data_intro")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-text-secondary">
              <li>{t("data_item_1")}</li>
              <li>{t("data_item_2")}</li>
              <li>{t("data_item_3")}</li>
              <li>{t("data_item_4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("purpose_title")}</h2>
            <ul className="list-disc ml-6 space-y-2 text-sm text-text-secondary">
              <li>{t("purpose_item_1")}</li>
              <li>{t("purpose_item_2")}</li>
              <li>{t("purpose_item_3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("legal_basis_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("legal_basis_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("retention_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("retention_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("recipients_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("recipients_intro")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-text-secondary">
              <li>{t("recipients_item_1")}</li>
              <li>{t("recipients_item_2")}</li>
              <li>{t("recipients_item_3")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("rights_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("rights_intro")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-text-secondary">
              <li>{t("rights_item_1")}</li>
              <li>{t("rights_item_2")}</li>
              <li>{t("rights_item_3")}</li>
              <li>{t("rights_item_4")}</li>
              <li>{t("rights_item_5")}</li>
            </ul>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("rights_contact")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("cookies_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("cookies_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("cnil_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("cnil_content")}
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
