import type { Metadata } from "next";
import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NaturalPoolsPageContent from "./NaturalPoolsPageContent";

export const metadata: Metadata = {
  title: "Natural Pools — Dos Pais · Ponta Delgada, Azores",
  description:
    "Our favourite natural pools on São Miguel — volcanic rock, Atlantic water, and a few personal favourites from the family.",
};

export default function NaturalPoolsPage() {
  return (
    <Box component="main">
      <Navbar />
      <NaturalPoolsPageContent />
      <Footer />
    </Box>
  );
}
