"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * FilePane wraps a file's content with the IDE line-number gutter.
 * Line count is measured from the rendered content height so the
 * gutter doesn't trail off into empty lines past the article body.
 *
 * Re-measures on resize, font load, and content mutation. A floor of
 * 24 keeps short pages from looking truncated.
 */
const LINE_HEIGHT_PX = 24;
const MIN_LINES = 24;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function FilePane({
  children,
}: {
  children: React.ReactNode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(MIN_LINES);

  useIsomorphicLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const measure = () => {
      const article = el.querySelector<HTMLElement>(".sh-content");
      const h = article ? article.scrollHeight : el.scrollHeight;
      const lines = Math.max(MIN_LINES, Math.ceil(h / LINE_HEIGHT_PX));
      setCount(lines);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const article = el.querySelector(".sh-content");
    if (article) ro.observe(article);
    return () => ro.disconnect();
  }, [children]);

  return (
    <div ref={innerRef} className="sh-main-inner">
      <div className="sh-gutter" aria-hidden="true">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
      {children}
    </div>
  );
}
