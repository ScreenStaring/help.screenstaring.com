---
description: Establece una etiqueta con un ancho fijo en píxeles, como 400px, con un ancho máximo para que no desborde columnas estrechas en pantallas pequeñas.
sidebar_position: 1
---

import Link from '@site/src/components/ItsGot/Link';

# Valor fijo en píxeles

Un ancho fijo se establece en píxeles seleccionando `px` en el menú de unidades. Por ejemplo, para hacer una etiqueta de 400 píxeles de ancho:

1. Busca el producto deseado y haz clic en el botón "Editar"
1. Ve a la sección Configuración de visualización de la etiqueta
1. Selecciona "General"
1. Completa el campo "Ancho" con el ancho deseado, por ejemplo `400`
1. Selecciona `px` en el menú de unidades:
   <div>
       <img src="/itsgot/images/label-width-unit-pixel-field.jpg" alt="Seleccionar la unidad de píxeles del ancho de una etiqueta" />
   </div>
1. Haz clic en <kbd>Actualizar</kbd>

Si no se establece un ancho, la etiqueta usa <Link path="/settings/edit#label-display-settings">tu valor predeterminado</Link>. Si no se establece un valor
predeterminado, se usará el ancho predeterminado para el formato de etiqueta seleccionado. Este es de 400 píxeles para los formatos verticales y de 750 píxeles para los formatos tabulares.

Un ancho fijo se aplica como ancho máximo. Si el espacio disponible para la etiqueta es menor que el ancho de la etiqueta, la etiqueta se
reduce para ajustarse. Una etiqueta nunca será más ancha que el espacio en el que está insertada, por ejemplo, una columna estrecha en un teléfono.

Para usar un ancho dinámico basado en el contenedor, [usa un porcentaje](percentage-of-its-parent-html-elements-size.md)
