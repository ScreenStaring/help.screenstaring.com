import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomeHero title={siteConfig.title} tagline={siteConfig.tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="Product nutrition data management and label builder.
              Generate supplement, drug, pet, and nutrition information panels in multiple formats & languages."
            linkLabel="User's Guide →"
          />
          <ProductExpirationDatesTile
            text="Inventory management system for your perishable products.
              Track expiry dates, batch numbers, and materials from intake to sale."
            linkLabel="User's Guide →"
          />
          <SupportTile
            title="Need help?"
            text="Our support team is happy to assist with any problems or questions you have."
            linkLabel="Contact support →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
