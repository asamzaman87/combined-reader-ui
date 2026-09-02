"use client";

import { useThemeContext } from "@/components/context/theme-context";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button } from "@mui/material";
import NextLink from "next/link";
import { ToggleColorMode } from "./toggle-color-mode";

export default function LandingTopBar() {
  const { mode, toggleTheme } = useThemeContext();

  return (
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
  );
}
