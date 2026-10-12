"use client";

import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { stopSampleVoice } from "./sample-voice-player";

const DEMO_EMBED =
  "https://www.youtube.com/embed/1o0eG5Q71Ps?rel=0&autoplay=1";

export default function DemoVideoDialog() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <Button
        variant="contained"
        size="large"
        startIcon={<PlayArrowIcon />}
        sx={{ mt: 2 }}
        onClick={() => {
          stopSampleVoice();
          setOpen(true);
        }}
      >
        Watch the demo
      </Button>
      <Dialog
        open={open}
        onClose={close}
        maxWidth="md"
        fullWidth
        aria-labelledby="ai-readers-demo-title"
      >
        <DialogTitle
          id="ai-readers-demo-title"
          sx={{ display: "flex", alignItems: "center", pr: 1 }}
        >
          <Box component="span" sx={{ flex: 1 }}>
            AI Readers demo
          </Box>
          <IconButton aria-label="Close demo" onClick={close}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ pt: 0, pb: 3 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              pt: "56.25%",
              borderRadius: 1,
              overflow: "hidden",
              bgcolor: "common.black",
            }}
          >
            {open && (
              <Box
                component="iframe"
                src={DEMO_EMBED}
                title="AI Readers demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                sx={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
              />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
