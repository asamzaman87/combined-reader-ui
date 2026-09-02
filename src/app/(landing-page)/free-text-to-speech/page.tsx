import type { Metadata } from "next";
import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import FreeTtsWidgetLazy from "@/components/free-tts/free-tts-widget-lazy";
import { EXTENSIONS } from "@/data/extensions";

const FAQS = [
  {
    question: "Is this free text to speech tool really free?",
    answer:
      "Yes. Paste text, pick a voice, and listen without creating an account.",
  },
  {
    question: "Which AI platforms do you support?",
    answer:
      "We offer Reader extensions for GPT, Google, Gemini, Claude, Grok, Qwen, Microsoft, Pi, Mistral, and Clipchamp.",
  },
  {
    question: "How is this different from the extensions?",
    answer:
      "This page is a quick online demo. Each Reader extension adds natural platform voices, uploads, downloads, and in-browser controls.",
  },
  {
    question: "Is my text private?",
    answer: "The online demo uses your browser's built-in speech synthesis locally.",
  },
];

export const metadata: Metadata = {
  title: "Free AI Text to Speech Online | AI Readers",
  description:
    "Free AI text to speech online for any text. Try the browser tool, then install a Reader extension for natural voices on GPT, Claude, Gemini, and more.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FreeTextToSpeechPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Container sx={{ py: { xs: 6, sm: 8 } }}>
        <Stack spacing={4}>
          <Box textAlign="center">
            <Typography component="h1" variant="h3" color="text.primary" gutterBottom>
              Free AI Text to Speech Online
            </Typography>
            <Typography variant="h6" color="text.secondary" maxWidth={760} mx="auto">
              Try text-to-speech in your browser, then pick the Reader extension
              for your favorite AI platform.
            </Typography>
          </Box>

          <FreeTtsWidgetLazy variant="full" ctaHref="/gpt-reader" />

          <Box>
            <Typography component="h2" variant="h5" color="text.primary" gutterBottom>
              Choose your Reader extension
            </Typography>
            <Grid container spacing={2}>
              {EXTENSIONS.map((ext) => (
                <Grid item xs={12} sm={6} md={4} key={ext.slug}>
                  <Card variant="outlined">
                    <CardActionArea component={Link} href={`/${ext.slug}`}>
                      <CardContent
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Image
                          src={ext.icon}
                          alt={`${ext.name} icon`}
                          width={40}
                          height={40}
                          style={{ borderRadius: "50%" }}
                        />
                        <Box>
                          <Typography variant="subtitle1">{ext.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {ext.shortBlurb}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Typography component="h2" variant="h5" color="text.primary" gutterBottom>
              Platform text-to-speech guides
            </Typography>
            <Stack component="ul" spacing={0.5} sx={{ pl: 3 }}>
              <Typography component="li" variant="body2">
                <Link href="/chatgpt-text-to-speech">ChatGPT text to speech</Link>
              </Typography>
              <Typography component="li" variant="body2">
                <Link href="/claude-text-to-speech">Claude text to speech</Link>
              </Typography>
              <Typography component="li" variant="body2">
                <Link href="/gemini-text-to-speech">Gemini text to speech</Link>
              </Typography>
              <Typography component="li" variant="body2">
                <Link href="/google-text-to-speech">Google text to speech</Link>
              </Typography>
            </Stack>
          </Box>

          <Box>
            <Typography component="h2" variant="h5" color="text.primary" gutterBottom>
              Frequently asked questions
            </Typography>
            <Stack spacing={2}>
              {FAQS.map((faq) => (
                <Box key={faq.question}>
                  <Typography variant="subtitle1">{faq.question}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary" gutterBottom>
              For ChatGPT-focused workflows, also visit{" "}
              <Link
                href="https://www.gpt-reader.com/free-text-to-speech"
                target="_blank"
                rel="noopener noreferrer"
              >
                gpt-reader.com
              </Link>
              .
            </Typography>
            <Button component={Link} href="/" variant="contained">
              Browse all extensions
            </Button>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
