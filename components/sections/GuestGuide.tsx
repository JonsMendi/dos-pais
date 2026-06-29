import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SectionTitle from "@/components/ui/SectionTitle";
import GuestGuideCard from "@/components/ui/GuestGuideCard";
import { guestGuide } from "@/data/placeholders";

export default function GuestGuide() {
  return (
    <Box
      id="guide"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: "#FBFAF7",
        scrollMarginTop: { xs: 80, md: 96 },
      }}
    >
      <Container>
        <SectionTitle
          eyebrow="Guest Guide"
          title="Everything you need, gently arranged."
          description="A small, calm folder of the things you might want to know once you have arrived — from the Wi-Fi password to the nearest pharmacy."
        />
        <Grid container spacing={{ xs: 2.5, md: 3 }}>
          {guestGuide.map((g) => (
            <Grid key={g.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <GuestGuideCard title={g.title} description={g.description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
