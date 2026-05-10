import Link from "next/link";
import Image from "next/image";
import HexPrism from "@/app/components/HexPrism";
import BookCallButton from "@/app/components/BookCallButton";
import { SITE } from "@/lib/content";

export default function Hero() {
  const words = SITE.name.split(" ");
  return (
    <section className="sh-hero">
      <div className="sh-container sh-hero-grid">
        <div className="sh-hero-text">
          <p className="sh-hero-pretitle">&gt; {SITE.pretitle.toUpperCase()}</p>
          <h1 className="sh-display">
            {words.map((w, i) => (
              <span key={i}>
                <span className="word">{w}</span>
                {i < words.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className="sh-hero-subline">{SITE.subline}</p>
          <p className="sh-hero-tagline">{SITE.tagline}</p>
          <p className="sh-hero-lead">{SITE.lead}</p>
          <div className="sh-hero-ctas">
            <BookCallButton
              label="Schedule conversation"
              className="sh-btn-primary"
            />
            <Link href="/work" className="sh-btn-secondary">
              View work
            </Link>
          </div>
        </div>
        <div className="sh-hero-right">
          <div className="sh-hero-prism" aria-hidden="true">
            <HexPrism />
          </div>
          <div className="sh-hero-portrait">
            <Image
              src="/images/sergey-portrait.jpg"
              alt="Portrait of Sergey Hovakimyan"
              width={1066}
              height={1600}
              priority
              sizes="(max-width: 760px) 80vw, 420px"
            />
            <span className="sh-hero-status">
              <span className="dot" /> Open to engagements
            </span>
          </div>
        </div>
      </div>
      <div className="sh-container sh-hero-impact">
        <p className="sh-mono">
          &gt; engineer.impact(); → BUILDING <span className="sep">·</span>{" "}
          LEADING <span className="sep">·</span> AUTOMATING{" "}
          <span className="sep">·</span> ADVOCATING
        </p>
      </div>
    </section>
  );
}
