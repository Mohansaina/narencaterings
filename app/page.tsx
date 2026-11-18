"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedMenuForBooking, setSelectedMenuForBooking] = useState("");

  const handleOpenBooking = (menuName?: string) => {
    if (menuName) {
      setSelectedMenuForBooking(menuName);
    } else {
      setSelectedMenuForBooking("");
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedMenuForBooking("");
  };

  return (
    <main className="min-h-screen relative bg-[#FAF7F2] overflow-x-hidden">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Section (Matching Reference Image 2: Namaste!, Explore ->, Contact ->) */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* About Us Section (Matching Reference Image 3: Elevating Your Events with Exceptional Food, Since 2012) */}
      <AboutSection />

      {/* Why Choose Us / Fabulous Food (Matching Reference Image 5: Fabulous Food! 4 Gold Framed Cards) */}
      <WhyChooseUs />

      {/* Premium Catering Services / What We Do (Matching Reference Image 4: Wedding Event, Corporate Event, Birthday Party) */}
      <ServicesSection onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Thalis & Multi-Cuisine Menu */}
      <MenuSection onSelectMenu={(menuName) => handleOpenBooking(menuName)} />

      {/* Moments & Instagram Gallery Showcase (@narencaterings) */}
      <GallerySection />

      {/* Client Testimonials from Vizag & Anakapalli */}
      <TestimonialsSection />

      {/* Contact Section & Location Details */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingWhatsApp />

      {/* Booking / Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialMenu={selectedMenuForBooking}
      />
    </main>
  );
}
