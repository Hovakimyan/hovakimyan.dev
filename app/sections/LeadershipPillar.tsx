import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import CountUp from "@/app/components/CountUp";
import { LEADERSHIP_STATS } from "@/lib/content";

export default function LeadershipPillar() {
  return (
    <section className="sh-section">
      <div className="sh-container">
        <div className="sh-leadership">
          <div className="sh-leadership-portrait">
            <Image
              src="/images/sergey-portrait.jpg"
              alt="Sergey Hovakimyan"
              width={1066}
              height={1600}
              sizes="(max-width: 760px) 80vw, 420px"
            />
          </div>
          <div className="sh-leadership-body">
            <p className="sh-eyebrow">Leadership</p>
            <h2>
              Leading teams <em>that ship.</em>
            </h2>
            <p className="sh-lead">
              Thirteen years in, leadership for me means clearing the path so engineers can do their best work — and being the one accountable when the path was wrong. I&rsquo;ve led teams from 5 to 12, mentored juniors into senior roles, and run hiring loops that keep teams cohesive across continents.
            </p>
            <ul className="sh-leadership-stats">
              {LEADERSHIP_STATS.map((s) => (
                <li key={s.label}>
                  <span className="figure">
                    {s.prefix}
                    <CountUp value={s.value} suffix={s.suffix} />
                  </span>
                  <span className="label">{s.label}</span>
                </li>
              ))}
            </ul>
            <Link href="/about#leadership" className="sh-link">
              Read the leadership philosophy{" "}
              <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
