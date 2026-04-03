import { useEffect, useRef } from 'react';

/**
 * Scales the font-size of `textRef` so that its widest `[data-line]` child
 * fills the available inner width of `containerRef`.
 * Waits for fonts to be ready before the first measurement to avoid
 * mis-sizing when the custom font loads after the fallback.
 * Responds to container resize via ResizeObserver.
 */
export function useTextFit<
  C extends HTMLElement = HTMLElement,
  T extends HTMLElement = HTMLElement,
>() {
  const containerRef = useRef<C>(null);
  const textRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const lines = Array.from(text.querySelectorAll<HTMLElement>('[data-line]'));
    if (lines.length === 0) return;

    const fit = () => {
      // Below 810px, CSS handles sizing — skip JS fitting
      if (window.innerWidth < 810) {
        text.style.fontSize = '';
        return;
      }

      const style = getComputedStyle(container);
      const paddingLeft = parseFloat(style.paddingLeft) || 0;
      const paddingRight = parseFloat(style.paddingRight) || 0;
      const innerWidth = container.clientWidth - paddingLeft - paddingRight;
      if (innerWidth <= 0) return;

      text.style.fontSize = '100px';
      // scrollWidth captures the true text width even when the block element
      // doesn't expand beyond its container (offsetWidth would be capped).
      const maxWidth = lines.reduce((max, line) => Math.max(max, line.scrollWidth), 0);
      if (maxWidth === 0) return;

      text.style.fontSize = `${(innerWidth / maxWidth) * 100}px`;
    };

    // Wait for custom fonts before first measurement — avoids oversizing
    // when the fallback font is narrower than the custom font.
    document.fonts.ready.then(fit);

    const observer = new ResizeObserver(fit);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return { containerRef, textRef };
}
