// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const supportURL = 'https://screenstaring.com/#contact';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ScreenStaring Documentation',
  tagline: 'Documentation and support for ScreenStaring apps',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://help.screenstaring.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ScreenStaring',
  projectName: 'help.screenstarig.com',

  clientModules: ['./src/clientModules/shop.js'],

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      pt: {
        label: 'Português',
        htmlLang: 'pt',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // editUrl: 'https://github.com/ScreenStaring/help.screenstaring.com/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      colorMode: {
        respectPrefersColorScheme: true,
      },
      supportURL,
      algolia: {
        appId: 'Y6FL5XCVCH',
        apiKey: 'cedc0c6fe1ec05bc126389d2fcf279fa',
        indexName: 'screenstaring-docs',
      },
      navbar: {
        title: 'ScreenStaring Documentation',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'itsgotSidebar',
            position: 'left',
            label: "It's Got: The Food Database",
          },
          {
            type: 'docSidebar',
            sidebarId: 'productExpirationDatesSidebar',
            position: 'left',
            label: 'Product Expiration Dates',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            to: supportURL,
            label: 'Support',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: "It's Got: The Food Database",
                to: '/docs/itsgot',
              },
              {
                label: 'Product Expiration Dates',
                to: '/docs/product-expiration-dates',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Contact',
                to: supportURL,
              },
            ],
          },
          {
            title: 'Apps',
            items: [
              {label: 'Nutrition Facts', href: 'https://apps.shopify.com/nutrition-facts'},
              {label: 'Product Expiration Dates', href: 'https://apps.shopify.com/expiration-dates'},
              {label: 'Customer Gender', href: 'https://apps.shopify.com/customer-gender'},
              {label: 'Toggle Description', href: 'http://apps.shopify.com/product-description-show-more-show-less/'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ScreenStaring.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
