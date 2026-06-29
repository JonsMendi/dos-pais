import type { Metadata } from "next";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RestaurantsPageContent from "./RestaurantsPageContent";

export const metadata: Metadata = {
  title: "Restaurants — Dos Pais · Ponta Delgada, Azores",
  description:
    "Our favourite places to eat on São Miguel — from honest island cooking to long mornings with coffee and pastry.",
};

export default function RestaurantsPage() {
  return (
    <Box component="main">
      <Navbar />
      <RestaurantsPageContent />
      <Footer />
    </Box>
  );
}
