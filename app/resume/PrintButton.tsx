"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      className="sh-resume-action"
      onClick={() => window.print()}
    >
      Print / Save as PDF
    </button>
  );
}
