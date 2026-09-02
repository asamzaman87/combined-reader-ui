"use client";

import FreeTtsWidgetLazy from "@/components/free-tts/free-tts-widget-lazy";
import { getExtensionBySlug } from "@/data/extensions";
import {
  getRelatedFunnelPages,
  type SeoFunnelPage,
} from "@/data/seo-funnel-pages";
import {
  alpha,
  Box,
  Button,
  Card,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import LandingTopBar from "./landing-top-bar";

export default function FunnelPageView({ page }: { page: SeoFunnelPage }) {
  const extension = getExtensionBySlug(page.extensionSlug);
  const related = getRelatedFunnelPages(page.slug, 4);

  const stores: { label: string; href: string }[] = extension
    ? [
        { label: "Chrome", href: extension.chrome },
        { label: "Firefox", href: extension.firefox },
        ...(extension.edge ? [{ label: "Edge", href: extension.edge }] : []),
      ]
    : [];

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <LandingTopBar />
      <Container sx={{ py: { xs: 4, sm: 6 } }}>
        <Stack spacing={4}>
          {extension && (
            <Stack direction="row" spacing={2} alignItems="center">
              <Image
                src={extension.icon}
                alt={`${extension.name} icon`}
                width={56}
                height={56}
                style={{ borderRadius: "50%" }}
              />
              <Typography variant="h5" color="text.primary">
                {extension.name}
              </Typography>
            </Stack>
          )}

          <Typography component="h1" variant="h3" color="text.primary">
            {page.h1}
          </Typography>

          <FreeTtsWidgetLazy
            variant="compact"
            ctaHref={`/${page.extensionSlug}`}
            ctaLabel={`Install ${page.platformName} Reader`}
          />

          <Stack spacing={1.5}>
            {page.intro.map((paragraph) => (
              <Typography key={paragraph} variant="body1" color="text.secondary">
                {paragraph}
              </Typography>
            ))}
          </Stack>

          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h5" color="text.primary" gutterBottom>
              Why use {page.platformName} Reader?
            </Typography>
            <Stack component="ul" spacing={0.5} sx={{ pl: 3, m: 0 }}>
              {page.benefits.map((benefit) => (
                <Typography
                  component="li"
                  key={benefit}
                  variant="body1"
                  color="text.secondary"
                >
                  {benefit}
                </Typography>
              ))}
            </Stack>
          </Card>

          {page.slug === "chatgpt-text-to-speech" && (
            <Typography variant="body2" color="text.secondary">
              Also see the dedicated GPT Reader site at{" "}
              <Link
                href="https://www.gpt-reader.com/free-text-to-speech"
                target="_blank"
                rel="noopener noreferrer"
              >
                gpt-reader.com
              </Link>
              .
            </Typography>
          )}

          <Stack spacing={2}>
            <Typography variant="h5" color="text.primary">
              Install {page.platformName} Reader
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              {stores.map((store) => (
                <Button
                  key={store.label}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="success"
                >
                  Get for {store.label}
                </Button>
              ))}
              <Button
                component={NextLink}
                href={`/${page.extensionSlug}`}
                variant="outlined"
              >
                View extension page
              </Button>
            </Stack>
          </Stack>

          <Box>
            <Typography variant="h5" color="text.primary" gutterBottom>
              Frequently asked questions
            </Typography>
            <Stack spacing={2}>
              {page.faqs.map((faq) => (
                <Box key={faq.question}>
                  <Typography variant="subtitle1">{faq.question}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {faq.answer}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              More platform guides
            </Typography>
            <Stack component="ul" spacing={0.5} sx={{ pl: 3, m: 0 }}>
              {related.map((item) => (
                <Typography component="li" key={item.slug} variant="body2">
                  <Link component={NextLink} href={`/${item.slug}`}>
                    {item.h1}
                  </Link>
                </Typography>
              ))}
              <Typography component="li" variant="body2">
                <Link component={NextLink} href="/free-text-to-speech">
                  Free text to speech online tool
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
