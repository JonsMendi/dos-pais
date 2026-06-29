import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { heroImage } from "@/data/placeholders";

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "100svh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        color: "common.white",
        overflow: "hidden",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft tonal overlays for legibility and calm */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(17,33,44,0.55) 0%, rgba(17,33,44,0.25) 45%, rgba(17,33,44,0.7) 100%)",
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 80% at 50% 60%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1, py: { xs: 14, md: 18 } }}>
        <Stack
          spacing={{ xs: 4, md: 5 }}
          sx={{ textAlign: "center", mx: "auto", maxWidth: 920, alignItems: "center" }}
        >
          <Typography
            variant="overline"
            sx={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.32em" }}
          >
            Ponta Delgada · São Miguel · Azores
          </Typography>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "common.white",
              fontWeight: 300,
            }}
          >
            Dos Pais
          </Typography>

          <Typography
            variant="h3"
            component="p"
            sx={{
              color: "rgba(255,255,255,0.92)",
              fontStyle: "italic",
              fontWeight: 300,
              maxWidth: 640,
            }}
          >
            A place to slow down.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "rgba(255,255,255,0.78)",
              maxWidth: 560,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            A quiet apartment on the edge of the Atlantic, kept warm by family
            and the slow rhythm of the island.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
          >
            <Button
              variant="contained"
              size="large"
              href="#explore"
              sx={{
                backgroundColor: "common.white",
                color: "primary.main",
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "rgba(255,255,255,0.92)" },
              }}
            >
              Explore
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#apartment"
              sx={{
                color: "common.white",
                borderColor: "rgba(255,255,255,0.5)",
                px: 4,
                py: 1.5,
                "&:hover": {
                  borderColor: "common.white",
                  backgroundColor: "rgba(255,255,255,0.08)",
                },
              }}
            >
              View the apartment
            </Button>
          </Stack>
        </Stack>

        <Stack
          spacing={1}
          sx={{
            position: "absolute",
            bottom: { xs: 24, md: 40 },
            left: 0,
            right: 0,
            color: "rgba(255,255,255,0.7)",
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <Typography
            variant="overline"
            sx={{ letterSpacing: "0.3em", fontSize: "0.65rem" }}
          >
            Scroll
          </Typography>
          <ArrowDownwardRoundedIcon fontSize="small" />
        </Stack>
      </Container>
    </Box>
  );
}
