"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { MapPin, Mail, Linkedin } from "lucide-react";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: searchParams.get("subject") ?? "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const subjectOptions = [
    { value: "", label: t("subject_placeholder") },
    { value: "general", label: t("subject_general") },
    { value: "vitiscore", label: "VitiScore" },
    { value: "waterscore", label: "WaterScore" },
    { value: "indicateurs", label: t("subject_indicators") },
    { value: "partenariat", label: t("subject_partnership") },
  ];

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Server error");

      setSubmitted(true);
    } catch {
      alert(t("error_message"));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <Section background="surface" className="min-h-[60vh] flex items-center">
        <div className="text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-agri-green-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-agri-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">
            {t("success_title")}
          </h2>
          <p className="text-text-secondary">
            {t("success_message")}
          </p>
        </div>
      </Section>
    );
  }

  return (
    <>
      <Section background="white">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </ScrollReveal>
      </Section>

      <Section background="surface">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Form (3 cols) */}
          <ScrollReveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-sm border border-border p-8 space-y-6"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  {t("label_name")} *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("placeholder_name")}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email *
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("placeholder_email")}
                  required
                />
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  {t("label_organization")}
                </label>
                <Input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder={t("placeholder_organization")}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  {t("label_subject")} *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-text-primary focus:ring-2 focus:ring-agri-green-600 focus:border-transparent focus:outline-none"
                >
                  {subjectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  placeholder={t("placeholder_message")}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-white text-text-primary placeholder:text-text-muted focus:ring-2 focus:ring-agri-green-600 focus:border-transparent focus:outline-none resize-y"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? t("submitting") : t("submit")}
              </Button>
            </form>
          </ScrollReveal>

          {/* Right: Contact Info (2 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <Card variant="elevated" className="h-fit">
              <CardContent className="pt-6 space-y-8">
                <h3 className="text-xl font-semibold text-text-primary">
                  {t("info_title")}
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-agri-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {t("label_address")}
                      </p>
                      <p className="text-sm text-text-secondary">
                        494 Rue Léon Blum, 34000 Montpellier, France
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5 text-agri-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/company/agritemis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-agri-green-600 transition-colors"
                      >
                        AGRITEMIS
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
