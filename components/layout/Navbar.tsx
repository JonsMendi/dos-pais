"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { navHrefs } from "@/data/placeholders";
import { useTranslation } from "@/lib/i18n/useTranslation";
import type { Locale } from "@/lib/i18n/types";

const LOCALES: Locale[] = ["en", "pt", "de"];

function LocaleSwitcher({ scrolled }: { scrolled: boolean }) {
  const { locale, setLocale } = useTranslation();
  return (
    <ButtonGroup
      size="small"
      aria-label="Language"
      sx={{
        "& .MuiButtonGroup-firstButton, & .MuiButtonGroup-middleButton, & .MuiButtonGroup-lastButton":
          {
            border: "1px solid",
            borderColor: scrolled ? "rgba(28,29,31,0.18)" : "rgba(255,255,255,0.28)",
            transition: "border-color 300ms ease, color 300ms ease, background-color 200ms ease",
          },
      }}
    >
      {LOCALES.map((l) => (
        <Button
          key={l}
          onClick={() => setLocale(l)}
          sx={{
            px: 1.25,
            py: 0.5,
            minWidth: 0,
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: locale === l ? 600 : 400,
            color:
              locale === l
                ? scrolled
                  ? "primary.main"
                  : "common.white"
                : scrolled
                  ? "text.secondary"
                  : "rgba(255,255,255,0.6)",
            backgroundColor:
              locale === l
                ? scrolled
                  ? "rgba(31,61,82,0.08)"
                  : "rgba(255,255,255,0.14)"
                : "transparent",
            "&:hover": {
              backgroundColor: scrolled
                ? "rgba(31,61,82,0.08)"
                : "rgba(255,255,255,0.1)",
            },
          }}
        >
          {l.toUpperCase()}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default function Navbar() {
  const { t, locale, setLocale } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const navItems = [
    { label: t.nav.home, href: navHrefs.home },
    { label: t.nav.apartment, href: navHrefs.apartment },
    { label: t.nav.explore, href: navHrefs.explore },
    { label: t.nav.guide, href: navHrefs.guide },
    { label: t.nav.contact, href: navHrefs.contact },
  ];

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          transition: "background-color 300ms ease, backdrop-filter 300ms ease, border-color 300ms ease",
          backgroundColor: scrolled ? "rgba(251, 250, 247, 0.78)" : "transparent",
          backdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "saturate(180%) blur(18px)" : "none",
          borderBottom: "1px solid",
          borderColor: scrolled ? "divider" : "transparent",
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 80 },
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={1} sx={{ alignItems: "baseline" }}>
              <Typography
                variant="h6"
                component="a"
                href="#home"
                sx={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontWeight: 400,
                  fontSize: { xs: "1.15rem", md: "1.35rem" },
                  letterSpacing: "0.04em",
                  textTransform: "none",
                  color: scrolled ? "text.primary" : "common.white",
                  transition: "color 300ms ease",
                }}
              >
                Dos Pais
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: { xs: "none", md: "inline" },
                  color: scrolled ? "text.secondary" : "rgba(255,255,255,0.7)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontSize: "0.65rem",
                  transition: "color 300ms ease",
                }}
              >
                · Ponta Delgada
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              {navItems.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  sx={{
                    color: scrolled ? "text.primary" : "common.white",
                    fontWeight: 400,
                    px: 1.75,
                    "&:hover": {
                      backgroundColor: scrolled
                        ? "rgba(28, 29, 31, 0.05)"
                        : "rgba(255, 255, 255, 0.12)",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <LocaleSwitcher scrolled={scrolled} />
              <Button
                variant="contained"
                color="primary"
                href="#contact"
                sx={{ ml: 1.5 }}
              >
                {t.nav.stayWithUs}
              </Button>
            </Stack>

            <IconButton
              edge="end"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: scrolled ? "text.primary" : "common.white",
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "82vw",
              maxWidth: 360,
              backgroundColor: "background.default",
              p: 3,
              borderTopLeftRadius: 24,
              borderBottomLeftRadius: 24,
            },
          },
        }}
      >
        <Stack
          direction="row"
          sx={{ mb: 4, alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-fraunces), serif",
              fontWeight: 400,
              fontSize: "1.2rem",
              letterSpacing: "0.04em",
              textTransform: "none",
              color: "text.primary",
            }}
          >
            Dos Pais
          </Typography>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <List sx={{ flexGrow: 1 }}>
          {navItems.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component="a"
                href={link.href}
                onClick={() => setOpen(false)}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                }}
              >
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: {
                      sx: {
                        fontFamily: "var(--font-fraunces), serif",
                        fontSize: "1.5rem",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", mb: 2 }}>
          {LOCALES.map((l) => (
            <Button
              key={l}
              variant={locale === l ? "contained" : "outlined"}
              size="small"
              onClick={() => setLocale(l)}
              sx={{
                minWidth: 44,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                fontWeight: locale === l ? 600 : 400,
              }}
            >
              {l.toUpperCase()}
            </Button>
          ))}
        </Stack>
        <Box sx={{ mt: 1 }}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            href="#contact"
            onClick={() => setOpen(false)}
            sx={{ py: 1.5 }}
          >
            {t.nav.stayWithUs}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}


