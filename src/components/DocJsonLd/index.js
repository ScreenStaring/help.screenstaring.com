import React from 'react';
import Head from '@docusaurus/Head';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const ORGANIZATION = {
  '@type': 'Organization',
  name: 'ScreenStaring',
  url: 'https://screenstaring.com',
};

// Shopify app listings, keyed by the suffix of the app's docs index page.
// App index pages get a SoftwareApplication schema on top of the usual
// TechArticle one.
const APPS = {
  '/docs/itsgot/': {
    name: "It's Got: The Food Database",
    url: 'https://apps.shopify.com/nutrition-facts',
  },
  '/docs/product-expiration-dates/': {
    name: 'Product Expiration Dates',
    url: 'https://apps.shopify.com/expiration-dates',
  },
};

// Renders per-page JSON-LD structured data into the document head for SEO and
// AI crawlers: a TechArticle for the page itself, and a SoftwareApplication on
// app index pages. Docusaurus' classic theme already emits a BreadcrumbList
// (DocBreadcrumbsStructuredData), so that schema is not duplicated here.
// Mounted once per docs page by the swizzled DocItem/Layout wrapper.
export default function DocJsonLd() {
  const {siteConfig, i18n} = useDocusaurusContext();
  const {metadata} = useDoc();

  const pageUrl = `${siteConfig.url}${metadata.permalink}`;
  const locale = i18n.currentLocale;

  const techArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    ...(metadata.description ? {description: metadata.description} : {}),
    inLanguage: locale,
    mainEntityOfPage: {'@type': 'WebPage', '@id': pageUrl},
    author: ORGANIZATION,
    publisher: ORGANIZATION,
  };

  const app = Object.entries(APPS).find(([suffix]) =>
    metadata.permalink.endsWith(suffix),
  );
  const softwareApplication = app
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: app[1].name,
        url: app[1].url,
        operatingSystem: 'Web',
        applicationCategory: 'BusinessApplication',
        inLanguage: locale,
        ...(metadata.description ? {description: metadata.description} : {}),
        publisher: ORGANIZATION,
      }
    : null;

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(techArticle)}</script>
      {softwareApplication && (
        <script type="application/ld+json">
          {JSON.stringify(softwareApplication)}
        </script>
      )}
    </Head>
  );
}
