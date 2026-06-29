"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import type { Restaurant } from "@/data/restaurants";
import { useTranslation } from "@/lib/i18n/useTranslation";

type Props = Restaurant & { index: number };

export default function RestaurantCard({ name, description, mapsUrl, image }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
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
      {/* Image — only rendered when provided */}
      {image && (
        <Box
          sx={{
            width: { xs: "100%", sm: 180 },
            minHeight: { xs: 160, sm: "auto" },
            flexShrink: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Content */}
      <Stack
        spacing={2}
        sx={{ p: { xs: 3, md: 4 }, flexGrow: 1 }}
      >
        <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
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
          <Box sx={{ pt: 0.5 }}>
            <Button
              variant="outlined"
              size="small"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<PlaceRoundedIcon fontSize="small" />}
            >
              {t.restaurantsPage.mapsButton}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
