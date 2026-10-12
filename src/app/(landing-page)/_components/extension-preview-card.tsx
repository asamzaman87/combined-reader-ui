"use client";

import { type ReaderExtension } from "@/data/extensions";
import { type ExtensionPreview } from "@/data/homepage-previews";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SampleVoices from "./sample-voices";
import { stopSampleVoice } from "./sample-voice-player";

function PlatformMark({ src, name }: { src: string; name: string }) {
  return (
    <Box
      title={name}
      sx={(theme) => ({
        width: 34,
        height: 34,
        borderRadius: "9px",
        overflow: "hidden",
        bgcolor: "#fff",
        border: "2px solid",
        borderColor: theme.palette.background.paper,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <Image
        src={src}
        alt=""
        width={26}
        height={26}
        style={{ width: 26, height: 26, objectFit: "contain" }}
      />
    </Box>
  );
}

export default function ExtensionPreviewCard({
  extension,
  preview,
}: {
  extension: ReaderExtension;
  preview: ExtensionPreview;
}) {
  const router = useRouter();
  const href = `/${extension.slug}`;

  return (
    <Card
      variant="outlined"
      onClick={() => {
        stopSampleVoice();
        router.push(href);
      }}
      sx={{
        height: "100%",
        cursor: "pointer",
        "&:hover": { borderColor: "primary.main" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 1.5,
          py: 3,
          height: "100%",
        }}
      >
        <Box sx={{ position: "relative", width: 72, height: 72 }}>
          <Image
            src={extension.icon}
            alt=""
            width={72}
            height={72}
            style={{ borderRadius: "50%" }}
          />
          <Box sx={{ position: "absolute", right: -6, bottom: -6 }}>
            <PlatformMark src={preview.icon} name={preview.platformName} />
          </Box>
        </Box>

        <Box>
          <Typography
            component={Link}
            href={href}
            variant="h6"
            color="text.primary"
            onClick={(event) => event.stopPropagation()}
            sx={{ textDecoration: "none" }}
          >
            {extension.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Voices from {preview.platformName}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary">
          {extension.shortBlurb}
        </Typography>

        <Box sx={{ width: "100%", mt: "auto" }} onClick={(event) => event.stopPropagation()}>
          <SampleVoices
            extensionSlug={extension.slug}
            samples={preview.samples}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
