"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import SectionTitle from "@/components/ui/SectionTitle";
import { mapPins } from "@/data/placeholders";
import { useTranslation } from "@/lib/i18n/useTranslation";

export default function MapPreview() {
  const { t } = useTranslation();

  return (
    <Box component="section" sx={{ py: { xs: 10, md: 16 } }}>
      <Container>
        <SectionTitle
          eyebrow={t.map.eyebrow}
          title={t.map.title}
          description={t.map.description}
          action={<Button variant="contained" color="primary">{t.map.cta}</Button>}
        />
        <Box
          sx={{
            position: "relative",
            width: "100%",
            aspectRatio: { xs: "4 / 5", sm: "16 / 10", md: "21 / 9" },
            borderRadius: 6,
            overflow: "hidden",
            border: "1px solid",
            borderColor: "divider",
            background:
              "radial-gradient(120% 90% at 30% 20%, #E5EEF3 0%, #D6E4EC 35%, #BCD2DE 70%, #9EBCCB 100%)",
            boxShadow:
              "0 30px 80px -40px rgba(20, 42, 58, 0.3), inset 0 0 0 1px rgba(255,255,255,0.4)",
          }}
        >
          {/* Decorative "coastline" lines */}
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 20% 70%, rgba(124, 152, 133, 0.55) 0%, rgba(124, 152, 133, 0) 22%)," +
                "radial-gradient(circle at 65% 55%, rgba(124, 152, 133, 0.45) 0%, rgba(124, 152, 133, 0) 28%)," +
                "radial-gradient(circle at 85% 35%, rgba(124, 152, 133, 0.4) 0%, rgba(124, 152, 133, 0) 20%)",
              filter: "blur(2px)",
            }}
          />
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 80px)," +
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 80px)",
              opacity: 0.6,
            }}
          />

          {/* Pins */}
          {mapPins.map((pin) => (
            <Stack
              key={pin.label}
              direction="row"
              spacing={1}
              sx={{
                alignItems: "center",
                position: "absolute",
                top: pin.top,
                left: pin.left,
                transform: "translate(-50%, -100%)",
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "primary.main",
                  color: "common.white",
                  boxShadow: "0 8px 20px -8px rgba(20, 42, 58, 0.6)",
                  border: "2px solid rgba(255,255,255,0.9)",
                }}
              >
                <RoomRoundedIcon sx={{ fontSize: 16 }} />
              </Box>
              <Box
                sx={{
                  px: 1.25,
                  py: 0.5,
                  borderRadius: 999,
                  backgroundColor: "rgba(251, 250, 247, 0.92)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(20,42,58,0.06)",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: "text.primary", fontWeight: 500, letterSpacing: "0.02em" }}
                >
                  {pin.label}
                </Typography>
              </Box>
            </Stack>
          ))}

          {/* Compass / corner label */}
          <Box
            sx={{
              position: "absolute",
              bottom: 18,
              right: 22,
              px: 1.5,
              py: 0.75,
              borderRadius: 999,
              backgroundColor: "rgba(251, 250, 247, 0.78)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(20,42,58,0.06)",
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: "text.primary", letterSpacing: "0.25em" }}
            >
              São Miguel
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
