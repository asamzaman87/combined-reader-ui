export type FreeTtsVariant = "full" | "compact";

export type FreeTtsWidgetProps = {
  variant?: FreeTtsVariant;
  ctaHref?: string;
  ctaLabel?: string;
  maxChars?: number;
};

export type BrowserVoice = {
  id: string;
  name: string;
  lang: string;
};
