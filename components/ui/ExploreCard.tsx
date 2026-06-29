import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

type Props = {
  image: string;
  title: string;
  description: string;
  href?: string;
};

export default function ExploreCard({ image, title, description, href }: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 24px 60px -30px rgba(20, 42, 58, 0.35)",
        },
      }}
    >
      <CardActionArea
        {...(href ? { component: "a", href } : {})}
        sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}
      >
        <Box
          sx={{
            position: "relative",
            aspectRatio: "4 / 3",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Stack spacing={1.25} sx={{ p: { xs: 3, md: 3.5 }, flexGrow: 1 }}>
          <Typography variant="h4" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {description}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ pt: 1, color: "primary.main", alignItems: "center" }}
          >
            <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 500 }}>
              Discover
            </Typography>
            <ArrowForwardRoundedIcon fontSize="small" />
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
