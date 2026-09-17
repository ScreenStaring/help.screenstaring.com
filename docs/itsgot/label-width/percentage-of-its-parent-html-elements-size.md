---
sidebar_position: 2
---

# Percentage of its parent HTML element's size

A percentage width makes the label relative to the element it's embedded in, e.g. a theme block or a product page's column.
The width changes when the size of that element changes.

To make a label as wide as the element it's in:

1. Find the desired product and click the "Edit" button
1. Go to the Label Display Settings section
1. Select "General"
1. Fill-in the "Width" field with the desired percentage. In most cases you will enter `100` so that the label occupies the full width of its parent element
1. Select `%` from the unit menu:
   <div>
       <img src="/itsgot/images/label-width-unit-percentage-field.jpg" alt="Selecting a Label Width's Percentage Unit" />
   </div>
1. Click <kbd>Update</kbd>

A label with a percentage width is still limited by the space it's given. For example, a label with a width of `100%` inside a
column that's 300 pixels wide will also be 300 pixels wide.
