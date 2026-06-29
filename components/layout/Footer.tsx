import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const columns = [
  {
    title: "Stay",
    links: ["The Apartment", "Amenities", "Availability", "House Rules"],
  },
  {
    title: "São Miguel",
    links: ["Explore", "Recommendations", "Map", "Weather"],
  },
  {
    title: "Guests",
    links: ["Check-in", "Guest Guide", "Local Help", "Contact"],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        backgroundColor: "#11212C",
        color: "rgba(251, 250, 247, 0.86)",
        pt: { xs: 8, md: 12 },
        pb: { xs: 5, md: 6 },
        mt: { xs: 8, md: 12 },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 8 }}
          sx={{ justifyContent: "space-between" }}
        >
          <Stack spacing={2.5} sx={{ maxWidth: 360 }}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontFamily: "var(--font-fraunces), serif",
                color: "common.white",
                fontWeight: 400,
              }}
            >
              Dos Pais
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(251, 250, 247, 0.7)" }}>
              A small apartment in Ponta Delgada, opened with love by a family,
              for the people who come to slow down on São Miguel.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <IconButton
                aria-label="Instagram"
                sx={{ color: "rgba(251, 250, 247, 0.8)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Email"
                sx={{ color: "rgba(251, 250, 247, 0.8)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <EmailRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="WhatsApp"
                sx={{ color: "rgba(251, 250, 247, 0.8)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <WhatsAppIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6 }}
          >
            {columns.map((col) => (
              <Stack key={col.title} spacing={1.5} sx={{ minWidth: 140 }}>
                <Typography
                  variant="overline"
                  sx={{ color: "rgba(251, 250, 247, 0.55)" }}
                >
                  {col.title}
                </Typography>
                {col.links.map((link) => (
                  <Typography
                    key={link}
                    component="a"
                    href="#"
                    variant="body2"
                    sx={{
                      color: "rgba(251, 250, 247, 0.78)",
                      transition: "color 200ms ease",
                      "&:hover": { color: "common.white" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: { xs: 5, md: 7 }, borderColor: "rgba(255,255,255,0.08)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Typography variant="caption" sx={{ color: "rgba(251, 250, 247, 0.5)" }}>
            © {new Date().getFullYear()} Dos Pais · Ponta Delgada, São Miguel
          </Typography>
          <Stack direction="row" spacing={3}>
            <Typography
              component="a"
              href="#"
              variant="caption"
              sx={{ color: "rgba(251, 250, 247, 0.5)" }}
            >
              Privacy
            </Typography>
            <Typography
              component="a"
              href="#"
              variant="caption"
              sx={{ color: "rgba(251, 250, 247, 0.5)" }}
            >
              Terms
            </Typography>
            <Typography
              component="a"
              href="#"
              variant="caption"
              sx={{ color: "rgba(251, 250, 247, 0.5)" }}
            >
              Imprint
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
