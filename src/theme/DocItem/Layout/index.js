import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import DocJsonLd from '@site/src/components/DocJsonLd';

// Swizzled (wrapped) copy of @docusaurus/theme-classic's DocItem/Layout.
// Renders per-page JSON-LD structured data (TechArticle, BreadcrumbList, and
// SoftwareApplication on app index pages) for SEO and AI crawlers.
export default function LayoutWrapper(props) {
  return (
    <>
      <DocJsonLd />
      <Layout {...props} />
    </>
  );
}
