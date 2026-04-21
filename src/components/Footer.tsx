"use client";

import { Link } from "@/i18n/navigation.client";
import { useTranslations } from "next-intl";
import { Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agri-green-900 text-agri-green-200 border-t border-agri-green-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* LOGO + MISSION */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">
            {t("brand_name")}
          </h3>
          <p className="text-sm leading-relaxed text-agri-green-300">
            {t("mission")}
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-agri-green-100">
            {t("nav_title")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors duration-200">
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link href="/vitiscore" className="hover:text-white transition-colors duration-200">
                {t("nav_vitiscore")}
              </Link>
            </li>
            <li>
              <Link href="/waterscore" className="hover:text-white transition-colors duration-200">
                {t("nav_waterscore")}
              </Link>
            </li>
            <li>
              <Link href="/indicateurs" className="hover:text-white transition-colors duration-200">
                {t("nav_indicators")}
              </Link>
            </li>
            <li>
              <Link href="/mission" className="hover:text-white transition-colors duration-200">
                {t("nav_mission")}
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-agri-green-100">
            {t("contact_title")}
          </h4>
          <ul className="space-y-2 text-sm text-agri-green-300">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>494 Rue Léon Blum, 34000 Montpellier, France</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                {t("contact_title")}
              </Link>
            </li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-agri-green-100">
            {t("follow_title")}
          </h4>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://www.linkedin.com/company/agritemis"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-xs text-agri-green-400">
            {t("follow_text")}
          </p>
        </div>
      </div>

      {/* LEGAL LINKS + COPYRIGHT */}
      <div className="border-t border-agri-green-800 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-agri-green-400">
        <div>© {currentYear} AGRITEMIS — {t("copyright_suffix")}</div>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <li>
            <Link href="/mentions-legales" className="hover:text-white transition-colors duration-200">
              {t("legal_notice")}
            </Link>
          </li>
          <li>
            <Link href="/politique-confidentialite" className="hover:text-white transition-colors duration-200">
              {t("privacy_policy")}
            </Link>
          </li>
          <li>
            <Link href="/cgu" className="hover:text-white transition-colors duration-200">
              {t("terms")}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
