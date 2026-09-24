import { ThemeContextProvider } from "@/components/context/theme-context";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>AI Readers — Free AI Text to Speech Extensions</title>
        <meta
          name="description"
          content="Discover free AI text-to-speech browser extensions powered by Google, GPT, Gemini, Claude, Grok, Qwen, Microsoft, Pi, and Mistral voices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="AI Readers — Free AI Text to Speech Extensions"
        />
        <meta
          property="og:description"
          content="Discover free AI text-to-speech browser extensions powered by Google, GPT, Gemini, Claude, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/ai-readers-logo.png" />
        <link rel="icon" href="/images/ai-readers-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/ai-readers-logo.png" />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
