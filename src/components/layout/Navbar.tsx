'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation.client';
import { cn } from '@/lib/utils';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';

interface NavbarProps {
  locale: string;
  navLinks: { href: string; label: string }[];
}

export default function Navbar({ locale, navLinks }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white shadow-sm transition-[border-color] duration-200',
        scrolled && 'border-b border-border'
      )}
    >
      {/* Desktop navbar */}
      <nav
        aria-label="Main navigation"
        className="hidden md:flex items-center justify-between px-4 py-3"
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo_agritemis.png"
            alt="Agritemis"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'font-medium transition-colors duration-200',
                  isActive(link.href)
                    ? 'text-agri-green-600'
                    : 'text-text-secondary hover:text-agri-green-600'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language switcher */}
        <LanguageSwitcher locale={locale} />
      </nav>

      {/* Mobile navbar */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo_agritemis.png"
            alt="Agritemis"
            width={160}
            height={40}
            priority
          />
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="p-2 text-text-secondary hover:text-agri-green-600 transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile slide-in panel */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-72 bg-white shadow-xl flex flex-col overscroll-contain overflow-y-auto">
            {/* Close button */}
            <div className="flex justify-end px-4 py-3">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-text-secondary hover:text-agri-green-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav aria-label="Main navigation" className="flex-1 px-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center min-h-11 py-2 font-medium transition-colors duration-200',
                        isActive(link.href)
                          ? 'text-agri-green-600'
                          : 'text-text-secondary hover:text-agri-green-600'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language switcher at bottom */}
            <div className="px-4 py-6 border-t border-border">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </>
      )}
    </header>
  );
}
