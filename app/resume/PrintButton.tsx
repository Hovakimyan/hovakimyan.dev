"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      className="sh-resume-action sh-resume-action--primary"
      onClick={() => window.print()}
    >
      Print / Save as PDF
    </button>
  );
}
