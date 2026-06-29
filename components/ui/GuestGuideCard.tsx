import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

type Props = {
  title: string;
  description: string;
};

export default function GuestGuideCard({ title, description }: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: "background.paper",
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "primary.light",
        },
      }}
    >
      <CardActionArea sx={{ height: "100%", p: { xs: 3, md: 3.5 } }}>
        <Stack spacing={2} sx={{ height: "100%" }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography variant="h4" component="h3">
              {title}
            </Typography>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "rgba(31, 61, 82, 0.06)",
                color: "primary.main",
                flexShrink: 0,
              }}
            >
              <ArrowOutwardRoundedIcon fontSize="small" />
            </Box>
          </Stack>
          <Typography variant="body2">{description}</Typography>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
