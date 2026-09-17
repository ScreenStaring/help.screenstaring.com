import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const tagline = 'Documentação e suporte para os aplicativos da ScreenStaring';
  return (
    <Layout title="Documentação" description={tagline}>
      <HomeHero title="Documentação do ScreenStaring" tagline={tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="Gerenciamento de dados nutricionais de produtos e criador de rótulos.
              Gere painéis de informações nutricionais, de suplementos, de medicamentos
              e pet em vários formatos e idiomas."
            linkLabel="Guia do Usuário →"
          />
          <ProductExpirationDatesTile
            text="Sistema de gerenciamento de estoque para seus produtos perecíveis.
              Acompanhe datas de validade, números de lote e materiais desde a entrada
              até a venda."
            linkLabel="Guia do Usuário →"
          />
          <SupportTile
            title="Precisa de ajuda?"
            text="Nossa equipe de suporte terá prazer em ajudar com qualquer problema
              ou dúvida que você tenha."
            linkLabel="Contate o suporte →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
