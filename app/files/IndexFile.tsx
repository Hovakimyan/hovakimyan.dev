import { Tok } from "@/app/components/syntax/Code";
import { SITE } from "@/lib/content";

/**
 * The home page rendered as a literal TypeScript declaration. JSX
 * composition with hand-classed token spans gives us pixel-precise
 * syntax coloring and the ability to inject interactive elements
 * (clickable arrays, the engineer.impact line, the schedule call).
 */
export default function IndexFile() {
  return (
    <article className="sh-content sh-file-index">
      <pre className="sh-code">
        <Tok type="comment">{`// ${SITE.role}`}</Tok>
        {"\n"}
        <Tok type="comment">{`// ${SITE.location} · 13+ years`}</Tok>
        {"\n\n"}
        <Tok type="keyword">import</Tok>{" "}
        <Tok type="punct">{"{ "}</Tok>
        <Tok type="type">Engineer</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="type">Leader</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="type">Builder</Tok>
        <Tok type="punct">{" }"}</Tok>{" "}
        <Tok type="keyword">from</Tok>{" "}
        <Tok type="string">{'"@sergey/identity"'}</Tok>
        <Tok type="punct">;</Tok>
        {"\n"}
        <Tok type="keyword">import</Tok>{" "}
        <Tok type="punct">{"{ "}</Tok>
        <Tok type="type">ProductLed</Tok>
        <Tok type="punct">{" }"}</Tok>{" "}
        <Tok type="keyword">from</Tok>{" "}
        <Tok type="string">{'"@sergey/values"'}</Tok>
        <Tok type="punct">;</Tok>
        {"\n\n"}
        <Tok type="keyword">export const</Tok>{" "}
        <Tok type="prop">sergey</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="type">AIAugmentedEngineer</Tok>{" "}
        <Tok type="op">=</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">name</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="string">{`"${SITE.name}"`}</Tok>
        <Tok type="punct">,</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">role</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="string">{`"${SITE.role}"`}</Tok>
        <Tok type="punct">,</Tok>
        {"\n\n"}
        {"  "}
        <Tok type="comment">{"// What I do — four verbs, one practice"}</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">practice</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        {"\n    "}
        <Tok type="string">{'"Building"'}</Tok>
        <Tok type="punct">,</Tok>
        {"     "}
        <Tok type="comment">{"// scalable web systems"}</Tok>
        {"\n    "}
        <Tok type="string">{'"Leading"'}</Tok>
        <Tok type="punct">,</Tok>
        {"      "}
        <Tok type="comment">{"// cross-functional teams"}</Tok>
        {"\n    "}
        <Tok type="string">{'"Automating"'}</Tok>
        <Tok type="punct">,</Tok>
        {"   "}
        <Tok type="comment">{"// workflows with AI agents"}</Tok>
        {"\n    "}
        <Tok type="string">{'"Advocating"'}</Tok>
        <Tok type="punct">,</Tok>
        {"   "}
        <Tok type="comment">{"// for accessibility (WCAG 2.1 AA)"}</Tok>
        {"\n  "}
        <Tok type="punct">],</Tok>
        {"\n\n"}
        {"  "}
        <Tok type="comment">{"// The stack I ship with"}</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">stack</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="prop">languages</Tok>
        <Tok type="op">:</Tok>{"  "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"TypeScript"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"JavaScript"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"Hack"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n    "}
        <Tok type="prop">frameworks</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"React"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"Next.js"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"Node.js"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"GraphQL"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n    "}
        <Tok type="prop">practices</Tok>
        <Tok type="op">:</Tok>{"  "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"Micro-Frontend"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"TDD"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"BDD"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"CI/CD"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n    "}
        <Tok type="prop">tools</Tok>
        <Tok type="op">:</Tok>{"      "}
        <Tok type="punct">[</Tok>
        <Tok type="string">{'"Git"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"Jest"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"Webpack"'}</Tok>
        <Tok type="punct">, </Tok>
        <Tok type="string">{'"Tailwind"'}</Tok>
        <Tok type="punct">],</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n\n"}
        {"  "}
        <Tok type="comment">{"// What I&rsquo;ve shipped"}</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">selectedWork</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        {"\n    "}
        <a href="/work#renderforest" className="tok-fn">
          Renderforest
        </a>
        <Tok type="punct">,</Tok>
        {"      "}
        <Tok type="comment">{"// 10M+ users, +40% perf"}</Tok>
        {"\n    "}
        <a href="/work#cloud-fleet-manager" className="tok-fn">
          CloudFleetManager
        </a>
        <Tok type="punct">,</Tok>
        {" "}
        <Tok type="comment">{"// Maersk + 3, 28 modules migrated"}</Tok>
        {"\n    "}
        <a href="/work#epam" className="tok-fn">
          EPAMMicroFrontend
        </a>
        <Tok type="punct">,</Tok>
        {" "}
        <Tok type="comment">{"// −30% deps, 15+ countries"}</Tok>
        {"\n    "}
        <a href="/work#buildops" className="tok-fn">
          BuildOps
        </a>
        <Tok type="punct">,</Tok>
        {"          "}
        <Tok type="comment">{"// current · IC5, Los Angeles"}</Tok>
        {"\n  "}
        <Tok type="punct">],</Tok>
        {"\n\n"}
        {"  "}
        <Tok type="comment">{"// Numbers that compound"}</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">impact</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="prop">yearsLeading</Tok>
        <Tok type="op">:</Tok>
        {"     "}
        <Tok type="number">7</Tok>
        <Tok type="punct">,</Tok>
        {"   "}
        <Tok type="comment">{"// +"}</Tok>
        {"\n    "}
        <Tok type="prop">engineersLed</Tok>
        <Tok type="op">:</Tok>
        {"     "}
        <Tok type="number">12</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="prop">countriesReached</Tok>
        <Tok type="op">:</Tok>
        {" "}
        <Tok type="number">15</Tok>
        <Tok type="punct">,</Tok>
        {"   "}
        <Tok type="comment">{"// +"}</Tok>
        {"\n    "}
        <Tok type="prop">accessibility</Tok>
        <Tok type="op">:</Tok>
        {"    "}
        <Tok type="string">{'"WCAG 2.1 AA"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n\n"}
        {"  "}
        <Tok type="comment">{"// Always open to"}</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">engagements</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="punct">[</Tok>
        {"\n    "}
        <Tok type="string">{'"Engineering leadership"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"Micro-frontend architecture"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"Accessibility programs (WCAG)"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="string">{'"AI-augmented dev workflows"'}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="punct">],</Tok>
        {"\n\n"}
        {"  "}
        <Tok type="comment">{"// Reach"}</Tok>
        {"\n"}
        {"  "}
        <Tok type="prop">contact</Tok>
        <Tok type="op">:</Tok>{" "}
        <Tok type="punct">{"{"}</Tok>
        {"\n    "}
        <Tok type="prop">email</Tok>
        <Tok type="op">:</Tok>
        {"    "}
        <a href={`mailto:${SITE.email}`} className="tok-string sh-json-link">
          {`"${SITE.email}"`}
        </a>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="prop">schedule</Tok>
        <Tok type="op">:</Tok>
        {" "}
        <a href="/contact" className="tok-fn">
          {"() => openCalendar()"}
        </a>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="prop">linkedin</Tok>
        <Tok type="op">:</Tok>
        {" "}
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noopener"
          className="tok-string sh-json-link"
        >
          {'"/in/hovakimyanserg"'}
        </a>
        <Tok type="punct">,</Tok>
        {"\n    "}
        <Tok type="prop">location</Tok>
        <Tok type="op">:</Tok>
        {" "}
        <Tok type="string">{`"${SITE.location} · Open to remote"`}</Tok>
        <Tok type="punct">,</Tok>
        {"\n  "}
        <Tok type="punct">{"},"}</Tok>
        {"\n"}
        <Tok type="punct">{"};"}</Tok>
        {"\n\n"}
        <Tok type="comment">{"// Run the practice"}</Tok>
        {"\n"}
        <Tok type="prop">engineer</Tok>
        <Tok type="punct">.</Tok>
        <Tok type="fn">impact</Tok>
        <Tok type="punct">(</Tok>
        <Tok type="prop">sergey</Tok>
        <Tok type="punct">);</Tok>
        <span className="cursor" aria-hidden="true" />
      </pre>
    </article>
  );
}
