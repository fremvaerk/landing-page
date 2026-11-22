import type { APIRoute } from 'astro';
import { absoluteUrl, alternates, langs, routes, type PageKey } from '../i18n/ui';

// Only indexable pages. The thanks pages (noindex) and the 404 page are not in the sitemap.
const indexedPages: PageKey[] = ['home', 'privacy'];

export const GET: APIRoute = () => {
  const entries = indexedPages.flatMap((page) =>
    langs.map((lang) => {
      const links = alternates(page)
        .map((link) => `    <xhtml:link rel="alternate" hreflang="${link.hreflang}" href="${link.href}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${absoluteUrl(routes[page][lang])}</loc>\n${links}\n  </url>`;
    }),
  );

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
