---
sidebar_position: 6
---

import Link from '@site/src/components/ItsGot/Link';

# Font

A label can use its own font instead of the font of the page it's embedded in:

:::info
You can set defaults for these on <Link path="/settings/edit#label-display-settings">your account's settings page</Link>
:::

1. Find the desired product and click the "Edit" button
1. Go to the Label Display Settings section
1. Select "General"
1. Fill-in the "Font URL" field with a link the CSS font definition, e.g. `https://fonts.googleapis.com/css2?family=Open+Sans`
1. Fill-in the "Font family" field with the font's family name, e.g. `Open Sans`
   {/* Image temporarily disabled: /itsgot/shopify/images/label-set-font.jpg not available
   <div>
     <img src="/itsgot/shopify/images/label-set-font.jpg" width="700" alt="Setting a Label's Font" />
   </div>
   */}
1. Click <kbd>Update</kbd>

The URL must be a CSS font definition to be included via a `link` HTML tag, not a font file.
