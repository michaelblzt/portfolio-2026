# Rule: 100vw inclut la largeur de la scrollbar

## Erreur
`calc(100vw * 9/16)` utilisé comme hauteur de cover → valeur légèrement plus grande que la hauteur réelle → bande noire visible entre la cover et la zone cream.

## Cause
`100vw` = largeur du viewport scrollbar incluse. La cover réelle utilise la largeur du content (sans scrollbar), donc son ratio produit une hauteur inférieure.

## Règle
Ne pas utiliser `100vw` pour calculer une hauteur basée sur le ratio d'un élément pleine largeur.
Préférer `100%` quand dans le contexte d'un enfant, ou ajouter une marge de sécurité (`calc(100vw * 9/16 - 24px)`).

## Fix appliqué
Ajout de `- 24px` dans le gradient de `ProjectsGroup` pour absorber le décalage.
