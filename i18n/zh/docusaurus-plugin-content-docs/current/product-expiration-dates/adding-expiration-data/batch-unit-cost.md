---
description: "跟踪批次单位成本：为每个库存批次录入成本，避免 Shopify 单一“单位成本”字段所带来的局限性。"
sidebar_position: 1
---

import Link from '@site/src/components/ProductExpirationDates/Link';

# 跟踪批次单位成本

Shopify 的“单位成本 (Cost per item)”字段为每个多属性仅保存一个固定成本。对其进行更新会抹去以不同进货价格采购的批次之间的差异。
Product Expiration Dates 应用允许用户为每个批次录入独立的成本，从而精准跟踪历史进货成本记录。

您可以通过“批次单位成本”字段为每次进货分配成本数值：

1. 前往<Link path="/inventories/new">库存批次页面</Link>
1. 在“批次”选项卡上点击齿轮图标：
<div><img src="/product-expiration-dates/images/inventory-batch-column-config.jpg" height="247" alt="库存批次列配置" /></div>
1. 此时将弹出一个包含其他可用字段的菜单
1. 勾选“批次单位成本”
1. 点击 <kbd>保存</kbd>

现在，每次添加批次时都会显示“批次单位成本”字段。

按照相同的步骤，您也可以在库存批次主页上展示批次单位成本。
