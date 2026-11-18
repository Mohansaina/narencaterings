"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, ExternalLink, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      title: lang === "te" ? "రాచరిక వివాహ అరటి ఆకు విందు" : "Royal Arati Aaku Wedding Feast",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop",
      likes: "1.8K",
      location: lang === "te" ? "విశాఖపట్నం గ్రాండ్ మ్యారేజ్" : "Grand Wedding at Vizag",
    },
    {
      title: lang === "te" ? "స్వచ్ఛమైన బెల్లం పూతరేకులు & స్వీట్లు" : "Handmade Bellam Pootharekulu & Sweets",
      category: "sweets",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop",
      likes: "2.4K",
      location: lang === "te" ? "లైవ్ స్వీట్ కౌంటర్" : "Live Sweet Counter",
    },
    {
      title: lang === "te" ? "గోంగూర మటన్ & రాయలసీమ బిర్యానీ" : "Gongura Mutton & Rayalaseema Biryani",
      category: "nonveg",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
      likes: "3.1K",
      location: lang === "te" ? "కోస్తా ఆంధ్రా ఫీస్ట్" : "Coastal Feast",
    },
    {
      title: lang === "te" ? "గ్రాండ్ రిసెప్షన్ బఫే సెటప్" : "Grand Reception Buffet & Decor",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
      likes: "1.2K",
      location: lang === "te" ? "అనకాపల్లి కల్యాణ మండపం" : "Anakapalli Convention Hall",
    },
    {
      title: lang === "te" ? "లైవ్ స్టార్టర్స్ & పనీర్ టిక్కా" : "Live Sizzling Starters & Paneer Tikka",
      category: "live",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop",
      likes: "980",
      location: lang === "te" ? "సంగీత్ నైట్" : "Sangeet Night",
    },
    {
      title: lang === "te" ? "ముహూర్తం మార్నింగ్ టిఫిన్ & చట్నీలు" : "Traditional South Indian Morning Feast",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop",
      likes: "1.5K",
      location: lang === "te" ? "ముహూర్తం టిఫిన్ కౌంటర్" : "Muhurtham Morning Tiffin",
    },
  ];

  const filteredItems =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Instagram Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#72152B] uppercase mb-1.5 sm:mb-2">
              <Instagram className="w-4 h-4 text-[#D4AF37]" />
              <span>{t("gallery.tag")}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
              {t("gallery.heading")}
            </h2>
            <p className="mt-2 text-stone-600 text-xs sm:text-base max-w-xl">
              {t("gallery.subheading")}
            </p>
          </div>

          {/* Instagram Follow Pill */}
          <a
            href="https://www.instagram.com/narencaterings/?hl=en#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all self-start md:self-auto active:scale-95"
          >
            <Instagram className="w-4 h-4" />
            <span>{t("gallery.instaBtn")}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter buttons (Mobile horizontally scrollable) */}
        <div className="flex overflow-x-auto pb-2 sm:pb-0 gap-2 mb-8 no-scrollbar">
          {[
            { id: "all", label: t("gallery.all") },
            { id: "wedding", label: t("gallery.wedding") },
            { id: "nonveg", label: t("gallery.nonveg") },
            { id: "sweets", label: t("gallery.sweets") },
            { id: "live", label: t("gallery.live") },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                filter === btn.id
                  ? "bg-[#72152B] text-white shadow-sm border border-[#D4AF37]"
                  : "bg-white text-stone-700 border border-stone-200 hover:border-stone-400"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-sm bg-stone-900 border border-stone-200/80 hover:border-[#D4AF37] transition-all duration-300 h-72 sm:h-80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="text-[10px] sm:text-[11px] text-amber-300 font-semibold tracking-wider uppercase block mb-1">
                  {item.location}
                </span>
                <h3 className="font-serif text-base sm:text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-stone-300 pt-2 border-t border-white/20">
                  <span className="flex items-center gap-1.5 text-rose-400 font-medium text-xs">
                    <Heart className="w-3.5 h-3.5 fill-rose-400" />
                    {item.likes}
                  </span>
                  <a
                    href="https://www.instagram.com/narencaterings/?hl=en#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline flex items-center gap-1 text-xs"
                  >
                    <span>{t("gallery.viewInsta")}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
