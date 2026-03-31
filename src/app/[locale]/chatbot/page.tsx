import type { Metadata } from "next";
import { Link } from "@/i18n/navigation.client";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/shared/ScrollReveal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ChatBot IA",
    description:
      "L'assistant IA Agritemis pour répondre à vos questions sur le risque pesticide.",
  };
}

export default function ChatbotPage() {
  return (
    <Section background="surface" className="min-h-[50vh] flex items-center">
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
            ChatBot IA
          </h1>
          <p className="text-lg text-text-secondary max-w-md">
            Cette page est en cours de développement. Revenez bientôt !
          </p>
          <Button variant="secondary" asChild>
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  );
}
