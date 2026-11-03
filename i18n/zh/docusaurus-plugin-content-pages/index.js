import Layout from '@theme/Layout';
import HomeHero from '@site/src/components/HomeHero';
import AppTiles from '@site/src/components/AppTiles';
import ItsGotTile from '@site/src/components/apps/ItsGotTile';
import ProductExpirationDatesTile from '@site/src/components/apps/ProductExpirationDatesTile';
import SupportTile from '@site/src/components/apps/SupportTile';

export default function Home() {
  const tagline = 'ScreenStaring 应用文档与支持';
  return (
    <Layout title="文档" description={tagline}>
      <HomeHero title="ScreenStaring 文档" tagline={tagline} />
      <main className="container">
        <AppTiles>
          <ItsGotTile
            text="产品营养数据管理及标签生成器。
              轻松创建营养成分、保健品、
              药品及宠物食品标签，支持多种格式与语言。"
            linkLabel="用户指南 →"
          />
          <ProductExpirationDatesTile
            text="专为易腐产品打造的全面库存管理系统。
              从入库到销售，全程跟踪到期日、批次号、
              批号及原材料。"
            linkLabel="用户指南 →"
          />
          <SupportTile
            title="需要帮助？"
            text="如果您遇到任何问题或有疑问，我们的支持团队很乐意为您提供协助。"
            linkLabel="联系支持团队 →"
          />
        </AppTiles>
      </main>
    </Layout>
  );
}
