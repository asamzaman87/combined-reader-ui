"use client";

import { useThemeContext } from "@/components/context/theme-context";
import { EXTENSIONS } from "@/data/extensions";
import { EXTENSION_PREVIEWS } from "@/data/homepage-previews";
import { USER_QUOTES } from "@/data/social-proof";
import ExtensionIcon from "@mui/icons-material/Extension";
import { alpha, Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import DemoVideoDialog from "./_components/demo-video-dialog";
import ExtensionPreviewCard from "./_components/extension-preview-card";
import { stopSampleVoice } from "./_components/sample-voice-player";
import { ToggleColorMode } from "./_components/toggle-color-mode";
import {
  FeatureTagRow,
  InlineQuotes,
  TrustStrip,
} from "./_components/trust-signals";

const HomePage = () => {
  const { mode, toggleTheme } = useThemeContext();

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
      <Box sx={{ float: "right", pt: 2, pr: 2 }}>
        <ToggleColorMode mode={mode} toggleColorMode={toggleTheme} />
      </Box>

      <Container
        sx={{
          pt: { xs: 6, sm: 8 },
          pb: { xs: 6, sm: 8 },
        }}
      >
        <Box textAlign="center" mb={{ xs: 4, sm: 6 }}>
          <Box
            component="p"
            sx={(theme) => ({
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "9px", sm: "12px" },
              m: 0,
              mb: { xs: 2, sm: 2.5 },
              px: { xs: 1.5, sm: 2.25 },
              py: { xs: 1.1, sm: 1.4 },
              border: "1px solid",
              borderColor:
                theme.palette.mode === "light"
                  ? "rgba(203, 213, 225, 0.78)"
                  : "rgba(148, 163, 184, 0.28)",
              borderRadius: 999,
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.82)"
                  : "rgba(255, 255, 255, 0.06)",
              boxShadow:
                theme.palette.mode === "light"
                  ? "0 14px 42px rgba(15, 23, 42, 0.06)"
                  : "0 14px 42px rgba(0, 0, 0, 0.25)",
              color:
                theme.palette.mode === "light"
                  ? "rgb(90, 80, 69)"
                  : "rgba(226, 232, 240, 0.9)",
              fontSize: { xs: 10, sm: 13 },
              fontWeight: 900,
              letterSpacing: { xs: "0.12em", sm: "0.2em" },
              lineHeight: 1,
              textTransform: "uppercase",
              "@keyframes heroEyebrowPulse": {
                "0%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.48)" },
                "70%": { boxShadow: "0 0 0 9px rgba(59, 130, 246, 0)" },
                "100%": { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" },
              },
            })}
          >
            <Box
              component="span"
              aria-hidden
              sx={{
                width: 8,
                height: 8,
                flex: "0 0 auto",
                borderRadius: 999,
                bgcolor: "rgb(59, 130, 246)",
                animation: "heroEyebrowPulse 1.8s ease-out infinite",
              }}
            />
            Free AI text-to-speech browser extensions
          </Box>

          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              fontSize: { xs: "2.35rem", sm: "3.25rem", md: "4rem" },
              color: "text.primary",
              maxWidth: 920,
              mx: "auto",
              mb: 2,
            }}
          >
            Turn text into{" "}
            <Box
              component="span"
              sx={(theme) => ({
                position: "relative",
                display: "inline",
                backgroundImage:
                  theme.palette.mode === "light"
                    ? "linear-gradient(180deg, transparent 62%, rgba(250, 204, 21, 0.55) 62%)"
                    : "linear-gradient(180deg, transparent 62%, rgba(250, 204, 21, 0.35) 62%)",
              })}
            >
              natural AI speech
            </Box>{" "}
            for free
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth={720}
            mx="auto"
            mb={1}
            fontWeight={400}
            sx={{ fontSize: { xs: "1rem", sm: "1.15rem" }, lineHeight: 1.55 }}
          >
            Choose Google, GPT, Gemini, Claude, Grok, Qwen, Pi, Mistral, or
            Clipchamp—each extension turns articles, PDFs, and notes into
            natural speech you can listen to or download.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="center"
            alignItems="center"
            mt={2.5}
          >
            <DemoVideoDialog />
            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<ExtensionIcon />}
              href="#browse-extensions"
              onClick={(event) => {
                event.preventDefault();
                stopSampleVoice();
                document
                  .getElementById("browse-extensions")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              sx={{ color: "#fff" }}
            >
              Install Extensions
            </Button>
          </Stack>

          <Stack spacing={2} alignItems="center" mt={3} mb={2.5}>
            <TrustStrip />
            <FeatureTagRow />
          </Stack>

          <InlineQuotes quotes={USER_QUOTES.slice(0, 2)} />
        </Box>

        <Box
          id="browse-extensions"
          component="section"
          sx={{ scrollMarginTop: 24 }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            textAlign="center"
            mb={1}
          >
            Browse Extensions
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mb={3}
          >
            Preview sample voices, then install on Chrome, Firefox, or Edge
          </Typography>

          <Grid container spacing={3} alignItems="stretch">
            {EXTENSIONS.map((ext) => {
              const preview = EXTENSION_PREVIEWS[ext.slug];
              if (!preview) return null;
              return (
                <Grid item xs={12} sm={6} md={4} key={ext.slug}>
                  <ExtensionPreviewCard extension={ext} preview={preview} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
