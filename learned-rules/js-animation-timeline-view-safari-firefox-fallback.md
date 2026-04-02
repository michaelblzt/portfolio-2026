# Rule: animation-timeline: view() — fallback JS obligatoire

## Erreur
`animation-timeline: view()` utilisé sans fallback → animation invisible sur Firefox < 128 et Safari (aucun support).

## Support réel (avril 2026)
- Chrome / Edge 115+ : natif
- Firefox 128+ : natif
- Firefox < 128 : derrière un flag
- Safari : pas de support

## Règle
Ne jamais utiliser `animation-timeline: view()` seul en production.
Toujours implémenter le fallback JS :

```ts
// Pattern validé dans ProjectCard.tsx
let vh = window.innerHeight;
const update = () => {
  const rect = el.getBoundingClientRect();
  if (rect.bottom < -100 || rect.top > vh + 100) return; // guard off-screen
  const progress = Math.max(0, Math.min(1, (vh - rect.top) / rect.height));
  // appliquer opacity / transform / borderRadius via inline styles
};
const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(update); };
const onResize = () => { vh = window.innerHeight; };
update();
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onResize, { passive: true });
return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); cancelAnimationFrame(rafId); };
```

## Fix appliqué
`animation-timeline: view()` supprimé. Remplacé par le hook JS dans `ProjectCard.tsx`.
