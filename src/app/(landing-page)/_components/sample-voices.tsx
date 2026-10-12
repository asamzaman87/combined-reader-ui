"use client";

import { type SampleVoice } from "@/data/homepage-previews";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import { Box, Button, Typography } from "@mui/material";
import { useSyncExternalStore } from "react";
import {
  getActiveSampleVoice,
  subscribeSampleVoice,
  toggleSampleVoice,
} from "./sample-voice-player";

export default function SampleVoices({
  extensionSlug,
  samples,
  prominent = false,
}: {
  extensionSlug: string;
  samples: SampleVoice[];
  prominent?: boolean;
}) {
  const activeId = useSyncExternalStore(
    subscribeSampleVoice,
    getActiveSampleVoice,
    () => null,
  );

  return (
    <Box sx={{ width: "100%", textAlign: prominent ? "center" : undefined }}>
      <Typography
        variant={prominent ? "h5" : "caption"}
        color={prominent ? "text.primary" : "text.secondary"}
        component="p"
        sx={{
          mb: prominent ? 1.5 : 1,
          fontWeight: 700,
          letterSpacing: 0.2,
          textAlign: prominent ? "center" : undefined,
        }}
      >
        Sample voices
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {samples.map((voice) => {
          const id = `${extensionSlug}:${voice.id}`;
          const playing = activeId === id;
          return (
            <Button
              key={voice.id}
              size={prominent ? "medium" : "small"}
              variant={playing ? "contained" : "outlined"}
              aria-pressed={playing}
              startIcon={
                playing ? (
                  <StopIcon fontSize="small" />
                ) : (
                  <PlayArrowIcon fontSize="small" />
                )
              }
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleSampleVoice(id, voice.src);
              }}
              sx={{ textTransform: "none", borderRadius: 999 }}
            >
              {voice.name}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}
