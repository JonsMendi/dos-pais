"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "@/components/ui/SectionTitle";
import ExploreCard from "@/components/ui/ExploreCard";
import { exploreCardImages } from "@/data/placeholders";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function ExploreSection() {
  const { t } = useTranslation();

  return (
    <Box
      id="explore"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "#F4EDE0",
        scrollMarginTop: { xs: 80, md: 96 },
      }}
    >
      <Container>
        <SectionTitle
          eyebrow={t.explore.eyebrow}
          title={t.explore.title}
          description={t.explore.description}
        />
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {t.explore.cards.map((card, i) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ExploreCard
                title={card.title}
                description={card.description}
                image={exploreCardImages[i]}
                href={i === 0 ? "/restaurants" : undefined}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

