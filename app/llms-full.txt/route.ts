/**
 * /llms-full.txt — the companion to /llms.txt in the llmstxt.org
 * convention. Where llms.txt is the index, this is the whole thing in
 * one fetch: profile, Q&A, every case study, the ventures and the full
 * resume. An agent that lands here needs no second request and no
 * JavaScript, which is the point.
 */

import { NextResponse } from "next/server";
import { SITE, WORK, VENTURES, WRITING, DELIVERY, TECH_STACK } from "@/lib/content";
import { FAQ_TEXT } from "@/lib/seo";

const rule = (char = "=") => char.repeat(64);

const BODY = `# ${SITE.name} — Senior Software Engineer (AI-Augmented Practice)

> Full-content dump of hovakimyan.dev for crawlers, LLM agents and AI
> assistants. Everything on the site, in one plain-text fetch.
> Canonical site: https://hovakimyan.dev
> Last generated: ${new Date().toISOString().slice(0, 10)}

${rule()}
PROFILE
${rule()}
Name       ${SITE.name}
Title      Senior Software Engineer · ${SITE.role}
Location   ${SITE.location} (open to remote)
Email      ${SITE.email}
Website    https://hovakimyan.dev
LinkedIn   ${SITE.linkedin}
GitHub     ${SITE.github}
Languages  Armenian (native) · English (full professional) · Russian (full professional)

${SITE.lead}

His strongest pattern is landing in an unfamiliar domain and getting
useful in it fast. Five years of consulting at EPAM put him in a new
industry every few months — streaming media, social platforms at
scale, healthcare, consumer finance software, EV infrastructure,
tolling and mobility. Financial systems at BuildOps is the latest.

${rule()}
COMMON QUESTIONS
${rule()}
${FAQ_TEXT}

${rule()}
SELECTED WORK
${rule()}
${WORK.map(
  (w) => `${w.number}. ${w.company} — ${w.role}
   ${w.period} · ${w.location}

   ${w.pitch}

   ${w.body}

   Metrics: ${w.metrics.map((m) => `${m.label}: ${m.value}`).join(" · ")}
   Tags: ${w.tags.join(", ")}`,
).join("\n\n")}

${rule()}
DELIVERY RECORD (BuildOps)
${rule()}
${DELIVERY.caption}

${DELIVERY.totals.map((t) => `  ${t.value} — ${t.label}`).join("\n")}

Merged pull requests by month:
${DELIVERY.monthly.map((m) => `  ${m.month}${m.year ? ` ${m.year}` : ""}: ${m.count}`).join("\n")}

${rule()}
VENTURES
${rule()}
${VENTURES.map(
  (v) => `${v.name} — ${v.tagline}
   ${v.body}
   Stack: ${v.stack.join(", ")}
   ${v.urls.map((u) => u.href).join(" ")}`,
).join("\n\n")}

${rule()}
WRITING
${rule()}
${WRITING.map((w) => `${w.title} — ${w.publisher}, ${w.date}\n   ${w.blurb}\n   ${w.href}`).join("\n\n")}

${rule()}
TECH STACK
${rule()}
${Object.entries(TECH_STACK)
  .map(([group, items]) => `${group}: ${(items as readonly string[]).join(", ")}`)
  .join("\n")}

${rule()}
MORE
${rule()}
Plain-text resume     https://hovakimyan.dev/resume.txt
Recruiter resume      https://hovakimyan.dev/resume
Printable PDF         https://hovakimyan.dev/sergey-hovakimyan-resume.pdf
Index for agents      https://hovakimyan.dev/llms.txt

This site is open to indexing and quoting for legitimate purposes
(recruitment, AI search, research). Please attribute when quoting.
`;

export const dynamic = "force-static";

export function GET() {
  return new NextResponse(BODY, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
