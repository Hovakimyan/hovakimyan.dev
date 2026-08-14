import type { MetadataRoute } from "next";

/**
 * Explicitly welcome AI crawlers as well as search engines.
 *
 * `*` already allows everything, but naming the agents is a deliberate
 * signal: a couple of these tokens (Google-Extended, Applebot-Extended)
 * exist purely as AI opt-outs, so appearing as allowed is the only way
 * to say "yes, use this in AI answers". The rest are the crawlers behind
 * ChatGPT, Claude, Perplexity, Gemini and Meta AI.
 */
const AI_AGENTS = [
  // OpenAI — training, search index, and live retrieval
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Gemini / Apple Intelligence grounding (AI opt-out tokens)
  "Google-Extended",
  "Applebot-Extended",
  // Meta AI
  "meta-externalagent",
  // Other retrieval-augmented answer engines
  "DuckAssistBot",
  "Amazonbot",
  "YouBot",
  "cohere-ai",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://hovakimyan.dev/sitemap.xml",
    host: "https://hovakimyan.dev",
  };
}
