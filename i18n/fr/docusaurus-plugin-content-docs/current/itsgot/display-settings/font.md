---
sidebar_position: 6
---

import Link from '@site/src/components/ItsGot/Link';

# Police

Une étiquette peut utiliser sa propre police au lieu de celle de la page dans laquelle elle est intégrée :

:::info
Vous pouvez définir des valeurs par défaut pour ces éléments sur la <Link path="/settings/edit#label-display-settings">page des paramètres de votre compte</Link>
:::

1. Trouvez le produit souhaité et cliquez sur le bouton « Modifier »
1. Accédez à la section des paramètres d'affichage de l'étiquette
1. Sélectionnez « Général »
1. Saisissez dans le champ « URL de la police » un lien vers la définition de police CSS, par exemple `https://fonts.googleapis.com/css2?family=Open+Sans`
1. Saisissez dans le champ « Famille de police » le nom de famille de la police, par exemple `Open Sans`
   {/* Image temporairement désactivée : /itsgot/shopify/images/label-set-font.jpg non disponible
   <div>
     <img src="/itsgot/shopify/images/label-set-font.jpg" width="700" alt="Définir la police d'une étiquette" />
   </div>
   */}
1. Cliquez sur <kbd>Mettre à jour</kbd>

L'URL doit être une définition de police CSS à inclure via une balise HTML `link`, et non un fichier de police.
