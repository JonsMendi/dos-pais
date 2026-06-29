import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionTitle from "@/components/ui/SectionTitle";
import WeatherLocationCard from "@/components/ui/WeatherLocationCard";
import { getIslandWeather } from "@/lib/weather/provider";

export default async function WeatherAroundIsland() {
  const locations = await getIslandWeather();

  return (
    <Box
      id="weather"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        scrollMarginTop: { xs: 80, md: 96 },
        position: "relative",
        background:
          "linear-gradient(180deg, #FBFAF7 0%, #EFE9DD 100%)",
        overflow: "hidden",
      }}
    >
      {/* Soft sun-wash in the background */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -160,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255, 216, 150, 0.45) 0%, rgba(255, 216, 150, 0) 70%)",
          filter: "blur(6px)",
          pointerEvents: "none",
        }}
      />

      <Container sx={{ position: "relative" }}>
        <SectionTitle
          eyebrow="Weather around the island"
          title={
            <>
              The weather in the Azores
              <Box component="span" sx={{ display: { xs: "block", md: "inline" } }}>
                {" "}
                loves to surprise us.
              </Box>
            </>
          }
          description="Sunshine, mist and rain can all happen at the same time in different corners of São Miguel. Take a quick look around the island, and let today decide where your adventure begins."
        />

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {locations.map((loc) => (
            <Grid key={loc.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <WeatherLocationCard location={loc} />
            </Grid>
          ))}
        </Grid>

        <Stack
          spacing={1}
          sx={{
            mt: { xs: 6, md: 8 },
            alignItems: { xs: "flex-start", md: "center" },
            textAlign: { xs: "left", md: "center" },
          }}
        >
          <Typography variant="overline" sx={{ color: "primary.light" }}>
            A note from us
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 620 }}>
            Live weather kindly provided by{" "}
            <Box
              component="a"
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                fontWeight: 500,
                borderBottom: "1px solid",
                borderColor: "primary.light",
              }}
            >
              Open-Meteo
            </Box>
            . Live cameras open on{" "}
            <Box
              component="a"
              href="https://spotazores.com/en/webcams/sao-miguel/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                fontWeight: 500,
                borderBottom: "1px solid",
                borderColor: "primary.light",
              }}
            >
              SpotAzores
            </Box>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
