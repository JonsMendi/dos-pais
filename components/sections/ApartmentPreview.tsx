import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AmenityCard from "@/components/ui/AmenityCard";
import { amenities, apartmentImage } from "@/data/placeholders";

export default function ApartmentPreview() {
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
                The Apartment
              </Typography>
              <Typography variant="h2" component="h2">
                A quiet home, kept just as we left it.
              </Typography>
              <Typography variant="subtitle1">
                Dos Pais was opened by our parents, in a building they have
                loved for decades. Linen on the bed, coffee on the stove, and
                light that moves through the rooms with the day. Nothing more,
                nothing less.
              </Typography>
              <Typography variant="body2">
                Two bedrooms, a soft living room, and a balcony that looks
                toward the harbour. Designed for long mornings, slow meals, and
                the kind of stay that does not feel rushed.
              </Typography>
              <Box sx={{ pt: 1 }}>
                <Button variant="contained" color="primary" size="large">
                  View apartment
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
            What&rsquo;s inside
          </Typography>
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {amenities.map((a) => (
              <Grid key={a.label} size={{ xs: 6, sm: 4, md: 2 }}>
                <AmenityCard icon={a.icon} label={a.label} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
