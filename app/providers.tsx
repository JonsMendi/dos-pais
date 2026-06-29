"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { LocaleProvider } from "@/lib/i18n/context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </LocaleProvider>
  );
}
