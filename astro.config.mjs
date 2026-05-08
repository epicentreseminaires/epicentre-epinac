import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Mini-site dédié au domaine d'Épinac, déployé sur le sous-domaine
// epinac.epicentre-seminaires.fr. SEO autonome, identité propre.
// Le site agence reste sur epicentre-seminaires.fr (repo séparé).
export default defineConfig({
  site: 'https://epinac.epicentre-seminaires.fr',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR' },
      },
      filter: (page) => !page.includes('/merci/'),
      serialize(item) {
        const url = item.url;
        if (url === 'https://epinac.epicentre-seminaires.fr/') item.priority = 1.0;
        else if (/\/(le-domaine|productions)\/$/.test(url)) item.priority = 0.9;
        else if (/\/seminaire-depuis-(lyon|paris|geneve|dijon)/.test(url)) item.priority = 0.85;
        else if (url.includes('/seminaire-')) item.priority = 0.8;
        else if (url.includes('/contact/')) item.priority = 0.5;
        else item.priority = 0.7;
        return item;
      },
    }),
  ],
  build: {
    format: 'directory',
  },
  trailingSlash: 'always',
});
