"use client";

import { useThemeContext } from "@/components/context/theme-context";
import { ToggleColorMode } from "@/app/(landing-page)/_components/toggle-color-mode";
import { alpha, Box, Button, Container, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NextLink from "next/link";

export default function LegalPageShell({
  title,
  effectiveDate,
  children,
}: {
  title: string;
  effectiveDate: string;
  children: React.ReactNode;
}) {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pt: 2,
          px: 2,
        }}
      >
        <Button
          component={NextLink}
          href="/"
          startIcon={<ArrowBackIcon />}
          color="inherit"
          size="small"
        >
          All Extensions
        </Button>
        <ToggleColorMode mode={mode} toggleColorMode={toggleTheme} />
      </Box>

      <Container
        maxWidth="md"
        sx={{ pt: { xs: 4, sm: 6 }, pb: { xs: 8, sm: 12 } }}
      >
        <Typography component="h1" variant="h3" color="text.primary" mb={1}>
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" mb={4}>
          Effective Date: {effectiveDate}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            "& h2": {
              fontSize: "1.25rem",
              fontWeight: 600,
              mb: 1,
              color: "text.primary",
            },
            "& p, & li": {
              color: "text.secondary",
              lineHeight: 1.7,
            },
            "& ul": {
              pl: 3,
              m: 0,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            },
            "& a": {
              color: "primary.main",
              fontWeight: 600,
            },
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}
