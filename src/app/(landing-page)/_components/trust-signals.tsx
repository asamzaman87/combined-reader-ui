"use client";

import {
  FEATURE_TAGS,
  SITE_STATS,
  USER_QUOTES,
  type UserQuote,
} from "@/data/social-proof";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Box, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";

function StarRow({ rating, size = 16 }: { rating: number; size?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.4;

  return (
    <Box
      aria-label={`${rating} out of 5 stars`}
      sx={{ display: "inline-flex", alignItems: "center", color: "#F5A623" }}
    >
      {Array.from({ length: full }).map((_, i) => (
        <StarIcon key={`full-${i}`} sx={{ fontSize: size }} />
      ))}
      {hasHalf ? <StarHalfIcon sx={{ fontSize: size }} /> : null}
    </Box>
  );
}

/** Compact trust strip for the first viewport. */
export function TrustStrip({ compact = false }: { compact?: boolean }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={compact ? 1 : 1.5}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      useFlexGap
      sx={{ width: "100%" }}
    >
      <Stack direction="row" spacing={0.75} alignItems="center">
        <StarRow rating={SITE_STATS.rating} />
        <Typography variant="body2" color="text.primary" fontWeight={700}>
          {SITE_STATS.rating}/5
        </Typography>
        <Typography variant="caption" color="text.secondary">
          · {SITE_STATS.ratingCountLabel}
        </Typography>
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: { xs: "none", sm: "inline" } }}
      >
        ·
      </Typography>

      <Typography variant="body2" color="text.primary" fontWeight={600}>
        {SITE_STATS.usersCopy}
      </Typography>

      <Box
        component="span"
        title="Featured on Chrome Web Store"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          lineHeight: 0,
        }}
      >
        <Image
          src="/images/chrome-featured-badge.svg"
          alt="Featured on Chrome Web Store"
          width={148}
          height={28}
          priority
        />
      </Box>
    </Stack>
  );
}

export function FeatureTagRow() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "center",
      }}
    >
      {FEATURE_TAGS.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          size="small"
          variant="outlined"
          sx={{ fontWeight: 600 }}
        />
      ))}
    </Box>
  );
}

export function InlineQuotes({
  quotes = USER_QUOTES.slice(0, 2),
}: {
  quotes?: UserQuote[];
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: `repeat(${Math.min(quotes.length, 2)}, 1fr)` },
        gap: 2,
        width: "100%",
        maxWidth: 860,
        mx: "auto",
      }}
    >
      {quotes.map((item) => (
        <Box
          key={item.name + item.quote.slice(0, 24)}
          sx={(theme) => ({
            textAlign: "left",
            px: 2,
            py: 1.5,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255,255,255,0.55)"
                : "rgba(255,255,255,0.04)",
          })}
        >
          <StarRow rating={5} size={14} />
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ mt: 0.75, fontStyle: "italic", lineHeight: 1.45 }}
          >
            “{item.quote}”
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 0.75, display: "block" }}>
            {item.name}
            {item.role ? ` · ${item.role}` : ""}
            {item.extension ? ` · ${item.extension}` : ""}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

