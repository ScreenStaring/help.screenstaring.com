---
sidebar_position: 8
---

# Variando o Formato de Data com Base no País Selecionado

O formato da data de validade pode ser alterado para corresponder ao país selecionado pelo usuário. Isso depende dos formatos de data definidos no [Editor de Conteúdo do Tema](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/language/change-wording#overview-of-the-language-editor) do Admin da Shopify.

Se você estiver usando [nossa integração com temas da Shopify](/docs/product-expiration-dates/shopify-pages), isso pode ser feito selecionando "Custom" no campo "Date format" e inserindo um nome de formato de data com reconhecimento de idioma da Shopify. Por exemplo, se o formato que você quer usar se chama `abbreviated_date`, você configuraria o seguinte:

<img src="/product-expiration-dates/shopify/images/theme-editor-localized-date-format.jpg" height="200" alt="Selecionando um formato de data localizado" />

A Shopify restringe a lista de nomes de formatos de data que podem ser usados aos seguintes:

-   `abbreviated_date`
-   `basic`
-   `date`
-   `date_at_time`
-   `default`
-   `on_date`
-   `short`
-   `long`

Nomes de formatos personalizados podem ser usados, mas eles não funcionam com a integração com temas da Shopify. Nesse caso, você deve [adicionar o snippet ao seu tema manualmente](/docs/product-expiration-dates/shopify-pages#adding-liquid-snippet) e definir o formato explicitamente via `{{ allocation.time | date: format: "your_format_name" }}`.
