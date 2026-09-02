"use client";

import {
  Alert,
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import type { FreeTtsWidgetProps } from "./types";
import { useFreeTts } from "./use-free-tts";

const DEFAULT_TEXT =
  "Welcome to AI Readers free text-to-speech. Paste any text, pick a voice, and listen instantly in your browser.";

export default function FreeTtsWidget({
  variant = "full",
  ctaHref = "/gpt-reader",
  ctaLabel = "Install a Reader extension for natural AI voices",
  maxChars = 5000,
}: FreeTtsWidgetProps) {
  const [text, setText] = useState(DEFAULT_TEXT);
  const {
    browserVoices,
    browserVoiceId,
    setBrowserVoiceId,
    rate,
    setRate,
    isSpeaking,
    error,
    speak,
    stop,
  } = useFreeTts();

  const isCompact = variant === "compact";
  const charCount = text.length;
  const canSubmit = text.trim().length > 0 && charCount <= maxChars;

  return (
    <Card variant="outlined" sx={{ p: { xs: 2, sm: isCompact ? 2 : 3 } }}>
      <Stack spacing={2}>
        {!isCompact && (
          <Box>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Free online text-to-speech
            </Typography>
            <Typography variant="body2" color="text.secondary">
              No signup required. Your text stays in your browser.
            </Typography>
          </Box>
        )}

        <TextField
          multiline
          minRows={isCompact ? 4 : 6}
          maxRows={isCompact ? 8 : 12}
          fullWidth
          label="Text to speak"
          value={text}
          onChange={(event) => setText(event.target.value.slice(0, maxChars))}
          helperText={`${charCount.toLocaleString()} / ${maxChars.toLocaleString()} characters`}
        />

        <FormControl fullWidth size="small">
          <InputLabel id="tts-voice-label">Voice</InputLabel>
          <Select
            labelId="tts-voice-label"
            label="Voice"
            value={browserVoiceId}
            onChange={(event) => setBrowserVoiceId(event.target.value)}
            disabled={!browserVoices.length}
          >
            {browserVoices.map((voice) => (
              <MenuItem key={voice.id} value={voice.id}>
                {voice.name} ({voice.lang})
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box px={1}>
          <Typography variant="caption" color="text.secondary">
            Speed: {rate.toFixed(1)}x
          </Typography>
          <Slider
            min={0.5}
            max={2}
            step={0.1}
            value={rate}
            onChange={(_, value) => setRate(value as number)}
            size="small"
          />
        </Box>

        {error && <Alert severity="warning">{error}</Alert>}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <Button variant="contained" disabled={!canSubmit} onClick={() => speak(text)}>
            {isSpeaking ? "Playing..." : "Play"}
          </Button>
          <Button variant="outlined" disabled={!isSpeaking} onClick={stop}>
            Stop
          </Button>
          <Button variant="outlined" component={Link} href={ctaHref}>
            Get AI voices
          </Button>
        </Stack>

        <Alert severity="info">
          <Typography variant="body2">
            For natural AI voices inside ChatGPT, Claude, Gemini, and more:{" "}
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Typography>
        </Alert>
      </Stack>
    </Card>
  );
}
