export type ReaderExtension = {
  slug: string;
  name: string;
  shortBlurb: string;
  tagline: string;
  longDescription: string;
  icon: string;
  chrome: string;
  firefox: string;
  edge?: string;
  youtubeEmbed?: string;
};

export const EXTENSIONS: ReaderExtension[] = [
  {
    slug: "gpt-reader",
    name: "GPT Reader",
    shortBlurb:
      "ChatGPT-powered voices for reading aloud and downloading speech.",
    tagline: "Listen to Text Like Never Before with ChatGPT-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? GPT Reader combines the power of ChatGPT's premium voices with user-friendly features to create an unparalleled text-to-speech experience. Whether you're typing, uploading documents, or exploring ideas, GPT Reader lets you enjoy rich AI-powered voices—for free. With dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI, it's never been easier to turn text into an immersive listening experience.",
    icon: "/images/sim-gpt.png",
    chrome:
      "https://chromewebstore.google.com/detail/gpt-reader-free-ai-text-t/aeggkceabpfajnglgaeadofdmeboimml",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/gpt-reader/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/oalnicbngdjhapmbjnoampbhioncjleo",
  },
  {
    slug: "google-reader",
    name: "Google Reader",
    shortBlurb:
      "Natural Google AI voices for PDFs, articles, and documents.",
    tagline: "Listen to Text Like Never Before with Google-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Google Reader combines the power of Google's premium voices with user-friendly features to create an unparalleled text-to-speech experience. Whether you're typing, uploading documents, or just exploring ideas, Google Reader lets you enjoy the richness of Google's AI-powered voices—without any cost! With added features like dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI, it's never been easier to turn text into an immersive listening experience.",
    icon: "/images/sim-google.png",
    chrome:
      "https://chromewebstore.google.com/detail/google-reader-free-ai-tex/jdmmahggnlemcmcoljocaoejjlkjknld",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/google-reader/",
    youtubeEmbed:
      "https://www.youtube.com/embed/JJVkg3LpDto?si=2AzI9h4OG1LE28U5",
  },
  {
    slug: "gemini-reader",
    name: "Gemini Reader",
    shortBlurb:
      "Gemini AI text to speech for PDFs, articles, and docs.",
    tagline: "Listen to Text Like Never Before with Gemini-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Gemini Reader combines Gemini's natural AI voices with user-friendly features to create an unparalleled text-to-speech experience. Whether you're typing, uploading documents, or exploring ideas, Gemini Reader lets you enjoy high-quality AI-powered voices—for free. With dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI, it's never been easier to turn text into an immersive listening experience.",
    icon: "/images/sim-gemini.png",
    chrome:
      "https://chromewebstore.google.com/detail/gemini-reader-free-ai-tex/ipldcpaajpmldoplmnimmabmdmkiidfg",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/gemini-reader/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/okghbabejcehhampoiadpillfmmbnnng",
    youtubeEmbed:
      "https://www.youtube.com/embed/Aua7F_-EMpc?si=2AzI9h4OG1LE28U5",
  },
  {
    slug: "claude-reader",
    name: "Claude Reader",
    shortBlurb:
      "Claude's natural AI voices for reading aloud and downloads.",
    tagline: "Listen to Text Like Never Before with Claude-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Claude Reader brings Claude's natural AI voices to your text or documents—instantly read aloud or download high-quality speech for free. Whether you're typing, uploading documents, or exploring ideas, Claude Reader delivers a smooth, customizable listening experience with dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI.",
    icon: "/images/sim-claude.png",
    chrome:
      "https://chromewebstore.google.com/detail/claude-reader-free-ai-tex/aoclimlcmfknemigkhdemgalejakgcdb",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/claude-reader/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/bobmnabaicplbcpnodlddhnlhnmodgbj",
  },
  {
    slug: "grok-reader",
    name: "Grok Reader",
    shortBlurb: "Free AI text to speech with Grok's natural voices.",
    tagline: "Listen to Text Like Never Before with Grok-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Grok Reader brings Grok's natural AI voices to your text or documents—instantly read aloud or download high-quality speech for free. Whether you're typing, uploading documents, or exploring ideas, Grok Reader delivers a smooth, customizable listening experience with dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI.",
    icon: "/images/sim-grok.png",
    chrome:
      "https://chromewebstore.google.com/detail/grok-reader-free-ai-text/fjnogbndoomcjbphhjmgcocbpkbpcbca",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/grok-reader/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/pfidahbbhgkgjeknmojobhkpjgpgjbnj",
  },
  {
    slug: "qwen-reader",
    name: "Qwen Reader",
    shortBlurb: "Free AI text to speech with Qwen's natural voices.",
    tagline: "Listen to Text Like Never Before with Qwen-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Qwen Reader brings Qwen's natural AI voices to your text or documents—instantly read aloud or download high-quality speech for free. Whether you're typing, uploading documents, or exploring ideas, Qwen Reader delivers a smooth, customizable listening experience with dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI.",
    icon: "/images/sim-qwen.png",
    chrome:
      "https://chromewebstore.google.com/detail/qwen-reader-free-ai-text/bdbgodefpempnenofmppdmpdhegnioam",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/qwen-reader/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/nbnpllpcojcmcmnclgmfjjehcifajfmi",
  },
  {
    slug: "microsoft-reader",
    name: "Microsoft Reader",
    shortBlurb:
      "Microsoft Copilot voices for reading aloud and downloads.",
    tagline:
      "Listen to Text Like Never Before with Microsoft Copilot Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Microsoft Reader brings Microsoft Copilot's natural AI voices to your text or documents—instantly read aloud or download high-quality speech for free. Whether you're typing, uploading documents, or exploring ideas, Microsoft Reader delivers a smooth, customizable listening experience with dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI.",
    icon: "/images/sim-microsoft.png",
    chrome:
      "https://chromewebstore.google.com/detail/microsoft-reader-free-ai/gnknbinigepmjjjdbkacllgccomhmadc",
    firefox:
      "https://addons.mozilla.org/en-US/firefox/addon/microsoft-reader/",
  },
  {
    slug: "pi-reader",
    name: "Pi Reader",
    shortBlurb: "Free AI text to speech with Pi.ai's natural voices.",
    tagline: "Listen to Text Like Never Before with Pi-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Pi Reader brings Pi.ai's natural AI voices to your text or documents—instantly read aloud or download high-quality speech for free. Whether you're typing, uploading documents, or exploring ideas, Pi Reader delivers a smooth, customizable listening experience with dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI.",
    icon: "/images/sim-pi.png",
    chrome:
      "https://chromewebstore.google.com/detail/pi-reader-free-ai-text-to/ngnphdiiiilpdlljbiicaaeaceellapn",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/pi-reader-tts/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/aefpgpieaihomjgjikllabcmceilmhjn",
    youtubeEmbed:
      "https://www.youtube.com/embed/WxnBF-iTpmk?si=2AzI9h4OG1LE28U5",
  },
  {
    slug: "mistral-reader",
    name: "Mistral Reader",
    shortBlurb: "Free AI text to speech with Mistral's natural voice.",
    tagline: "Listen to Text Like Never Before with Mistral-Powered Voices",
    longDescription:
      "Looking for a revolutionary way to listen to text? Mistral Reader brings Mistral AI's natural voice to your text or documents—instantly read aloud or download high-quality speech for free. Whether you're typing, uploading documents, or exploring ideas, Mistral Reader delivers a smooth, customizable listening experience with dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI.",
    icon: "/images/sim-mistral.png",
    chrome:
      "https://chromewebstore.google.com/detail/mistral-reader-free-ai-te/dfdfdlaadogidgbpiepjnpilbcfbpjgp",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/mistral-reader/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/anppodhbpambdmniabhjkoabbippgcbi",
  },
  {
    slug: "clipchamp-reader",
    name: "Clipchamp Reader",
    shortBlurb: "Free AI text to speech with natural voices for Clipchamp.",
    tagline: "Listen to Text Like Never Before with Clipchamp-Powered Voices",
    longDescription:
      "Clipchamp Reader brings natural AI voices to your text or documents—instantly read aloud or download high-quality speech for free. Whether you're typing, uploading documents, or exploring ideas, Clipchamp Reader delivers a smooth listening experience with dark/light mode, adjustable playback speeds, pause and resume, and a full-screen UI.",
    icon: "/images/sim-clipchamp.png",
    chrome:
      "https://chromewebstore.google.com/detail/clipchamp-reader-free-ai/ajophdmmeblpoaaomfkbpiiknigelbde",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/clipchamp-reader-free/",
    edge: "https://microsoftedge.microsoft.com/addons/detail/clipchamp-reader-free-ai/chimookekdfalnkhkpofcpcljjckgfoe",
  },
];

export function getExtensionBySlug(
  slug: string
): ReaderExtension | undefined {
  return EXTENSIONS.find((ext) => ext.slug === slug);
}

