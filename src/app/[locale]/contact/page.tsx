"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import ScrollReveal from "@/components/shared/ScrollReveal";

const subjectOptions = [
  { value: "", label: "Sélectionnez un sujet" },
  { value: "general", label: "Général" },
  { value: "vitiscore", label: "VitiScore" },
  { value: "indicateurs", label: "Indicateurs" },
  { value: "partenariat", label: "Partenariat" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
  }

  if (submitted) {
    return (
      <Section background="surface" className="min-h-[60vh] flex items-center">
        <div className="text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-agri-green-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-agri-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary">
            Message envoyé
          </h2>
          <p className="text-text-secondary">
            Merci pour votre message. Notre équipe vous répondra dans les
            meilleurs délais.
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
            eyebrow="Contact"
            title="Parlons de votre projet"
            subtitle="Une question, une demande de démonstration ou un partenariat ? Contactez-nous."
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
                  Nom complet *
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
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
                  placeholder="jean@entreprise.com"
                  required
                />
              </div>

              {/* Organization */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Organisation
                </label>
                <Input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Nom de votre organisation"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Sujet *
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
                  placeholder="Décrivez votre projet ou votre question\u2026"
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
                {isSubmitting ? "Envoi en cours\u2026" : "Envoyer le message"}
              </Button>
            </form>
          </ScrollReveal>

          {/* Right: Contact Info (2 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <Card variant="elevated" className="h-fit">
              <CardContent className="pt-6 space-y-8">
                <h3 className="text-xl font-semibold text-text-primary">
                  Coordonnées
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-agri-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Adresse
                      </p>
                      <p className="text-sm text-text-secondary">
                        494 Rue Léon Blum, 34000 Montpellier, France
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-agri-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Téléphone
                      </p>
                      <a
                        href="tel:+33600000000"
                        className="text-sm text-text-secondary hover:text-agri-green-600 transition-colors"
                      >
                        +33 (0)6 00 00 00 00
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-agri-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Email
                      </p>
                      <a
                        href="mailto:contact@agritemis.com"
                        className="text-sm text-text-secondary hover:text-agri-green-600 transition-colors"
                      >
                        contact@agritemis.com
                      </a>
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
