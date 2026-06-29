import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  action?: React.ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: Props) {
  const isCenter = align === "center";
  return (
    <Stack
      direction={{ xs: "column", md: action ? "row" : "column" }}
      spacing={{ xs: 3, md: 4 }}
      sx={{
        mb: { xs: 5, md: 7 },
        textAlign: { xs: isCenter ? "center" : "left" },
        alignItems: { xs: isCenter ? "center" : "flex-start", md: "flex-end" },
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ maxWidth: 760 }}>
        {eyebrow ? (
          <Typography
            variant="overline"
            sx={{ color: "primary.light", display: "block", mb: 2 }}
          >
            {eyebrow}
          </Typography>
        ) : null}
        <Typography variant="h2" component="h2" sx={{ mb: description ? 2.5 : 0 }}>
          {title}
        </Typography>
        {description ? (
          <Typography variant="subtitle1" sx={{ maxWidth: 620 }}>
            {description}
          </Typography>
        ) : null}
      </Box>
      {action ? <Box sx={{ flexShrink: 0 }}>{action}</Box> : null}
    </Stack>
  );
}
