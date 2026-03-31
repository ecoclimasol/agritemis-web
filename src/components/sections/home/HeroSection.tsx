"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation.client";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const t = useTranslations("Landing");

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] rounded-2xl overflow-hidden mx-4 mt-4">
      {/* Background image */}
      <Image
        src="/Vigne_tracteur2.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] md:min-h-[80vh] items-center justify-center px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance"
          >
            {t("hero_headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
          >
            {t("hero_punchline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="cta" size="xl" asChild>
              <Link href="/contact">{t("hero_cta")}</Link>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              asChild
              className="border-white/60 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/indicateurs">Découvrir nos indicateurs</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
