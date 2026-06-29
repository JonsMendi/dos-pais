import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "@/components/ui/SectionTitle";
import ExploreCard from "@/components/ui/ExploreCard";
import { exploreCards } from "@/data/placeholders";

export default function ExploreSection() {
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
          eyebrow="Explore São Miguel"
          title="An island made for slow days."
          description="A small selection to help you fall into the rhythm of the island — from the coast, to the crater lakes, to the long tables by the sea."
        />
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {exploreCards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <ExploreCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
