import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const tagline = 'Dokumentation und Support für ScreenStaring-Apps';
  return (
    <Layout title="Dokumentation" description={tagline}>
      <HomeHero title="ScreenStaring Dokumentation" tagline={tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="Produkt-Nährwertdatenverwaltung und Etikettengenerator.
              Erstellen Sie Nährwert-, Ergänzungs-, Arzneimittel- und Tierfuttermittel-Deklarationen
              in mehreren Formaten und Sprachen."
            linkLabel="Benutzerhandbuch →"
          />
          <ProductExpirationDatesTile
            text="Bestandsverwaltungssystem für verderbliche Produkte.
              Verfolgen Sie MHDs, Losnummern, Chargennummern und
              Materialien vom Wareneingang bis zum Verkauf."
            linkLabel="Benutzerhandbuch →"
          />
          <SupportTile
            title="Brauchen Sie Hilfe?"
            text="Unser Support-Team hilft Ihnen gerne bei Problemen oder Fragen weiter."
            linkLabel="Support kontaktieren →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
