"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AmenityCard from "@/components/ui/AmenityCard";
import { amenityIcons, apartmentImage } from "@/data/placeholders";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function ApartmentPreview() {
  const { t } = useTranslation();

  return (
    <Box
      id="apartment"
      component="section"
      sx={{ py: { xs: 10, md: 16 }, scrollMarginTop: { xs: 80, md: 96 } }}
    >
      <Container>
        <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: { xs: "4 / 5", md: "5 / 6" },
                borderRadius: 6,
                overflow: "hidden",
                backgroundImage: `url(${apartmentImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow:
                  "0 40px 80px -40px rgba(20, 42, 58, 0.35), 0 8px 24px -12px rgba(20, 42, 58, 0.15)",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ color: "primary.light" }}>
                {t.apartment.eyebrow}
              </Typography>
              <Typography variant="h2" component="h2">
                {t.apartment.title}
              </Typography>
              <Typography variant="subtitle1">
                {t.apartment.body1}
              </Typography>
              <Typography variant="body2">
                {t.apartment.body2}
              </Typography>
              <Box sx={{ pt: 1 }}>
                <Button variant="contained" color="primary" size="large">
                  {t.apartment.cta}
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Typography
            variant="overline"
            sx={{ color: "primary.light", display: "block", mb: 3, textAlign: "center" }}
          >
            {t.apartment.whatsInside}
          </Typography>
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {amenityIcons.map((icon, i) => (
              <Grid key={icon} size={{ xs: 6, sm: 4, md: 2 }}>
                <AmenityCard icon={icon} label={t.apartment.amenities[i] ?? icon} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}


