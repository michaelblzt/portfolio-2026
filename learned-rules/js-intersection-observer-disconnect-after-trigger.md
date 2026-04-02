# Rule: IntersectionObserver — déconnecter après le premier trigger

## Erreur
L'observer de fade-in du contenu (`contentVisible`) continuait à tourner après avoir déclenché `setContentVisible(true)`, pour toute la durée de vie du composant.

## Règle
Si l'observer est one-shot (ne peut déclencher qu'une seule fois dans un sens), appeler `observer.disconnect()` immédiatement après le trigger dans le callback.

```ts
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    setContentVisible(true);
    observer.disconnect(); // ← toujours ajouter pour les one-shot
  }
}, { threshold: 0.05 });
```

Le cleanup `return () => observer.disconnect()` dans useEffect reste nécessaire pour le cas de démontage du composant.

## Fix appliqué
`observer.disconnect()` ajouté dans le callback de l'IntersectionObserver de `ProjectCard.tsx`.
