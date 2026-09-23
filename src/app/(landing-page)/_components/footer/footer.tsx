"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material";
import NextLink from "next/link";

function Copyright() {
  return (
    <Typography variant="subtitle2" sx={{ color: "text.secondary", mt: 1 }}>
      Copyright © AI Readers - {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
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
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2 },
          py: { xs: 6, sm: 8 },
          textAlign: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Stack sx={{ width: { xs: "100%", md: "60%" } }} spacing={2}>
            <Typography component="h2" variant="h5" color="text.primary">
              AI Readers
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "text.secondary", mb: 2 }}
            >
              A family of free browser extensions that turn text into premium,
              AI-powered speech. Pick the voice family you love—Google, GPT,
              Gemini, Claude, and more—and listen to documents, articles, and
              notes instantly.
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              minWidth: { md: 160 },
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              Legal
            </Typography>
            <Link component={NextLink} href="/terms-of-use">
              Terms of Use
            </Link>
            <Link component={NextLink} href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link component={NextLink} href="/appsumo">
              Redeem AppSumo code
            </Link>
            <Link component={NextLink} href="/free-text-to-speech">
              Free TTS Tool
            </Link>
            <Link component={NextLink} href="/chatgpt-text-to-speech">
              ChatGPT TTS
            </Link>
            <Link component={NextLink} href="/claude-text-to-speech">
              Claude TTS
            </Link>
            <Link component={NextLink} href="/">
              All Extensions
            </Link>
            <Link
              href="https://www.gpt-reader.com/free-text-to-speech"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPT Reader site
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
            pt: 3,
          }}
        >
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
