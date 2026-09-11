import {useEffect, useState} from 'react';
import {Admin} from 'shopify-url';
import Cookies from 'js-cookie';

// Renders children as a link to the viewer's Shopify Admin when a shop is
// known (see src/clientModules/shop.js); otherwise renders the plain text.
// `href` is a function receiving a shopify-url Admin instance and returning
// the URL, e.g.:
//
//   <ShopifyLink href={(shopify) => shopify.themes()}>
//     Go to your Themes in the Shopify Admin
//   </ShopifyLink>
//
export default function ShopifyLink(props) {
  const [shop, setShop] = useState(null);

  useEffect(() => {
    setShop(Cookies.get('shop'));
  }, []);

  if (!shop) return props.children;

  return (
    <a href={props.href(new Admin(shop)).toString()} target="_blank">
      {props.children}
    </a>
  );
}
