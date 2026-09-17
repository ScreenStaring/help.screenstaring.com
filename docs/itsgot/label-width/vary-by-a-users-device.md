---
sidebar_position: 3
---

# Vary by a user's device

Different labels can be displayed depending on the device a visitor is using. This is useful when a label's text would be too
small to read on a tablet or phone, or when such a device's screen can't fit a label's full width.

Each label has a *Target device*. To set it:

1. From the product's page go to its Labels page
1. Create a new label or edit an existing one
1. Go to the "Display" tab
1. Select a device from the "Target device" menu:

   - **Desktop** - displayed on screens 992 pixels and wider
   - **Tablet** - displayed on screens between 577 and 991 pixels
   - **Mobile** - displayed on screens up to 576 pixels
   - **Custom** - displayed on screens within the range set by the "Min screen width" and "Max screen width" fields
   - **Everything** (the default) - displayed on all screens, regardless of size

1. Click <kbd>Update</kbd>

To display a different label for each device, e.g. one label for desktop computers and one for phones, create a label for each
device and set each label's *Target device*. Only the labels suitable for a visitor's screen are displayed; the rest are skipped.
A label's target device is listed in the "Target Device" column of a product's Labels page.

:::info
The device's screen width is used, not the width of the browser window. This means a visitor will always see the same label on a
given device, even if they resize their browser window.
:::
