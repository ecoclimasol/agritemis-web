"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { CLIENTS } from "@/config/constants";

export default function SocialProofSection() {
  const t = useTranslations("Landing");

  // Tripled for seamless infinite loop (scroll -33.333% to reset)
  const tripled = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <Section background="white" id="social-proof">
      <ScrollReveal>
        <SectionHeader
          title={t("social_proof_title")}
          subtitle={t("social_proof_context")}
          align="center"
        />

        {/* Marquee container */}
        <div className="mt-12 overflow-hidden">
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
              {tripled.map((client, idx) => (
                <div
                  key={`${client.name}-${idx}`}
                  className="flex w-[180px] shrink-0 items-center justify-center px-6"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={120}
                    height={80}
                    className="object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Keyframes for the marquee animation */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </Section>
  );
}
