---
sidebar_position: 6
---

import Link from '@site/src/components/ItsGot/Link';

# Fonte

Um rótulo pode usar sua própria fonte em vez da fonte da página em que está incorporado:

:::info
Você pode definir padrões para estas opções na <Link path="/settings/edit#label-display-settings">página de configurações da sua conta</Link>
:::

1. Encontre o produto desejado e clique no botão "Editar"
1. Vá para a seção Configurações de exibição do rótulo
1. Selecione "Geral"
1. Preencha o campo "URL da fonte" com um link para a definição de fonte CSS, por exemplo `https://fonts.googleapis.com/css2?family=Open+Sans`
1. Preencha o campo "Família da fonte" com o nome da família da fonte, por exemplo `Open Sans`
   {/* Imagem temporariamente desativada: /itsgot/shopify/images/label-set-font.jpg não disponível
   <div>
     <img src="/itsgot/shopify/images/label-set-font.jpg" width="700" alt="Definindo a fonte de um rótulo" />
   </div>
   */}
1. Clique em <kbd>Atualizar</kbd>

A URL deve ser uma definição de fonte CSS a ser incluída por meio de uma tag HTML `link`, não um arquivo de fonte.
