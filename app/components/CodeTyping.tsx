"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  code: string;
  speed?: number;
  className?: string;
}

/**
 * Renders code in Fira Code; on scroll-into-view (once), animates the
 * text in character by character. SSR / no-JS state shows the FULL code,
 * so screenshots and direct page loads display the final state. JS only
 * resets and animates when the element wasn't initially in viewport.
 */
export default function CodeTyping({ code, speed = 14, className }: Props) {
  const ref = useRef<HTMLPreElement>(null);
  const [display, setDisplay] = useState(code);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const el = ref.current;
    if (!el) return;

    const initialRect = el.getBoundingClientRect();
    const initiallyInView =
      initialRect.top < window.innerHeight && initialRect.bottom > 0;
    if (initiallyInView) return;

    let started = false;
    let timeoutId: number | undefined;
    const animate = () => {
      let i = 0;
      const tick = () => {
        i += 1;
        setDisplay(code.slice(0, i));
        if (i < code.length) timeoutId = window.setTimeout(tick, speed);
      };
      setDisplay("");
      tick();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [code, speed]);

  return (
    <pre ref={ref} className={className}>
      <code className="sh-mono">{display}</code>
    </pre>
  );
}
