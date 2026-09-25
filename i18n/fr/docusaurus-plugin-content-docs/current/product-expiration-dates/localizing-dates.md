---
sidebar_position: 8
---

# Varier le format de date selon le pays sélectionné

Le format de la date d'expiration peut être modifié pour correspondre au pays sélectionné par l'utilisateur. Cela dépend des formats de date définis dans [l'éditeur de contenu du thème](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/language/change-wording#overview-of-the-language-editor) de l'admin Shopify.

Si vous utilisez [notre intégration de thème Shopify](/docs/product-expiration-dates/shopify-pages), cela peut se faire en sélectionnant "Custom" dans le champ "Date format" et en saisissant un nom de format de date compatible avec les paramètres régionaux de Shopify. Par exemple, si le format que vous souhaitez utiliser se nomme `abbreviated_date`, vous configureriez ce qui suit :

<img src="/product-expiration-dates/shopify/images/theme-editor-localized-date-format.jpg" height="200" alt="Sélection d'un format de date localisé" />

Shopify limite la liste des noms de format de date utilisables aux suivants :

-   `abbreviated_date`
-   `basic`
-   `date`
-   `date_at_time`
-   `default`
-   `on_date`
-   `short`
-   `long`

Des noms de format personnalisés peuvent être utilisés, mais ils ne fonctionnent pas avec l'intégration de thème Shopify. Dans ce cas, vous devez [ajouter le snippet manuellement à votre thème](/docs/product-expiration-dates/shopify-pages#adding-liquid-snippet) et définir explicitement le format via `{{ allocation.time | date: format: "your_format_name" }}`.
