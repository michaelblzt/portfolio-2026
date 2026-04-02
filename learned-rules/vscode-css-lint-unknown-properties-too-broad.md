# Rule: css.lint.unknownProperties: ignore est trop broad

## Erreur
Pour supprimer le warning `composes` (CSS Modules), `"css.lint.unknownProperties": "ignore"` a été ajouté dans `.vscode/settings.json`.

## Problème
Ce setting désactive TOUS les warnings "unknown property", y compris les vraies fautes de frappe (`backgrond`, `colour`, etc.). Le linter perd son utilité.

## Règle
Pour enregistrer une propriété CSS non-standard (ex: `composes` de CSS Modules), utiliser `css.customData` avec un fichier `.vscode/css-custom-data.json`.
Ne jamais utiliser `css.lint.unknownProperties: "ignore"` globalement.

## Fix appliqué
`.vscode/css-custom-data.json` créé avec `composes` déclaré comme propriété valide.
`css.lint.unknownProperties: "ignore"` supprimé de `settings.json`.
