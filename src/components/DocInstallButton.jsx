import {useLocation} from '@docusaurus/router';
import Translate from '@docusaurus/Translate';

const INSTALL_LINKS = [
  {path: '/itsgot/', app: 'nutrition-facts'},
  {path: '/product-expiration-dates/', app: 'expiration-dates'},
];

const UTM_PARAMS = {
  utm_source: 'screenstaring-documention',
  utm_medium: 'web',
  utm_campaign: 'app-install',
};

function installURL(app) {
  return `https://apps.shopify.com/${app}?${new URLSearchParams(UTM_PARAMS)}`;
}

// Renders an app-specific install button based on the current doc's path.
export default function DocInstallButton() {
  const {pathname} = useLocation();
  const install = INSTALL_LINKS.find((link) => pathname.includes(link.path));

  if (!install) return null;

  return (
    <div className="text--center">
      <a
        className="button button--primary"
        href={installURL(install.app)}
        target="_blank"
        rel="noreferrer noopener">
        <Translate id="theme.DocItem.installButton" description="Label for the app install button shown at the bottom of doc pages">
          Install Now
        </Translate>
      </a>
    </div>
  );
}
