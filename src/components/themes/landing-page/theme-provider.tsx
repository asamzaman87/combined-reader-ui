"use client";

import * as React from "react";
import {
  CssBaseline,
  Divider,
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material";
import { getLandingPageTheme } from "./theme-config";
import { useThemeContext } from "@/components/context/theme-context";
import Footer from "@/app/(landing-page)/_components/footer/footer";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { mode } = useThemeContext();
  const LPtheme = createTheme(getLandingPageTheme(mode));

  return (
    <MuiThemeProvider theme={LPtheme}>
      <CssBaseline />
      {children}
      <Divider sx={{ borderBottomWidth: 2 }} />
      <Footer />
    </MuiThemeProvider>
  );
}
