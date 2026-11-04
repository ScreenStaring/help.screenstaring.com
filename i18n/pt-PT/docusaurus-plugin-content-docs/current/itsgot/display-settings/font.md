---
description: "Atribua ao rótulo nutricional o seu próprio tipo de letra Web com URL e família de tipos de letra CSS, sem herdar o tipo de letra da página."
sidebar_position: 6
---

import Link from '@site/src/components/ItsGot/Link';

# Tipo de Letra

Um rótulo pode utilizar o seu próprio tipo de letra em vez do tipo de letra da página onde está inserido:

:::info
Pode definir predefinições para estas opções na <Link path="/settings/edit#label-display-settings">página de definições da sua conta</Link>
:::

1. Localize o produto pretendido e clique no botão "Editar"
1. Aceda à secção Definições de Apresentação do Rótulo
1. Selecione "Geral"
1. Preencha o campo "URL do tipo de letra" com uma ligação para a definição de tipo de letra CSS, por exemplo `https://fonts.googleapis.com/css2?family=Open+Sans`
1. Preencha o campo "Família do tipo de letra" com o nome da família do tipo de letra, por exemplo `Open Sans`
   {/* Image temporarily disabled: /itsgot/shopify/images/label-set-font.jpg not available
   <div>
     <img src="/itsgot/shopify/images/label-set-font.jpg" width="700" alt="Definir o tipo de letra do rótulo" />
   </div>
   */}
1. Clique em <kbd>Atualizar</kbd>

O URL tem de ser uma definição de tipo de letra CSS para ser incluído através de uma etiqueta HTML `link`, e não um ficheiro de tipo de letra.
