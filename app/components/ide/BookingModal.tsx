"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { InlineWidget } from "react-calendly";
import Icon from "@/app/components/Icon";
import { CALENDLY_CONFIG } from "@/lib/content";
import { useIde } from "./IdeContext";

/**
 * Calendly booking modal — opened via the IDE context (`openBooking()`),
 * which is wired to the Titlebar "Schedule" button and the contact.sh
 * runnable lines. Modal mounts at document.body via portal.
 */
export default function BookingModal() {
  const { bookingOpen, closeBooking } = useIde();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bookingOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>(".sh-modal-close")?.focus();
    });
    return () => window.removeEventListener("keydown", onKey);
  }, [bookingOpen]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={`sh-modal-backdrop${bookingOpen ? " is-open" : ""}`}
      onClick={closeBooking}
      aria-hidden={!bookingOpen}
    >
      {bookingOpen ? (
        <div
          ref={panelRef}
          className="sh-modal-content"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule a meeting with Sergey Hovakimyan"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="sh-modal-close"
            aria-label="Close"
            onClick={closeBooking}
          >
            <Icon name="close" size={18} />
          </button>
          <div className="sh-modal-header">
            <p className="sh-modal-eyebrow">Schedule</p>
            <h3>A 30-minute conversation</h3>
            <p className="sh-modal-meta">
              Pick a slot that works for both of us. Bring the question worth answering — we&rsquo;ll figure out the rest.
            </p>
          </div>
          <div className="sh-modal-widget">
            <InlineWidget
              url={CALENDLY_CONFIG.url}
              styles={CALENDLY_CONFIG.styles}
              pageSettings={CALENDLY_CONFIG.pageSettings}
              prefill={CALENDLY_CONFIG.prefill}
              utm={CALENDLY_CONFIG.utm}
              iframeTitle={CALENDLY_CONFIG.iframeTitle}
            />
          </div>
        </div>
      ) : null}
    </div>,
    document.body,
  );
}
