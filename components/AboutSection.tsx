"use client";

import { useState } from "react";
import Image from "next/image";
import { Utensils, HeartHandshake, Award, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  // Reliable, high-speed CDN images for culinary starters & thalis
  const starterImage = img1Error
    ? "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop";

  const thaliImage = img2Error
    ? "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=800&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop";

  return (
    <section id="about" className="py-16 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Background glow ornamentation */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#72152B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Image Collage with "Since 2012" Overlapping Badge (Image 3 match) */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="flex items-center justify-center gap-3 sm:gap-6 px-1">
              
              {/* Photo 1: Starters Platter */}
              <div className="w-1/2 relative h-64 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-500 bg-stone-100">
                <Image
                  src={starterImage}
                  alt="Deluxe Starters by Naren Caterings"
                  fill
                  sizes="(max-width: 640px) 45vw, 25vw"
                  onError={() => setImg1Error(true)}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[10px] sm:text-xs text-white font-semibold bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                  Deluxe Starters
                </span>
              </div>

              {/* Photo 2: Traditional Curries & Sweets */}
              <div className="w-1/2 relative h-64 sm:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white mt-6 sm:mt-10 transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-stone-100">
                <Image
                  src={thaliImage}
                  alt="Pure Ghee Delights & Curries"
                  fill
                  sizes="(max-width: 640px) 45vw, 25vw"
                  onError={() => setImg2Error(true)}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 text-[10px] sm:text-xs text-white font-semibold bg-black/60 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full">
                  Pure Ghee Delights
                </span>
              </div>
            </div>

            {/* Overlapping Badge: "Since 2012" (Responsive for mobile & desktop) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#72152B] border-2 sm:border-4 border-[#D4AF37] shadow-2xl flex flex-col items-center justify-center text-white text-center p-1 sm:p-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-200 font-semibold leading-none">
                  {t("about.sinceBadge")}
                </span>
                <span className="font-serif text-xl sm:text-3xl font-black text-white leading-tight my-0.5">
                  {t("about.sinceYear")}
                </span>
                <span className="text-[9px] sm:text-[10px] text-amber-100 font-medium">
                  {t("about.sinceSub")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 3 Metric Cards */}
          <div className="lg:col-span-7 lg:pl-6 text-left">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#72152B] uppercase mb-2 sm:mb-3">
              <span>{t("about.tag")}</span>
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-4">
              {t("about.heading")}
            </h2>

            {/* Description Paragraphs */}
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-3">
              {t("about.para1")}
            </p>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
              {t("about.para2")}
            </p>

            {/* 3 Metric Cards (Responsive Grid: 3 columns on sm, stacked on very small screens) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              
              {/* Card 1: Experience */}
              <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all text-center group hover:border-[#D4AF37]">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-amber-50 text-[#C59B27] flex items-center justify-center mb-1.5 sm:mb-3 mx-auto">
                  <Utensils className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="font-serif text-lg sm:text-3xl font-bold text-stone-900 leading-tight">
                  {t("about.stat1Number")}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-600 font-medium mt-0.5 leading-tight">
                  {t("about.stat1Label")}
                </div>
              </div>

              {/* Card 2: Marriages */}
              <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all text-center group hover:border-[#72152B]">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-red-50 text-[#72152B] flex items-center justify-center mb-1.5 sm:mb-3 mx-auto">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="font-serif text-lg sm:text-3xl font-bold text-stone-900 leading-tight">
                  {t("about.stat2Number")}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-600 font-medium mt-0.5 leading-tight">
                  {t("about.stat2Label")}
                </div>
              </div>

              {/* Card 3: Repeat Customers */}
              <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all text-center group hover:border-[#D4AF37]">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-1.5 sm:mb-3 mx-auto">
                  <HeartHandshake className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div className="font-serif text-lg sm:text-3xl font-bold text-stone-900 leading-tight">
                  {t("about.stat3Number")}
                </div>
                <div className="text-[10px] sm:text-xs text-stone-600 font-medium mt-0.5 leading-tight">
                  {t("about.stat3Label")}
                </div>
              </div>
            </div>

            {/* Service Area & Instagram Trust Strip */}
            <div className="p-3 sm:p-4 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#72152B] flex-shrink-0" />
                <span className="leading-snug">{t("about.serviceArea")}</span>
              </div>
              <a
                href="https://www.instagram.com/narencaterings/?hl=en#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#72152B] font-bold hover:underline whitespace-nowrap self-end sm:self-auto"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D4AF37]" />
                {t("about.instaBadge")}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
