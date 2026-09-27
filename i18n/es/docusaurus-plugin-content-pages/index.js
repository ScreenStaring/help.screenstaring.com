import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const tagline = 'Documentación y soporte para las aplicaciones de ScreenStaring';
  return (
    <Layout title="Documentación" description={tagline}>
      <HomeHero title="Documentación de ScreenStaring" tagline={tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="Gestión de datos nutricionales de productos y generador de etiquetas.
              Genera paneles de suplementos, medicamentos, mascotas e información
              nutricional en varios formatos e idiomas."
            linkLabel="Guía del usuario →"
          />
          <ProductExpirationDatesTile
            text="Sistema de gestión de inventario para tus productos perecederos.
              Haz seguimiento de las fechas de vencimiento, los números de lote y los
              materiales desde la entrada hasta la venta."
            linkLabel="Guía del usuario →"
          />
          <SupportTile
            title="¿Necesitas ayuda?"
            text="Nuestro equipo de soporte estará encantado de ayudarte con cualquier
              problema o pregunta que tengas."
            linkLabel="Contacta al soporte →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
