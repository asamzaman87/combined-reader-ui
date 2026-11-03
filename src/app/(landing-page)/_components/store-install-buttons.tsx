"use client";

import { type ReaderExtension } from "@/data/extensions";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import Image from "next/image";

type StoreKey = "chrome" | "firefox" | "edge";

const STORE_META: Record<
  StoreKey,
  { label: string; icon: string; opens: string }
> = {
  chrome: {
    label: "Chrome",
    icon: "/images/chrome.png",
    opens: "Opens Chrome Web Store",
  },
  firefox: {
    label: "Firefox",
    icon: "/images/firefox.png",
    opens: "Opens Firefox Add-ons",
  },
  edge: {
    label: "Edge",
    icon: "/images/edge.png",
    opens: "Opens Edge Add-ons",
  },
};

export default function StoreInstallButtons({
  extension,
  size = "compact",
}: {
  extension: ReaderExtension;
  size?: "compact" | "comfortable";
}) {
  const stores = (
    [
      ["chrome", extension.chrome],
      ["firefox", extension.firefox],
      ["edge", extension.edge],
    ] as const
  ).filter((entry): entry is [StoreKey, string] => Boolean(entry[1]));

  const iconPx = size === "comfortable" ? 28 : 22;

  return (
    <Box sx={{ width: "100%", textAlign: "center" }}>
      <Typography
        variant="caption"
        color="text.secondary"
        component="p"
        sx={{ mb: 0.75, fontWeight: 700, letterSpacing: 0.2 }}
      >
        Install
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 0.75,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {stores.map(([key, url]) => {
          const meta = STORE_META[key];
          return (
            <Tooltip
              key={key}
              title={`${meta.label} — ${meta.opens}`}
              arrow
              enterDelay={200}
            >
              <IconButton
                component="a"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Install ${extension.name} for ${meta.label} (${meta.opens})`}
                size="small"
                onClick={(event) => event.stopPropagation()}
                sx={(theme) => ({
                  width: size === "comfortable" ? 44 : 38,
                  height: size === "comfortable" ? 44 : 38,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  bgcolor: theme.palette.background.paper,
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "action.hover",
                  },
                })}
              >
                <Image
                  src={meta.icon}
                  alt=""
                  width={iconPx}
                  height={iconPx}
                  style={{ width: iconPx, height: iconPx, objectFit: "contain" }}
                />
              </IconButton>
            </Tooltip>
          );
        })}
      </Box>
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: "block", mt: 0.75, fontSize: "0.7rem" }}
      >
        Click to open the store and install
      </Typography>
    </Box>
  );
}
