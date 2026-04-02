# Rule: border-radius statique sur le parent annule l'animation de l'enfant

## Erreur
`.card` avait `border-top-left-radius: 196px` statique. La cover animait son propre border-radius de 196px → 0, mais les coins restaient ronds car le parent clippait.

## Règle
Si un enfant anime son propre `border-radius`, le parent ne doit pas avoir de `border-radius` statique qui cliperait visuellement le même coin.
L'effet visuel de "pill entrant" doit être porté uniquement par l'enfant qui s'anime.

## Fix appliqué
Suppression du `border-radius` de `.card`. L'animation sur `.cover` porte l'intégralité de l'effet.
