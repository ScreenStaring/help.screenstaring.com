---
sidebar_position: 1
---

import Link from '@site/src/components/ItsGot/Link';

# Valeur fixe en pixels

Une largeur fixe est définie en pixels en sélectionnant `px` dans le menu des unités. Par exemple, pour obtenir une étiquette de 400 pixels de large :

1. Trouvez le produit souhaité et cliquez sur le bouton « Modifier »
1. Accédez à la section des paramètres d'affichage de l'étiquette
1. Sélectionnez « Général »
1. Saisissez la largeur souhaitée dans le champ « Largeur », par exemple `400`
1. Sélectionnez `px` dans le menu des unités :
   <div>
       <img src="/itsgot/images/label-width-unit-pixel-field.jpg" alt="Sélectionner l'unité en pixels de la largeur d'une étiquette" />
   </div>
1. Cliquez sur <kbd>Mettre à jour</kbd>

Si aucune largeur n'est définie, l'étiquette utilise <Link path="/settings/edit#label-display-settings">votre valeur par défaut</Link>. Si aucune valeur par défaut n'est définie, la largeur par défaut
du format d'étiquette sélectionné sera utilisée. Elle est de 400 pixels pour les formats verticaux et de 750 pixels pour les formats tabulaires.

Une largeur fixe est appliquée comme largeur maximale. Si l'espace disponible pour l'étiquette est inférieur à sa largeur, l'étiquette est
réduite pour s'adapter. Une étiquette ne sera jamais plus large que l'espace dans lequel elle est intégrée, par exemple une colonne étroite sur un téléphone.

Pour utiliser une largeur dynamique, basée sur le conteneur, [utilisez un pourcentage](percentage-of-its-parent-html-elements-size.md)
