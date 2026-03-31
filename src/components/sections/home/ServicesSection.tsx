"use client";

import { useTranslations } from "next-intl";
import {
  Microscope,
  FlaskConical,
  CalendarRange,
  Map,
  LayoutDashboard,
  Activity,
  Grape,
  Smartphone,
} from "lucide-react";
import Section from "@/components/layout/Section";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

const services = [
  { icon: Microscope, key: "1" },
  { icon: FlaskConical, key: "2" },
  { icon: CalendarRange, key: "3" },
  { icon: Map, key: "4" },
  { icon: LayoutDashboard, key: "5" },
] as const;

const products = [
  { icon: Activity, key: "1" },
  { icon: Grape, key: "2" },
  { icon: Smartphone, key: "3" },
] as const;

export default function ServicesSection() {
  const t = useTranslations("Services");

  return (
    <>
      {/* Part 1: Services */}
      <Section background="white" id="services">
        <SectionHeader
          title={t("main_title")}
          subtitle={t("sub_title")}
          className="mb-12"
        />

        {/* Row 1: First 3 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map(({ icon: Icon, key }, index) => (
            <ScrollReveal key={key} delay={index * 0.1}>
              <Card variant="feature" className="h-full">
                <CardContent className="space-y-4 pb-2">
                  <div className="p-3 rounded-xl bg-agri-green-50 w-fit">
                    <Icon className="h-6 w-6 text-agri-green-600" />
                  </div>
                  <CardTitle>{t(`service_${key}_title`)}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {t(`service_${key}_desc`)}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex-col items-start gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {t("target_users_label")}
                  </span>
                  <span className="text-sm text-agri-blue-600 leading-snug">
                    {t(`service_${key}_targets`)}
                  </span>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Row 2: Last 2 services, centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {services.slice(3).map(({ icon: Icon, key }, index) => (
            <ScrollReveal key={key} delay={(index + 3) * 0.1}>
              <Card variant="feature" className="h-full">
                <CardContent className="space-y-4 pb-2">
                  <div className="p-3 rounded-xl bg-agri-green-50 w-fit">
                    <Icon className="h-6 w-6 text-agri-green-600" />
                  </div>
                  <CardTitle>{t(`service_${key}_title`)}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {t(`service_${key}_desc`)}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex-col items-start gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {t("target_users_label")}
                  </span>
                  <span className="text-sm text-agri-blue-600 leading-snug">
                    {t(`service_${key}_targets`)}
                  </span>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Part 2: Products */}
      <Section background="dark">
        <SectionHeader
          title={t("products_title")}
          subtitle={t("products_sub_title")}
          className="mb-12 [&_h2]:text-white [&_p]:text-agri-green-100"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(({ icon: Icon, key }, index) => (
            <ScrollReveal key={key} delay={index * 0.1}>
              <Card variant="product" className="h-full">
                <CardContent className="space-y-4">
                  <div className="p-2 bg-white rounded-lg w-fit">
                    <Icon className="h-6 w-6 text-agri-green-900" />
                  </div>
                  <CardTitle className="text-white">
                    {t(`product_${key}_title`)}
                  </CardTitle>
                  <CardDescription className="text-agri-green-50">
                    {t(`product_${key}_desc`)}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
