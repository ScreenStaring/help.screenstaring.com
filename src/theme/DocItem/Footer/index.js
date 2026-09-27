import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';
import EditMetaRow from '@theme/EditMetaRow';
import DocInstallButton from '@site/src/components/DocInstallButton';

// Swizzled (ejected) copy of @docusaurus/theme-classic's DocItem/Footer.
// Docusaurus renders this component at the bottom of every docs page, just
// before the pagination nav. Swizzling it is the only way to add content
// there site-wide without editing each MDX page individually.
//
// Rendered regardless of whether the page has tags or an edit link so the
// install button appears on every docs page (see DocInstallButton below).
export default function DocItemFooter() {
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  return (
    <footer
      className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
      {canDisplayTagsRow && (
        <div
          className={clsx(
            'row margin-top--sm',
            ThemeClassNames.docs.docFooterTagsRow,
          )}>
          <div className="col">
            <TagsListInline tags={tags} />
          </div>
        </div>
      )}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          className={clsx(
            'margin-top--sm',
            ThemeClassNames.docs.docFooterEditMetaRow,
          )}
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
        />
      )}
      {/* App-specific CTA shown above the pagination nav. Returns null on
          pages outside /docs/itsgot and /docs/product-expiration-dates. */}
      <div className="margin-top--lg">
        <DocInstallButton />
      </div>
    </footer>
  );
}
