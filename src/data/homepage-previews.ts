export type SampleVoice = {
  id: string;
  name: string;
  src: string;
};

export type ExtensionPreview = {
  platformName: string;
  icon: string;
  samples: SampleVoice[];
};

const samples = (
  slug: string,
  voices: { name: string; file: string }[],
): SampleVoice[] =>
  voices.map((voice) => ({
    id: voice.file.replace(/\.[^.]+$/, ""),
    name: voice.name,
    src: `/voice-samples/${slug}/${voice.file}`,
  }));

/** Labels match the recorded clip for that button. */
export const EXTENSION_PREVIEWS: Record<string, ExtensionPreview> = {
  "gpt-reader": {
    platformName: "ChatGPT",
    icon: "/images/platforms/chatgpt.png",
    samples: samples("gpt-reader", [
      { name: "Breeze", file: "breeze.m4a" },
      { name: "Cove", file: "cove.m4a" },
      { name: "Ember", file: "ember.m4a" },
    ]),
  },
  "google-reader": {
    platformName: "Google",
    icon: "/images/platforms/google.png",
    samples: samples("google-reader", [
      { name: "Achernar", file: "achernar.mp3" },
      { name: "Puck", file: "puck.mp3" },
      { name: "Kore", file: "kore.mp3" },
    ]),
  },
  "gemini-reader": {
    platformName: "Gemini",
    icon: "/images/platforms/gemini.png",
    samples: samples("gemini-reader", [
      { name: "English (US)", file: "en-us.m4a" },
      { name: "English (UK)", file: "en-gb.m4a" },
      { name: "English (Australia)", file: "en-au.m4a" },
    ]),
  },
  "claude-reader": {
    platformName: "Claude",
    icon: "/images/platforms/claude.png",
    samples: samples("claude-reader", [
      { name: "Buttery", file: "buttery.mp3" },
      { name: "Airy", file: "airy.mp3" },
      { name: "Mellow", file: "mellow.mp3" },
    ]),
  },
  "grok-reader": {
    platformName: "Grok",
    icon: "/images/platforms/grok.png",
    samples: samples("grok-reader", [
      { name: "Leo", file: "leo.mp3" },
      { name: "Rex", file: "rex.mp3" },
      { name: "Sal", file: "sal.mp3" },
    ]),
  },
  "qwen-reader": {
    platformName: "Qwen",
    icon: "/images/platforms/qwen.png",
    samples: samples("qwen-reader", [
      { name: "Eric", file: "eric.mp3" },
      { name: "Ryan", file: "ryan.mp3" },
      { name: "Lenn", file: "lenn.mp3" },
    ]),
  },
  "pi-reader": {
    platformName: "Pi",
    icon: "/images/platforms/pi.png",
    samples: samples("pi-reader", [
      { name: "Pi 1", file: "pi-1.mp3" },
      { name: "Pi 2", file: "pi-2.mp3" },
      { name: "Pi 3", file: "pi-3.mp3" },
    ]),
  },
  "mistral-reader": {
    platformName: "Mistral",
    icon: "/images/platforms/mistral.png",
    samples: samples("mistral-reader", [{ name: "Mistral", file: "mistral.mp3" }]),
  },
  "clipchamp-reader": {
    platformName: "Clipchamp",
    icon: "/images/platforms/clipchamp.png",
    samples: samples("clipchamp-reader", [
      { name: "Ava", file: "avamultilingual.mp3" },
      { name: "Andrew", file: "andrewmultilingual.mp3" },
      { name: "Emma", file: "emmamultilingual.mp3" },
    ]),
  },
};
