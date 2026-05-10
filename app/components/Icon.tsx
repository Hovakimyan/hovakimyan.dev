// Inline SVG icons. Single-stroke, ~1.5px stroke, currentColor.

export type IconName =
  | "code"
  | "doc"
  | "braces"
  | "terminal"
  | "folder"
  | "image"
  | "branch"
  | "command"
  | "search"
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
  | "chevron-down"
  | "close"
  | "hex"
  | "play"
  | "menu";

interface Props {
  name: IconName;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function Icon({
  name,
  size = 18,
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
  doc: (
    <>
      <path d="M6 3h9l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h5" />
      <path d="M8 12h8M8 16h5" />
    </>
  ),
  braces: (
    <>
      <path d="M9 4c-2 0-2 1-2 3v3c0 1-1 2-2 2 1 0 2 1 2 2v3c0 2 0 3 2 3" />
      <path d="M15 4c2 0 2 1 2 3v3c0 1 1 2 2 2-1 0-2 1-2 2v3c0 2 0 3-2 3" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9l3 3-3 3M13 15h4" />
    </>
  ),
  folder: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M21 17l-5-5-9 9" />
    </>
  ),
  branch: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="8" r="2.2" />
      <path d="M6 8.5v7.5M16 9c-2.4 1.5-4 4-4 7" />
    </>
  ),
  command: (
    <>
      <path d="M9 9V6.5a2.5 2.5 0 1 0-2.5 2.5H9zM9 9h6M9 9v6M15 9V6.5a2.5 2.5 0 1 1 2.5 2.5H15zM15 9v6M9 15H6.5A2.5 2.5 0 1 0 9 17.5V15zM15 15v2.5a2.5 2.5 0 1 0 2.5-2.5H15z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.4" />
      <path d="M16 16l4 4" />
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
  "chevron-down": (
    <>
      <path d="M6 9l6 6 6-6" />
    </>
  ),
  close: (
    <>
      <path d="M5 5l14 14M19 5L5 19" />
    </>
  ),
  hex: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    </>
  ),
  play: (
    <>
      <path d="M7 5l12 7-12 7V5z" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
};
