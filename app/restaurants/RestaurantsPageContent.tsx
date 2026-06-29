"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import RestaurantCard from "@/components/ui/RestaurantCard";
import { restaurantCategories } from "@/data/restaurants";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function RestaurantsPageContent() {
  const { t } = useTranslation();

  return (
    <>
      {/* ── Page header ─────────────────────────────────────── */}
      <Box
        sx={{
          pt: { xs: 14, md: 18 },
          pb: { xs: 8, md: 12 },
          background:
            "linear-gradient(180deg, #EFE9DD 0%, #FBFAF7 100%)",
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
              {t.restaurantsPage.backLabel}
            </Button>
          </Stack>

          <Stack spacing={3} sx={{ maxWidth: 720 }}>
            <Typography variant="overline" sx={{ color: "primary.light" }}>
              {t.restaurantsPage.eyebrow}
            </Typography>
            <Typography variant="h1" component="h1">
              {t.restaurantsPage.title}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "text.secondary", maxWidth: 620 }}
            >
              {t.restaurantsPage.description}
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* ── Categories ──────────────────────────────────────── */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container>
          <Stack
            divider={<Divider sx={{ my: { xs: 6, md: 10 } }} />}
            spacing={0}
          >
            {restaurantCategories.map((category) => (
              <Box key={category.id} component="section">
                {/* Category header */}
                <Stack spacing={1} sx={{ mb: { xs: 5, md: 6 }, maxWidth: 680 }}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontWeight: 400,
                    }}
                  >
                    {category.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "text.secondary", fontStyle: "italic" }}
                  >
                    {category.tagline}
                  </Typography>
                </Stack>

                {/* Restaurant list */}
                <Stack spacing={3}>
                  {category.restaurants.map((restaurant, i) => (
                    <RestaurantCard key={i} {...restaurant} index={i} />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
