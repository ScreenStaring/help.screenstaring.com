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
  projectName: 'help.screenstaring.com',

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
        gtag: {
          trackingID: 'G-X29X7NJRYR',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'algolia-site-verification', content: '05FFAF85647F1EFA'},
      ],

      colorMode: {
        respectPrefersColorScheme: true,
      },
      supportURL,
      algolia: {
        appId: 'Y6FL5XCVCH',
        apiKey: 'cedc0c6fe1ec05bc126389d2fcf279fa',
        indexName: 'help.screenstaring.com',
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
            type: 'localeDropdown',
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
              {label: 'Nutrition Facts', href: 'https://apps.shopify.com/nutrition-facts?utm_source=screenstaring-documention&utm_medium=web&utm_campaign=app-link'},
              {label: 'Product Expiration Dates', href: 'https://apps.shopify.com/expiration-dates?utm_source=screenstaring-documention&utm_medium=web&utm_campaign=app-link'},
              {label: 'Customer Gender', href: 'https://apps.shopify.com/customer-gender?utm_source=screenstaring-documention&utm_medium=web&utm_campaign=app-link'},
              {label: 'Toggle Description', href: 'http://apps.shopify.com/product-description-show-more-show-less?utm_source=screenstaring-documention&utm_medium=web&utm_campaign=app-link'},
            ],
          },
        ],
        copyright: `
          <div>Copyright © ${new Date().getFullYear()} ScreenStaring</div>
          <div class="footer__social">
            <a class="footer__social-link" href="https://github.com/ScreenStaring" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a class="footer__social-link" href="https://x.com/ScreenStaring" target="_blank" rel="noreferrer noopener" aria-label="X (Twitter)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
