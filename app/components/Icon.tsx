// Inline SVG icons. Single-stroke, ~1.5px stroke, currentColor.

export type IconName =
  | "code"
  | "users"
  | "spark"
  | "shield"
  | "stack"
  | "accessibility"
  | "arrow-right"
  | "mail"
  | "calendar"
  | "linkedin"
  | "github"
  | "external"
  | "check"
  | "chevron-right"
  | "hex";

interface Props {
  name: IconName;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function Icon({
  name,
  size = 22,
  className,
  "aria-hidden": ariaHidden = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  code: (
    <>
      <path d="M9 8l-5 4 5 4M15 8l5 4-5 4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="9" r="3.4" />
      <path d="M3.6 19.4c.4-2.8 3-5 5.6-5s5.2 2.2 5.6 5" />
      <circle cx="17" cy="10" r="2.6" />
      <path d="M14.6 17.6c.4-1.8 2.2-3 4-3 1.5 0 2.8.6 3.4 1.6" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5l1.7 5 5 1.7-5 1.7-1.7 5-1.7-5-5-1.7 5-1.7L12 3.5z" />
      <path d="M19 16l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3.4v5c0 4.6-3.2 8.6-8 9.6-4.8-1-8-5-8-9.6v-5L12 3z" />
      <path d="M9 12l2.2 2.2L15 10.4" />
    </>
  ),
  stack: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </>
  ),
  accessibility: (
    <>
      <circle cx="12" cy="5" r="1.6" />
      <path d="M5 9h14M9 9v6m6-6v6M9 13h6M9 19l3-4 3 4" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.6 6.4l8.4 6 8.4-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <circle cx="12" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <path d="M8 11.5v6M12 11.5v6M12 14.5c0-1.7 1-3 2.6-3s2.4 1.3 2.4 3v3" />
    </>
  ),
  github: (
    <>
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.2-3.3-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5z" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6M20 4l-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" />
    </>
  ),
  check: (
    <>
      <path d="M5 12.5l4 4L19 7" />
    </>
  ),
  "chevron-right": (
    <>
      <path d="M9 6l6 6-6 6" />
    </>
  ),
  hex: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    </>
  ),
};
