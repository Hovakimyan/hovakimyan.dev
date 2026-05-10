"use client";

import dynamic from "next/dynamic";

const HexPrismCanvas = dynamic(() => import("./HexPrismCanvas"), {
  ssr: false,
  loading: () => <div className="sh-hex-placeholder" aria-hidden="true" />,
});

export default function HexPrism() {
  return <HexPrismCanvas />;
}
