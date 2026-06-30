"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import type { Beach } from "@/data/beaches";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function BeachCard({ name, description, mapsUrl, tip }: Beach) {
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
              backgroundColor: "rgba(124, 152, 133, 0.08)",
              border: "1px solid",
              borderColor: "rgba(124, 152, 133, 0.22)",
            }}
          >
            <LightbulbRoundedIcon
              fontSize="small"
              sx={{ color: "secondary.main", flexShrink: 0, mt: 0.25 }}
            />
            <Stack spacing={0.25}>
              <Typography
                variant="overline"
                sx={{ color: "secondary.main", lineHeight: 1.4 }}
              >
                {t.beachesPage.tipLabel}
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
            {t.beachesPage.mapsButton}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
