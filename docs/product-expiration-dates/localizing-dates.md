---
sidebar_position: 8
---

# Varying the Date Format Based on the Selected Country

The expiration date format can be changed to match the user's selected country. This depends on the date formats set in the Shopify Admin's [Theme Content Editor](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/language/change-wording#overview-of-the-language-editor).

If you're using [our Shopify theme integration](/docs/product-expiration-dates/shopify-pages), this can be done by selecting "Custom" from the "Date format" field and entering a Shopify locale-aware date format name. For example, if the format you want to use is named `abbreviated_date`, you'd configure following:

<img src="/product-expiration-dates/shopify/images/theme-editor-localized-date-format.jpg" height="200" alt="Selecting a localized date format" />

Shopify restricts the list of date format names that can be used to the following:

-   `abbreviated_date`
-   `basic`
-   `date`
-   `date_at_time`
-   `default`
-   `on_date`
-   `short`
-   `long`

Custom format names can be used but they do not work with Shopify theme integration. In this case you must [manually add the snippet to your theme](/docs/product-expiration-dates/shopify-pages#adding-liquid-snippet) and explicitly set the format via `{{ allocation.time | date: format: "your_format_name" }}`.
