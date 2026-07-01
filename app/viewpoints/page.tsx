import type { Metadata } from "next";
import * as React from "react";
import Box from "@mui/material/Box";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ViewpointsPageContent from "./ViewpointsPageContent";

export const metadata: Metadata = {
  title: "Viewpoints — Dos Pais · Ponta Delgada, Azores",
  description:
    "Our favourite miradouros on São Miguel — crater lakes, coastal cliffs, chapel hills, and a former whale-watching station. The island, opening up.",
};

export default function ViewpointsPage() {
  return (
    <Box component="main">
      <Navbar />
      <ViewpointsPageContent />
      <Footer />
    </Box>
  );
}
