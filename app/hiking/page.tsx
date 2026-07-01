import type { Metadata } from "next";
import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HikingPageContent from "./HikingPageContent";

export const metadata: Metadata = {
  title: "Hiking — Dos Pais · Ponta Delgada, Azores",
  description:
    "Our favourite hiking trails on São Miguel — laurisilva forest, crater rims, levadas, and waterfalls worth the early start.",
};

export default function HikingPage() {
  return (
    <Box component="main">
      <Navbar />
      <HikingPageContent />
      <Footer />
    </Box>
  );
}
