"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesProps {
  onOpenBooking: () => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesProps) {
  const { t, lang } = useLanguage();

  const servicesData = t("services.items");

  // Reliable, high-quality images for each service
  const serviceImages = [
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop", // Wedding
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", // Corporate
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop", // Birthday
    "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=800&auto=format&fit=crop", // Housewarming / Puja
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop", // Reception
    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop", // Coastal Non-Veg
  ];

  return (
    <section id="services" className="py-16 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Image 4 match) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-widest text-[#72152B] uppercase mb-2">
            <span>{t("services.tag")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            {t("services.heading")}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-stone-600 text-xs sm:text-base">
            {t("services.subheading")}
          </p>
        </div>

        {/* Services Grid (Image 4 style: 3 column cards with rounded corners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Array.isArray(servicesData) &&
            servicesData.map((service: any, index: number) => (
              <div
                key={index}
                className="bg-[#FFFDF9] rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* Image Container with zoom effect */}
                <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={serviceImages[index] || serviceImages[0]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 right-3 bg-[#72152B] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md border border-[#D4AF37]/50">
                    {service.badge}
                  </span>
                  
                  {/* Subtitle tag */}
                  <span className="absolute bottom-2.5 left-3 text-amber-200 text-xs font-medium">
                    {service.teluguTitle}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 mb-1 group-hover:text-[#72152B] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#D4AF37] mb-2.5" />
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Highlights list */}
                    <div className="grid grid-cols-2 gap-1.5 mb-5">
                      {service.highlights.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#72152B] flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA button */}
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#72152B] text-[#72152B] hover:bg-[#72152B] hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-95"
                  >
                    <span>{t("services.requestQuote")}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
