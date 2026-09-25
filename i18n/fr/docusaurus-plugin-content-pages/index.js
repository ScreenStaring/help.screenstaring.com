import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const tagline = "Documentation et assistance pour les applications ScreenStaring";
  return (
    <Layout title="Documentation" description={tagline}>
      <HomeHero title="Documentation ScreenStaring" tagline={tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="Gestion des données nutritionnelles des produits et création d'étiquettes.
              Générez des panneaux d'information sur les suppléments, les médicaments, les animaux
              de compagnie et la nutrition dans plusieurs formats et langues."
            linkLabel="Guide de l'utilisateur →"
          />
          <ProductExpirationDatesTile
            text="Système de gestion d'inventaire pour vos produits périssables.
              Suivez les dates d'expiration, les numéros de lot et les matières, de la réception
              jusqu'à la vente."
            linkLabel="Guide de l'utilisateur →"
          />
          <SupportTile
            title="Besoin d'aide ?"
            text="Notre équipe d'assistance se fera un plaisir de vous aider pour tout problème
              ou toute question."
            linkLabel="Contacter l'assistance →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
