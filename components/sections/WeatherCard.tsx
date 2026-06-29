import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import { weather } from "@/data/placeholders";

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          backgroundColor: "rgba(31, 61, 82, 0.06)",
          color: "primary.main",
        }}
      >
        <Icon fontSize="small" />
      </Box>
      <Stack spacing={0.25}>
        <Typography variant="caption" sx={{ color: "text.secondary", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {label}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500 }}>
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default function WeatherCard() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Box
          sx={{
            borderRadius: 6,
            p: { xs: 4, md: 6 },
            background:
              "linear-gradient(135deg, #EAF1F6 0%, #DCE7EE 60%, #C8D9E3 100%)",
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 30px 70px -50px rgba(20,42,58,0.35)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              top: -120,
              right: -80,
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255, 220, 150, 0.55) 0%, rgba(255,220,150,0) 70%)",
              filter: "blur(2px)",
            }}
          />
          <Grid container spacing={4} sx={{ alignItems: "center", position: "relative" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", color: "text.secondary" }}>
                  <PlaceRoundedIcon fontSize="small" />
                  <Typography variant="body2">{weather.location}</Typography>
                </Stack>
                <Stack direction="row" spacing={2} sx={{ alignItems: "baseline" }}>
                  <Typography
                    variant="h1"
                    component="div"
                    sx={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontWeight: 300,
                      lineHeight: 1,
                      fontSize: { xs: "5rem", md: "7rem" },
                    }}
                  >
                    {weather.temperatureC}°
                  </Typography>
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{ color: "text.secondary", fontStyle: "italic" }}
                  >
                    {weather.condition}
                  </Typography>
                </Stack>
                <Typography variant="body2">
                  A gentle island day. Soft breeze from the north, light cloud
                  toward the late afternoon.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2.5}>
                <Stat icon={WbSunnyRoundedIcon} label="Condition" value={weather.condition} />
                <Divider />
                <Stat icon={OpacityRoundedIcon} label="Humidity" value={`${weather.humidity}%`} />
                <Divider />
                <Stat icon={AirRoundedIcon} label="Wind" value={`${weather.windKmh} km/h`} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
