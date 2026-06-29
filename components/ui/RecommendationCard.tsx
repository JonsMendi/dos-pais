import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

type Props = {
  image: string;
  title: string;
  description: string;
  category: string;
  rating: number;
};

export default function RecommendationCard({
  image,
  title,
  description,
  category,
  rating,
}: Props) {
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
      <Box
        sx={{
          position: "relative",
          aspectRatio: { xs: "5 / 4", md: "4 / 3" },
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Chip
          label={category}
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            backgroundColor: "rgba(251, 250, 247, 0.92)",
            backdropFilter: "blur(6px)",
            color: "primary.main",
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            height: 28,
          }}
        />
      </Box>
      <Stack spacing={2} sx={{ p: { xs: 3, md: 3.5 }, flexGrow: 1 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography variant="h4" component="h3">
            {title}
          </Typography>
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ color: "text.primary", alignItems: "center" }}
          >
            <StarRoundedIcon fontSize="small" sx={{ color: "#D7A86E" }} />
            <Typography variant="body2" sx={{ color: "text.primary", fontWeight: 500 }}>
              {rating.toFixed(1)}
            </Typography>
          </Stack>
        </Stack>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
        <Box>
          <Button variant="outlined" size="small">
            View details
          </Button>
        </Box>
      </Stack>
    </Card>
  );
}
