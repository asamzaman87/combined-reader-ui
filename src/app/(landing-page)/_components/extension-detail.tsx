"use client";

import { type ReaderExtension } from "@/data/extensions";
import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import LandingTopBar from "./landing-top-bar";

type StoreKey = "chrome" | "firefox" | "edge";

const STORE_META: Record<
  StoreKey,
  { label: string; icon: string; color: "success" }
> = {
  chrome: {
    label: "CHROME",
    icon: "/images/chrome.png",
    color: "success",
  },
  firefox: {
    label: "FIREFOX",
    icon: "/images/firefox.png",
    color: "success",
  },
  edge: {
    label: "EDGE",
    icon: "/images/edge.png",
    color: "success",
  },
};

export default function ExtensionDetail({
  extension,
}: {
  extension: ReaderExtension;
}) {
  const stores = (
    [
      ["chrome", extension.chrome],
      ["firefox", extension.firefox],
      ["edge", extension.edge],
    ] as const
  ).filter((entry): entry is [StoreKey, string] => Boolean(entry[1]));

  return (
    <Box
      id="download-header"
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
      <Container
        sx={{
          pt: { xs: 4, sm: 6 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Image
            src={extension.icon}
            width={100}
            height={100}
            alt={`${extension.name} logo`}
            style={{ borderRadius: "50%" }}
          />
          <Typography component="h1" variant="h3" color="text.primary">
            {extension.name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {extension.tagline}
          </Typography>

          <Grid container my={1} spacing={5} alignItems="center">
            <Grid item xs={12} md={extension.youtubeEmbed ? 7 : 12}>
              <Typography
                variant="h5"
                color="text.primary"
                textAlign="left"
                py={2}
              >
                Transform Your Text into Premium, AI-Driven Speech—For Free!
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                textAlign="left"
              >
                {extension.longDescription}
              </Typography>

              <Box
                py={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                gap={2}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  flexWrap="wrap"
                  gap={2}
                  width="100%"
                >
                  {stores.map(([key, url]) => {
                    const meta = STORE_META[key];
                    return (
                      <Button
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        color={meta.color}
                        variant="contained"
                        sx={{
                          width: { md: "320px", xs: "100%" },
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          fontWeight: 700,
                          color: "#fff",
                          height: "fit-content",
                        }}
                      >
                        <Image
                          src={meta.icon}
                          alt={key}
                          width={20}
                          height={20}
                        />
                        {`GET ${extension.name.toUpperCase()} FOR ${meta.label}`}
                      </Button>
                    );
                  })}
                </Box>
              </Box>

              <Box textAlign="left">
                <Link
                  component={NextLink}
                  variant="subtitle2"
                  href="/terms-of-use"
                >
                  By clicking a download link above, you agree to our Terms of
                  Use.
                </Link>
              </Box>
            </Grid>

            {extension.youtubeEmbed ? (
              <Grid item xs={12} md={5}>
                <Card>
                  <CardContent>
                    <Typography
                      component="h2"
                      variant="h5"
                      color="text.primary"
                    >
                      How It Works
                    </Typography>
                    <CardMedia
                      component="iframe"
                      height={300}
                      src={extension.youtubeEmbed}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      sx={{ mt: 1, borderRadius: 1, border: 0 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ) : null}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
