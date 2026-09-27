---
description: Dale a una etiqueta nutricional su propia fuente web a partir de una URL de fuente CSS y una familia de fuente, para que no herede la fuente de la página en la que está insertada.
sidebar_position: 6
---

import Link from '@site/src/components/ItsGot/Link';

# Fuente

Una etiqueta puede usar su propia fuente en lugar de la fuente de la página en la que está insertada:

:::info
Puedes establecer valores predeterminados para estas opciones en <Link path="/settings/edit#label-display-settings">la página de configuración de tu cuenta</Link>
:::

1. Busca el producto deseado y haz clic en el botón "Editar"
1. Ve a la sección Configuración de visualización de la etiqueta
1. Selecciona "General"
1. Completa el campo "URL de la fuente" con un enlace a la definición de fuente CSS, por ejemplo `https://fonts.googleapis.com/css2?family=Open+Sans`
1. Completa el campo "Familia de la fuente" con el nombre de la familia de la fuente, por ejemplo `Open Sans`
   {/* Imagen temporalmente desactivada: /itsgot/shopify/images/label-set-font.jpg no disponible
   <div>
     <img src="/itsgot/shopify/images/label-set-font.jpg" width="700" alt="Establecer la fuente de una etiqueta" />
   </div>
   */}
1. Haz clic en <kbd>Actualizar</kbd>

La URL debe ser una definición de fuente CSS que se incluya mediante una etiqueta HTML `link`, no un archivo de fuente.
