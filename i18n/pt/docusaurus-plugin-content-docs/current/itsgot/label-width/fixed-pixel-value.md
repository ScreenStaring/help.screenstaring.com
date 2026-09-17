---
sidebar_position: 1
---

import Link from '@site/src/components/ItsGot/Link';

# Valor fixo em pixels

Uma largura fixa é definida em pixels selecionando `px` no menu de unidades. Por exemplo, para definir a largura de um rótulo como
400 pixels:

1. Encontre o produto desejado e clique no botão "Editar"
1. Vá para a seção Configurações de exibição do rótulo
1. Selecione "Geral"
1. Preencha o campo "Largura" com a largura desejada, por exemplo `400`
1. Selecione `px` no menu de unidades:
   <div>
       <img src="/itsgot/images/label-width-unit-pixel-field.jpg" alt="Selecionando a unidade em pixels da largura de um rótulo" />
   </div>
1. Clique em <kbd>Atualizar</kbd>

Se nenhuma largura for definida o rótulo usa <Link path="/settings/edit#label-display-settings">seu padrão</Link>. Se nenhum padrão
for definido, a largura padrão do formato de rótulo selecionado será usada. São 400 pixels para formatos verticais e 750 pixels para
formatos tabulares.

Uma largura fixa é aplicada como largura máxima. Se o espaço disponível para o rótulo for menor que a largura do rótulo, o rótulo é
reduzido para caber. Um rótulo nunca será mais largo que o espaço no qual está incorporado, por exemplo, uma coluna estreita em um
celular.

Para usar uma largura dinâmica, baseada no contêiner, [use uma porcentagem](percentage-of-its-parent-html-elements-size.md)
