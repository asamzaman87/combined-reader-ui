"use client";

import { type ReaderExtension } from "@/data/extensions";
import { type ExtensionPreview } from "@/data/homepage-previews";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SampleVoices from "./sample-voices";
import { stopSampleVoice } from "./sample-voice-player";
import StoreInstallButtons from "./store-install-buttons";

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

  const openDetails = () => {
    stopSampleVoice();
    router.push(href);
  };

  return (
    <Card
      variant="outlined"
      role="link"
      tabIndex={0}
      aria-label={`Open ${extension.name} details`}
      onClick={openDetails}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openDetails();
        }
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
          gap: 1.25,
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
          <Typography variant="h6" color="text.primary">
            {extension.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Voices from {preview.platformName}
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            // Keep blurbs to a consistent block so sample voices sit close
            // regardless of card height in the grid row.
            minHeight: { sm: "2.75rem" },
          }}
        >
          {extension.shortBlurb}
        </Typography>

        {/* No mt:auto — that was creating a large gap on shorter cards
            (e.g. ChatGPT / Google) before sample voices. Buttons still
            stopPropagation so empty card space opens the detail page. */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <SampleVoices
            extensionSlug={extension.slug}
            samples={preview.samples}
          />
          <StoreInstallButtons extension={extension} />
        </Box>
      </CardContent>
    </Card>
  );
}
