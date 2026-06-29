import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "@/components/ui/SectionTitle";
import RecommendationCard from "@/components/ui/RecommendationCard";
import { recommendations } from "@/data/placeholders";

export default function FeaturedRecommendations() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 10, md: 16 } }}
    >
      <Container>
        <SectionTitle
          eyebrow="Featured"
          title="A few favourites, written by hand."
          description="The kind of places we send our own friends to — quiet, honest, and worth the small detour."
          action={<Button variant="outlined">All recommendations</Button>}
        />
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {recommendations.map((r, i) => (
            <Grid
              key={r.title}
              size={{ xs: 12, sm: 6, md: i === 0 ? 8 : 4 }}
            >
              <RecommendationCard {...r} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
