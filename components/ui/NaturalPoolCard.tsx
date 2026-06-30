"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import type { NaturalPool } from "@/data/naturalpools";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function NaturalPoolCard({ name, description, mapsUrl, tip }: NaturalPool) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper",
        transition: "box-shadow 250ms ease, transform 250ms ease",
        "&:hover": {
          boxShadow: "0 20px 50px -30px rgba(20, 42, 58, 0.28)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Stack spacing={2} sx={{ p: { xs: 3, md: 4 } }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 400 }}
        >
          {name}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.65 }}>
          {description}
        </Typography>

        {tip && (
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "flex-start",
              p: 2,
              borderRadius: 3,
              backgroundColor: "rgba(127, 169, 194, 0.08)",
              border: "1px solid",
              borderColor: "rgba(127, 169, 194, 0.25)",
            }}
          >
            <LightbulbRoundedIcon
              fontSize="small"
              sx={{ color: "primary.light", flexShrink: 0, mt: 0.25 }}
            />
            <Stack spacing={0.25}>
              <Typography
                variant="overline"
                sx={{ color: "primary.light", lineHeight: 1.4 }}
              >
                {t.naturalPoolsPage.tipLabel}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {tip}
              </Typography>
            </Stack>
          </Box>
        )}

        <Box>
          <Button
            variant="outlined"
            size="small"
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<PlaceRoundedIcon fontSize="small" />}
          >
            {t.naturalPoolsPage.mapsButton}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
