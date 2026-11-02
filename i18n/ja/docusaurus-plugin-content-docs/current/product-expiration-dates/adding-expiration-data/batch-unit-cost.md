---
description: "バッチ単価の追跡：在庫バッチごとに原価を入力し、Shopifyの単一の「商品ごとの費用」項目の問題を回避します"
sidebar_position: 1
---

import Link from '@site/src/components/ProductExpirationDates/Link';

# バッチ単価の追跡

Shopifyの「商品ごとの費用」項目は、バリエーションごとに1つの原価しか保存できません。これを更新すると、異なる価格で仕入れた納品バッチごとの区別が失われてしまいます。
Product Expiration Datesアプリを使用すると、バッチ番号ごとに原価を入力できるため、仕入れ原価の履歴を正確に追跡できます。

「バッチ単価」項目を使用して、仕入れごとに値を割り当てることができます：

1. <Link path="/inventories/new">在庫バッチページ</Link>に移動します
1. 「バッチ」タブで歯車アイコンをクリックします：
<div><img src="/product-expiration-dates/images/inventory-batch-column-config.jpg" height="247" alt="在庫バッチ列の選択" /></div>
1. 追加項目のメニューが表示されます
1. 「バッチ単価」を選択します
1. <kbd>「保存」</kbd>をクリックします

これで、バッチ番号を追加するたびに「バッチ単価」項目が表示されるようになります。

同様の手順に従うことで、在庫バッチのホームページ（一覧画面）にもバッチ単価を表示できます。
