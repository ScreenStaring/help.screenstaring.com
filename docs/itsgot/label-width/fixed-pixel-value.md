---
sidebar_position: 1
---

import Link from '@site/src/components/ItsGot/Link';

# Fixed pixel value

A fixed width is set in pixels by selecting `px` from the unit menu. For example, to make a label 400 pixels wide:

1. Find the desired product and click the "Edit" button
1. Go to the Label Display Settings section
1. Select "General"
1. Fill-in the "Width" field with the desired width, e.g. `400`
1. Select `px` from the unit menu:
   <div>
       <img src="/itsgot/images/label-width-unit-pixel-field.jpg" alt="Selecting a Label Width's Pixel Unit" />
   </div>
1. Click <kbd>Update</kbd>

If no width is set the label uses <Link path="/settings/edit#label-display-settings">your default</Link>. If no default is set the default width
for the selected label format will be used. This is 400 pixels for vertical formats and 750 pixels for tabular formats.

A fixed width is applied as a maximum width. If the space available for the label is smaller than the label's width, the label is
reduced to fit. A label will never be wider than the space it's embedded in, e.g. a narrow column on a phone.

To use a dynamic, container-based width [use a percentage](percentage-of-its-parent-html-elements-size.md)
