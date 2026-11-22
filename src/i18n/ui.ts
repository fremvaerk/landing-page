export const SITE_URL = 'https://fremvaerk.dk';
export const EMAIL = 'hej@fremvaerk.dk';
export const GITHUB_URL = 'https://github.com/fremvaerk';
export const CVR = '45961087';

export type Lang = 'da' | 'en';
export const langs: readonly Lang[] = ['da', 'en'];

/** Pages that exist in both languages. */
export type PageKey = 'home' | 'privacy' | 'thanks';

export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { da: '/', en: '/en/' },
  privacy: { da: '/privatlivspolitik/', en: '/en/privacy/' },
  thanks: { da: '/tak/', en: '/en/thanks/' },
};

export const sectionIds: Record<Lang, { projects: string; contact: string }> = {
  da: { projects: 'projekter', contact: 'kontakt' },
  en: { projects: 'projects', contact: 'contact' },
};

/** Interface text. Danish is final copy, English is draft copy. */
export const ui = {
  da: {
    locale: 'da_DK',
    skipLink: 'Gå til indhold',
    homeLabel: 'FremVærk forside',
    navLabel: 'Hovedmenu',
    navProjects: 'Projekter',
    navContact: 'Kontakt',
    headerButton: 'Skriv til os',
    location: 'Birkerød, Danmark',
    privacy: 'Privatlivspolitik',
    homeTitle: 'FremVærk – softwareudvikling, DevOps, cloud og AI',
    homeDescription:
      'FremVærk er et dansk softwarehus. Vi tager imod opgaver inden for udvikling, DevOps, cloud og AI, og vi bygger vores egne værktøjer som open source.',
    shareImageAlt: 'FremVærk – Vi udvikler software, driver platforme og integrerer AI.',
  },
  en: {
    locale: 'en_GB',
    skipLink: 'Skip to content',
    homeLabel: 'FremVærk home',
    navLabel: 'Main menu',
    navProjects: 'Projects',
    navContact: 'Contact',
    headerButton: 'Contact us',
    location: 'Birkerød, Denmark',
    privacy: 'Privacy policy',
    homeTitle: 'FremVærk – software development, DevOps, cloud and AI',
    homeDescription:
      'FremVærk is a Danish software company. We take on work in development, DevOps, cloud and AI, and we build our own tools as open source.',
    shareImageAlt: 'FremVærk – We build software, run platforms and integrate AI.',
  },
} as const satisfies Record<Lang, Record<string, string>>;

/** Absolute URL on the primary domain. */
export const absoluteUrl = (path: string): string => new URL(path, SITE_URL).href;

/** hreflang alternates for a page that exists in both languages. x-default is Danish. */
export const alternates = (page: PageKey): { hreflang: string; href: string }[] => [
  ...langs.map((lang) => ({ hreflang: lang, href: absoluteUrl(routes[page][lang]) })),
  { hreflang: 'x-default', href: absoluteUrl(routes[page].da) },
];
