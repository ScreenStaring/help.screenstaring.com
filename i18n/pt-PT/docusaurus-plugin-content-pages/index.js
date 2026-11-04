import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const tagline = 'Documentação e apoio para as aplicações da ScreenStaring';
  return (
    <Layout title="Documentação" description={tagline}>
      <HomeHero title="Documentação da ScreenStaring" tagline={tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="Gestão de dados nutricionais de produtos e criador de rótulos.
              Gere painéis de informação nutricional, de suplementos, de medicamentos
              e para animais de estimação em vários formatos e idiomas."
            linkLabel="Guia do Utilizador →"
          />
          <ProductExpirationDatesTile
            text="Sistema de gestão de inventário para os seus produtos perecíveis.
              Acompanhe prazos de validade, números de lote e materiais desde a entrada
              até à venda."
            linkLabel="Guia do Utilizador →"
          />
          <SupportTile
            title="Precisa de ajuda?"
            text="A nossa equipa de apoio terá todo o gosto em ajudar com qualquer problema
              ou dúvida que tenha."
            linkLabel="Contacte o apoio →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
