'use strict';

// Adds site-wide JSON-LD structured data (Organization and WebSite schemas)
// to every page via Docusaurus' injectHtmlTags plugin API, for SEO and AI
// crawlers. Docusaurus instantiates plugins once per locale build, so the
// WebSite schema carries the right locale, language, and description.
//
// Per-page schemas (TechArticle, BreadcrumbList, SoftwareApplication) are
// rendered by the DocJsonLd component in src/components/DocJsonLd.

const SITE_URL = 'https://help.screenstaring.com';

// One entry per locale, mirroring the i18n config in docusaurus.config.js.
const LOCALES = {
  en: {
    prefix: '',
    htmlLang: 'en',
    description:
      "Documentation and support for ScreenStaring's Shopify apps: It's Got (nutrition facts and supplement labels) and Product Expiration Dates (expiration dates, batch numbers, and perishable inventory).",
  },
  fr: {
    prefix: '/fr',
    htmlLang: 'fr',
    description:
      "Documentation et assistance pour les applications Shopify de ScreenStaring : It's Got (étiquettes nutritionnelles) et Product Expiration Dates (dates d'expiration, numéros de lot et gestion des stocks périssables).",
  },
  pt: {
    prefix: '/pt',
    htmlLang: 'pt',
    description:
      "Documentação e suporte para os aplicativos Shopify da ScreenStaring: It's Got (rótulos nutricionais) e Product Expiration Dates (datas de validade, números de lote e controle de estoque perecível).",
  },
  es: {
    prefix: '/es',
    htmlLang: 'es',
    description:
      "Documentación y soporte para las aplicaciones de Shopify de ScreenStaring: It's Got (etiquetas nutricionales y de suplementos) y Product Expiration Dates (fechas de vencimiento, números de lote e inventario de productos perecederos).",
  },
};

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ScreenStaring',
  url: 'https://screenstaring.com',
  sameAs: ['https://github.com/ScreenStaring', 'https://x.com/ScreenStaring'],
};

function websiteSchema(locale) {
  const config = LOCALES[locale];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ScreenStaring Documentation',
    url: `${SITE_URL}${config.prefix}/`,
    description: config.description,
    inLanguage: config.htmlLang,
    publisher: {
      '@type': 'Organization',
      name: 'ScreenStaring',
      url: 'https://screenstaring.com',
    },
  };
}

function scriptTag(schema) {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

module.exports = function jsonLdPlugin(context) {
  const locale = context.i18n.currentLocale;

  if (!LOCALES[locale]) {
    return {name: 'json-ld'};
  }

  return {
    name: 'json-ld',

    injectHtmlTags() {
      return {
        headTags: [scriptTag(ORGANIZATION), scriptTag(websiteSchema(locale))],
      };
    },
  };
};
