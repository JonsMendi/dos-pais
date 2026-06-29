import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import WavesRoundedIcon from "@mui/icons-material/WavesRounded";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import LocalParkingRoundedIcon from "@mui/icons-material/LocalParkingRounded";
import BalconyRoundedIcon from "@mui/icons-material/BalconyRounded";

const iconMap: Record<string, React.ElementType> = {
  wifi: WifiRoundedIcon,
  kitchen: RestaurantRoundedIcon,
  sea: WavesRoundedIcon,
  coffee: LocalCafeRoundedIcon,
  parking: LocalParkingRoundedIcon,
  balcony: BalconyRoundedIcon,
};

type Props = { icon: string; label: string };

export default function AmenityCard({ icon, label }: Props) {
  const Icon = iconMap[icon] ?? WavesRoundedIcon;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        textAlign: "center",
        px: 2,
        py: { xs: 3, sm: 4 },
        borderRadius: 4,
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        transition: "transform 300ms ease, border-color 300ms ease",
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "primary.light",
        },
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          backgroundColor: "rgba(31, 61, 82, 0.06)",
          color: "primary.main",
        }}
      >
        <Icon fontSize="small" />
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "text.primary", fontWeight: 500, letterSpacing: "0.01em" }}
      >
        {label}
      </Typography>
    </Box>
  );
}
