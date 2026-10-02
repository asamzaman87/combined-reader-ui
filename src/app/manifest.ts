import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AI Readers — Free AI Text to Speech Extensions",
    short_name: "AI Readers",
    description:
      "A family of free browser extensions that turn text into premium, AI-powered speech.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/images/ai-readers-favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/images/ai-readers-logo.png",
        sizes: "1254x1254",
        type: "image/png",
      },
    ],
  };
}
