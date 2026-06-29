import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/placeholders";

export default function Testimonials() {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 10, md: 16 }, backgroundColor: "#F4EDE0" }}
    >
      <Container>
        <SectionTitle
          eyebrow="From our guests"
          title="Quiet notes, left at check-out."
          align="center"
        />
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {testimonials.map((t, i) => (
            <Grid key={i} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  p: { xs: 4, md: 5 },
                  backgroundColor: "background.paper",
                  borderRadius: 6,
                  border: "1px solid",
                  borderColor: "divider",
                  position: "relative",
                }}
              >
                <FormatQuoteRoundedIcon
                  sx={{
                    color: "rgba(31, 61, 82, 0.18)",
                    fontSize: 56,
                    transform: "rotate(180deg)",
                    mb: 1,
                  }}
                />
                <Stack spacing={3}>
                  <Typography
                    variant="h4"
                    component="p"
                    sx={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontStyle: "italic",
                      lineHeight: 1.45,
                      color: "text.primary",
                      fontSize: { xs: "1.25rem", md: "1.4rem" },
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.light" }}
                  >
                    {t.author}
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
