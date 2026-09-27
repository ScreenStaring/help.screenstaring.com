'use strict';

// Generates llms.txt (https://llmstxt.org) and llms-full.txt for every locale
// at build time, straight from the docs front matter and markdown bodies.
//
// llms.txt        index of every doc page with its description (one per locale)
// llms-full.txt   every doc page's text in one file, for AI assistants and
//                 offline reading (one per locale)
//
// Pages get their entry description from the `description` front matter field,
// falling back to the page's first paragraph. Build logs a warning for pages
// that have neither.

const fs = require('node:fs');
const path = require('node:path');

const SITE_URL = 'https://help.screenstaring.com';
const SUPPORT_URL = 'https://screenstaring.com/#contact';

// Max length of a single-line description, per Google's meta description advice.
const DESCRIPTION_MAX = 160;

// Docs are grouped by app in llms.txt, in this order.
const APPS = [
  {dir: 'itsgot', name: "It's Got: The Food Database"},
  {dir: 'product-expiration-dates', name: 'Product Expiration Dates'},
];

const DOC_EXTENSIONS = ['.md', '.mdx'];

const LOCALES = {
  en: {
    prefix: '',
    docsDir: 'docs',
    description:
      "Documentation and support for ScreenStaring's Shopify apps: It's Got (nutrition facts and supplement labels) and Product Expiration Dates (expiration dates, batch numbers, and perishable inventory).",
    otherLanguagesTitle: 'Other Languages',
    supportTitle: 'Support',
    fullTextLink: 'Full documentation text',
    fullTextSummary:
      'Every documentation page in a single file, for AI assistants and offline reading.',
  },
  fr: {
    prefix: '/fr',
    docsDir: 'i18n/fr/docusaurus-plugin-content-docs/current',
    description:
      "Documentation et assistance pour les applications Shopify de ScreenStaring : It's Got (étiquettes nutritionnelles) et Product Expiration Dates (dates d'expiration, numéros de lot et gestion des stocks périssables).",
    otherLanguagesTitle: 'Autres langues',
    supportTitle: 'Assistance',
    fullTextLink: 'Texte intégral de la documentation',
    fullTextSummary:
      'Toutes les pages de documentation dans un seul fichier, pour les assistants IA et la lecture hors ligne.',
  },
  pt: {
    prefix: '/pt',
    docsDir: 'i18n/pt/docusaurus-plugin-content-docs/current',
    description:
      "Documentação e suporte para os aplicativos Shopify da ScreenStaring: It's Got (rótulos nutricionais) e Product Expiration Dates (datas de validade, números de lote e controle de estoque perecível).",
    otherLanguagesTitle: 'Outros idiomas',
    supportTitle: 'Suporte',
    fullTextLink: 'Texto completo da documentação',
    fullTextSummary:
      'Todas as páginas da documentação em um único arquivo, para assistentes de IA e leitura offline.',
  },
  es: {
    prefix: '/es',
    docsDir: 'i18n/es/docusaurus-plugin-content-docs/current',
    description:
      "Documentación y soporte para las aplicaciones de Shopify de ScreenStaring: It's Got (etiquetas nutricionales y de suplementos) y Product Expiration Dates (fechas de vencimiento, números de lote e inventario de productos perecederos).",
    otherLanguagesTitle: 'Otros idiomas',
    supportTitle: 'Soporte',
    fullTextLink: 'Texto completo de la documentación',
    fullTextSummary:
      'Todas las páginas de documentación en un solo archivo, para asistentes de IA y lectura sin conexión.',
  },
};

const LOCALE_NAMES = {en: 'English', es: 'Español', fr: 'Français', pt: 'Português'};

// --- Markdown / front matter helpers -----------------------------------------

function parseFrontMatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);

  if (!match) {
    return {data: {}, body: raw};
  }

  const data = {};

  for (const line of match[1].split(/\r?\n/)) {
    const field = /^([A-Za-z_][\w-]*):\s?(.*)$/.exec(line);

    if (!field) {
      continue;
    }

    let value = field[2].trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    data[field[1]] = value;
  }

  return {data, body: raw.slice(match[0].length)};
}

function firstHeading(body) {
  const match = /^#\s+(.+)$/m.exec(body);

  return match ? match[1].trim() : null;
}

function firstParagraph(body) {
  for (const block of body.split(/\r?\n\r?\n/)) {
    const text = block.trim();

    if (!text || /^[#<:|\-*!>]/.test(text) || /^(\d+\.|```)/.test(text)) {
      continue;
    }

    return toPlainText(text);
  }

  return null;
}

// Strips markup from a single line of prose so it can be used as a description.
function toPlainText(text) {
  return text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<\/?[A-Za-z][A-Za-z0-9-]*(?:\s[^>]*)?\/?>/g, '')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(text, max) {
  if (text.length <= max) {
    return text;
  }

  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');

  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trimEnd()}…`;
}

// Markdown body -> text that reads well outside of a documentation site.
// Fenced code blocks are kept as-is; MDX imports, JSX wrappers, and admonition
// markers are dropped, keeping whatever text they wrapped. `title` and `prefix`
// are used to drop the trailing page heading and to make links absolute.
function toPlainMarkdown(body, {title, prefix} = {}) {
  const lines = [];
  let fence = null;

  for (let line of body.split(/\r?\n/)) {
    const fenceMarker = /^\s*(```|~~~)/.exec(line);

    if (fenceMarker) {
      fence = fence === fenceMarker[1] ? null : fence || fenceMarker[1];
      lines.push(line);
      continue;
    }

    if (fence) {
      lines.push(line);
      continue;
    }

    if (/^\s*(import|export)\s/.test(line)) {
      continue;
    }

    // Admonition markers: :::info, :::warning Title, :::
    if (/^\s*:::/.test(line)) {
      continue;
    }

    line = line.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');

    // JSX and HTML wrappers (Link, ShopifyLink, kbd, img, br, ...).
    line = line.replace(/<\/?[A-Za-z][A-Za-z0-9-]*(?:\s[^>]*)?\/?>/g, '');

    lines.push(line.replace(/\s+$/, ''));
  }

  let text = lines
    .join('\n')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // The page title is emitted as the section heading, so the page's own H1 goes.
  const heading = /^#\s+(.+?)\s*$/m.exec(text);

  if (heading && (!title || heading[1] === title)) {
    text = `${text.slice(0, heading.index)}${text.slice(heading.index + heading[0].length)}`.trim();
  }

  // Root-relative links and images point at the site, not at the reader's
  // working directory.
  return text.replace(/\]\((\/[^)\s]*)\)/g, `](${SITE_URL}${prefix}$1)`);
}

function titleFromFilename(basename) {
  return basename
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// --- Docs tree ---------------------------------------------------------------

function docFileIn(dir) {
  for (const extension of DOC_EXTENSIONS) {
    const file = path.join(dir, `index${extension}`);

    if (fs.existsSync(file)) {
      return file;
    }
  }

  return null;
}

// Directory index pages are served with a trailing slash, other pages without,
// matching Docusaurus' default trailingSlash behavior.
function docUrl(prefix, routeParts, isIndex) {
  const parts = routeParts.filter(Boolean);
  const permalink = `${prefix}/docs${parts.length ? `/${parts.join('/')}` : ''}`;

  return `${SITE_URL}${permalink}${isIndex ? '/' : ''}`;
}

function readDoc(file, prefix, routeParts) {
  const raw = fs.readFileSync(file, 'utf8');
  const {data, body} = parseFrontMatter(raw);
  const isIndex = path.basename(file).startsWith('index.');
  const basename = path.basename(file, path.extname(file));
  const parts = isIndex ? routeParts : [...routeParts, basename];

  return {
    file,
    body,
    title: data.title || firstHeading(body) || titleFromFilename(basename),
    description: data.description || truncate(firstParagraph(body) || '', DESCRIPTION_MAX),
    position: Number.parseInt(data.sidebar_position, 10),
    url: docUrl(prefix, parts, isIndex),
  };
}

// Walks a docs directory the way an autogenerated sidebar does: entries sorted
// by sidebar_position, then by name, with a directory's position taken from its
// own index page.
function walkDocs(dir, prefix, routeParts = []) {
  const nodes = [];

  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (entry.name.startsWith('.') || entry.name.startsWith('#')) {
      continue;
    }

    if (entry.isDirectory()) {
      const indexFile = docFileIn(path.join(dir, entry.name));
      const index = indexFile
        ? readDoc(indexFile, prefix, [...routeParts, entry.name])
        : null;

      nodes.push({
        type: 'dir',
        name: entry.name,
        position: index ? index.position : NaN,
        index,
        children: walkDocs(path.join(dir, entry.name), prefix, [
          ...routeParts,
          entry.name,
        ]),
      });
      continue;
    }

    const extension = path.extname(entry.name);

    if (!DOC_EXTENSIONS.includes(extension) || entry.name.startsWith('index.')) {
      continue;
    }

    // Backups and editor leftovers, e.g. `faq.md~`.
    if (!entry.name.endsWith(extension)) {
      continue;
    }

    const doc = readDoc(path.join(dir, entry.name), prefix, routeParts);

    nodes.push({
      type: 'doc',
      name: entry.name,
      position: doc.position,
      doc,
    });
  }

  return nodes.sort((a, b) => {
    const aPosition = Number.isNaN(a.position) ? Number.MAX_SAFE_INTEGER : a.position;
    const bPosition = Number.isNaN(b.position) ? Number.MAX_SAFE_INTEGER : b.position;

    return aPosition - bPosition || a.name.localeCompare(b.name);
  });
}

// Flattens the tree into page order, a directory's index page ahead of its
// children.
function flattenDocs(nodes) {
  const docs = [];

  for (const node of nodes) {
    if (node.type === 'doc') {
      docs.push(node.doc);
      continue;
    }

    if (node.index) {
      docs.push(node.index);
    }

    docs.push(...flattenDocs(node.children));
  }

  return docs;
}

function loadDocs(siteDir, locale) {
  const config = LOCALES[locale];

  return APPS.map((app) => {
    const appDir = path.join(siteDir, config.docsDir, app.dir);
    const indexFile = docFileIn(appDir);
    const index = indexFile
      ? [readDoc(indexFile, config.prefix, [app.dir])]
      : [];

    return {
      ...app,
      docs: [...index, ...flattenDocs(walkDocs(appDir, config.prefix, [app.dir]))],
    };
  });
}

// --- File contents -----------------------------------------------------------

function buildIndexFile(locale, apps) {
  const config = LOCALES[locale];
  const lines = [
    '# ScreenStaring Documentation',
    '',
    `> ${config.description}`,
    '',
  ];

  for (const app of apps) {
    lines.push(`## ${app.name}`, '');

    for (const doc of app.docs) {
      const description = doc.description ? `: ${doc.description}` : '';
      lines.push(`- [${doc.title}](${doc.url})${description}`);
    }

    lines.push('');
  }

  lines.push(`## ${config.otherLanguagesTitle}`, '');

  for (const [code, name] of Object.entries(LOCALE_NAMES)) {
    if (code !== locale) {
      lines.push(`- [${name}](${SITE_URL}${LOCALES[code].prefix}/llms.txt)`);
    }
  }

  lines.push(
    '',
    `## ${config.supportTitle}`,
    '',
    `- [${config.supportTitle}](${SUPPORT_URL})`,
    `- [${config.fullTextLink}](${SITE_URL}${config.prefix}/llms-full.txt): ${config.fullTextSummary}`,
    '',
  );

  return lines.join('\n');
}

function buildFullTextFile(locale, apps) {
  const config = LOCALES[locale];
  const lines = [
    '# ScreenStaring Documentation',
    '',
    `> ${config.description}`,
    '',
    `Documentation language: ${LOCALE_NAMES[locale]}. Source: ${SITE_URL}${config.prefix}/docs/`,
    '',
    '---',
    '',
  ];

  for (const app of apps) {
    lines.push(`# ${app.name}`, '');

    for (const doc of app.docs) {
      lines.push(
        `## ${doc.title}`,
        '',
        `Source: ${doc.url}`,
        '',
        toPlainMarkdown(doc.body, {title: doc.title, prefix: config.prefix}),
        '',
        '---',
        '',
      );
    }
  }

  return lines.join('\n');
}

// --- Plugin ------------------------------------------------------------------

module.exports = function llmsTxtPlugin(context) {
  const {siteDir} = context;

  return {
    name: 'llms-txt',

    // Runs once per locale build, each with its own outDir ("build", "build/fr",
    // ...) and baseUrl ("/", "/fr/", ...), so only the current locale is written.
    async postBuild({outDir, baseUrl}) {
      const locale = baseUrl.replace(/\//g, '') || 'en';

      if (!LOCALES[locale]) {
        return;
      }

      const apps = loadDocs(siteDir, locale);
      const missing = [];

      for (const app of apps) {
        for (const doc of app.docs) {
          if (!doc.description) {
            missing.push(path.relative(siteDir, doc.file));
          }
        }
      }

      if (missing.length > 0) {
        console.warn(
          `[llms-txt] ${missing.length} ${locale} page(s) have no description and no usable first paragraph:`,
        );

        for (const file of missing) {
          console.warn(`[llms-txt]   ${file}`);
        }
      }

      fs.writeFileSync(path.join(outDir, 'llms.txt'), buildIndexFile(locale, apps));
      fs.writeFileSync(
        path.join(outDir, 'llms-full.txt'),
        buildFullTextFile(locale, apps),
      );
    },
  };
};
