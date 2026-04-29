'use client';

import { Link, usePathname } from '@/i18n/navigation.client';

const locales = ['fr', 'en', 'es', 'pt', 'de', 'it'] as const;

interface LanguageSwitcherProps {
  locale: string;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center gap-2">
          {index > 0 && <span className="text-border">|</span>}
          <Link
            href={pathname}
            locale={loc}
            className={
              locale === loc
                ? 'text-agri-green-600 font-semibold'
                : 'text-text-muted hover:text-text-primary'
            }
          >
            {loc.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
