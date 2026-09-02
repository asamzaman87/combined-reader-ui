"use client";

import dynamic from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";
import type { FreeTtsWidgetProps } from "./types";

const FreeTtsWidget = dynamic(() => import("./free-tts-widget"), {
  ssr: false,
  loading: () => (
    <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
      <CircularProgress size={32} />
    </Box>
  ),
});

export default function FreeTtsWidgetLazy(props: FreeTtsWidgetProps) {
  return <FreeTtsWidget {...props} />;
}
