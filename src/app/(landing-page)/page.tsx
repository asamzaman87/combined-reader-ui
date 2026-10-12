"use client";

import { useThemeContext } from "@/components/context/theme-context";
import { EXTENSIONS } from "@/data/extensions";
import { EXTENSION_PREVIEWS } from "@/data/homepage-previews";
import { alpha, Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import DemoVideoDialog from "./_components/demo-video-dialog";
import ExtensionPreviewCard from "./_components/extension-preview-card";
import { ToggleColorMode } from "./_components/toggle-color-mode";

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
          pt: { xs: 8, sm: 10 },
          pb: { xs: 6, sm: 8 },
        }}
      >
        <Box textAlign="center" mb={{ xs: 4, sm: 6 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Image
              src="/images/ai-readers-logo.png"
              alt="AI Readers"
              width={96}
              height={96}
              priority
              style={{ borderRadius: 20 }}
            />
          </Box>
          <Typography component="h1" variant="h3" color="text.primary" mb={1}>
            AI Readers
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={1.5}>
            Free AI text-to-speech extensions for every voice you love
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            maxWidth={720}
            mx="auto"
          >
            Choose Google, GPT, Gemini, Claude, Grok, Qwen, Pi, Mistral, or
            Clipchamp—each extension turns text and documents into natural
            speech you can listen to or download.
          </Typography>
          <DemoVideoDialog />
        </Box>

        <Typography
          component="h2"
          variant="h4"
          color="text.primary"
          textAlign="center"
          mb={3}
        >
          Browse Extensions
        </Typography>

        <Grid container spacing={3}>
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
      </Container>
    </Box>
  );
};

export default HomePage;
