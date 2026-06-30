import type { Metadata } from "next";
import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ActivitiesPageContent from "./ActivitiesPageContent";

export const metadata: Metadata = {
  title: "Activities — Dos Pais · Ponta Delgada, Azores",
  description:
    "Our favourite activities on São Miguel — whale watching, canyoning, kayaking, surfing, and more. A personal shortlist from the family.",
};

export default function ActivitiesPage() {
  return (
    <Box component="main">
      <Navbar />
      <ActivitiesPageContent />
      <Footer />
    </Box>
  );
}
