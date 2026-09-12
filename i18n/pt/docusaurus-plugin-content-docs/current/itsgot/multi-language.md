---
sidebar_position: 5
---

# Criando Rótulos em Vários Idiomas


Produtos podem ter vários rótulos. Cada rótulo possui suas próprias configurações, incluindo o idioma em que aparece. Esta configuração é a localidade (*locale*) do rótulo, que é uma combinação de idioma/país.
Por exemplo, para exibir um rótulo em espanhol para a Espanha, a localidade seria `es-ES`. Espanhol para o México seria `es-MX`.
Por padrão, o rótulo herdará a localidade do seu formato. Um rótulo de Supplement Facts dos EUA terá a localidade `en-US` para inglês americano.

## Definindo a Localidade de um Rótulo {/* #multi-language-label-locale */}

O primeiro passo para exibir um rótulo em um idioma diferente é alterar sua localidade.

1. Na página do Produto no aplicativo, selecione *Rótulos*:

   <img src="/help/product-view-labels.png" width="500" alt="Rótulos do produto" />

2. Em seguida, selecione *Editar* para o rótulo desejado:

   <img src="/help/product-labels-1-label.png" height="150" alt="Editar rótulo" />

3. Na página do rótulo, selecione *Traduções*. Isso exibirá o campo de localidade:

   <img src="/help/product-labels-edit-locale.png" width="500" alt="Campo de localidade do rótulo" />

4. Escolha a localidade desejada. Se você não vir a localidade desejada, [contate o suporte](https://screenstaring.com/#contact) e eles a adicionarão.
5. Clique em <kbd>Atualizar</kbd> para salvar

Seu rótulo agora será exibido no idioma da localidade escolhida.
O design do rótulo permanecerá o mesmo, mas a nova localidade causa as seguintes alterações:

- Textos não editáveis no rótulo serão alterados, por exemplo *Per serving*
- Nutrientes definidos pelo sistema serão traduzidos
- Nutrientes, ingredientes etc. definidos pelo usuário serão traduzidos se traduções para eles tiverem sido definidas. Veja Traduzindo Ingredientes, Avisos etc.

Agora vamos criar um 2º rótulo. Este terá uma localidade diferente e será traduzido para outro idioma.

## Traduzindo Ingredientes e Outros Blocos de Texto {/* #multi-language-label-translations */}

1. Na página do Produto no aplicativo, selecione *Rótulos*:

   <img src="/help/product-view-labels.png" width="500" alt="Rótulos do produto" />

2. Na página de rótulos, selecione *Novo Rótulo*:

   <img src="/help/product-labels-1-label-add-label.png" height="150" alt="Adicionar um novo rótulo" />

3. Por padrão, o formato do novo rótulo será o mesmo do rótulo existente. Você pode alterá-lo se desejar.
4. Selecione *Traduções* e escolha o valor desejado no campo de localidade:

   <img src="/help/product-labels-new-label-translations.png" width="500" alt="Traduções do novo rótulo" />

5. Você pode adicionar traduções para ingredientes, avisos, notas de rodapé e mais. Esses valores serão usados ao
   exibir o rótulo na localidade escolhida. O texto do rótulo original não será afetado.
6. Clique em <kbd>Atualizar</kbd> para salvar

Agora você tem 2 rótulos, cada um com sua própria localidade:

<img src="/help/product-labels-locales-translations.png" height="150" alt="Rótulos com localidades diferentes" />

## Habilitando Traduções no Seu Site {/* #multi-language-shopify-theme-editor */}

Se você estiver usando o [editor de temas do Shopify](/docs/itsgot/adding-labels/shopify/theme-editor)
você pode habilitar traduções selecionando *Habilitar* na seção Traduções:

<img src="/shopify/images/nf-theme-editor-block-added-localize.jpg" width="500" alt="Habilitar traduções no editor de temas" />

Se você não estiver usando o editor de temas do Shopify, pode adicionar o atributo `data-localize="true"` à tag de script do código de incorporação. Por exemplo:

```html
<div data-itsgot-user="1234" data-itsgot-label="9999"></div>
<script src="//itsgot.com/embed.js" data-localize="true" async></script>
```

Por padrão, o usuário verá o idioma que corresponde ao atributo `lang` da tag `html` da página. Isso funciona na maioria dos sites.
[Contate o suporte](https://screenstaring.com/#contact) se precisar usar um método diferente.
