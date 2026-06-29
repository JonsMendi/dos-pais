import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import WbCloudyRoundedIcon from "@mui/icons-material/WbCloudyRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import BlurOnRoundedIcon from "@mui/icons-material/BlurOnRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import ThunderstormRoundedIcon from "@mui/icons-material/ThunderstormRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import type { WeatherCondition, WeatherLocation } from "@/lib/weather/types";

const iconMap: Record<WeatherCondition, React.ElementType> = {
  sunny: WbSunnyRoundedIcon,
  "partly-cloudy": WbCloudyRoundedIcon,
  cloudy: CloudRoundedIcon,
  mist: BlurOnRoundedIcon,
  rain: WaterDropRoundedIcon,
  storm: ThunderstormRoundedIcon,
};

// Subtle accent tints per condition — used on the icon + a soft top gradient.
const accentMap: Record<WeatherCondition, { color: string; wash: string }> = {
  sunny: { color: "#D9A24A", wash: "rgba(255, 216, 150, 0.55)" },
  "partly-cloudy": { color: "#7FA9C2", wash: "rgba(193, 217, 232, 0.55)" },
  cloudy: { color: "#8896A1", wash: "rgba(190, 200, 210, 0.6)" },
  mist: { color: "#9AB0B8", wash: "rgba(212, 222, 226, 0.65)" },
  rain: { color: "#5C8AA8", wash: "rgba(170, 196, 214, 0.6)" },
  storm: { color: "#4A5A6B", wash: "rgba(160, 175, 190, 0.6)" },
};

type Props = { location: WeatherLocation };

export default function WeatherLocationCard({ location }: Props) {
  const Icon = iconMap[location.condition];
  const accent = accentMap[location.condition];

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 30px 70px -40px rgba(20, 42, 58, 0.4)",
        },
      }}
    >
      {/* Image with soft, condition-tinted wash */}
      <Box
        sx={{
          position: "relative",
          aspectRatio: { xs: "5 / 4", md: "4 / 3" },
          backgroundImage: `url(${location.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, ${accent.wash} 0%, rgba(0,0,0,0) 55%, rgba(17,33,44,0.35) 100%)`,
          }}
        />
        {/* Temperature, top-left */}
        <Stack
          direction="row"
          spacing={1.25}
          sx={{
            position: "absolute",
            top: 18,
            left: 18,
            alignItems: "center",
            px: 1.5,
            py: 0.75,
            borderRadius: 999,
            backgroundColor: "rgba(251, 250, 247, 0.92)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(20,42,58,0.06)",
          }}
        >
          <Icon sx={{ color: accent.color, fontSize: 20 }} />
          <Typography
            variant="body2"
            sx={{ color: "text.primary", fontWeight: 600, letterSpacing: "0.01em" }}
          >
            {location.temperatureC}°
          </Typography>
        </Stack>
      </Box>

      {/* Content */}
      <Stack
        spacing={2.5}
        sx={{ p: { xs: 3, md: 3.5 }, flexGrow: 1 }}
      >
        <Stack spacing={1}>
          <Typography variant="h4" component="h3">
            {location.name}
          </Typography>
          <Typography variant="body2">{location.description}</Typography>
        </Stack>

        <Box
          sx={{
            p: 2,
            borderRadius: 3,
            backgroundColor: "rgba(31, 61, 82, 0.04)",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "primary.light", display: "block", mb: 0.5 }}
          >
            Best today
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {location.activity}
          </Typography>
        </Box>

        <Box sx={{ mt: "auto" }}>
          <Button
            variant="outlined"
            size="small"
            href={location.webcamUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<VideocamRoundedIcon fontSize="small" />}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            View live camera
          </Button>
        </Box>
      </Stack>
    </Card>
  );
}
