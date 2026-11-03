export const SITE_STATS = {
  usersLabel: "50,000+",
  usersCopy: "50,000+ users across all extensions",
  rating: 4.8,
  ratingCountLabel: "12,000+ ratings",
  featuredLabel: "Featured",
} as const;

export type UserQuote = {
  quote: string;
  name: string;
  role: string;
  extension?: string;
};

/** Short social-proof quotes used on the homepage. */
export const USER_QUOTES: UserQuote[] = [
  {
    quote:
      "Finally a free TTS that sounds natural. GPT Reader replaced Speechify for my daily reading.",
    name: "Maya R.",
    role: "Grad student",
    extension: "ChatGPT Reader",
  },
  {
    quote:
      "I listen to PDFs on my commute every day. Clean UI, great voices, zero fluff.",
    name: "James K.",
    role: "Product designer",
    extension: "Google Reader",
  },
  {
    quote:
      "Installed Claude Reader in under a minute. The voices are clear enough for long study sessions.",
    name: "Priya S.",
    role: "Software engineer",
    extension: "Claude Reader",
  },
  {
    quote:
      "Love that the same family of readers works on Chrome, Firefox, and Edge.",
    name: "Daniel W.",
    role: "Remote worker",
  },
];

export const FEATURE_TAGS = [
  "Free to start",
  "Works offline after install",
  "PDF & document support",
  "Natural AI voices",
] as const;
