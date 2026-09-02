export type SeoFunnelPage = {
  slug: string;
  platformName: string;
  extensionSlug: string;
  h1: string;
  intro: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

const funnel = (
  slug: string,
  platformName: string,
  extensionSlug: string,
  keyword: string,
): SeoFunnelPage => ({
  slug,
  platformName,
  extensionSlug,
  h1: `${platformName} Text to Speech (Free Online Tool)`,
  intro: [
    `Looking for ${keyword}? Try our free browser-based text-to-speech tool, then install ${platformName} Reader for natural AI voices, document upload, and downloads.`,
    `${platformName} Reader is a free browser extension that turns text into natural speech using ${platformName}-powered voices.`,
  ],
  benefits: [
    `Listen to text with ${platformName} Reader's natural AI voices`,
    "Upload PDFs, docs, and pasted text",
    "Adjustable speed, pause, and resume controls",
    "Download audio for offline listening",
    "Works in Chrome, Firefox, and Edge",
  ],
  faqs: [
    {
      question: `Is ${platformName} text to speech free?`,
      answer: `Yes. Use the free online tool on this page, then install ${platformName} Reader for the full extension experience.`,
    },
    {
      question: "Does my text get uploaded?",
      answer: "The online demo runs in your browser. The extension processes content for playback in your workflow.",
    },
    {
      question: `How do I get ${platformName} Reader?`,
      answer: `Click the install buttons on this page to add ${platformName} Reader from the Chrome Web Store, Firefox Add-ons, or Microsoft Edge Add-ons.`,
    },
  ],
});

export const SEO_FUNNEL_PAGES: SeoFunnelPage[] = [
  funnel("chatgpt-text-to-speech", "GPT", "gpt-reader", "ChatGPT text to speech"),
  funnel("claude-text-to-speech", "Claude", "claude-reader", "Claude text to speech"),
  funnel("gemini-text-to-speech", "Gemini", "gemini-reader", "Gemini read aloud"),
  funnel("google-text-to-speech", "Google", "google-reader", "Google text to speech"),
  funnel("grok-text-to-speech", "Grok", "grok-reader", "Grok text to speech"),
  funnel("qwen-text-to-speech", "Qwen", "qwen-reader", "Qwen text to speech"),
  funnel(
    "microsoft-text-to-speech",
    "Microsoft",
    "microsoft-reader",
    "Copilot text to speech",
  ),
  funnel("pi-text-to-speech", "Pi", "pi-reader", "Pi AI text to speech"),
  funnel("mistral-text-to-speech", "Mistral", "mistral-reader", "Mistral text to speech"),
  funnel(
    "clipchamp-text-to-speech",
    "Clipchamp",
    "clipchamp-reader",
    "Clipchamp text to speech",
  ),
];

export const SEO_FUNNEL_PAGE_MAP = new Map(
  SEO_FUNNEL_PAGES.map((page) => [page.slug, page]),
);

export function getFunnelBySlug(slug: string): SeoFunnelPage | undefined {
  return SEO_FUNNEL_PAGE_MAP.get(slug);
}

export function getRelatedFunnelPages(
  slug: string,
  count = 4,
): SeoFunnelPage[] {
  const index = SEO_FUNNEL_PAGES.findIndex((page) => page.slug === slug);
  if (index === -1) {
    return SEO_FUNNEL_PAGES.slice(0, count);
  }

  const related: SeoFunnelPage[] = [];
  for (let i = 1; i <= count; i += 1) {
    related.push(SEO_FUNNEL_PAGES[(index + i) % SEO_FUNNEL_PAGES.length]);
  }
  return related;
}
