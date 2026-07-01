"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import HikingCard from "@/components/ui/HikingCard";
import { trails } from "@/data/hiking";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function HikingPageContent() {
  const { t } = useTranslation();

  return (
    <>
      {/* ── Page header ─────────────────────────────────────── */}
      <Box
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          background: "linear-gradient(180deg, #C5D5C0 0%, #FBFAF7 100%)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container>
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Button
              component="a"
              href="/#explore"
              startIcon={<ArrowBackRoundedIcon fontSize="small" />}
              size="small"
              sx={{
                color: "text.secondary",
                alignSelf: "flex-start",
                px: 0,
                "&:hover": { backgroundColor: "transparent", color: "text.primary" },
              }}
            >
              {t.hikingPage.backLabel}
            </Button>
          </Stack>

          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Typography variant="overline" sx={{ color: "primary.light" }}>
              {t.hikingPage.eyebrow}
            </Typography>
            <Typography variant="h1" component="h1">
              {t.hikingPage.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", maxWidth: 640 }}
            >
              {t.hikingPage.description}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* ── Trail list ──────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {trails.map((trail) => (
              <Grid key={trail.name} size={{ xs: 12, sm: 6, lg: 4 }}>
                <HikingCard {...trail} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
