"use client";

import { Tok } from "@/app/components/syntax/Code";
import { useIde } from "@/app/components/ide/IdeContext";
import { SITE, CONTACT_TOPICS } from "@/lib/content";

export default function ContactFile() {
  const { openBooking } = useIde();
  return (
    <article className="sh-content sh-bash">
      <pre className="sh-code">
        <Tok type="comment">{"#!/usr/bin/env bash"}</Tok>
        {"\n"}
        <Tok type="comment">{`# Contact Sergey Hovakimyan`}</Tok>
        {"\n"}
        <Tok type="comment">{`# Engineering leadership, micro-frontend architecture,`}</Tok>
        {"\n"}
        <Tok type="comment">{`# accessibility programs, AI-augmented builds.`}</Tok>
        {"\n\n"}
        <Tok type="keyword">export</Tok>{" "}
        <Tok type="prop">ENGAGEMENT_AREAS</Tok>
        <Tok type="op">=</Tok>
        <Tok type="punct">(</Tok>
        {"\n"}
        {CONTACT_TOPICS.map((t) => (
          <span key={t.title}>
            {"  "}
            <Tok type="string">{`"${t.title}"`}</Tok>
            {"  "}
            <Tok type="comment">{`# ${t.body}`}</Tok>
            {"\n"}
          </span>
        ))}
        <Tok type="punct">)</Tok>
        {"\n\n"}
        <Tok type="comment">{"# Schedule a 30-minute strategic conversation"}</Tok>
        {"\n"}
        <Tok type="fn">schedule_call</Tok>
        <Tok type="punct">() {"{"}</Tok>
        {"\n  "}
        <Tok type="prop">open</Tok>{" "}
        <Tok type="string">{`"calendly.com/hovakimyan-serg/30min"`}</Tok>
        {"\n"}
        <Tok type="punct">{"}"}</Tok>
        {"\n\n"}
        <Tok type="comment">{"# Or email directly"}</Tok>
        {"\n"}
        <Tok type="fn">send_email</Tok>
        <Tok type="punct">() {"{"}</Tok>
        {"\n  "}
        <Tok type="prop">mailto</Tok>{" "}
        <Tok type="string">{`"${SITE.email}"`}</Tok>
        {"\n"}
        <Tok type="punct">{"}"}</Tok>
        {"\n\n"}
        <Tok type="comment">{"# Run:"}</Tok>
        {"\n"}
      </pre>

      <div className="sh-bash" style={{ marginTop: 8 }}>
        <button
          type="button"
          className="sh-bash-line is-runnable"
          onClick={openBooking}
          style={{ width: "100%", textAlign: "left", border: 0, background: "transparent", font: "inherit", color: "inherit", cursor: "pointer" }}
        >
          <span className="prompt">$</span>
          <span className="tok-fn">schedule_call</span>
          <span className="arrow">↳ opens Calendly 30-min slot</span>
        </button>
        <a
          href={`mailto:${SITE.email}`}
          className="sh-bash-line is-runnable"
        >
          <span className="prompt">$</span>
          <span className="tok-fn">send_email</span>
          <span className="arrow">↳ opens default mail client</span>
        </a>
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="sh-bash-line is-runnable"
        >
          <span className="prompt">$</span>
          <span className="tok-fn">open_linkedin</span>
          <span className="arrow">↳ opens LinkedIn profile</span>
        </a>
      </div>

      <pre className="sh-code" style={{ marginTop: 24 }}>
        <Tok type="comment">{`# Location: ${SITE.location} · Open to remote.`}</Tok>
        {"\n"}
        <Tok type="comment">{"# Typical response: < 24h on weekdays."}</Tok>
        <span className="cursor" aria-hidden="true" />
      </pre>
    </article>
  );
}
