"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Instagram, MapPin, Menu, X, ArrowRight, Languages, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.menu"), href: "#menu" },
    { name: t("nav.whyUs"), href: "#why-us" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.reviews"), href: "#reviews" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Bar (Desktop & Tablet) */}
      <div className="bg-[#141416] text-[#E8D7B8] text-xs py-2 px-4 border-b border-[#3A2D1B]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {t("nav.locationTop")}
            </span>
            <span className="text-amber-500/50">|</span>
            <a
              href="https://www.instagram.com/narencaterings/?hl=en#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
              @narencaterings{" "}
              <span className="bg-[#8B1834] text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                {t("nav.followers")}
              </span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-stone-300">{t("nav.openBooking")}</span>
            <a
              href="tel:9133774043"
              className="flex items-center gap-1.5 text-[#D4AF37] font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 91337 74043
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-stone-200"
            : "bg-white/95 backdrop-blur-sm py-3 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Title */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md group-hover:scale-105 transition-transform duration-300 bg-black flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Naren Caterings Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-2xl font-bold tracking-wide text-[#72152B] flex items-center gap-1 leading-tight">
                <span>NAREN</span>
                <span className="text-[#C59B27] font-normal tracking-wider text-sm sm:text-lg">
                  CATERINGS
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] tracking-wider uppercase text-stone-500 font-medium">
                {lang === "te" ? "రాయల్ వివాహ క్యాటరింగ్ సర్వీసెస్" : "Royal Andhra Wedding Feasts"}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-700 hover:text-[#72152B] font-medium text-sm transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#72152B] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher Button (Desktop & Mobile) */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37] bg-amber-50 hover:bg-amber-100/80 text-[#72152B] text-xs font-bold transition-all shadow-sm active:scale-95"
              title="Toggle English / తెలుగు"
              aria-label="Toggle language"
            >
              <Languages className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className={lang === "en" ? "font-extrabold text-[#72152B]" : "text-stone-500 font-normal"}>EN</span>
              <span className="text-stone-300">|</span>
              <span className={lang === "te" ? "font-extrabold text-[#72152B]" : "text-stone-500 font-normal"}>తెలుగు</span>
            </button>

            {/* Quick Call Icon (Desktop) */}
            <a
              href="tel:9133774043"
              className="hidden sm:flex p-2 rounded-full border border-stone-200 text-stone-700 hover:text-[#72152B] hover:border-[#72152B] transition-colors"
              title="Call 9133774043"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Book Now Button (Desktop) */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:flex group items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full border-2 border-[#72152B] text-[#72152B] font-semibold text-xs sm:text-sm hover:bg-[#72152B] hover:text-white transition-all duration-300 shadow-sm"
            >
              <span>{t("nav.bookNow")}</span>
              <span className="w-6 h-6 rounded-full bg-[#72152B] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#72152B] transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-[#72152B] hover:bg-stone-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-stone-200 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            
            {/* Mobile Language Switcher Row */}
            <div className="flex items-center justify-between py-2 mb-3 border-b border-stone-100">
              <span className="text-xs text-stone-600 font-medium">Select Language / భాష:</span>
              <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-full">
                <button
                  onClick={() => { if (lang !== "en") toggleLang(); }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "en" ? "bg-[#72152B] text-white shadow-sm" : "text-stone-600"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => { if (lang !== "te") toggleLang(); }}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "te" ? "bg-[#72152B] text-white shadow-sm" : "text-stone-600"
                  }`}
                >
                  తెలుగు
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-stone-800 hover:text-[#72152B] active:bg-amber-50 font-medium text-base py-2.5 px-2 rounded-lg transition-colors border-b border-stone-100/60"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#72152B] text-white font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("nav.bookNow")}</span>
              </button>

              <a
                href="tel:9133774043"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-stone-100 text-stone-800 font-bold text-sm border border-stone-200"
              >
                <Phone className="w-4 h-4 text-[#72152B]" />
                <span>Call: +91 91337 74043</span>
              </a>
            </div>

          </div>
        )}
      </nav>
    </header>
  );
}
