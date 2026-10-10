import {useState} from 'react';
import CodeBlock from '@theme/CodeBlock';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

// Generates the Liquid snippet that displays a product's expiration data in
// notifications, order printing, & packing slips. Each integration exposes the
// line item and the order's additional details (where the expiration data
// lives) under different variable names, so the snippet differs per
// integration:
//
//   Order Printer & Shopify Order Printer   line items via `line_item`,
//                                           additional details via `order.attributes`
//   Order Printer Pro                       line items via `line_item`,
//                                           additional details via `attributes`
//   Shopify Notifications                   line items via `line.line_item` (the
//                                           template loops over `line_items`),
//                                           additional details via `attributes`
//
// The snippet for integrations that aren't listed here is the generic one in
// the docs page (docs/product-expiration-dates/notifications-and-packing-slip.mdx).
// Keep the two in sync when editing this file.
//
//   <SnippetGenerator />
//
const INTEGRATIONS = {
  order_printer: {
    sku: 'line_item.sku',
    barcode: 'line_item.variant.barcode',
    attribute: 'order.attributes[key]',
  },
  order_printer_pro: {
    sku: 'line_item.sku',
    barcode: 'line_item.variant.barcode',
    attribute: 'attributes[key]',
  },
  shopify_notifications: {
    sku: 'line.line_item.sku',
    barcode: 'line.line_item.variant.barcode',
    attribute: 'attributes[key]',
    // The order confirmation email is sent before batches are assigned so the
    // snippet is of no use there.
    note: (
      <Translate id="productExpirationDates.snippetGenerator.notificationsNote">
        This snippet is for the shipping confirmation template
      </Translate>
    ),
  },
};

// `lineItem` and `attribute` vary per integration, see INTEGRATIONS above.
function codeSnippet({lineItem, attribute}) {
  return `{% comment %}
  Code for the Product Expiration Dates app to display a product's expiration date and related
  informtion in notifications, order printing, & packing slips.

  If you want to hide the expiration date until it's close to a particular number of days
  set the expires_window_days variable below to the number of desired days instead of blank.
  For example:

    {% assign expires_window_days = 30 %}

  For assistance contact support at help@screenstaring.com
{% endcomment %}

{% assign expires_window_days = blank %}

{% capture key %}Expiration Dates {{ ${lineItem} }}{% endcapture %}
{% if ${attribute} != blank %}
    {% assign batches = ${attribute} | split: "|" %}
    {% for batch in batches %}
        {% assign batch_data = batch | split: "," %}
        {% assign expires_date = batch_data[0] %}
        {% assign expires_qty = batch_data[1] %}
        {% assign expires_batch = batch_data[2] %}

        {% assign now = "now" | date: "%s" %}
        {% assign seconds_in_a_day = 86400 %}
        {% assign expires_at = expires_date | date: "%s" | plus: seconds_in_day | minus: 1 %}
        {% assign diff = expires_at | minus: now | divided_by: seconds_in_a_day %}
        {% assign show_date = false %}

        {% if expires_window_days == blank  %}
          {% assign show_date = true %}
        {% elsif diff >= 0 and diff < expires_window_days %}
          {% assign show_date = true %}
        {% endif %}

        {% if show_date %}
          {% comment %}
            The date format can be adjust by changing the '%d/%m/%Y' portion below
            to the desired date format codes. See: https://shopify.dev/api/liquid/filters#date
            To use a tranlated date see: https://shopify.dev/docs/storefronts/themes/architecture/locales/storefront-locale-files
          {% endcomment %}
          Expires:
          {{ expires_date | date: "%d/%m/%Y" }}

          {% comment %}
            Remove the following if you do not want the quantity and batch name displayed
          {% endcomment %}
          ({{ expires_qty }})
          {% if expires_batch != blank %}
              {{ expires_batch }}
          {% endif %}
        {% endif %}
    {% endfor %}
{% endif %}`;
}

export default function SnippetGenerator() {
  const [integration, setIntegration] = useState('');
  const [useBarcode, setUseBarcode] = useState(false);
  const selected = INTEGRATIONS[integration];

  return (
    <div className={styles.generator}>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.label}>
            <Translate id="productExpirationDates.snippetGenerator.integration">
              Integration
            </Translate>
          </span>
          <select
            className={styles.select}
            value={integration}
            onChange={(event) => setIntegration(event.target.value)}>
            <option value="">
              <Translate id="productExpirationDates.snippetGenerator.selectIntegration">
                Select your integration
              </Translate>
            </option>
            <option value="order_printer">
              Order Printer &amp; Shopify Order Printer
            </option>
            <option value="order_printer_pro">Order Printer Pro</option>
            <option value="shopify_notifications">Shopify Notifications</option>
          </select>
        </label>
        <label className={styles.field}>
          <input
            type="checkbox"
            checked={useBarcode}
            onChange={(event) => setUseBarcode(event.target.checked)}
          />
          <Translate id="productExpirationDates.snippetGenerator.useBarcode">
            Products use barcode, not SKU
          </Translate>
        </label>
      </div>
      {selected && (
        <>
          {selected.note && <p>{selected.note}</p>}
          <CodeBlock language="liquid">
            {codeSnippet({
              lineItem: useBarcode ? selected.barcode : selected.sku,
              attribute: selected.attribute,
            })}
          </CodeBlock>
        </>
      )}
    </div>
  );
}
