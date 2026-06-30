import type { Metadata } from "next";
import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BeachesPageContent from "./BeachesPageContent";

export const metadata: Metadata = {
  title: "Beaches — Dos Pais · Ponta Delgada, Azores",
  description:
    "Our favourite beaches on São Miguel — from remote northern coves to sheltered southern stretches. Personal suggestions, offered without ranking.",
};

export default function BeachesPage() {
  return (
    <Box component="main">
      <Navbar />
      <BeachesPageContent />
      <Footer />
    </Box>
  );
}
