import ShopifyLink from '@theme/ShopifyAdminLink';

// Renders children as a link to enable the Structured Data for SEO app embed
// in the viewer's theme editor. Falls back to plain text when no shop is
// known (see ShopifyLink).
//
//   <StructuredDataAppEmbedLink>
//     enable the Structured Data for SEO app embed
//   </StructuredDataAppEmbedLink>
//
export default function StructuredDataAppEmbedLink(props) {
  return (
    <ShopifyLink
      href={(shopify) =>
        shopify
          .theme('current')
          .editor({
            context: 'apps',
            activateAppId: 'ab83d67e27a449b1211f1a2296ecf2f4/schema-org',
          })
          .toString()
      }
    >
      {props.children}
    </ShopifyLink>
  );
}
