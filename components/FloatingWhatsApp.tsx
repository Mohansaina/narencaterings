"use client";

import { MessageCircle, Phone, Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { lang, toggleLang } = useLanguage();
  const whatsappUrl =
    "https://wa.me/919133774043?text=Hi%20Naren%20Caterings,%20I%20am%20interested%20in%20your%20catering%20services%20for%20an%20event.";

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      
      {/* 1. English to Telugu Floating Toggle (Always visible, thumb-friendly on mobile & desktop) */}
      <div className="pointer-events-auto">
        <button
          onClick={toggleLang}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#72152B] shadow-2xl border-2 border-[#D4AF37] hover:scale-105 active:scale-95 transition-all text-xs font-bold"
          title="Switch Language / భాషను మార్చండి"
          aria-label="Toggle language between English and Telugu"
        >
          <Languages className="w-4 h-4 text-[#C59B27] animate-pulse" />
          <div className="flex items-center gap-1">
            <span
              className={`px-1.5 py-0.5 rounded-md transition-colors ${
                lang === "en"
                  ? "bg-[#72152B] text-white shadow-sm"
                  : "text-stone-500 font-normal hover:text-stone-900"
              }`}
            >
              EN
            </span>
            <span className="text-stone-300">/</span>
            <span
              className={`px-1.5 py-0.5 rounded-md transition-colors ${
                lang === "te"
                  ? "bg-[#72152B] text-white shadow-sm font-black"
                  : "text-stone-500 font-normal hover:text-stone-900"
              }`}
            >
              తెలుగు
            </span>
          </div>
        </button>
      </div>

      {/* 2. Direct Call Button */}
      <div className="pointer-events-auto">
        <a
          href="tel:9133774043"
          className="group flex items-center gap-2 px-3 py-2 sm:py-2.5 rounded-full bg-[#72152B] text-white shadow-xl hover:bg-[#8B1834] active:scale-95 transition-all duration-300 border border-[#D4AF37]/60"
          title="Direct Call to 9133774043"
        >
          <span className="text-[11px] sm:text-xs font-bold pl-1 hidden sm:inline">
            {lang === "te" ? "కాల్: 9133774043" : "Call: 9133774043"}
          </span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
          </div>
        </a>
      </div>

      {/* 3. Floating WhatsApp Button */}
      <div className="pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2 p-3 sm:p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] active:scale-95 transition-all duration-300 border-2 border-white"
          aria-label="Chat on WhatsApp with Naren Caterings"
        >
          {/* Radar ping animation */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>

          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
          <span className="hidden sm:inline font-bold text-xs pr-1">
            {lang === "te" ? "వాట్సాప్ చాట్" : "WhatsApp Chat"}
          </span>
        </a>
      </div>

    </div>
  );
}
