"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "@/components/ui/SectionTitle";
import WeatherLocationCard from "@/components/ui/WeatherLocationCard";
import type { WeatherLocation } from "@/lib/weather/types";
import { useTranslation } from "@/lib/i18n/useTranslation";

type Props = { locations: WeatherLocation[] };

export default function WeatherAroundIslandClient({ locations }: Props) {
  const { t } = useTranslation();

  return (
    <Box
      id="weather"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        scrollMarginTop: { xs: 80, md: 96 },
        position: "relative",
        background: "linear-gradient(180deg, #FBFAF7 0%, #EFE9DD 100%)",
        overflow: "hidden",
      }}
    >
      {/* Soft sun-wash in the background */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -160,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 216, 150, 0.45) 0%, rgba(255, 216, 150, 0) 70%)",
          filter: "blur(6px)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative" }}>
        <SectionTitle
          eyebrow={t.weather.eyebrow}
          title={t.weather.title}
          description={t.weather.description}
        />

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {locations.map((loc) => (
            <Grid key={loc.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <WeatherLocationCard location={loc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
