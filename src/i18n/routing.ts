import {defineRouting} from 'next-intl/routing';

// Importation supprimée pour éviter l'erreur dans le middleware/Server
// import {createSharedPathnamesNavigation} from 'next-intl/navigation'; 

export const routing = defineRouting({
  locales: ['fr', 'en', 'es', 'pt'],
  defaultLocale: 'fr'
});

// Les exports Link, redirect, etc. sont maintenant dans navigation.client.ts
// On exporte uniquement 'routing' car il est utilisé par le middleware