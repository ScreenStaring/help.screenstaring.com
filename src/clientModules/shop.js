// Saves the ?shop=<myshopify.com> query string parameter as a cookie so
// ShopifyLink components can link to the viewer's Shopify Admin. Runs on
// every route change (including the initial page load).
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Cookies from 'js-cookie';

if (ExecutionEnvironment.canUseDOM) {
  const shop = new URLSearchParams(window.location.search).get('shop');
  if (shop && shop.toLowerCase().endsWith('.myshopify.com'))
    Cookies.set('shop', shop, {path: '/', sameSite: 'Lax', secure: true});
}
