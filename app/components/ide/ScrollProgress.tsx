"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Hairline reading-progress bar pinned to the top of the editor pane.
 * Writes the scale straight to the element's style on scroll, so it
 * never re-renders React and stays on the compositor (transform only).
 */
export default function ScrollProgress() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.getElementById("main");
    const bar = barRef.current;
    if (!root || !bar) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = root.scrollHeight - root.clientHeight;
      const p = max > 0 ? root.scrollTop / max : 0;
      bar.style.transform = `scaleX(${p})`;
      bar.style.opacity = max > 0 && p > 0 ? "1" : "0";
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      root.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div ref={barRef} className="sh-progress" aria-hidden="true" />;
}
