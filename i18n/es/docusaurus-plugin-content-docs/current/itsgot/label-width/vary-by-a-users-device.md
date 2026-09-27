---
description: "Muestra etiquetas diferentes según el dispositivo (escritorio, tableta, teléfono o un rango de ancho) para que el texto se lea bien en todas las pantallas."
sidebar_position: 3
---

# Variar según el dispositivo del usuario

Se pueden mostrar etiquetas diferentes según el dispositivo que use el visitante. Esto es útil cuando el texto de una etiqueta sería
demasiado pequeño para leerse en una tableta o un teléfono, o cuando la pantalla de dicho dispositivo no puede mostrar el ancho completo de una etiqueta.

Cada etiqueta tiene un *Dispositivo objetivo*. Para establecerlo:

1. Desde la página del producto, ve a su página Etiquetas
1. Crea una etiqueta nueva o edita una existente
1. Ve a la pestaña "Visualización"
1. Selecciona un dispositivo en el menú "Dispositivo objetivo":

   - **Escritorio** - se muestra en pantallas de 992 píxeles o más
   - **Tableta** - se muestra en pantallas de entre 577 y 991 píxeles
   - **Teléfono** - se muestra en pantallas de hasta 576 píxeles
   - **Personalizado** - se muestra en pantallas dentro del rango establecido por los campos "Ancho de pantalla mínimo" y "Ancho de pantalla máximo"
   - **Todo** (el valor predeterminado) - se muestra en todas las pantallas, independientemente de su tamaño

1. Haz clic en <kbd>Actualizar</kbd>

Para mostrar una etiqueta diferente para cada dispositivo, por ejemplo, una etiqueta para computadoras de escritorio y otra para teléfonos, crea una etiqueta para cada
dispositivo y establece el *Dispositivo objetivo* de cada una. Solo se muestran las etiquetas adecuadas para la pantalla del visitante; las demás se omiten.
El dispositivo objetivo de una etiqueta aparece en la columna "Dispositivo objetivo" de la página Etiquetas de un producto.

:::info
Se usa el ancho de pantalla del dispositivo, no el ancho de la ventana del navegador. Esto significa que un visitante siempre verá la misma etiqueta en un
dispositivo determinado, incluso si cambia el tamaño de la ventana de su navegador.
:::
