# Rule: max-width sur le bon élément

## Erreur
`max-width: 1920px` mis sur `.content` (le wrapper de fond cream) au lieu de `.descriptif` (la zone texte intérieure).
Résultat : le fond cream était contraint à 1920px alors que l'utilisateur voulait uniquement limiter la zone de texte.

## Règle
Quand l'utilisateur dit "limiter la largeur du texte/contenu", appliquer `max-width` sur le conteneur de texte intérieur.
Le wrapper de fond (background) reste toujours `width: 100%` / full-width.

## Fix appliqué
`max-width: 1920px; margin: 0 auto` déplacé de `.content` vers `.descriptif`.
