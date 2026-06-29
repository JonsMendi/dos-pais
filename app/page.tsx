import Box from "@mui/material/Box";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ApartmentPreview from "@/components/sections/ApartmentPreview";
import ExploreSection from "@/components/sections/ExploreSection";
import FeaturedRecommendations from "@/components/sections/FeaturedRecommendations";
import MapPreview from "@/components/sections/MapPreview";
import GuestGuide from "@/components/sections/GuestGuide";
import WeatherAroundIsland from "@/components/sections/WeatherAroundIsland";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <Box component="main">
      <Navbar />
      <Hero />
      <ApartmentPreview />
      <ExploreSection />
      <FeaturedRecommendations />
      <MapPreview />
      <WeatherAroundIsland />
      <GuestGuide />
      <Testimonials />
      <Footer />
    </Box>
  );
}

