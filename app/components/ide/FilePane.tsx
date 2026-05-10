/**
 * FilePane wraps a file's content with the IDE line-number gutter.
 * Pure presentational — no client state. The gutter line count is
 * fixed (~120) which is enough for any of our files; if a file ever
 * grows past it, the content scrolls but the gutter caps cleanly.
 */
const LINE_COUNT = 120;

export default function FilePane({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sh-main-inner">
      <div className="sh-gutter" aria-hidden="true">
        {Array.from({ length: LINE_COUNT }).map((_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>
      {children}
    </div>
  );
}
