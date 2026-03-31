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
      },
    },
    openGraph: {
      type: 'website',
      siteName: 'AGRITEMIS',
      locale: locale === 'fr' ? 'fr_FR' : locale === 'es' ? 'es_ES' : 'en_US',
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
    { href: '/indicateurs', label: t('indicateurs') },
    { href: '/mission', label: t('mission') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <html lang={locale} className={plusJakarta.variable}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
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
