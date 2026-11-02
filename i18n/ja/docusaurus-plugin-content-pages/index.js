import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const tagline = 'ScreenStaring アプリのドキュメントとサポート';
  return (
    <Layout title="ドキュメント" description={tagline}>
      <HomeHero title="ScreenStaring ドキュメント" tagline={tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="商品の栄養データ管理および栄養成分表示ラベルジェネレーター。
              サプリメント、医薬品、ペット用フード、栄養成分パネルを
              複数のフォーマットと言語で作成できます。"
            linkLabel="ユーザーガイド →"
          />
          <ProductExpirationDatesTile
            text="生鮮食品・賞味期限管理商品のための在庫管理システム。
              入庫から販売まで、有効期限、ロット番号、バッチ番号、
              素材を追跡管理できます。"
            linkLabel="ユーザーガイド →"
          />
          <SupportTile
            title="お困りですか？"
            text="ご不明な点や問題がございましたら、サポートチームが喜んで
              お手伝いいたします。"
            linkLabel="サポートにお問い合わせ →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
