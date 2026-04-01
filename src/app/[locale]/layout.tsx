import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/Footer';
import "../globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: {
      default: `${t('title')} — Mesure scientifique du risque pesticide`,
      template: `%s | AGRITEMIS`,
    },
    description: 'Agritemis propose des indicateurs scientifiques pour mesurer et réduire le risque pesticide dans les filières agricoles.',
    metadataBase: new URL('https://agritemis.com'),
    alternates: {
      languages: {
        fr: '/fr',
        en: '/en',
        es: '/es',
        pt: '/pt',
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'AGRITEMIS',
      locale: locale === 'fr' ? 'fr_FR' : locale === 'es' ? 'es_ES' : locale === 'pt' ? 'pt_PT' : 'en_US',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/vitiscore', label: t('vitiscore') },
    { href: '/waterscore', label: t('waterscore') },
    { href: '/indicateurs', label: t('indicateurs') },
    { href: '/mission', label: t('mission') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <html lang={locale} className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://agritemis.com/#organization',
                  name: 'AGRITEMIS',
                  url: 'https://agritemis.com',
                  logo: 'https://agritemis.com/logo_agritemis.png',
                  description: 'Scientific measurement of pesticide risk for agricultural supply chains',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: '494 Rue Léon Blum',
                    addressLocality: 'Montpellier',
                    postalCode: '34000',
                    addressCountry: 'FR',
                  },
                  parentOrganization: {
                    '@type': 'Organization',
                    name: 'EcoClimaSol Holding',
                  },
                  sameAs: ['https://www.linkedin.com/company/agritemis'],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'contact@agritemis.com',
                    contactType: 'sales',
                  },
                },
                {
                  '@type': 'Product',
                  name: 'VitiScore',
                  description: 'Reference indicator to assess and manage the phytosanitary footprint of vineyard treatments.',
                  brand: { '@type': 'Brand', name: 'AGRITEMIS' },
                  url: 'https://agritemis.com/fr/vitiscore',
                },
                {
                  '@type': 'Product',
                  name: 'WaterScore',
                  description: 'Composite score to measure and manage the pesticide footprint on water resources.',
                  brand: { '@type': 'Brand', name: 'AGRITEMIS' },
                  url: 'https://agritemis.com/fr/waterscore',
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://agritemis.com/#website',
                  url: 'https://agritemis.com',
                  name: 'AGRITEMIS',
                  publisher: { '@id': 'https://agritemis.com/#organization' },
                  inLanguage: ['fr', 'en', 'es'],
                },
              ],
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-agri-green-600 focus:text-white focus:rounded-md"
          >
            Skip to content
          </a>

          {/* Navigation */}
          <Navbar locale={locale} navLinks={navLinks} />

          {/* Main content */}
          <main id="main-content">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
