import ShopifyLink from './ShopifyLink';

// Renders children as a link to the viewer's current theme in the Shopify
// Admin's theme editor. Falls back to plain text when no shop is known (see
// ShopifyLink).
//
//   <ShopifyCurrentTheme>Open your theme</ShopifyCurrentTheme>
//
export default function ShopifyCurrentTheme(props) {
  return (
    <ShopifyLink href={(shopify) => shopify.theme('current').editor()}>
      {props.children}
    </ShopifyLink>
  );
}
