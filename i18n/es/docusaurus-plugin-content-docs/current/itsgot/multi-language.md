---
description: Crea varias etiquetas por producto con su propia configuración regional, traduce su texto y activa el cambio automático de idioma en tu sitio de Shopify.
sidebar_position: 6
---

# Crear etiquetas en varios idiomas


Los productos pueden tener varias etiquetas. Cada etiqueta tiene su propia configuración, incluido el idioma en el que aparece. Esta configuración es la configuración regional de la etiqueta, que es una combinación de idioma y país.
Por ejemplo, para mostrar una etiqueta en español de España, la configuración regional sería `es-ES`. El español de México sería `es-MX`.
De forma predeterminada, la etiqueta heredará la configuración regional de su formato. Una etiqueta de Supplement Facts de EE. UU. tendrá una configuración regional `en-US` para inglés estadounidense.

## Establecer la configuración regional de una etiqueta {/* #multi-language-label-locale */}

El primer paso para mostrar una etiqueta en un idioma diferente es cambiar su configuración regional.

1. En la página del *Producto* en la aplicación, selecciona *Etiquetas*:

   <img src="/itsgot/images/product-view-labels.png" width="500" alt="Etiquetas del producto" />

2. Luego selecciona *Editar* para la etiqueta deseada:

   <img src="/itsgot/images/product-labels-1-label.png" height="150" alt="Editar etiqueta" />

3. En la página de la etiqueta, selecciona *Traducciones*. Esto mostrará el campo de configuración regional:

   <img src="/itsgot/images/product-labels-edit-locale.png" width="500" alt="Campo de configuración regional de la etiqueta" />

4. Elige la configuración regional deseada. Si no ves la que deseas, [contacta a soporte](https://screenstaring.com/#contact) y la agregarán.
5. Haz clic en <kbd>Actualizar</kbd> para guardar

Tu etiqueta ahora se mostrará en el idioma de la configuración regional elegida.
El diseño de la etiqueta seguirá siendo el mismo, pero la nueva configuración regional provoca los siguientes cambios:

- El texto no editable de la etiqueta cambiará, por ejemplo *Per serving*
- Los nutrientes definidos por el sistema se traducirán
- Los nutrientes, ingredientes, etc. definidos por el usuario se traducirán si se han definido traducciones para ellos. Consulta Traducir ingredientes, advertencias, etc.

Ahora creemos una segunda etiqueta. Esta tendrá una configuración regional diferente y se traducirá a otro idioma.

## Traducir ingredientes y otros bloques de texto {/* #multi-language-label-translations */}

1. En la página del *Producto* en la aplicación, selecciona *Etiquetas*:

   <img src="/itsgot/images/product-view-labels.png" width="500" alt="Etiquetas del producto" />

2. En la página de etiquetas, selecciona *Nueva etiqueta*:

   <img src="/itsgot/images/product-labels-1-label-add-label.png" height="150" alt="Agregar una nueva etiqueta" />

3. De forma predeterminada, el formato de la nueva etiqueta será el mismo que el de la etiqueta existente. Puedes cambiarlo si lo deseas.
4. Selecciona *Traducciones* y elige el valor deseado en el campo de configuración regional:

   <img src="/itsgot/images/product-labels-new-label-translations.png" width="500" alt="Traducciones de la nueva etiqueta" />

5. Puedes agregar traducciones para ingredientes, advertencias, notas al pie y más. Estos valores se usarán al
   mostrar la etiqueta en la configuración regional elegida. El texto de la etiqueta original no se verá afectado.
6. Haz clic en <kbd>Actualizar</kbd> para guardar

Ahora tienes 2 etiquetas, cada una con su propia configuración regional:

<img src="/itsgot/images/product-labels-locales-translations.png" height="150" alt="Etiquetas con configuraciones regionales diferentes" />

## Activar traducciones en tu sitio {/* #multi-language-shopify-theme-editor */}

Si usas el [editor de temas de Shopify](/docs/itsgot/adding-labels/shopify/theme-editor), puedes activar las traducciones seleccionando *Activar* en la sección *Traducciones*:

<img src="/itsgot/shopify/images/nf-theme-editor-block-added-localize.jpg" width="500" alt="Activar traducciones en el editor de temas" />

Si no usas el editor de temas de Shopify, puedes agregar el atributo `data-localize="true"` a la etiqueta script del código de inserción. Por ejemplo:

```html
<div data-itsgot-user="1234" data-itsgot-label="9999"></div>
<script src="//itsgot.com/embed.js" data-localize="true" async></script>
```

De forma predeterminada, el usuario verá el idioma que coincida con el atributo `lang` de la etiqueta `html` de la página. Esto funciona en la mayoría de los sitios.
[Contacta a soporte](https://screenstaring.com/#contact) si necesitas usar un método diferente.
