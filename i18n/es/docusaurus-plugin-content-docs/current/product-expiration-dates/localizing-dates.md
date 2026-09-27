---
description: Adapta el formato de las fechas de vencimiento al idioma o la región de tus clientes con los formatos de fecha de Shopify según la configuración regional.
sidebar_position: 8
---

# Variar el formato de fecha según el país seleccionado

El formato de la fecha de vencimiento se puede cambiar para que coincida con el país seleccionado por el usuario. Esto depende de los formatos de fecha establecidos en el [editor de contenido del tema](https://help.shopify.com/en/manual/online-store/themes/customizing-themes/language/change-wording#overview-of-the-language-editor) del administrador de Shopify.

Si usas [nuestra integración con temas de Shopify](/docs/product-expiration-dates/shopify-pages), puedes hacerlo seleccionando "Personalizado" en el campo "Formato de fecha" e ingresando el nombre de un formato de fecha de Shopify según la configuración regional. Por ejemplo, si el formato que quieres usar se llama `abbreviated_date`, configurarías lo siguiente:

<img src="/product-expiration-dates/shopify/images/theme-editor-localized-date-format.jpg" height="200" alt="Seleccionar un formato de fecha según la configuración regional" />

Shopify limita la lista de nombres de formato de fecha que se pueden usar a los siguientes:

-   `abbreviated_date`
-   `basic`
-   `date`
-   `date_at_time`
-   `default`
-   `on_date`
-   `short`
-   `long`

Los nombres de formato personalizados se pueden usar, pero no funcionan con la integración con temas de Shopify. En este caso, debes [agregar el fragmento manualmente a tu tema](/docs/product-expiration-dates/shopify-pages#adding-liquid-snippet) y establecer el formato explícitamente con `{{ allocation.time | date: format: "your_format_name" }}`.
