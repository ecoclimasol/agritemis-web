import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import { Link } from '@/i18n/navigation.client';
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
    { href: '/' as const, label: t('home') },
    { href: '/vitiscore' as const, label: t('vitiscore') },
    { href: '/indicateurs' as const, label: t('indicateurs') },
    { href: '/mission' as const, label: t('mission') },
    { href: '/contact' as const, label: t('contact') },
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
          <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-40 h-auto relative">
                <Image
                  src="/logo_agritemis.png"
                  alt="Agritemis Logo"
                  width={3514}
                  height={512}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-secondary hover:text-agri-green-600 font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language selector */}
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Link href="/" locale="fr" className={`font-medium transition-colors duration-200 ${locale === 'fr' ? 'text-agri-green-600' : 'text-text-muted hover:text-text-primary'}`}>
                FR
              </Link>
              <span className="text-border">|</span>
              <Link href="/" locale="en" className={`font-medium transition-colors duration-200 ${locale === 'en' ? 'text-agri-green-600' : 'text-text-muted hover:text-text-primary'}`}>
                EN
              </Link>
              <span className="text-border">|</span>
              <Link href="/" locale="es" className={`font-medium transition-colors duration-200 ${locale === 'es' ? 'text-agri-green-600' : 'text-text-muted hover:text-text-primary'}`}>
                ES
              </Link>
            </div>
          </nav>

          {/* Main content */}
          <main id="main-content" className="px-4 py-8 md:px-6">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
