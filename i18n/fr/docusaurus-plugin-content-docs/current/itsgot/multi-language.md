---
sidebar_position: 6
---

# Créer des étiquettes en plusieurs langues


Un produit peut avoir plusieurs étiquettes. Chaque étiquette possède ses propres paramètres, dont la langue dans laquelle elle s'affiche. Ce paramètre est la locale de l'étiquette, soit une combinaison langue/pays.
Par exemple, pour afficher une étiquette en espagnol pour l'Espagne, la locale serait `es-ES`. L'espagnol pour le Mexique serait `es-MX`.
Par défaut, l'étiquette hérite de la locale de son format. Une étiquette Supplement Facts américaine aura une locale `en-US` pour l'anglais américain.

## Définir la locale d'une étiquette {/* #multi-language-label-locale */}

La première étape pour afficher une étiquette dans une autre langue consiste à modifier sa locale.

1. Sur la page *Produit* de l'application, sélectionnez *Étiquettes* :

   <img src="/itsgot/images/product-view-labels.png" width="500" alt="Étiquettes du produit" />

2. Sélectionnez ensuite *Modifier* pour l'étiquette souhaitée :

   <img src="/itsgot/images/product-labels-1-label.png" height="150" alt="Modifier l'étiquette" />

3. Sur la page de l'étiquette, sélectionnez *Traductions*. Le champ de la locale s'affichera :

   <img src="/itsgot/images/product-labels-edit-locale.png" width="500" alt="Champ de la locale de l'étiquette" />

4. Choisissez la locale souhaitée. Si vous ne voyez pas la locale souhaitée, [contactez le support](https://screenstaring.com/#contact) et il l'ajoutera.
5. Cliquez sur <kbd>Mettre à jour</kbd> pour enregistrer

Votre étiquette s'affichera désormais dans la langue de la locale choisie.
Le design de l'étiquette reste le même, mais la nouvelle locale entraîne les changements suivants :

- Le texte non modifiable de l'étiquette sera changé, par exemple *Par portion*
- Les nutriments définis par le système seront traduits
- Les nutriments, ingrédients, etc. définis par l'utilisateur seront traduits si des traductions ont été définies pour eux. Voir Traduire les ingrédients, avertissements, etc.

Créons maintenant une 2e étiquette. Elle aura une autre locale et sera traduite dans une autre langue.

## Traduire les ingrédients et autres blocs de texte {/* #multi-language-label-translations */}

1. Sur la page *Produit* de l'application, sélectionnez *Étiquettes* :

   <img src="/itsgot/images/product-view-labels.png" width="500" alt="Étiquettes du produit" />

2. Sur la page des étiquettes, sélectionnez *Nouvelle étiquette* :

   <img src="/itsgot/images/product-labels-1-label-add-label.png" height="150" alt="Ajouter une nouvelle étiquette" />

3. Par défaut, le format de la nouvelle étiquette sera le même que celui de l'étiquette existante. Vous pouvez le modifier si vous le souhaitez.
4. Sélectionnez *Traductions* et choisissez la valeur souhaitée dans le champ de la locale :

   <img src="/itsgot/images/product-labels-new-label-translations.png" width="500" alt="Traductions de la nouvelle étiquette" />

5. Vous pouvez ajouter des traductions pour les ingrédients, les avertissements, les notes de bas de page, etc. Ces valeurs seront utilisées lors de
   l'affichage de l'étiquette dans la locale choisie. Le texte de l'étiquette d'origine ne sera pas modifié.
6. Cliquez sur <kbd>Mettre à jour</kbd> pour enregistrer

Vous disposez maintenant de 2 étiquettes, chacune avec sa propre locale :

<img src="/itsgot/images/product-labels-locales-translations.png" height="150" alt="Étiquettes avec différentes locales" />

## Activer les traductions sur votre site {/* #multi-language-shopify-theme-editor */}

Si vous utilisez l'[éditeur de thème Shopify](/docs/itsgot/adding-labels/shopify/theme-editor), vous pouvez activer les traductions en sélectionnant *Enable* dans la section *Translations* :

<img src="/itsgot/shopify/images/nf-theme-editor-block-added-localize.jpg" width="500" alt="Activer les traductions dans l'éditeur de thème" />

Si vous n'utilisez pas l'éditeur de thème Shopify, vous pouvez ajouter l'attribut `data-localize="true"` à la balise script du code d'intégration. Par exemple :

```html
<div data-itsgot-user="1234" data-itsgot-label="9999"></div>
<script src="//itsgot.com/embed.js" data-localize="true" async></script>
```

Par défaut, l'utilisateur verra la langue qui correspond à l'attribut `lang` de la balise `html` de la page. Cela fonctionne avec la plupart des sites.
[Contactez le support](https://screenstaring.com/#contact) si vous devez utiliser une autre méthode.
