# Rule: overflow:hidden casse animation-timeline: view()

## Erreur
`overflow: hidden` sur `.card` (ancêtre de `.cover`) rendait l'animation scroll-driven invisible.

## Cause
`overflow: hidden` crée un nouveau scroll container. Le browser utilise `.card` comme référence au lieu du document → `animation-timeline: view()` ne progresse plus jamais.

## Règle
Ne jamais mettre `overflow: hidden` sur un ancêtre d'un élément animé avec `animation-timeline: view()` ou avec le fallback JS `getBoundingClientRect`.
Si un clip est nécessaire, utiliser `overflow: clip` (ne crée pas de scroll container) ou restructurer le DOM.

## Fix appliqué
Suppression de `overflow: hidden` sur `.card` entièrement.
