"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CguPage() {
  const t = useTranslations("Terms");

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
            <h2 className="text-xl font-bold">{t("object_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("object_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("acceptance_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("acceptance_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("access_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("access_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("ip_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("ip_intro")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-text-secondary">
              <li>{t("ip_item_1")}</li>
              <li>{t("ip_item_2")}</li>
              <li>{t("ip_item_3")}</li>
            </ul>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("ip_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("user_obligations_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("user_obligations_intro")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-sm text-text-secondary">
              <li>{t("user_obligations_item_1")}</li>
              <li>{t("user_obligations_item_2")}</li>
              <li>{t("user_obligations_item_3")}</li>
              <li>{t("user_obligations_item_4")}</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("liability_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("liability_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("links_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("links_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("personal_data_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("personal_data_content")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold">{t("modification_title")}</h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {t("modification_content")}
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
