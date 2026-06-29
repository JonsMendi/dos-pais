"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "@/components/ui/SectionTitle";
import RecommendationCard from "@/components/ui/RecommendationCard";
import { recommendationData } from "@/data/placeholders";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function FeaturedRecommendations() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{ py: { xs: 10, md: 16 } }}
    >
      <Container>
        <SectionTitle
          eyebrow={t.recommendations.eyebrow}
          title={t.recommendations.title}
          description={t.recommendations.description}
          action={<Button variant="outlined">{t.recommendations.cta}</Button>}
        />
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {t.recommendations.items.map((item, i) => (
            <Grid
              key={item.title}
              size={{ xs: 12, sm: 6, md: i === 0 ? 8 : 4 }}
            >
              <RecommendationCard
                title={item.title}
                category={item.category}
                description={item.description}
                rating={recommendationData[i]?.rating ?? 0}
                image={recommendationData[i]?.image ?? ""}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

